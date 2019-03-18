
const api_ip = "http://35.237.240.199:3002/api";
const urls = {
    houses: `${api_ip}/house`,
    housert: `${api_ip}/house/rt`,
    admin_login: `${api_ip}/admin/login`,
    register: `${api_ip}/register`
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
 * Send a with a POST method a request to api and 
 * register the house
 * @param {JSON} json 
 */
const postHouse = async (json) => {
    try {
        let register = await fetch(urls.register, {json});
        register = await register.json();
        register = await register.text();
        alert('hey')
        console.log(register);
        let e = Promise.reject();
    } catch(error) {console.log(error);}
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

const getHouseRT = async (houseid) => {
    //TODO: Call API and get houses
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
