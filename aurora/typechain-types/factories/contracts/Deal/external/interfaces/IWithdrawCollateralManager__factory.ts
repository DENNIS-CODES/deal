/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IWithdrawCollateralManager,
  IWithdrawCollateralManagerInterface,
} from "../../../../../contracts/Deal/external/interfaces/IWithdrawCollateralManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getUnlockedCollateralBy",
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
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IWithdrawCollateralManager__factory {
  static readonly abi = _abi;
  static createInterface(): IWithdrawCollateralManagerInterface {
    return new utils.Interface(_abi) as IWithdrawCollateralManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IWithdrawCollateralManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IWithdrawCollateralManager;
  }
}
