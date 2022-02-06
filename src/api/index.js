import normalAxios from "./configApi";
import { ARTICLES, TAGS, COMMENTS, USERS, LOGIN, USER, PROFILES, FEED } from "../constants/endpoints";

class Api {
    static getArticles = (params = {}) => {
        let queryString = `limit=${params.limit || 10}&offset=${params.offset || 0}`;
        if (params.tag) {
            queryString += `&tag=${params.tag}`;
        }

        return new Promise((resolve, reject) => {
            resolve(normalAxios.get(`/${ARTICLES}?${queryString}`));
        });
    };

    static getArticle = (slug = "") => {
        return new Promise((resolve, reject) => {
            resolve(normalAxios.get(`/${ARTICLES}/${slug}`));
        });
    };

    static getYourArticles = (params = {}) => {
        let queryString = `limit=${params.limit || 10}&offset=${params.offset || 0}`;
        if (params.tag) {
            queryString += `&tag=${params.tag}`;
        }

        return new Promise((resolve, reject) => {
            resolve(normalAxios.get(`/${ARTICLES}/${FEED}?${queryString}`));
        });
    };

    static getComments = (slug = "") => {
        return new Promise((resolve, reject) => {
            resolve(normalAxios.get(`/${ARTICLES}/${slug}/${COMMENTS}`));
        });
    };

    static getTags = () => {
        return new Promise((resolve, reject) => {
            resolve(normalAxios.get(`/${TAGS}`));
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
            resolve(normalAxios.post(`/${USERS}/${LOGIN}`, { user: dataSubmit }));
        });
    };

    static registerAccount = (dataSubmit = {}) => {
        return new Promise((resolve, reject) => {
            resolve(normalAxios.post(`/${USERS}`, { user: dataSubmit }));
        });
    };

    static createNewArticle = (dataSubmit = {}) => {
        return new Promise((resolve, reject) => {
            resolve(normalAxios.post(`/${ARTICLES}`, { article: dataSubmit }));
        });
    };

    static updateArticle = (slug = "", dataSubmit = {}) => {
        return new Promise((resolve, reject) => {
            resolve(normalAxios.put(`/${ARTICLES}/${slug}`, { article: dataSubmit }));
        });
    };

    static deleteArticle = (slug = "") => {
        return new Promise((resolve, reject) => {
            resolve(normalAxios.delete(`/${ARTICLES}/${slug}`));
        });
    };

    static updateUserProfile = (dataSubmit = {}) => {
        return new Promise((resolve, reject) => {
            resolve(normalAxios.put(`/${USER}`, { user: dataSubmit }));
        });
    };

    static getUserProfile = (username = "") => {
        return new Promise((resolve, reject) => {
            resolve(normalAxios.get(`/${PROFILES}/${username}`));
        });
    };

    static createNewUser = (dataSubmit = {}) => {
        return new Promise((resolve, reject) => {
            resolve(normalAxios.post(`/${USERS}`, { user: dataSubmit }));
        });
    };

    static createNewComment = (slug, dataSubmit = {}) => {
        return new Promise((resolve, reject) => {
            resolve(normalAxios.post(`/${ARTICLES}/${slug}/${COMMENTS}`, { comment: dataSubmit }));
        });
    };
    static deleteComment = (slug, comment_id) => {
        return new Promise((resolve, reject) => {
            resolve(normalAxios.delete(`/${ARTICLES}/${slug}/${COMMENTS}/${comment_id}`));
        });
    };
}

export default Api;
