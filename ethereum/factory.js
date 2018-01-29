import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x62e85BE27f190aA7F62eE37931985075c3d9eEcd'
);

export default instance;