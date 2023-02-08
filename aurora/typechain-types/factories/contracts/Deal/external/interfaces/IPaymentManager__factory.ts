/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPaymentManager,
  IPaymentManagerInterface,
} from "../../../../../contracts/Deal/external/interfaces/IPaymentManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawPaymentBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPaymentManager__factory {
  static readonly abi = _abi;
  static createInterface(): IPaymentManagerInterface {
    return new utils.Interface(_abi) as IPaymentManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPaymentManager {
    return new Contract(address, _abi, signerOrProvider) as IPaymentManager;
  }
}