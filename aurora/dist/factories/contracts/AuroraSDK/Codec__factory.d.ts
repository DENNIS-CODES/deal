import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Codec, CodecInterface } from "../../../contracts/AuroraSDK/Codec";
type CodecConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Codec__factory extends ContractFactory {
    constructor(...args: CodecConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Codec>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Codec;
    connect(signer: Signer): Codec__factory;
    static readonly bytecode = "0x6116e4610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100be5760003560e01c80637d7436f51161007b5780637d7436f5146101e35780637f08bf97146101ff57806394e3e52b1461022f578063a727e91b1461025f578063b1038e711461028f578063c733ea97146102bf576100be565b806308c0b37c146100c357806312496a1b146100f35780631f42468a14610123578063231be077146101535780635e2eab26146101835780637c8b7bce146101b3575b600080fd5b6100dd60048036038101906100d89190610a2e565b6102ef565b6040516100ea9190610a96565b60405180910390f35b61010d60048036038101906101089190610bf7565b610304565b60405161011a9190610cbf565b60405180910390f35b61013d60048036038101906101389190610fa1565b610338565b60405161014a9190610cbf565b60405180910390f35b61016d60048036038101906101689190610ffd565b61037f565b60405161017a9190610cbf565b60405180910390f35b61019d600480360381019061019891906110cc565b6103ec565b6040516101aa91906111f7565b60405180910390f35b6101cd60048036038101906101c89190611219565b610488565b6040516101da9190610cbf565b60405180910390f35b6101fd60048036038101906101f891906110cc565b6104cb565b005b61021960048036038101906102149190611262565b610527565b60405161022691906112ca565b60405180910390f35b610249600480360381019061024491906112e5565b61053c565b604051610256919061134d565b60405180910390f35b6102796004803603810190610274919061138d565b61055b565b604051610286919061134d565b60405180910390f35b6102a960048036038101906102a491906113ba565b61057a565b6040516102b69190610cbf565b60405180910390f35b6102d960048036038101906102d49190611416565b6105c1565b6040516102e6919061147e565b60405180910390f35b60006102fa826105d6565b60e01b9050919050565b606061031082516102ef565b826040516020016103229291906114f6565b6040516020818303038152906040529050919050565b60606103438261053c565b61034d600161055b565b61035685610488565b6040516020016103689392919061153f565b604051602081830303815290604052905092915050565b606061038e8260000151610304565b61039b8360200151610304565b6103a88460400151610304565b6103b585606001516105c1565b6103c28660800151610527565b6040516020016103d69594939291906115ba565b6040516020818303038152906040529050919050565b6103f46109b2565b6103fd8261061a565b60ff166002811115610412576104116110f9565b5b81600001906002811115610429576104286110f9565b5b9081600281111561043d5761043c6110f9565b5b8152505060016002811115610455576104546110f9565b5b8160000151600281111561046c5761046b6110f9565b5b036104835761047a8261063a565b81602001819052505b919050565b6060610497826000015161037f565b6104a4836020015161037f565b6040516020016104b592919061160d565b6040516020818303038152906040529050919050565b60006104d68261061a565b60ff1660028111156104eb576104ea6110f9565b5b905060016002811115610501576105006110f9565b5b816002811115610514576105136110f9565b5b036105235761052282610688565b5b5050565b6000610532826106c2565b60c01b9050919050565b6000816001811115610551576105506110f9565b5b60f81b9050919050565b60008160028111156105705761056f6110f9565b5b60f81b9050919050565b60606105858261053c565b61058f600061055b565b6105988561037f565b6040516020016105aa9392919061153f565b604051602081830303815290604052905092915050565b60006105cc82610751565b60801b9050919050565b6000600863ff00ff00831663ffffffff16901c600862ff00ff841663ffffffff16901b17915060108263ffffffff16901c60108363ffffffff16901b179050919050565b600061063060018361088190919063ffffffff16565b60f81c9050919050565b60606000610647836108be565b63ffffffff16905061066281846108e690919063ffffffff16565b610670836000015182610937565b91508083600001818151019150818152505050919050565b6000610693826108be565b63ffffffff1690506106ae81836108e690919063ffffffff16565b808260000181815101915081815250505050565b6000600867ff00ff00ff00ff00831667ffffffffffffffff16901c600866ff00ff00ff00ff841667ffffffffffffffff16901b179150601067ffff0000ffff0000831667ffffffffffffffff16901c601065ffff0000ffff841667ffffffffffffffff16901b17915060208267ffffffffffffffff16901c60208367ffffffffffffffff16901b179050919050565b600060086fff00ff00ff00ff00ff00ff00ff00ff0083166fffffffffffffffffffffffffffffffff16901c60086eff00ff00ff00ff00ff00ff00ff00ff84166fffffffffffffffffffffffffffffffff16901b17915060106fffff0000ffff0000ffff0000ffff000083166fffffffffffffffffffffffffffffffff16901c60106dffff0000ffff0000ffff0000ffff84166fffffffffffffffffffffffffffffffff16901b17915060206fffffffff00000000ffffffff0000000083166fffffffffffffffffffffffffffffffff16901c60206bffffffff00000000ffffffff84166fffffffffffffffffffffffffffffffff16901b1791506040826fffffffffffffffffffffffffffffffff16901c6040836fffffffffffffffffffffffffffffffff16901b179050919050565b600061089682846108e690919063ffffffff16565b6108a383600001516109a7565b60001b90508183600001818151019150818152505092915050565b60006108df6108d760048461088190919063ffffffff16565b60e01c6105d6565b9050919050565b8160200151818360000151011115610933576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092a9061168e565b60405180910390fd5b5050565b6060600082146109a15760405190507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810180604052828252602082015b60011561099e57845181526020810190508181031561099e5760208501945061097a565b50505b92915050565b600081519050919050565b6040518060400160405280600060028111156109d1576109d06110f9565b5b8152602001606081525090565b6000604051905090565b600080fd5b600080fd5b600063ffffffff82169050919050565b610a0b816109f2565b8114610a1657600080fd5b50565b600081359050610a2881610a02565b92915050565b600060208284031215610a4457610a436109e8565b5b6000610a5284828501610a19565b91505092915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610a9081610a5b565b82525050565b6000602082019050610aab6000830184610a87565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610b0482610abb565b810181811067ffffffffffffffff82111715610b2357610b22610acc565b5b80604052505050565b6000610b366109de565b9050610b428282610afb565b919050565b600067ffffffffffffffff821115610b6257610b61610acc565b5b610b6b82610abb565b9050602081019050919050565b82818337600083830152505050565b6000610b9a610b9584610b47565b610b2c565b905082815260208101848484011115610bb657610bb5610ab6565b5b610bc1848285610b78565b509392505050565b600082601f830112610bde57610bdd610ab1565b5b8135610bee848260208601610b87565b91505092915050565b600060208284031215610c0d57610c0c6109e8565b5b600082013567ffffffffffffffff811115610c2b57610c2a6109ed565b5b610c3784828501610bc9565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c7a578082015181840152602081019050610c5f565b60008484015250505050565b6000610c9182610c40565b610c9b8185610c4b565b9350610cab818560208601610c5c565b610cb481610abb565b840191505092915050565b60006020820190508181036000830152610cd98184610c86565b905092915050565b600080fd5b600080fd5b600067ffffffffffffffff821115610d0657610d05610acc565b5b610d0f82610abb565b9050602081019050919050565b6000610d2f610d2a84610ceb565b610b2c565b905082815260208101848484011115610d4b57610d4a610ab6565b5b610d56848285610b78565b509392505050565b600082601f830112610d7357610d72610ab1565b5b8135610d83848260208601610d1c565b91505092915050565b60006fffffffffffffffffffffffffffffffff82169050919050565b610db181610d8c565b8114610dbc57600080fd5b50565b600081359050610dce81610da8565b92915050565b600067ffffffffffffffff82169050919050565b610df181610dd4565b8114610dfc57600080fd5b50565b600081359050610e0e81610de8565b92915050565b600060a08284031215610e2a57610e29610ce1565b5b610e3460a0610b2c565b9050600082013567ffffffffffffffff811115610e5457610e53610ce6565b5b610e6084828501610d5e565b600083015250602082013567ffffffffffffffff811115610e8457610e83610ce6565b5b610e9084828501610d5e565b602083015250604082013567ffffffffffffffff811115610eb457610eb3610ce6565b5b610ec084828501610bc9565b6040830152506060610ed484828501610dbf565b6060830152506080610ee884828501610dff565b60808301525092915050565b600060408284031215610f0a57610f09610ce1565b5b610f146040610b2c565b9050600082013567ffffffffffffffff811115610f3457610f33610ce6565b5b610f4084828501610e14565b600083015250602082013567ffffffffffffffff811115610f6457610f63610ce6565b5b610f7084828501610e14565b60208301525092915050565b60028110610f8957600080fd5b50565b600081359050610f9b81610f7c565b92915050565b60008060408385031215610fb857610fb76109e8565b5b600083013567ffffffffffffffff811115610fd657610fd56109ed565b5b610fe285828601610ef4565b9250506020610ff385828601610f8c565b9150509250929050565b600060208284031215611013576110126109e8565b5b600082013567ffffffffffffffff811115611031576110306109ed565b5b61103d84828501610e14565b91505092915050565b6000819050919050565b61105981611046565b811461106457600080fd5b50565b60008135905061107681611050565b92915050565b60006040828403121561109257611091610ce1565b5b61109c6040610b2c565b905060006110ac84828501611067565b60008301525060206110c084828501611067565b60208301525092915050565b6000604082840312156110e2576110e16109e8565b5b60006110f08482850161107c565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110611139576111386110f9565b5b50565b600081905061114a82611128565b919050565b600061115a8261113c565b9050919050565b61116a8161114f565b82525050565b600082825260208201905092915050565b600061118c82610c40565b6111968185611170565b93506111a6818560208601610c5c565b6111af81610abb565b840191505092915050565b60006040830160008301516111d26000860182611161565b50602083015184820360208601526111ea8282611181565b9150508091505092915050565b6000602082019050818103600083015261121181846111ba565b905092915050565b60006020828403121561122f5761122e6109e8565b5b600082013567ffffffffffffffff81111561124d5761124c6109ed565b5b61125984828501610ef4565b91505092915050565b600060208284031215611278576112776109e8565b5b600061128684828501610dff565b91505092915050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b6112c48161128f565b82525050565b60006020820190506112df60008301846112bb565b92915050565b6000602082840312156112fb576112fa6109e8565b5b600061130984828501610f8c565b91505092915050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b61134781611312565b82525050565b6000602082019050611362600083018461133e565b92915050565b6003811061137557600080fd5b50565b60008135905061138781611368565b92915050565b6000602082840312156113a3576113a26109e8565b5b60006113b184828501611378565b91505092915050565b600080604083850312156113d1576113d06109e8565b5b600083013567ffffffffffffffff8111156113ef576113ee6109ed565b5b6113fb85828601610e14565b925050602061140c85828601610f8c565b9150509250929050565b60006020828403121561142c5761142b6109e8565b5b600061143a84828501610dbf565b91505092915050565b60007fffffffffffffffffffffffffffffffff0000000000000000000000000000000082169050919050565b61147881611443565b82525050565b6000602082019050611493600083018461146f565b92915050565b6000819050919050565b6114b46114af82610a5b565b611499565b82525050565b600081905092915050565b60006114d082610c40565b6114da81856114ba565b93506114ea818560208601610c5c565b80840191505092915050565b600061150282856114a3565b60048201915061151282846114c5565b91508190509392505050565b6000819050919050565b61153961153482611312565b61151e565b82525050565b600061154b8286611528565b60018201915061155b8285611528565b60018201915061156b82846114c5565b9150819050949350505050565b6000819050919050565b61159361158e82611443565b611578565b82525050565b6000819050919050565b6115b46115af8261128f565b611599565b82525050565b60006115c682886114c5565b91506115d282876114c5565b91506115de82866114c5565b91506115ea8285611582565b6010820191506115fa82846115a3565b6008820191508190509695505050505050565b600061161982856114c5565b915061162582846114c5565b91508190509392505050565b600082825260208201905092915050565b7f5061727365206572726f723a20756e657870656374656420454f490000000000600082015250565b6000611678601b83611631565b915061168382611642565b602082019050919050565b600060208201905081810360008301526116a78161166b565b905091905056fea26469706673582212201934f1be7358e7df93db603f4151b90b67ca73f6862b12573475af3540c8a61d64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "ptr";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "end";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Borsh.Data";
            readonly name: "data";
            readonly type: "tuple";
        }];
        readonly name: "decodePromiseResult";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "enum PromiseResultStatus";
                readonly name: "status";
                readonly type: "PromiseResultStatus";
            }, {
                readonly internalType: "bytes";
                readonly name: "output";
                readonly type: "bytes";
            }];
            readonly internalType: "struct PromiseResult";
            readonly name: "result";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "value";
            readonly type: "bytes";
        }];
        readonly name: "encode";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "targetAccountId";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "method";
                readonly type: "string";
            }, {
                readonly internalType: "bytes";
                readonly name: "args";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint128";
                readonly name: "nearBalance";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint64";
                readonly name: "nearGas";
                readonly type: "uint64";
            }];
            readonly internalType: "struct PromiseCreateArgs";
            readonly name: "nearPromise";
            readonly type: "tuple";
        }];
        readonly name: "encode";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "string";
                    readonly name: "targetAccountId";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "method";
                    readonly type: "string";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "args";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint128";
                    readonly name: "nearBalance";
                    readonly type: "uint128";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "nearGas";
                    readonly type: "uint64";
                }];
                readonly internalType: "struct PromiseCreateArgs";
                readonly name: "base";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "string";
                    readonly name: "targetAccountId";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "method";
                    readonly type: "string";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "args";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint128";
                    readonly name: "nearBalance";
                    readonly type: "uint128";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "nearGas";
                    readonly type: "uint64";
                }];
                readonly internalType: "struct PromiseCreateArgs";
                readonly name: "callback";
                readonly type: "tuple";
            }];
            readonly internalType: "struct PromiseWithCallback";
            readonly name: "nearPromise";
            readonly type: "tuple";
        }];
        readonly name: "encode";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "string";
                    readonly name: "targetAccountId";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "method";
                    readonly type: "string";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "args";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint128";
                    readonly name: "nearBalance";
                    readonly type: "uint128";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "nearGas";
                    readonly type: "uint64";
                }];
                readonly internalType: "struct PromiseCreateArgs";
                readonly name: "base";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "string";
                    readonly name: "targetAccountId";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "method";
                    readonly type: "string";
                }, {
                    readonly internalType: "bytes";
                    readonly name: "args";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "uint128";
                    readonly name: "nearBalance";
                    readonly type: "uint128";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "nearGas";
                    readonly type: "uint64";
                }];
                readonly internalType: "struct PromiseCreateArgs";
                readonly name: "callback";
                readonly type: "tuple";
            }];
            readonly internalType: "struct PromiseWithCallback";
            readonly name: "nearPromise";
            readonly type: "tuple";
        }, {
            readonly internalType: "enum ExecutionMode";
            readonly name: "mode";
            readonly type: "ExecutionMode";
        }];
        readonly name: "encodeCrossContractCallArgs";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "targetAccountId";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "method";
                readonly type: "string";
            }, {
                readonly internalType: "bytes";
                readonly name: "args";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint128";
                readonly name: "nearBalance";
                readonly type: "uint128";
            }, {
                readonly internalType: "uint64";
                readonly name: "nearGas";
                readonly type: "uint64";
            }];
            readonly internalType: "struct PromiseCreateArgs";
            readonly name: "nearPromise";
            readonly type: "tuple";
        }, {
            readonly internalType: "enum ExecutionMode";
            readonly name: "mode";
            readonly type: "ExecutionMode";
        }];
        readonly name: "encodeCrossContractCallArgs";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum ExecutionMode";
            readonly name: "mode";
            readonly type: "ExecutionMode";
        }];
        readonly name: "encodeEM";
        readonly outputs: readonly [{
            readonly internalType: "bytes1";
            readonly name: "";
            readonly type: "bytes1";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum PromiseArgsVariant";
            readonly name: "mode";
            readonly type: "PromiseArgsVariant";
        }];
        readonly name: "encodePromise";
        readonly outputs: readonly [{
            readonly internalType: "bytes1";
            readonly name: "";
            readonly type: "bytes1";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "v";
            readonly type: "uint128";
        }];
        readonly name: "encodeU128";
        readonly outputs: readonly [{
            readonly internalType: "bytes16";
            readonly name: "";
            readonly type: "bytes16";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "v";
            readonly type: "uint32";
        }];
        readonly name: "encodeU32";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "v";
            readonly type: "uint64";
        }];
        readonly name: "encodeU64";
        readonly outputs: readonly [{
            readonly internalType: "bytes8";
            readonly name: "";
            readonly type: "bytes8";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "ptr";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "end";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Borsh.Data";
            readonly name: "data";
            readonly type: "tuple";
        }];
        readonly name: "skipPromiseResult";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): CodecInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Codec;
}
export {};