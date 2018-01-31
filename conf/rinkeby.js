/*
    This configuration file is used when the application is deployed in a server (such as Heroku). The variables must be added in the server to allow the application read them on starting up. 
*/

const CONF = {
    address: process.env.ADDRESS,
    infuraKey: process.env.INFURA_KEY
};
CONF.infuraUrl = `https://rinkeby.infura.io/${CONF.infuraKey}`;
module.exports = CONF;