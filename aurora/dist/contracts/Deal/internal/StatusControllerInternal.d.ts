import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface StatusControllerInternalInterface extends utils.Interface {
    functions: {};
    events: {
        "StatusChanged(uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "StatusChanged"): EventFragment;
}
export interface StatusChangedEventObject {
    newStatus: number;
}
export type StatusChangedEvent = TypedEvent<[number], StatusChangedEventObject>;
export type StatusChangedEventFilter = TypedEventFilter<StatusChangedEvent>;
export interface StatusControllerInternal extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StatusControllerInternalInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "StatusChanged(uint8)"(newStatus?: null): StatusChangedEventFilter;
        StatusChanged(newStatus?: null): StatusChangedEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}