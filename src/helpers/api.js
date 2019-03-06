import Houses from '../data/houses.js';
<<<<<<< HEAD
import Admins from '../data/houses.js';
import RT from '../data/rt.js';
=======
//import Admins from '../data/houses.js';
//import RT from '../data/rt.js';
//import Crypto from './crypto.js';
>>>>>>> c3b07d7dfc456e447d22dfaa4579ecae820bf6ff

const getHouses = () => {
    //TODO: Call API and get houses
    return Houses;
}

const findAdmin = (admin) => {
<<<<<<< HEAD
    Admins.find(admin)
}

export default {
    findAdmin: (admin) => { 
        return admin
    }
=======
    //console.log(CryptoJS.AES.encrypt(admin.password))
    //Admins.find(admin)
}

export default {
    getHouses,
    findAdmin: (a) => { console.log(a)}
>>>>>>> c3b07d7dfc456e447d22dfaa4579ecae820bf6ff
}