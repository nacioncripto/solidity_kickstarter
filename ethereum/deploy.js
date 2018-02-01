const HDWallerProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

// fill in the private key and API infura key
const PRIVATE_KEY =  'refuse into box proof ask nuclear fine silk parade destroy loan climb';
const INFURA_API_KEY = 'vUCOR3S24NmMPG1TYPAD';

const provider = new HDWallerProvider(
    PRIVATE_KEY,
    `https://rinkeby.infura.io/${INFURA_API_KEY}` 
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.info('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                .deploy({ data: compiledFactory.bytecode })
                .send({ from: accounts[0], gas: '1000000'});

    console.info('Contract deployed to', result.options.address);                
};

deploy();