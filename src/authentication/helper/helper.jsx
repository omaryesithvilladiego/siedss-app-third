
import axios from "axios";
import Cookies from "universal-cookie";
import app from  '../../app2.json';
const {APIHOST} = app;
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
        return axios.get(`${APIHOST}${services}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};

export const requestWithToken = {
    post: function (service, data) {
        let token = renovarSesion();
        return axios.post(`${APIHOST}${service}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};



export const requestWithTokenGet = {
    get: function (service, data) {
        let token = renovarSesion();
        return axios.get(`${APIHOST}${service}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};








