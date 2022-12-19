/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Core,
  CoreInterface,
} from "../../../../contracts/Core/Core.sol/Core";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "aquaProxy",
    outputs: [
      {
        internalType: "contract AquaProxy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "epochDelayForReward",
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
    inputs: [],
    name: "epochManager",
    outputs: [
      {
        internalType: "contract EpochManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fluenceToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "fluenceToken_",
        type: "address",
      },
      {
        internalType: "contract AquaProxy",
        name: "aquaProxy_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "withdrawTimeout_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "epochDelayForReward_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slashFactor_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updateSettingsTimeout_",
        type: "uint256",
      },
      {
        internalType: "contract EpochManager",
        name: "epochManager_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minAmountOfEpochsForReward",
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract AquaProxy",
        name: "aquaProxy_",
        type: "address",
      },
    ],
    name: "setAquaProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epochDelayForReward_",
        type: "uint256",
      },
    ],
    name: "setEpochDelayForReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract EpochManager",
        name: "epochManager_",
        type: "address",
      },
    ],
    name: "setEpochManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "fluenceToken_",
        type: "address",
      },
    ],
    name: "setFluenceToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minAmountOfEpochsForReward_",
        type: "uint256",
      },
    ],
    name: "setMinAmountOfEpochsForReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "slashFactor_",
        type: "uint256",
      },
    ],
    name: "setSlashFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "updateSettingsTimeout_",
        type: "uint256",
      },
    ],
    name: "setUpdateSettingsTimeout",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "withdrawTimeout_",
        type: "uint256",
      },
    ],
    name: "setWithdrawTimeout",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "slashFactor",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateSettingsTimeout",
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
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawTimeout",
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
];

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b5060805161220f61007b600039600081816104eb01528181610579015281816106730152818161070101526107b1015261220f6000f3fe6080604052600436106101405760003560e01c806385079cd7116100b6578063ae2598fc1161006f578063ae2598fc146103ed578063b8b3654714610416578063bc4dba0214610441578063d4d59edb1461046c578063e2d2bfe314610495578063f2fde38b146104c057610140565b806385079cd7146102ef5780638a507d871461031a5780638c0fc534146103435780638da5cb5b1461036c5780639c15d1a214610397578063ac027f97146103c257610140565b80635a96fecc116101085780635a96fecc14610209578063715018a614610232578063729414601461024957806372bf0dd31461027257806373b517fc1461029b57806383a5041c146102c657610140565b80633659cfe6146101455780634f1ef2861461016e57806352d1902d1461018a57806353d6e100146101b557806359090910146101de575b600080fd5b34801561015157600080fd5b5061016c60048036038101906101679190611448565b6104e9565b005b610188600480360381019061018391906115bb565b610671565b005b34801561019657600080fd5b5061019f6107ad565b6040516101ac9190611630565b60405180910390f35b3480156101c157600080fd5b506101dc60048036038101906101d79190611689565b610866565b005b3480156101ea57600080fd5b506101f36108b2565b60405161020091906116cf565b60405180910390f35b34801561021557600080fd5b50610230600480360381019061022b9190611728565b6108b8565b005b34801561023e57600080fd5b50610247610904565b005b34801561025557600080fd5b50610270600480360381019061026b9190611781565b610918565b005b34801561027e57600080fd5b5061029960048036038101906102949190611781565b61092a565b005b3480156102a757600080fd5b506102b061093c565b6040516102bd91906116cf565b60405180910390f35b3480156102d257600080fd5b506102ed60048036038101906102e891906117ec565b610942565b005b3480156102fb57600080fd5b50610304610b66565b60405161031191906118ed565b60405180910390f35b34801561032657600080fd5b50610341600480360381019061033c9190611781565b610b8c565b005b34801561034f57600080fd5b5061036a60048036038101906103659190611781565b610b9e565b005b34801561037857600080fd5b50610381610bb0565b60405161038e9190611917565b60405180910390f35b3480156103a357600080fd5b506103ac610bda565b6040516103b991906116cf565b60405180910390f35b3480156103ce57600080fd5b506103d7610be0565b6040516103e49190611953565b60405180910390f35b3480156103f957600080fd5b50610414600480360381019061040f9190611781565b610c06565b005b34801561042257600080fd5b5061042b610c18565b60405161043891906116cf565b60405180910390f35b34801561044d57600080fd5b50610456610c1e565b60405161046391906116cf565b60405180910390f35b34801561047857600080fd5b50610493600480360381019061048e919061196e565b610c24565b005b3480156104a157600080fd5b506104aa610c70565b6040516104b791906119bc565b60405180910390f35b3480156104cc57600080fd5b506104e760048036038101906104e29190611448565b610c96565b005b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610577576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056e90611a5a565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166105b6610d19565b73ffffffffffffffffffffffffffffffffffffffff161461060c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060390611aec565b60405180910390fd5b61061581610d70565b61066e81600067ffffffffffffffff81111561063457610633611490565b5b6040519080825280601f01601f1916602001820160405280156106665781602001600182028036833780820191505090505b506000610d73565b50565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16036106ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f690611a5a565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661073e610d19565b73ffffffffffffffffffffffffffffffffffffffff1614610794576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078b90611aec565b60405180910390fd5b61079d82610d70565b6107a982826001610d73565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161461083d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083490611b7e565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b61086e610ee1565b80606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606b5481565b6108c0610ee1565b80606660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61090c610ee1565b6109166000610f5f565b565b610920610ee1565b8060678190555050565b610932610ee1565b80606b8190555050565b60685481565b60008060019054906101000a900460ff161590508080156109735750600160008054906101000a900460ff1660ff16105b806109a0575061098230611025565b15801561099f5750600160008054906101000a900460ff1660ff16145b5b6109df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d690611c10565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610a1c576001600060016101000a81548160ff0219169083151502179055505b87606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086606660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550856067819055508460688190555083606a8190555082606b8190555081606c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b03611048565b8015610b5c5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610b539190611c78565b60405180910390a15b5050505050505050565b606660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610b94610ee1565b80606a8190555050565b610ba6610ee1565b8060688190555050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60675481565b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c0e610ee1565b8060698190555050565b60695481565b606a5481565b610c2c610ee1565b80606c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c9e610ee1565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610d0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0490611d05565b60405180910390fd5b610d1681610f5f565b50565b6000610d477f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6110a1565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b50565b610d9f7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b6110ab565b60000160009054906101000a900460ff1615610dc357610dbe836110b5565b610edc565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610e2b57506040513d601f19601f82011682018060405250810190610e289190611d51565b60015b610e6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6190611df0565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b8114610ecf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec690611e82565b60405180910390fd5b50610edb83838361116e565b5b505050565b610ee961119a565b73ffffffffffffffffffffffffffffffffffffffff16610f07610bb0565b73ffffffffffffffffffffffffffffffffffffffff1614610f5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5490611eee565b60405180910390fd5b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16611097576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108e90611f80565b60405180910390fd5b61109f6111a2565b565b6000819050919050565b6000819050919050565b6110be81611203565b6110fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f490612012565b60405180910390fd5b8061112a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6110a1565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61117783611226565b6000825111806111845750805b15611195576111938383611275565b505b505050565b600033905090565b600060019054906101000a900460ff166111f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e890611f80565b60405180910390fd5b6112016111fc61119a565b610f5f565b565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b61122f816110b5565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b606061129a83836040518060600160405280602781526020016121b3602791396112a2565b905092915050565b60606112ad84611203565b6112ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e3906120a4565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16856040516113149190612135565b600060405180830381855af49150503d806000811461134f576040519150601f19603f3d011682016040523d82523d6000602084013e611354565b606091505b509150915061136482828661136f565b925050509392505050565b6060831561137f578290506113cf565b6000835111156113925782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c69190612190565b60405180910390fd5b9392505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611415826113ea565b9050919050565b6114258161140a565b811461143057600080fd5b50565b6000813590506114428161141c565b92915050565b60006020828403121561145e5761145d6113e0565b5b600061146c84828501611433565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6114c88261147f565b810181811067ffffffffffffffff821117156114e7576114e6611490565b5b80604052505050565b60006114fa6113d6565b905061150682826114bf565b919050565b600067ffffffffffffffff82111561152657611525611490565b5b61152f8261147f565b9050602081019050919050565b82818337600083830152505050565b600061155e6115598461150b565b6114f0565b90508281526020810184848401111561157a5761157961147a565b5b61158584828561153c565b509392505050565b600082601f8301126115a2576115a1611475565b5b81356115b284826020860161154b565b91505092915050565b600080604083850312156115d2576115d16113e0565b5b60006115e085828601611433565b925050602083013567ffffffffffffffff811115611601576116006113e5565b5b61160d8582860161158d565b9150509250929050565b6000819050919050565b61162a81611617565b82525050565b60006020820190506116456000830184611621565b92915050565b60006116568261140a565b9050919050565b6116668161164b565b811461167157600080fd5b50565b6000813590506116838161165d565b92915050565b60006020828403121561169f5761169e6113e0565b5b60006116ad84828501611674565b91505092915050565b6000819050919050565b6116c9816116b6565b82525050565b60006020820190506116e460008301846116c0565b92915050565b60006116f58261140a565b9050919050565b611705816116ea565b811461171057600080fd5b50565b600081359050611722816116fc565b92915050565b60006020828403121561173e5761173d6113e0565b5b600061174c84828501611713565b91505092915050565b61175e816116b6565b811461176957600080fd5b50565b60008135905061177b81611755565b92915050565b600060208284031215611797576117966113e0565b5b60006117a58482850161176c565b91505092915050565b60006117b98261140a565b9050919050565b6117c9816117ae565b81146117d457600080fd5b50565b6000813590506117e6816117c0565b92915050565b600080600080600080600060e0888a03121561180b5761180a6113e0565b5b60006118198a828b01611674565b975050602061182a8a828b01611713565b965050604061183b8a828b0161176c565b955050606061184c8a828b0161176c565b945050608061185d8a828b0161176c565b93505060a061186e8a828b0161176c565b92505060c061187f8a828b016117d7565b91505092959891949750929550565b6000819050919050565b60006118b36118ae6118a9846113ea565b61188e565b6113ea565b9050919050565b60006118c582611898565b9050919050565b60006118d7826118ba565b9050919050565b6118e7816118cc565b82525050565b600060208201905061190260008301846118de565b92915050565b6119118161140a565b82525050565b600060208201905061192c6000830184611908565b92915050565b600061193d826118ba565b9050919050565b61194d81611932565b82525050565b60006020820190506119686000830184611944565b92915050565b600060208284031215611984576119836113e0565b5b6000611992848285016117d7565b91505092915050565b60006119a6826118ba565b9050919050565b6119b68161199b565b82525050565b60006020820190506119d160008301846119ad565b92915050565b600082825260208201905092915050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b6000611a44602c836119d7565b9150611a4f826119e8565b604082019050919050565b60006020820190508181036000830152611a7381611a37565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b6000611ad6602c836119d7565b9150611ae182611a7a565b604082019050919050565b60006020820190508181036000830152611b0581611ac9565b9050919050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b6000611b686038836119d7565b9150611b7382611b0c565b604082019050919050565b60006020820190508181036000830152611b9781611b5b565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000611bfa602e836119d7565b9150611c0582611b9e565b604082019050919050565b60006020820190508181036000830152611c2981611bed565b9050919050565b6000819050919050565b600060ff82169050919050565b6000611c62611c5d611c5884611c30565b61188e565b611c3a565b9050919050565b611c7281611c47565b82525050565b6000602082019050611c8d6000830184611c69565b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611cef6026836119d7565b9150611cfa82611c93565b604082019050919050565b60006020820190508181036000830152611d1e81611ce2565b9050919050565b611d2e81611617565b8114611d3957600080fd5b50565b600081519050611d4b81611d25565b92915050565b600060208284031215611d6757611d666113e0565b5b6000611d7584828501611d3c565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b6000611dda602e836119d7565b9150611de582611d7e565b604082019050919050565b60006020820190508181036000830152611e0981611dcd565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b6000611e6c6029836119d7565b9150611e7782611e10565b604082019050919050565b60006020820190508181036000830152611e9b81611e5f565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611ed86020836119d7565b9150611ee382611ea2565b602082019050919050565b60006020820190508181036000830152611f0781611ecb565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000611f6a602b836119d7565b9150611f7582611f0e565b604082019050919050565b60006020820190508181036000830152611f9981611f5d565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000611ffc602d836119d7565b915061200782611fa0565b604082019050919050565b6000602082019050818103600083015261202b81611fef565b9050919050565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b600061208e6026836119d7565b915061209982612032565b604082019050919050565b600060208201905081810360008301526120bd81612081565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156120f85780820151818401526020810190506120dd565b60008484015250505050565b600061210f826120c4565b61211981856120cf565b93506121298185602086016120da565b80840191505092915050565b60006121418284612104565b915081905092915050565b600081519050919050565b60006121628261214c565b61216c81856119d7565b935061217c8185602086016120da565b6121858161147f565b840191505092915050565b600060208201905081810360008301526121aa8184612157565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e26361ea2497ed42f28f22b218af21f5ec3eb3fc9d29de8f535d4a36561c813864736f6c63430008110033";

type CoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Core__factory extends ContractFactory {
  constructor(...args: CoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Core> {
    return super.deploy(overrides || {}) as Promise<Core>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Core {
    return super.attach(address) as Core;
  }
  override connect(signer: Signer): Core__factory {
    return super.connect(signer) as Core__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoreInterface {
    return new utils.Interface(_abi) as CoreInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Core {
    return new Contract(address, _abi, signerOrProvider) as Core;
  }
}
