import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x1F931817EC8E282ffDb7957dc6a4b09B08aC2F39'
);

export default instance;