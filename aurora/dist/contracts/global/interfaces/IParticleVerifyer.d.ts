import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export type ParticleStruct = {
    air: PromiseOrValue<string>;
    prevData: PromiseOrValue<string>;
    params: PromiseOrValue<string>;
    callResults: PromiseOrValue<string>;
};
export type ParticleStructOutput = [string, string, string, string] & {
    air: string;
    prevData: string;
    params: string;
    callResults: string;
};
export interface IParticleVerifyerInterface extends utils.Interface {
    functions: {
        "verifyParticle((string,string,string,string))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "verifyParticle"): FunctionFragment;
    encodeFunctionData(functionFragment: "verifyParticle", values: [ParticleStruct]): string;
    decodeFunctionResult(functionFragment: "verifyParticle", data: BytesLike): Result;
    events: {};
}
export interface IParticleVerifyer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IParticleVerifyerInterface;
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
        verifyParticle(particle: ParticleStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    verifyParticle(particle: ParticleStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        verifyParticle(particle: ParticleStruct, overrides?: CallOverrides): Promise<string[]>;
    };
    filters: {};
    estimateGas: {
        verifyParticle(particle: ParticleStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        verifyParticle(particle: ParticleStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}