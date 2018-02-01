import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
import KEYS from '../conf/keys';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    KEYS.address
);

export default instance;