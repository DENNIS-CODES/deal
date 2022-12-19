/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DealFactory,
  DealFactoryInterface,
} from "../../contracts/DealFactory";

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
        name: "addr",
        type: "address",
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
        internalType: "contract IERC20",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "airScriptHash",
        type: "bytes32",
      },
    ],
    name: "createDeal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516134f73803806134f7833981810160405281019061003291906100e1565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505061010e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009c82610071565b9050919050565b60006100ae82610091565b9050919050565b6100be816100a3565b81146100c957600080fd5b50565b6000815190506100db816100b5565b92915050565b6000602082840312156100f7576100f661006c565b5b6000610105848285016100cc565b91505092915050565b6080516133c861012f600039600081816087015261012401526133c86000f3fe60806040523480156200001157600080fd5b50600436106200003a5760003560e01c806335064b72146200003f578063f2f4eb26146200005f575b600080fd5b6200005d60048036038101906200005791906200020d565b62000081565b005b6200006962000122565b604051620000789190620002bf565b60405180910390f35b600082827f000000000000000000000000000000000000000000000000000000000000000033604051620000b59062000146565b620000c4949392919062000323565b604051809103906000f080158015620000e1573d6000803e3d6000fd5b5090507f941e9b54a9a5b7a0112e23820aeeee3827703e73e627960d41b59b8e822588978160405162000115919062000370565b60405180910390a1505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b613005806200038e83390190565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001868262000159565b9050919050565b60006200019a8262000179565b9050919050565b620001ac816200018d565b8114620001b857600080fd5b50565b600081359050620001cc81620001a1565b92915050565b6000819050919050565b620001e781620001d2565b8114620001f357600080fd5b50565b6000813590506200020781620001dc565b92915050565b6000806040838503121562000227576200022662000154565b5b60006200023785828601620001bb565b92505060206200024a85828601620001f6565b9150509250929050565b6000819050919050565b60006200027f62000279620002738462000159565b62000254565b62000159565b9050919050565b600062000293826200025e565b9050919050565b6000620002a78262000286565b9050919050565b620002b9816200029a565b82525050565b6000602082019050620002d66000830184620002ae565b92915050565b6000620002e98262000286565b9050919050565b620002fb81620002dc565b82525050565b6200030c81620001d2565b82525050565b6200031d8162000179565b82525050565b60006080820190506200033a6000830187620002f0565b62000349602083018662000301565b620003586040830185620002ae565b62000367606083018462000312565b95945050505050565b600060208201905062000387600083018462000312565b9291505056fe60a06040523480156200001157600080fd5b506040516200300538038062003005833981810160405281019062000037919062000449565b83838383838383836200005f62000053620000fe60201b60201c565b6200010660201b60201c565b8373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508260028190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000ec81620001ca60201b60201c565b505050505050505050505050620005d6565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001da6200026060201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200024c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002439062000542565b60405180910390fd5b6200025d816200010660201b60201c565b50565b62000270620000fe60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1662000296620002f160201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620002ef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002e690620005b4565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200034c826200031f565b9050919050565b600062000360826200033f565b9050919050565b620003728162000353565b81146200037e57600080fd5b50565b600081519050620003928162000367565b92915050565b6000819050919050565b620003ad8162000398565b8114620003b957600080fd5b50565b600081519050620003cd81620003a2565b92915050565b6000620003e0826200033f565b9050919050565b620003f281620003d3565b8114620003fe57600080fd5b50565b6000815190506200041281620003e7565b92915050565b62000423816200033f565b81146200042f57600080fd5b50565b600081519050620004438162000418565b92915050565b600080600080608085870312156200046657620004656200031a565b5b6000620004768782880162000381565b94505060206200048987828801620003bc565b93505060406200049c8782880162000401565b9250506060620004af8782880162000432565b91505092959194509250565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006200052a602683620004bb565b91506200053782620004cc565b604082019050919050565b600060208201905081810360008301526200055d816200051b565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006200059c602083620004bb565b9150620005a98262000564565b602082019050919050565b60006020820190508181036000830152620005cf816200058d565b9050919050565b6080516129fe62000607600039600081816103fc01528181610945015281816109e60152610fdd01526129fe6000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80638da5cb5b116100c3578063e9fad8ee1161007c578063e9fad8ee14610321578063f2f4eb261461032b578063f2fde38b14610349578063f890ab0414610365578063fa52c7d814610383578063faf5625f146103b557610158565b80638da5cb5b14610271578063a9d043771461028f578063ac027f97146102bf578063b6b55f25146102dd578063cf849442146102f9578063e1d3af051461031757610158565b80633ccfd60b116101155780633ccfd60b146101e75780636c7f6361146101f1578063715018a61461020f57806376c1521e1461021957806385079cd7146102355780638cd9236e1461025357610158565b806306164d371461015d57806306761d3e1461017b57806311f25e89146101995780633013ce29146101a3578063309a282f146101c15780633a4b66f1146101dd575b600080fd5b6101656103d3565b60405161017291906118de565b60405180910390f35b6101836103d8565b60405161019091906118de565b60405180910390f35b6101a16103dd565b005b6101ab6103fa565b6040516101b89190611978565b60405180910390f35b6101db60048036038101906101d691906119ff565b61041e565b005b6101e5610759565b005b6101ef6108f5565b005b6101f9610a2d565b60405161020691906118de565b60405180910390f35b610217610a33565b005b610233600480360381019061022e91906119ff565b610a47565b005b61023d610e0b565b60405161024a9190611a7c565b60405180910390f35b61025b610ea3565b60405161026891906118de565b60405180910390f35b610279610ea8565b6040516102869190611aa6565b60405180910390f35b6102a960048036038101906102a49190611af7565b610ed1565b6040516102b69190611b3f565b60405180910390f35b6102c7610ef1565b6040516102d49190611978565b60405180910390f35b6102f760048036038101906102f29190611b86565b610f89565b005b610301611025565b60405161030e91906118de565b60405180910390f35b61031f611031565b005b610329611125565b005b6103336112fd565b6040516103409190611bd4565b60405180910390f35b610363600480360381019061035e9190611bef565b611323565b005b61036d6113a6565b60405161037a9190611c2b565b60405180910390f35b61039d60048036038101906103989190611bef565b6113ac565b6040516103ac93929190611cbd565b60405180910390f35b6103bd6113e3565b6040516103ca91906118de565b60405180910390f35b600181565b603c81565b6103e56113ef565b603c426103f29190611d23565b600581905550565b7f000000000000000000000000000000000000000000000000000000000000000081565b6002548280600001906104319190611d66565b604051602001610442929190611e08565b6040516020818303038152906040528051906020012014610498576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048f90611e7e565b60405180910390fd5b60008280600001906104aa9190611d66565b8480602001906104ba9190611d66565b8680604001906104ca9190611d66565b8880606001906104da9190611d66565b6040516020016104f1989796959493929190611e9e565b6040516020818303038152906040528051906020012090506004600082815260200190815260200160002060009054906101000a900460ff161561056a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056190611f30565b60405180910390fd5b6002600381111561057e5761057d611c46565b5b610586610e0b565b73ffffffffffffffffffffffffffffffffffffffff16634344767e836040518263ffffffff1660e01b81526004016105be9190611c2b565b602060405180830381865afa1580156105db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ff9190611f75565b600381111561061157610610611c46565b5b14610651576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064890611fee565b60405180910390fd5b60018160001c1015610698576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068f9061205a565b60405180910390fd5b60016004600083815260200190815260200160002060006101000a81548160ff0219169083151502179055506106cc610ef1565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd3084678ac7230489e800006040518463ffffffff1660e01b81526004016107109392919061207a565b6020604051808303816000875af115801561072f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075391906120dd565b50505050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600081600001541480156107e55750600060028111156107bf576107be611c46565b5b8160010160009054906101000a900460ff1660028111156107e3576107e2611c46565b5b145b610824576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081b90612156565b60405180910390fd5b678ac7230489e80000816000018190555060018160010160006101000a81548160ff0219169083600281111561085d5761085c611c46565b5b021790555061086a610ef1565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd3330678ac7230489e800006040518463ffffffff1660e01b81526004016108ae9392919061207a565b6020604051808303816000875af11580156108cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f191906120dd565b5050565b6108fd6113ef565b6005544211610941576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610938906121e8565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161099c9190611aa6565b602060405180830381865afa1580156109b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109dd919061221d565b9050610a2a33827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661146d9092919063ffffffff16565b50565b60055481565b610a3b6113ef565b610a4560006114f3565b565b600254828060000190610a5a9190611d66565b604051602001610a6b929190611e08565b6040516020818303038152906040528051906020012014610ac1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab890611e7e565b60405180910390fd5b6000828060000190610ad39190611d66565b848060200190610ae39190611d66565b868060400190610af39190611d66565b888060600190610b039190611d66565b604051602001610b1a989796959493929190611e9e565b604051602081830303815290604052805190602001209050600380811115610b4557610b44611c46565b5b610b4d610e0b565b73ffffffffffffffffffffffffffffffffffffffff16634344767e836040518263ffffffff1660e01b8152600401610b859190611c2b565b602060405180830381865afa158015610ba2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc69190611f75565b6003811115610bd857610bd7611c46565b5b14610c18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0f90612296565b60405180910390fd5b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806060016040529081600082015481526020016001820160009054906101000a900460ff166002811115610c9357610c92611c46565b5b6002811115610ca557610ca4611c46565b5b8152602001600282015481525050905060006064808360000151610cc991906122e5565b610cd39190612316565b90508082600001818151610ce79190612358565b9150818152505081600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff02191690836002811115610d6357610d62611c46565b5b021790555060408201518160020155905050610d7d610ef1565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd30610da1610ea8565b846040518463ffffffff1660e01b8152600401610dc09392919061207a565b6020604051808303816000875af1158015610ddf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0391906120dd565b505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166385079cd76040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9e91906123ca565b905090565b603c81565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60046020528060005260406000206000915054906101000a900460ff1681565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ac027f976040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f849190612435565b905090565b610f916113ef565b6005544211610fd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fcc906124ae565b60405180910390fd5b6110223330837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166115b7909392919063ffffffff16565b50565b678ac7230489e8000081565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506001600281111561108857611087611c46565b5b8160010160009054906101000a900460ff1660028111156110ac576110ab611c46565b5b146110ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e39061251a565b60405180910390fd5b60028160010160006101000a81548160ff0219169083600281111561111457611113611c46565b5b021790555042816002018190555050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060028081111561117b5761117a611c46565b5b8160010160009054906101000a900460ff16600281111561119f5761119e611c46565b5b146111df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d690612586565b60405180910390fd5b603c81600201546111f09190611d23565b4211611231576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611228906125f2565b60405180910390fd5b60008160000154905060008260010160006101000a81548160ff0219169083600281111561126257611261611c46565b5b021790555060008260000181905550611279610ef1565b73ffffffffffffffffffffffffffffffffffffffff166323b872dd3033846040518463ffffffff1660e01b81526004016112b59392919061207a565b6020604051808303816000875af11580156112d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f891906120dd565b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61132b6113ef565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361139a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139190612684565b60405180910390fd5b6113a3816114f3565b50565b60025481565b60036020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060020154905083565b678ac7230489e8000081565b6113f7611640565b73ffffffffffffffffffffffffffffffffffffffff16611415610ea8565b73ffffffffffffffffffffffffffffffffffffffff161461146b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611462906126f0565b60405180910390fd5b565b6114ee8363a9059cbb60e01b848460405160240161148c929190612710565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611648565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61163a846323b872dd60e01b8585856040516024016115d89392919061207a565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611648565b50505050565b600033905090565b60006116aa826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661170f9092919063ffffffff16565b905060008151111561170a57808060200190518101906116ca91906120dd565b611709576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611700906127ab565b60405180910390fd5b5b505050565b606061171e8484600085611727565b90509392505050565b60608247101561176c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117639061283d565b60405180910390fd5b6117758561183b565b6117b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117ab906128a9565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516117dd919061293a565b60006040518083038185875af1925050503d806000811461181a576040519150601f19603f3d011682016040523d82523d6000602084013e61181f565b606091505b509150915061182f82828661185e565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6060831561186e578290506118be565b6000835111156118815782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b591906129a6565b60405180910390fd5b9392505050565b6000819050919050565b6118d8816118c5565b82525050565b60006020820190506118f360008301846118cf565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061193e611939611934846118f9565b611919565b6118f9565b9050919050565b600061195082611923565b9050919050565b600061196282611945565b9050919050565b61197281611957565b82525050565b600060208201905061198d6000830184611969565b92915050565b600080fd5b600080fd5b600080fd5b6000608082840312156119b8576119b761199d565b5b81905092915050565b60006119cc826118f9565b9050919050565b6119dc816119c1565b81146119e757600080fd5b50565b6000813590506119f9816119d3565b92915050565b60008060408385031215611a1657611a15611993565b5b600083013567ffffffffffffffff811115611a3457611a33611998565b5b611a40858286016119a2565b9250506020611a51858286016119ea565b9150509250929050565b6000611a6682611945565b9050919050565b611a7681611a5b565b82525050565b6000602082019050611a916000830184611a6d565b92915050565b611aa0816119c1565b82525050565b6000602082019050611abb6000830184611a97565b92915050565b6000819050919050565b611ad481611ac1565b8114611adf57600080fd5b50565b600081359050611af181611acb565b92915050565b600060208284031215611b0d57611b0c611993565b5b6000611b1b84828501611ae2565b91505092915050565b60008115159050919050565b611b3981611b24565b82525050565b6000602082019050611b546000830184611b30565b92915050565b611b63816118c5565b8114611b6e57600080fd5b50565b600081359050611b8081611b5a565b92915050565b600060208284031215611b9c57611b9b611993565b5b6000611baa84828501611b71565b91505092915050565b6000611bbe82611945565b9050919050565b611bce81611bb3565b82525050565b6000602082019050611be96000830184611bc5565b92915050565b600060208284031215611c0557611c04611993565b5b6000611c13848285016119ea565b91505092915050565b611c2581611ac1565b82525050565b6000602082019050611c406000830184611c1c565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110611c8657611c85611c46565b5b50565b6000819050611c9782611c75565b919050565b6000611ca782611c89565b9050919050565b611cb781611c9c565b82525050565b6000606082019050611cd260008301866118cf565b611cdf6020830185611cae565b611cec60408301846118cf565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611d2e826118c5565b9150611d39836118c5565b9250828201905080821115611d5157611d50611cf4565b5b92915050565b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112611d8357611d82611d57565b5b80840192508235915067ffffffffffffffff821115611da557611da4611d5c565b5b602083019250600182023603831315611dc157611dc0611d61565b5b509250929050565b600081905092915050565b82818337600083830152505050565b6000611def8385611dc9565b9350611dfc838584611dd4565b82840190509392505050565b6000611e15828486611de3565b91508190509392505050565b600082825260208201905092915050565b7f496e76616c69642073637269707420696e207061727469636c65000000000000600082015250565b6000611e68601a83611e21565b9150611e7382611e32565b602082019050919050565b60006020820190508181036000830152611e9781611e5b565b9050919050565b6000611eab828a8c611de3565b9150611eb882888a611de3565b9150611ec5828688611de3565b9150611ed2828486611de3565b91508190509998505050505050505050565b7f416c726561647920706179656400000000000000000000000000000000000000600082015250565b6000611f1a600d83611e21565b9150611f2582611ee4565b602082019050919050565b60006020820190508181036000830152611f4981611f0d565b9050919050565b60048110611f5d57600080fd5b50565b600081519050611f6f81611f50565b92915050565b600060208284031215611f8b57611f8a611993565b5b6000611f9984828501611f60565b91505092915050565b7f5061727469636c65206973206e6f742073756363657373000000000000000000600082015250565b6000611fd8601783611e21565b9150611fe382611fa2565b602082019050919050565b6000602082019050818103600083015261200781611fcb565b9050919050565b7f4974206973206e6f74206120676f6c64656e207061727469636c650000000000600082015250565b6000612044601b83611e21565b915061204f8261200e565b602082019050919050565b6000602082019050818103600083015261207381612037565b9050919050565b600060608201905061208f6000830186611a97565b61209c6020830185611a97565b6120a960408301846118cf565b949350505050565b6120ba81611b24565b81146120c557600080fd5b50565b6000815190506120d7816120b1565b92915050565b6000602082840312156120f3576120f2611993565b5b6000612101848285016120c8565b91505092915050565b7f416c7265616479207374616b6564000000000000000000000000000000000000600082015250565b6000612140600e83611e21565b915061214b8261210a565b602082019050919050565b6000602082019050818103600083015261216f81612133565b9050919050565b7f57697468647261772072657175657374206973206e6f7420637265617465642060008201527f6f72206e6f7420657870697265642064656c6179000000000000000000000000602082015250565b60006121d2603483611e21565b91506121dd82612176565b604082019050919050565b60006020820190508181036000830152612201816121c5565b9050919050565b60008151905061221781611b5a565b92915050565b60006020828403121561223357612232611993565b5b600061224184828501612208565b91505092915050565b7f5061727469636c65206973206e6f74206661696c656400000000000000000000600082015250565b6000612280601683611e21565b915061228b8261224a565b602082019050919050565b600060208201905081810360008301526122af81612273565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006122f0826118c5565b91506122fb836118c5565b92508261230b5761230a6122b6565b5b828204905092915050565b6000612321826118c5565b915061232c836118c5565b925082820261233a816118c5565b9150828204841483151761235157612350611cf4565b5b5092915050565b6000612363826118c5565b915061236e836118c5565b925082820390508181111561238657612385611cf4565b5b92915050565b6000612397826119c1565b9050919050565b6123a78161238c565b81146123b257600080fd5b50565b6000815190506123c48161239e565b92915050565b6000602082840312156123e0576123df611993565b5b60006123ee848285016123b5565b91505092915050565b6000612402826119c1565b9050919050565b612412816123f7565b811461241d57600080fd5b50565b60008151905061242f81612409565b92915050565b60006020828403121561244b5761244a611993565b5b600061245984828501612420565b91505092915050565b7f4465706f736974206973206c6f636b6564000000000000000000000000000000600082015250565b6000612498601183611e21565b91506124a382612462565b602082019050919050565b600060208201905081810360008301526124c78161248b565b9050919050565b7f4e6f742061637469766500000000000000000000000000000000000000000000600082015250565b6000612504600a83611e21565b915061250f826124ce565b602082019050919050565b60006020820190508181036000830152612533816124f7565b9050919050565b7f4e6f7420696e2065786974206d6f646500000000000000000000000000000000600082015250565b6000612570601083611e21565b915061257b8261253a565b602082019050919050565b6000602082019050818103600083015261259f81612563565b9050919050565b7f5761697420657869742074696d656f7574000000000000000000000000000000600082015250565b60006125dc601183611e21565b91506125e7826125a6565b602082019050919050565b6000602082019050818103600083015261260b816125cf565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061266e602683611e21565b915061267982612612565b604082019050919050565b6000602082019050818103600083015261269d81612661565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006126da602083611e21565b91506126e5826126a4565b602082019050919050565b60006020820190508181036000830152612709816126cd565b9050919050565b60006040820190506127256000830185611a97565b61273260208301846118cf565b9392505050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000612795602a83611e21565b91506127a082612739565b604082019050919050565b600060208201905081810360008301526127c481612788565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000612827602683611e21565b9150612832826127cb565b604082019050919050565b600060208201905081810360008301526128568161281a565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612893601d83611e21565b915061289e8261285d565b602082019050919050565b600060208201905081810360008301526128c281612886565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156128fd5780820151818401526020810190506128e2565b60008484015250505050565b6000612914826128c9565b61291e81856128d4565b935061292e8185602086016128df565b80840191505092915050565b60006129468284612909565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b600061297882612951565b6129828185611e21565b93506129928185602086016128df565b61299b8161295c565b840191505092915050565b600060208201905081810360008301526129c0818461296d565b90509291505056fea2646970667358221220da75ac915b849cfe1119c9afefa57c49766a9af1f1334fdc15fb6fcfc301f22b64736f6c63430008110033a2646970667358221220e99537906b5104b7d0c48f005659dbe2347d163c21b66e93571112e9988f437664736f6c63430008110033";

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