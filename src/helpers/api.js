import Houses from '../data/houses.js';
import Admins from '../data/houses.js';
import RT from '../data/rt.js';
import Crypto from './crypto.js';

getHouses = () => {
    //TODO: Call API and get houses
    return Houses;
}

findAdmin = (admin) => {
    console.log(CryptoJS.AES.encrypt(admin.password))
    Admins.find(admin)
}

export default {
    getHouses,
    findAdmin: (a) => { console.log(a)}
}