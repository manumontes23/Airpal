
const api_ip = "https://airpal-backend.herokuapp.com/api/";
//"http://35.237.240.199:3002/api"; //http://35.237.240.199:3002/api";


const urls = {
    houses: `${api_ip}/house`,
    housert: `${api_ip}/house/rt`,
    admin_login: `${api_ip}/admin/login`,
    register: `${api_ip}/house/register`
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

/**
 * Send a post request to the API
 * @house 
 */
const postHouse = async (house) => {
    const json = {
        method: 'POST',
        body: JSON.stringify(house),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(urls.register, json)
}


/**
 * Calls Airpal API to look for the admin to login 
 * 
 * @admin must be in the format
 * {
 *  ID: @admin.ID
 *  PASSWORD: @admin.PASSWORD
 * } 
 * 
 * @return a JSON with the admin found, or a {} in case not found/not exists
 */
const login = async (admin) => {
    const body = {
        ID: `${admin.ID}`,
        PASSWORD: `${admin.PASSWORD}`
    };
    
    const json = {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            'Content-Type': 'application/json'
        }
    };
    const url = urls.admin_login;
    let login = await fetch(url, json);

    return login;
}

/**
 * Get the house RT giving the id of the house
 */
const getHouseRT = async (houseid) => {
    let url = new URL(urls.housert);
    url.search = new URLSearchParams({houseid})
    let housert = await fetch(url);
    housert = await housert.json();
    return housert;
}

export default {
    getHouses,
    getHouseRT,
    login,
    postHouse
}
