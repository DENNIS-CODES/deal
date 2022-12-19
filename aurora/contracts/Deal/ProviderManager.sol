pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "../Core/Core.sol";
import "./DepositManager.sol";
import "./RoleManager.sol";

contract ProviderManagerState {
    type PATId is bytes32;

    event AddProviderToken(address indexed owner, PATId id);

    struct PAT {
        address owner;
        uint256 collateral;
    }
    mapping(PATId => PAT) public PATs;
}

abstract contract ProviderManagerPrivate is
    ProviderManagerState,
    RoleManager,
    DepositManager
{
    using SafeERC20 for IERC20;

    function _removeCollateral(
        PATId id,
        PAT memory pat,
        IERC20 token
    ) internal {
        require(pat.collateral > 0, ""); //TODO: text

        _depositManagerState.balances[pat.owner].balanceByToken[token] += pat
            .collateral;

        delete PATs[id];
    }
}

abstract contract ProviderManager is ProviderManagerPrivate {
    using SafeERC20 for IERC20;

    function addProviderToken(bytes32 salt) external onlyResourceManager {
        IERC20 token = fluenceToken();
        address addr = msg.sender;
        //TODO: owner
        PATId id = PATId.wrap(keccak256(abi.encode(block.number, salt, addr)));

        require(PATs[id].owner == address(0x00), "Id already used");

        require(
            _roleManagerState.roles[addr] == Role.ResourceManager,
            "Participant isn't ResourceManager"
        );

        uint256 requiredStake = _dealConfigState.settings.requiredStake;
        uint256 balance = _depositManagerState.balances[addr].balanceByToken[
            token
        ];
        require(
            (balance - requiredStake) >= 0,
            "ProviderManager: not enough balance"
        );

        _depositManagerState.balances[addr].balanceByToken[token] =
            balance -
            _dealConfigState.settings.requiredStake;
        PATs[id].collateral += requiredStake;

        emit AddProviderToken(addr, id);
    }

    function removeProviderToken(PATId id) external onlyResourceManager {
        PAT memory pat = PATs[id];
        require(pat.owner == msg.sender, "ProviderManager: not owner");
        _removeCollateral(id, pat, fluenceToken());
    }

    function slash(
        PATId id,
        address addr,
        AquaProxy.Particle calldata particle
    ) external {
        try aquaProxy().verifyParticle(particle) {
            revert("ProviderManager: particle is valid");
        } catch {
            IERC20 token = fluenceToken();
            PAT memory pat = PATs[id];

            _removeCollateral(id, pat, token);

            uint slashAmount = (pat.collateral / 100) *
                _dealConfigState.core.slashFactor();
            _depositManagerState.balances[addr].balanceByToken[
                token
            ] -= slashAmount;

            //TODO: send to treasury
            token.safeTransfer(address(0x00), slashAmount);
        }
    }
}