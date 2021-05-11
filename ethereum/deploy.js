const HDWalletProvider= require('@truffle/hdwallet-provider');
const Web3= require('web3');
const compiledFactory= require('./build/CampaignFactory.json');

const provider= new HDWalletProvider(
    'artist daughter tuna ignore unique misery chimney win lawn circle pave later',
    'https://rinkeby.infura.io/v3/083e9c9031694bbc9b0dc174a83158a1'
);
const web3= new Web3(provider);

const deploy= async()=>{
    const accounts= await new web3.eth.getAccounts();
    console.log('Attempting to deploy from:', accounts[0]);
    const result= await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).deploy({
        data: compiledFactory.bytecode,
    }).send({
        from: accounts[0],
        gas: '1000000'
    }).catch((e)=>console.log(e));
    console.log('Contract deployed to', result.options.address);
}
deploy();