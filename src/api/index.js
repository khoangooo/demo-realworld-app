import api from "./configApi";
import { ARTICLES, TAGS } from "../constants/endpoints";

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

    static getTags = () => {
        return new Promise((resolve, reject) => {
            resolve(api.get(`/${TAGS}`));
        });
    };
}

export default Api;
