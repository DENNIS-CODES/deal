pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "../../internal/interfaces/IDealConfigInternal.sol";
import "../../../Utils/Consts.sol";

/*
abstract contract PaymentWithGoldenInternal is IDealConfigInternal, Ownable {
    using SafeERC20 for IERC20;

    uint256 public constant PAYMENT_DURATION_IN_EPOCHS = 3;

    mapping(uint256 => bool) private _isExistGoldenParticleByEpoch;
    mapping(IERC20 => uint256) private _balance;

    function _getPaymentBalance() internal view returns (uint256) {
        return _balance[_paymentToken()];
    }

    function _depositToPaymentBalance(uint256 amount) internal {
        IERC20 token = _paymentToken();
        token.safeTransferFrom(msg.sender, address(this), amount);
        _balance[_paymentToken()] += amount;
    }

    function _withdrawFromPaymentBalance(IERC20 token, uint256 amount)
        internal
    {
        uint256 currentEpoch = _core().epochManager().getEpoch();
        uint256 goldenParticleCount = 0;

        IERC20 paymentToken = _paymentToken();

        if (token != paymentToken) {
            return;
        }

        for (
            uint256 i = currentEpoch;
            i < currentEpoch + PAYMENT_DURATION_IN_EPOCHS;
            i++
        ) {
            if (!_isExistGoldenParticleByEpoch[i]) {
                continue;
            }

            goldenParticleCount++;
        }

        uint256 free = _balance[_paymentToken()] -
            (_pricePerEpoch() * goldenParticleCount * 2);

        //TODO: if it's last amount in balance, golden particle receive sum without work confirmation

        require(amount <= free, "Not enough free balance");

        _balance[_paymentToken()] -= amount;
        token.safeTransfer(msg.sender, amount);
    }
}
*/