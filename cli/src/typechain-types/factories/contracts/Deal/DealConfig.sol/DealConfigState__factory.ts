/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  DealConfigState,
  DealConfigStateInterface,
} from "../../../../contracts/Deal/DealConfig.sol/DealConfigState";

const _abi = [
  {
    inputs: [],
    name: "core",
    outputs: [
      {
        internalType: "contract Core",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "newSettings",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pricePerEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredStake",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "settings",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pricePerEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredStake",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "settingsChangeTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "subnetId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610326806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630a5bfa071461005c5780632fecda731461007a578063e06174e414610098578063ea53b7b0146100b8578063f2f4eb26146100d8575b600080fd5b6100646100f6565b60405161007191906101af565b60405180910390f35b6100826100fc565b60405161008f91906101e3565b60405180910390f35b6100a0610102565b6040516100af9392919061027d565b60405180910390f35b6100c061013a565b6040516100cf9392919061027d565b60405180910390f35b6100e0610172565b6040516100ed91906102d5565b60405180910390f35b60015481565b60085481565b60028060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b60058060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000819050919050565b6101a981610196565b82525050565b60006020820190506101c460008301846101a0565b92915050565b6000819050919050565b6101dd816101ca565b82525050565b60006020820190506101f860008301846101d4565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061024361023e610239846101fe565b61021e565b6101fe565b9050919050565b600061025582610228565b9050919050565b60006102678261024a565b9050919050565b6102778161025c565b82525050565b6000606082019050610292600083018661026e565b61029f60208301856101d4565b6102ac60408301846101d4565b949350505050565b60006102bf8261024a565b9050919050565b6102cf816102b4565b82525050565b60006020820190506102ea60008301846102c6565b9291505056fea26469706673582212208b30b3843be8b7d6e18c85e5dd657a5350130773e33dcafc28c5a211843ea07964736f6c63430008110033";

type DealConfigStateConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DealConfigStateConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DealConfigState__factory extends ContractFactory {
  constructor(...args: DealConfigStateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DealConfigState> {
    return super.deploy(overrides || {}) as Promise<DealConfigState>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DealConfigState {
    return super.attach(address) as DealConfigState;
  }
  override connect(signer: Signer): DealConfigState__factory {
    return super.connect(signer) as DealConfigState__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DealConfigStateInterface {
    return new utils.Interface(_abi) as DealConfigStateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DealConfigState {
    return new Contract(address, _abi, signerOrProvider) as DealConfigState;
  }
}