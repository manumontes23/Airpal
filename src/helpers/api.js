import Houses from '../data/houses.js';
import Admins from '../data/houses.js';
import RT from '../data/rt.js';

const getHouses = () => {
    //TODO: Call API and get houses
    return Houses;
}

const findAdmin = (admin) => {
    Admins.find(admin)
}

export default {
    findAdmin: (admin) => { 
        return admin
    }
}