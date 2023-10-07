
import axios from "axios";
import Cookies from "universal-cookie";
import app from  '../../app.json';
const {APIUSUARIOS} = app;
const cookies = new Cookies();

export function calculaExtreaccionSesion() {
    const now = new Date().getTime();
    const newDate = now + 60 *1000 * 1000;
    return new Date(newDate);
}

export function getSession() {
    return (cookies.get("_s")) === undefined ? false : cookies.get("_s") ;
}

export function renovarSesion() {
    const sesion = getSession();
    if(!sesion) window.location.href = "/";

    cookies.set("_s", sesion, {
        path:"/",
        expires:calculaExtreaccionSesion()
    });
    return sesion;
}
export const request = {
    get: function (services) {
        let token = renovarSesion();
        return axios.get(`${APIUSUARIOS}${services}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};










