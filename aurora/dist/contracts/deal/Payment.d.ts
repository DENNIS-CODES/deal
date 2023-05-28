import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
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
export interface PaymentInterface extends utils.Interface {
    functions: {
        "balance()": FunctionFragment;
        "commitParticle((string,string,string,string))": FunctionFragment;
        "depositToPaymentBalance(uint256)": FunctionFragment;
        "getReward(bytes32,bytes32)": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "withdrawForWorker(bytes32,bytes32[])": FunctionFragment;
        "withdrawFromPaymentBalance(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balance" | "commitParticle" | "depositToPaymentBalance" | "getReward" | "proxiableUUID" | "upgradeTo" | "upgradeToAndCall" | "withdrawForWorker" | "withdrawFromPaymentBalance"): FunctionFragment;
    encodeFunctionData(functionFragment: "balance", values?: undefined): string;
    encodeFunctionData(functionFragment: "commitParticle", values: [ParticleStruct]): string;
    encodeFunctionData(functionFragment: "depositToPaymentBalance", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getReward", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "withdrawForWorker", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "withdrawFromPaymentBalance", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitParticle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositToPaymentBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawForWorker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFromPaymentBalance", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface Payment extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PaymentInterface;
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
        balance(overrides?: CallOverrides): Promise<[BigNumber]>;
        commitParticle(particle: ParticleStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        depositToPaymentBalance(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getReward(particleHash: PromiseOrValue<BytesLike>, patId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawForWorker(patId: PromiseOrValue<BytesLike>, particlesHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawFromPaymentBalance(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    balance(overrides?: CallOverrides): Promise<BigNumber>;
    commitParticle(particle: ParticleStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    depositToPaymentBalance(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getReward(particleHash: PromiseOrValue<BytesLike>, patId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawForWorker(patId: PromiseOrValue<BytesLike>, particlesHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawFromPaymentBalance(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        balance(overrides?: CallOverrides): Promise<BigNumber>;
        commitParticle(particle: ParticleStruct, overrides?: CallOverrides): Promise<void>;
        depositToPaymentBalance(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getReward(particleHash: PromiseOrValue<BytesLike>, patId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        withdrawForWorker(patId: PromiseOrValue<BytesLike>, particlesHashes: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        withdrawFromPaymentBalance(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    };
    estimateGas: {
        balance(overrides?: CallOverrides): Promise<BigNumber>;
        commitParticle(particle: ParticleStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        depositToPaymentBalance(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getReward(particleHash: PromiseOrValue<BytesLike>, patId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawForWorker(patId: PromiseOrValue<BytesLike>, particlesHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawFromPaymentBalance(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        commitParticle(particle: ParticleStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        depositToPaymentBalance(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getReward(particleHash: PromiseOrValue<BytesLike>, patId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawForWorker(patId: PromiseOrValue<BytesLike>, particlesHashes: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFromPaymentBalance(amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}