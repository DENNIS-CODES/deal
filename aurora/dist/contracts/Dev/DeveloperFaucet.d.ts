import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface DeveloperFaucetInterface extends utils.Interface {
    functions: {
        "fluenceToken()": FunctionFragment;
        "receiveFLT(address,uint256)": FunctionFragment;
        "receiveUSD(address,uint256)": FunctionFragment;
        "usdToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "fluenceToken" | "receiveFLT" | "receiveUSD" | "usdToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "fluenceToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveFLT", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "receiveUSD", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "usdToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "fluenceToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveFLT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveUSD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdToken", data: BytesLike): Result;
    events: {};
}
export interface DeveloperFaucet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DeveloperFaucetInterface;
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
        fluenceToken(overrides?: CallOverrides): Promise<[string]>;
        receiveFLT(addr: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        receiveUSD(addr: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        usdToken(overrides?: CallOverrides): Promise<[string]>;
    };
    fluenceToken(overrides?: CallOverrides): Promise<string>;
    receiveFLT(addr: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    receiveUSD(addr: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    usdToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        fluenceToken(overrides?: CallOverrides): Promise<string>;
        receiveFLT(addr: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        receiveUSD(addr: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        usdToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        fluenceToken(overrides?: CallOverrides): Promise<BigNumber>;
        receiveFLT(addr: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        receiveUSD(addr: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        usdToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        fluenceToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveFLT(addr: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        receiveUSD(addr: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        usdToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}