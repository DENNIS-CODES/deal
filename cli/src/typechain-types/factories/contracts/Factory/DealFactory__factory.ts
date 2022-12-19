/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DealFactory,
  DealFactoryInterface,
} from "../../../contracts/Factory/DealFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Core",
        name: "core_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "deal",
        type: "address",
      },
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "pricePerEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "requiredStake",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct DealConfigState.Settings",
        name: "settings",
        type: "tuple",
      },
    ],
    name: "CreateDeal",
    type: "event",
  },
  {
    inputs: [],
    name: "core",
    outputs: [
      {
        internalType: "contract Core",
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
        internalType: "bytes32",
        name: "subnetId",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "pricePerEpoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "requiredStake",
            type: "uint256",
          },
        ],
        internalType: "struct DealConfigState.Settings",
        name: "settings",
        type: "tuple",
      },
    ],
    name: "createDeal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516141bc3803806141bc833981810160405281019061003291906100ed565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061011a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100a88261007d565b9050919050565b60006100ba8261009d565b9050919050565b6100ca816100af565b81146100d557600080fd5b50565b6000815190506100e7816100c1565b92915050565b60006020828403121561010357610102610078565b5b6000610111848285016100d8565b91505092915050565b614093806101296000396000f3fe60806040523480156200001157600080fd5b50600436106200003a5760003560e01c80639371b847146200003f578063f2f4eb26146200005f575b600080fd5b6200005d60048036038101906200005791906200035c565b62000081565b005b6200006962000123565b6040516200007891906200040e565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168383604051620000b59062000147565b620000c393929190620004ba565b604051809103906000f080158015620000e0573d6000803e3d6000fd5b5090507f07963113c23b91944998cb38d35154117e6a10b2d910f09e6e5c1208e5ce12bc81836040516200011692919062000508565b60405180910390a1505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b613b28806200053683390190565b6000604051905090565b600080fd5b6000819050919050565b620001798162000164565b81146200018557600080fd5b50565b60008135905062000199816200016e565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001ef82620001a4565b810181811067ffffffffffffffff82111715620002115762000210620001b5565b5b80604052505050565b60006200022662000155565b9050620002348282620001e4565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002668262000239565b9050919050565b60006200027a8262000259565b9050919050565b6200028c816200026d565b81146200029857600080fd5b50565b600081359050620002ac8162000281565b92915050565b6000819050919050565b620002c781620002b2565b8114620002d357600080fd5b50565b600081359050620002e781620002bc565b92915050565b6000606082840312156200030657620003056200019f565b5b6200031260606200021a565b9050600062000324848285016200029b565b60008301525060206200033a84828501620002d6565b60208301525060406200035084828501620002d6565b60408301525092915050565b600080608083850312156200037657620003756200015f565b5b6000620003868582860162000188565b92505060206200039985828601620002ed565b9150509250929050565b6000819050919050565b6000620003ce620003c8620003c28462000239565b620003a3565b62000239565b9050919050565b6000620003e282620003ad565b9050919050565b6000620003f682620003d5565b9050919050565b6200040881620003e9565b82525050565b6000602082019050620004256000830184620003fd565b92915050565b620004368162000164565b82525050565b60006200044982620003d5565b9050919050565b6200045b816200043c565b82525050565b6200046c81620002b2565b82525050565b6060820160008201516200048a600085018262000450565b5060208201516200049f602085018262000461565b506040820151620004b4604085018262000461565b50505050565b600060a082019050620004d16000830186620003fd565b620004e060208301856200042b565b620004ef604083018462000472565b949350505050565b620005028162000259565b82525050565b60006080820190506200051f6000830185620004f7565b6200052e602083018462000472565b939250505056fe60806040523480156200001157600080fd5b5060405162003b2838038062003b28833981810160405281019062000037919062000432565b8282826200005a6200004e6200011860201b60201c565b6200012060201b60201c565b82600360000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160036001018190555080600360020160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201559050505050505050506200048e565b600033905090565b6000600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200022282620001f5565b9050919050565b6000620002368262000215565b9050919050565b620002488162000229565b81146200025457600080fd5b50565b60008151905062000268816200023d565b92915050565b6000819050919050565b62000283816200026e565b81146200028f57600080fd5b50565b600081519050620002a38162000278565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002f982620002ae565b810181811067ffffffffffffffff821117156200031b576200031a620002bf565b5b80604052505050565b600062000330620001e6565b90506200033e8282620002ee565b919050565b6000620003508262000215565b9050919050565b620003628162000343565b81146200036e57600080fd5b50565b600081519050620003828162000357565b92915050565b6000819050919050565b6200039d8162000388565b8114620003a957600080fd5b50565b600081519050620003bd8162000392565b92915050565b600060608284031215620003dc57620003db620002a9565b5b620003e8606062000324565b90506000620003fa8482850162000371565b60008301525060206200041084828501620003ac565b60208301525060406200042684828501620003ac565b60408301525092915050565b600080600060a084860312156200044e576200044d620001f0565b5b60006200045e8682870162000257565b9350506020620004718682870162000292565b92505060406200048486828701620003c3565b9150509250925092565b61368a806200049e6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063750b5a19116100ad578063e423e0d511610071578063e423e0d5146102bd578063e72ac725146102d9578063ecb10a78146102f5578063f2fde38b14610311578063f4e52ae81461032d57610121565b8063750b5a191461022957806385079cd7146102455780638da5cb5b14610263578063ac027f9714610281578063e06174e41461029f57610121565b806344276733116100f4578063442767331461018657806347e7ef24146101b657806351cff8d9146101d25780635f7f064b146101ee578063715018a61461021f57610121565b80630a5bfa07146101265780631378344f146101445780631aa3a008146101605780633b5b085f1461016a575b600080fd5b61012e610337565b60405161013b91906123b4565b60405180910390f35b61015e60048036038101906101599190612487565b610344565b005b61016861060b565b005b610184600480360381019061017f9190612522565b610618565b005b6101a0600480360381019061019b919061254f565b610a65565b6040516101ad91906125f3565b60405180910390f35b6101d060048036038101906101cb9190612682565b610abe565b005b6101ec60048036038101906101e791906126c2565b610b88565b005b610208600480360381019061020391906126ef565b610d90565b60405161021692919061273a565b60405180910390f35b610227610dd4565b005b610243600480360381019061023e9190612682565b610de8565b005b61024d610fee565b60405161025a91906127c2565b60405180910390f35b61026b611089565b60405161027891906127dd565b60405180910390f35b6102896110b3565b6040516102969190612819565b60405180910390f35b6102a761114e565b6040516102b49190612894565b60405180910390f35b6102d760048036038101906102d291906128ce565b6111d5565b005b6102f360048036038101906102ee91906126ef565b611341565b005b61030f600480360381019061030a9190612682565b6114ff565b005b61032b6004803603810190610326919061254f565b611696565b005b610335611719565b005b6000600360010154905090565b61034c610fee565b73ffffffffffffffffffffffffffffffffffffffff1663a689408c826040518263ffffffff1660e01b81526004016103849190612a7e565b600060405180830381600087803b15801561039e57600080fd5b505af19250505080156103af575060015b6105cb5760006103bd6110b3565b905060008060008681526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481525050905061044b85828461185f565b6000600360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bc4dba026040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e19190612ab5565b606483602001516104f29190612b40565b6104fc9190612b71565b905080600260000160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105909190612bb3565b925050819055506105c36000828573ffffffffffffffffffffffffffffffffffffffff166119909092919063ffffffff16565b505050610606565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fd90612c6a565b60405180910390fd5b505050565b610616336001611a16565b565b60018081111561062b5761062a61257c565b5b600160000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16600181111561068d5761068c61257c565b5b146106cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c490612cd6565b60405180910390fd5b60006106d76110b3565b9050600033905060004384836040516020016106f593929190612cf6565b604051602081830303815290604052805190602001209050600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a890612d79565b60405180910390fd5b6001808111156107c4576107c361257c565b5b600160000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660018111156108265761082561257c565b5b14610866576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085d90612e0b565b60405180910390fd5b600060036002016002015490506000600260000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600082826109089190612bb3565b1015610949576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094090612e9d565b60405180910390fd5b6003600201600201548161095d9190612bb3565b600260000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808581526020019081526020016000206001016000828254610a089190612ebd565b925050819055508373ffffffffffffffffffffffffffffffffffffffff167fde544153d4dae0984d6e9028acf2e68b4c874dd255efc0432ded0b5805d32f1684604051610a559190612f12565b60405180910390a2505050505050565b6000600160000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b80600260000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b509190612ebd565b92505081905550610b843330838573ffffffffffffffffffffffffffffffffffffffff16611b3a909392919063ffffffff16565b5050565b6000600260000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600080610c1a83611bc3565b9150915080610c5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5590612f79565b60405180910390fd5b600360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639c15d1a26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf29190612ab5565b8260000151610d019190612ebd565b4211610d42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3990612fbf565b60405180910390fd5b610d59826000015184611c2b90919063ffffffff16565b610d8a303384602001518773ffffffffffffffffffffffffffffffffffffffff16611b3a909392919063ffffffff16565b50505050565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b610ddc611c91565b610de66000611d0f565b565b6000600260000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000600260000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008382610f039190612bb3565b11610f43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3a9061302b565b60405180910390fd5b8281610f4f9190612bb3565b600260000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610fe88383611dd590919063ffffffff16565b50505050565b6000600360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385079cd76040518163ffffffff1660e01b8152600401602060405180830381865afa158015611060573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110849190613089565b905090565b6000600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ac027f976040518163ffffffff1660e01b8152600401602060405180830381865afa158015611125573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114991906130cb565b905090565b61115661234a565b60036002016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282015481525050905090565b6111dd611c91565b6111e8816000611e5d565b156112475781600001602081019061120091906126c2565b600360050160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b611252816001611e5d565b156112695781602001356003600501600101819055505b611274816002611e5d565b1561128b5781604001356003600501600201819055505b80600360090181905550600360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663590909106040518163ffffffff1660e01b8152600401602060405180830381865afa158015611305573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113299190612ab5565b426113349190612ebd565b6003600801819055505050565b6001808111156113545761135361257c565b5b600160000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660018111156113b6576113b561257c565b5b146113f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ed90612cd6565b60405180910390fd5b60008060008381526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152505090503373ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff16146114e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114e090613144565b60405180910390fd5b6114fb82826114f66110b3565b61185f565b5050565b6000600260000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008061159b8484611e8590919063ffffffff16565b91509150806115df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115d690612f79565b60405180910390fd5b6115f28484611c2b90919063ffffffff16565b8160200151600260000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116889190612ebd565b925050819055505050505050565b61169e611c91565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361170d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611704906131d6565b60405180910390fd5b61171681611d0f565b50565b611721611c91565b60006003600801541415801561173c57504260036008015410155b61177b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161177290613242565b60405180910390fd5b60006003600901549050611790816000611e5d565b1561180557600360050160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360020160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b611810816001611e5d565b1561182b576003600501600101546003600201600101819055505b611836816002611e5d565b15611851576003600501600201546003600201600201819055505b600060036008018190555050565b60008260200151116118a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161189d90612fbf565b60405180910390fd5b816020015160026000016000846000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119409190612ebd565b92505081905550600080848152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018201600090555050505050565b611a118363a9059cbb60e01b84846040516024016119af92919061273a565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611eec565b505050565b60006001811115611a2a57611a2961257c565b5b600160000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166001811115611a8c57611a8b61257c565b5b14611acc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ac3906132ae565b60405180910390fd5b80600160000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690836001811115611b3157611b3061257c565b5b02179055505050565b611bbd846323b872dd60e01b858585604051602401611b5b939291906132ce565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611eec565b50505050565b611bcb612381565b600080611bda84600101611fb3565b905060008019168103611bf4578260009250925050611c26565b8060001c8360000181815250508360040160008460000151815260200190815260200160002054836020018181525050505b915091565b611c448160001b83600101611fc190919063ffffffff16565b81600401600082815260200190815260200160002054826000016000828254611c6d9190612bb3565b92505081905550816004016000828152602001908152602001600020600090555050565b611c996120c9565b73ffffffffffffffffffffffffffffffffffffffff16611cb7611089565b73ffffffffffffffffffffffffffffffffffffffff1614611d0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d0490613351565b60405180910390fd5b565b6000600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600042905060008360040160008381526020019081526020016000205403611e1157611e108160001b846001016120d190919063ffffffff16565b5b818360040160008381526020019081526020016000206000828254611e369190612ebd565b9250508190555081836000016000828254611e519190612ebd565b92505081905550505050565b60008060001b826002811115611e7657611e7561257c565b5b60001b84161415905092915050565b611e8d612381565b6000611ea88360001b8560010161213d90919063ffffffff16565b905080611ebb5781600091509150611ee5565b82826000018181525050836004016000848152602001908152602001600020548260200181815250505b9250929050565b6000611f4e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661217e9092919063ffffffff16565b9050600081511115611fae5780806020019051810190611f6e91906133a9565b611fad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611fa490613448565b60405180910390fd5b5b505050565b600081600001549050919050565b6000826002016000838152602001908152602001600020604051806040016040529081600082015481526020016001820154815250509050612003838361213d565b61200d57506120c5565b82600201600083815260200190815260200160002060008082016000905560018201600090555050600080191681600001511461206e578060200151836002016000836000015181526020019081526020016000206001018190555061207c565b806020015183600001819055505b60008019168160200151146120b557806000015183600201600083602001518152602001908152602001600020600001819055506120c3565b806000015183600101819055505b505b5050565b600033905090565b6000826001015490506000801b81036120f4576120ee8383612196565b50612139565b81836001018190555080836002016000848152602001908152602001600020600001819055508183600201600083815260200190815260200160002060010181905550505b5050565b600080836002016000848152602001908152602001600020905060008019168160000154141580612175575060008019168160010154145b91505092915050565b606061218d84846000856121ac565b90509392505050565b8082600001819055508082600101819055505050565b6060824710156121f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121e8906134da565b60405180910390fd5b6121fa856122c0565b612239576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161223090613546565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161226291906135d7565b60006040518083038185875af1925050503d806000811461229f576040519150601f19603f3d011682016040523d82523d6000602084013e6122a4565b606091505b50915091506122b48282866122e3565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606083156122f357829050612343565b6000835111156123065782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161233a9190613632565b60405180910390fd5b9392505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b6000819050919050565b6123ae8161239b565b82525050565b60006020820190506123c960008301846123a5565b92915050565b600080fd5b600080fd5b6123e28161239b565b81146123ed57600080fd5b50565b6000813590506123ff816123d9565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061243082612405565b9050919050565b61244081612425565b811461244b57600080fd5b50565b60008135905061245d81612437565b92915050565b600080fd5b60006080828403121561247e5761247d612463565b5b81905092915050565b6000806000606084860312156124a05761249f6123cf565b5b60006124ae868287016123f0565b93505060206124bf8682870161244e565b925050604084013567ffffffffffffffff8111156124e0576124df6123d4565b5b6124ec86828701612468565b9150509250925092565b6124ff8161239b565b811461250a57600080fd5b50565b60008135905061251c816124f6565b92915050565b600060208284031215612538576125376123cf565b5b60006125468482850161250d565b91505092915050565b600060208284031215612565576125646123cf565b5b60006125738482850161244e565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600281106125bc576125bb61257c565b5b50565b60008190506125cd826125ab565b919050565b60006125dd826125bf565b9050919050565b6125ed816125d2565b82525050565b600060208201905061260860008301846125e4565b92915050565b600061261982612425565b9050919050565b6126298161260e565b811461263457600080fd5b50565b60008135905061264681612620565b92915050565b6000819050919050565b61265f8161264c565b811461266a57600080fd5b50565b60008135905061267c81612656565b92915050565b60008060408385031215612699576126986123cf565b5b60006126a785828601612637565b92505060206126b88582860161266d565b9150509250929050565b6000602082840312156126d8576126d76123cf565b5b60006126e684828501612637565b91505092915050565b600060208284031215612705576127046123cf565b5b6000612713848285016123f0565b91505092915050565b61272581612425565b82525050565b6127348161264c565b82525050565b600060408201905061274f600083018561271c565b61275c602083018461272b565b9392505050565b6000819050919050565b600061278861278361277e84612405565b612763565b612405565b9050919050565b600061279a8261276d565b9050919050565b60006127ac8261278f565b9050919050565b6127bc816127a1565b82525050565b60006020820190506127d760008301846127b3565b92915050565b60006020820190506127f2600083018461271c565b92915050565b60006128038261278f565b9050919050565b612813816127f8565b82525050565b600060208201905061282e600083018461280a565b92915050565b61283d816127f8565b82525050565b61284c8161264c565b82525050565b6060820160008201516128686000850182612834565b50602082015161287b6020850182612843565b50604082015161288e6040850182612843565b50505050565b60006060820190506128a96000830184612852565b92915050565b6000606082840312156128c5576128c4612463565b5b81905092915050565b600080608083850312156128e5576128e46123cf565b5b60006128f3858286016128af565b92505060606129048582860161250d565b9150509250929050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261293a57612939612918565b5b83810192508235915060208301925067ffffffffffffffff8211156129625761296161290e565b5b60018202360383131561297857612977612913565b5b509250929050565b600082825260208201905092915050565b82818337600083830152505050565b6000601f19601f8301169050919050565b60006129bd8385612980565b93506129ca838584612991565b6129d3836129a0565b840190509392505050565b6000608083016129f1600084018461291d565b8583036000870152612a048382846129b1565b92505050612a15602084018461291d565b8583036020870152612a288382846129b1565b92505050612a39604084018461291d565b8583036040870152612a4c8382846129b1565b92505050612a5d606084018461291d565b8583036060870152612a708382846129b1565b925050508091505092915050565b60006020820190508181036000830152612a9881846129de565b905092915050565b600081519050612aaf81612656565b92915050565b600060208284031215612acb57612aca6123cf565b5b6000612ad984828501612aa0565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612b4b8261264c565b9150612b568361264c565b925082612b6657612b65612ae2565b5b828204905092915050565b6000612b7c8261264c565b9150612b878361264c565b9250828202612b958161264c565b91508282048414831517612bac57612bab612b11565b5b5092915050565b6000612bbe8261264c565b9150612bc98361264c565b9250828203905081811115612be157612be0612b11565b5b92915050565b600082825260208201905092915050565b7f50726f76696465724d616e616765723a207061727469636c652069732076616c60008201527f6964000000000000000000000000000000000000000000000000000000000000602082015250565b6000612c54602283612be7565b9150612c5f82612bf8565b604082019050919050565b60006020820190508181036000830152612c8381612c47565b9050919050565b7f4f6e6c792070656572206f776e65720000000000000000000000000000000000600082015250565b6000612cc0600f83612be7565b9150612ccb82612c8a565b602082019050919050565b60006020820190508181036000830152612cef81612cb3565b9050919050565b6000606082019050612d0b600083018661272b565b612d1860208301856123a5565b612d25604083018461271c565b949350505050565b7f496420616c726561647920757365640000000000000000000000000000000000600082015250565b6000612d63600f83612be7565b9150612d6e82612d2d565b602082019050919050565b60006020820190508181036000830152612d9281612d56565b9050919050565b7f5061727469636970616e742069736e2774205265736f757263654d616e61676560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612df5602183612be7565b9150612e0082612d99565b604082019050919050565b60006020820190508181036000830152612e2481612de8565b9050919050565b7f50726f76696465724d616e616765723a206e6f7420656e6f7567682062616c6160008201527f6e63650000000000000000000000000000000000000000000000000000000000602082015250565b6000612e87602383612be7565b9150612e9282612e2b565b604082019050919050565b60006020820190508181036000830152612eb681612e7a565b9050919050565b6000612ec88261264c565b9150612ed38361264c565b9250828201905080821115612eeb57612eea612b11565b5b92915050565b6000612efc8261239b565b9050919050565b612f0c81612ef1565b82525050565b6000602082019050612f276000830184612f03565b92915050565b7f526571756573742069736e277420657869737400000000000000000000000000600082015250565b6000612f63601383612be7565b9150612f6e82612f2d565b602082019050919050565b60006020820190508181036000830152612f9281612f56565b9050919050565b50565b6000612fa9600083612be7565b9150612fb482612f99565b600082019050919050565b60006020820190508181036000830152612fd881612f9c565b9050919050565b7f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000600082015250565b6000613015601283612be7565b915061302082612fdf565b602082019050919050565b6000602082019050818103600083015261304481613008565b9050919050565b600061305682612425565b9050919050565b6130668161304b565b811461307157600080fd5b50565b6000815190506130838161305d565b92915050565b60006020828403121561309f5761309e6123cf565b5b60006130ad84828501613074565b91505092915050565b6000815190506130c581612620565b92915050565b6000602082840312156130e1576130e06123cf565b5b60006130ef848285016130b6565b91505092915050565b7f50726f76696465724d616e616765723a206e6f74206f776e6572000000000000600082015250565b600061312e601a83612be7565b9150613139826130f8565b602082019050919050565b6000602082019050818103600083015261315d81613121565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006131c0602683612be7565b91506131cb82613164565b604082019050919050565b600060208201905081810360008301526131ef816131b3565b9050919050565b7f4465616c436f6e6669673a2074696d656f7574206e6f74207061737365640000600082015250565b600061322c601e83612be7565b9150613237826131f6565b602082019050919050565b6000602082019050818103600083015261325b8161321f565b9050919050565b7f5061727469636970616e7420616c726561647920657869737400000000000000600082015250565b6000613298601983612be7565b91506132a382613262565b602082019050919050565b600060208201905081810360008301526132c78161328b565b9050919050565b60006060820190506132e3600083018661271c565b6132f0602083018561271c565b6132fd604083018461272b565b949350505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061333b602083612be7565b915061334682613305565b602082019050919050565b6000602082019050818103600083015261336a8161332e565b9050919050565b60008115159050919050565b61338681613371565b811461339157600080fd5b50565b6000815190506133a38161337d565b92915050565b6000602082840312156133bf576133be6123cf565b5b60006133cd84828501613394565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000613432602a83612be7565b915061343d826133d6565b604082019050919050565b6000602082019050818103600083015261346181613425565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b60006134c4602683612be7565b91506134cf82613468565b604082019050919050565b600060208201905081810360008301526134f3816134b7565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000613530601d83612be7565b915061353b826134fa565b602082019050919050565b6000602082019050818103600083015261355f81613523565b9050919050565b600081519050919050565b600081905092915050565b60005b8381101561359a57808201518184015260208101905061357f565b60008484015250505050565b60006135b182613566565b6135bb8185613571565b93506135cb81856020860161357c565b80840191505092915050565b60006135e382846135a6565b915081905092915050565b600081519050919050565b6000613604826135ee565b61360e8185612be7565b935061361e81856020860161357c565b613627816129a0565b840191505092915050565b6000602082019050818103600083015261364c81846135f9565b90509291505056fea2646970667358221220549d0b6c1c0e7e4585b9c3ae2c1a08729cb08e0dfae1343393e38c2fc60adb9864736f6c63430008110033a2646970667358221220fe1d5d394e5114d1467d01f77345bbd0f7c20439dc3e846c43e73c07c4f644ab64736f6c63430008110033";

type DealFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DealFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DealFactory__factory extends ContractFactory {
  constructor(...args: DealFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    core_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DealFactory> {
    return super.deploy(core_, overrides || {}) as Promise<DealFactory>;
  }
  override getDeployTransaction(
    core_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(core_, overrides || {});
  }
  override attach(address: string): DealFactory {
    return super.attach(address) as DealFactory;
  }
  override connect(signer: Signer): DealFactory__factory {
    return super.connect(signer) as DealFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DealFactoryInterface {
    return new utils.Interface(_abi) as DealFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DealFactory {
    return new Contract(address, _abi, signerOrProvider) as DealFactory;
  }
}