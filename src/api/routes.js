import api from ".";
import {ARTICLES} from "../constants/endpoints";

class Api {
    static getArticles = (limit = 10, offset = 0) => {
        return new Promise((resolve, reject) => {
            resolve(api.get(`/${ARTICLES}?limit=${limit}&offset=${offset}`))
        })
    }
}

export default Api;