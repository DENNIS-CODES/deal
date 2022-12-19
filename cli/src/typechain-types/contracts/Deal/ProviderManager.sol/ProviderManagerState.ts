/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ProviderManagerStateInterface extends utils.Interface {
  functions: {
    "PATs(bytes32)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "PATs"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "PATs",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "PATs", data: BytesLike): Result;

  events: {
    "AddProviderToken(address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddProviderToken"): EventFragment;
}

export interface AddProviderTokenEventObject {
  owner: string;
  id: string;
}
export type AddProviderTokenEvent = TypedEvent<
  [string, string],
  AddProviderTokenEventObject
>;

export type AddProviderTokenEventFilter =
  TypedEventFilter<AddProviderTokenEvent>;

export interface ProviderManagerState extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProviderManagerStateInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    PATs(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { owner: string; collateral: BigNumber }>;
  };

  PATs(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { owner: string; collateral: BigNumber }>;

  callStatic: {
    PATs(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { owner: string; collateral: BigNumber }>;
  };

  filters: {
    "AddProviderToken(address,bytes32)"(
      owner?: PromiseOrValue<string> | null,
      id?: null
    ): AddProviderTokenEventFilter;
    AddProviderToken(
      owner?: PromiseOrValue<string> | null,
      id?: null
    ): AddProviderTokenEventFilter;
  };

  estimateGas: {
    PATs(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    PATs(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}