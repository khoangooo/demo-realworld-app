import axios from "axios";

let normalAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor request
normalAxios.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Interceptor response
normalAxios.interceptors.response.use(
    function (response) {
        // Do something with response data
        return response.data;
    },
    function (error) {
        // if (error?.response?.status === 401) {
        //     // removeToken();
        //     if (window.location.pathname !== "/login") {
        //         window.location.href = "/login";
        //     }
        // }
        // else if (error?.response?.status === 403) {
        //     if (error?.response?.data.message === "Role Invalid") {
        //         window.location.href = "/";
        //     } else if (error.response.data.message === "Token Expired") {
        //         if (localStorage.getItem("rem") === "true") {
        //             axios.post(Config.BASE_URL + "/user/refresh").then(function (res) {
        //                 storeToken(res.data.token).then(function () {
        //                     error.config.headers.Authorization = "Bearer " + res.data.token;
        //                     return axios(error.config);
        //                 });
        //             });
        //         } else {
        //             removeToken();
        //             if (window.location.pathname !== "/login") {
        //                 window.location.href = "/login";
        //             }
        //         }
        //     }
        // } else if (error?.response?.status === 503) {
        //     // System maintenance
        //     window.location.href = "/maintenance";
        // }

        return Promise.reject(error);
    }
);

export default normalAxios;
