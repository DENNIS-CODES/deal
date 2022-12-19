/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  PeersManagerState,
  PeersManagerStateInterface,
} from "../../../../contracts/Deal/PeersManager.sol/PeersManagerState";

const _abi = [
  {
    inputs: [
      {
        internalType: "PeersManagerState.PATId",
        name: "",
        type: "bytes32",
      },
    ],
    name: "PATs",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateral",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101c6806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635f7f064b14610030575b600080fd5b61004a600480360381019061004591906100e0565b610061565b604051610058929190610167565b60405180910390f35b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b600080fd5b6000819050919050565b6100bd816100aa565b81146100c857600080fd5b50565b6000813590506100da816100b4565b92915050565b6000602082840312156100f6576100f56100a5565b5b6000610104848285016100cb565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101388261010d565b9050919050565b6101488161012d565b82525050565b6000819050919050565b6101618161014e565b82525050565b600060408201905061017c600083018561013f565b6101896020830184610158565b939250505056fea26469706673582212202c9becc95d018f3e865766a133a7f8ad2bff3d913d1d24bab45b4d8e5dd550b964736f6c63430008110033";

type PeersManagerStateConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PeersManagerStateConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PeersManagerState__factory extends ContractFactory {
  constructor(...args: PeersManagerStateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PeersManagerState> {
    return super.deploy(overrides || {}) as Promise<PeersManagerState>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PeersManagerState {
    return super.attach(address) as PeersManagerState;
  }
  override connect(signer: Signer): PeersManagerState__factory {
    return super.connect(signer) as PeersManagerState__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PeersManagerStateInterface {
    return new utils.Interface(_abi) as PeersManagerStateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PeersManagerState {
    return new Contract(address, _abi, signerOrProvider) as PeersManagerState;
  }
}