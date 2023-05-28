import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IEpochManagerInterface extends utils.Interface {
    functions: {
        "currentEpoch()": FunctionFragment;
        "epochDuration()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "currentEpoch" | "epochDuration"): FunctionFragment;
    encodeFunctionData(functionFragment: "currentEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochDuration", values?: undefined): string;
    decodeFunctionResult(functionFragment: "currentEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochDuration", data: BytesLike): Result;
    events: {};
}
export interface IEpochManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IEpochManagerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        currentEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;
        epochDuration(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;
    epochDuration(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;
        epochDuration(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        currentEpoch(overrides?: CallOverrides): Promise<BigNumber>;
        epochDuration(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        currentEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        epochDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}