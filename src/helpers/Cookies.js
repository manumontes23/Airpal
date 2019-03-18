import Cookies from 'js-cookie';

const saveCookie = () =>{
    Cookies.set("OA", "xd");
    console.log(Cookies.get("OA"))
}

/**
 * Saves the session admin id
 * This cookie will expire in 30 days
 */
const saveSession = (admid_id) => {
    Cookies.set('admid_id', admid_id);
}

const getSession = () => {
    return Cookies.get('admid_id');
}

export default {
    saveCookie,
    saveSession,
    getSession
}