/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPayment,
  IPaymentInterface,
} from "../../../../contracts/deal/interfaces/IPayment";

const _abi = [
  {
    inputs: [],
    name: "balance",
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
        components: [
          {
            internalType: "string",
            name: "air",
            type: "string",
          },
          {
            internalType: "string",
            name: "prevData",
            type: "string",
          },
          {
            internalType: "string",
            name: "params",
            type: "string",
          },
          {
            internalType: "string",
            name: "callResults",
            type: "string",
          },
        ],
        internalType: "struct Particle",
        name: "particle",
        type: "tuple",
      },
    ],
    name: "commitParticle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositToPaymentBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "particleHash",
        type: "bytes32",
      },
      {
        internalType: "PATId",
        name: "patId",
        type: "bytes32",
      },
    ],
    name: "getReward",
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
        internalType: "PATId",
        name: "patId",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "particlesHashes",
        type: "bytes32[]",
      },
    ],
    name: "withdrawForWorker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFromPaymentBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPayment__factory {
  static readonly abi = _abi;
  static createInterface(): IPaymentInterface {
    return new utils.Interface(_abi) as IPaymentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPayment {
    return new Contract(address, _abi, signerOrProvider) as IPayment;
  }
}