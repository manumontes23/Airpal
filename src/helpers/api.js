import Houses from '../data/houses.js';
//import Admins from '../data/houses.js';
import RT from '../data/rt.js';
//import Crypto from './crypto.js';

const urls = {
    houses: "http://35.237.240.199:3002/api/house"
}

const getHouses = () => {
    //TODO: Call API and get houses
    const Houses = fetch()
    console.log(Houses);
    return Houses;
}

const findAdmin = (admin) => {
    //console.log(CryptoJS.AES.encrypt(admin.password))
    //Admins.find(admin)
}


export default {
    getHouses,
    getRT,
    findAdmin: (a) => { console.log(a)}
}

const getRT = () => {
    //TODO: Call API and get RT
    return RT;
}