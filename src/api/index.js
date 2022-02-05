import api from "./configApi";
import { ARTICLES, TAGS, COMMENTS, USERS, LOGIN } from "../constants/endpoints";

class Api {
    static getArticles = (params) => {
        let queryString = `limit=${params.limit || 10}&offset=${params.offset || 0}`;
        if (params.tag) {
            queryString += `&tag=${params.tag}`;
        }

        return new Promise((resolve, reject) => {
            resolve(api.get(`/${ARTICLES}?${queryString}`));
        });
    };

    static getArticle = (slug) => {
        return new Promise((resolve, reject) => {
            resolve(api.get(`/${ARTICLES}/${slug}`));
        });
    };

    static getComments = (slug) => {
        return new Promise((resolve, reject) => {
            resolve(api.get(`/${ARTICLES}/${slug}/${COMMENTS}`));
        });
    };

    static getTags = () => {
        return new Promise((resolve, reject) => {
            resolve(api.get(`/${TAGS}`));
        });
    };

    static loginAccount = (dataSubmit = {}) => {
        return new Promise((resolve, reject) => {
            if (!("email" in dataSubmit)) {
                reject(console.log("email required"));
            }
            if (!("password" in dataSubmit)) {
                reject(console.log("password required"));
            }
            if (!dataSubmit.email && !dataSubmit.password) {
                reject(console.log("email or password was wrong"));
            }
            resolve(api.post(`/${USERS}/${LOGIN}`, { user: dataSubmit }));
        });
    };

    static registerAccount = (dataSubmit = {}) => {
        return new Promise((resolve, reject) => {
            resolve(api.post(`/${USERS}`, { user: dataSubmit }));
        });
    };
}

export default Api;
