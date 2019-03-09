import Houses from '../data/houses.js';
//import Admins from '../data/houses.js';
import RT from '../data/rt.js';
//import Crypto from './crypto.js';

const urls = {
    houses: "http://35.237.240.199:3002/api/house",
    husert: "http://35.237.240.199:3002/api/rt"
}

/**
 * Calls Airpal API and returns a Promise with that HTTP request
 */
const getHouses = async () => {
    //TODO: Call API and get houses
    let houses = await fetch(urls.houses);
    houses = await houses.json();
    return houses;
}

const findAdmin = (admin) => {
    
}

const getHouseRT = async (houseid) => {
    //TODO: Call API and get houses
    const headers = {
        method: 'GET',
        qs: {
            houseid,
            idhouse: houseid
        },
        params: {
            houseid,
            idhouse: houseid
        }
    }
    let housert = await fetch(urls.houses, headers);
    housert = await housert.json();
    return housert;
}

export default {
    getHouses,
    getRT,
    getHouseRT,
    findAdmin: (a) => { console.log(a)}
}

const getRT = () => {
    //TODO: Call API and get RT
    return RT;
}