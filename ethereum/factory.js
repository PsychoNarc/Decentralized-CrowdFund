import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance= new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x645d560c0C1c8F2707538F6C3E3b43482bCBD032'
);

export default instance;