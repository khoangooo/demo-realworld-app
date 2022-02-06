import api from "../api/configApi";

export function storeTokenToLocalStorage(token) {
    localStorage.setItem("token", JSON.stringify(token));
}

export function getTokenFromLocalStorage() {
    let token = JSON.parse(localStorage.getItem("token"));
    return token ? `Token ${token}` : "";
}

export function removeToken() {
    localStorage.clear();
}

export function authHOC(BaseComponent) {
    function Restricted(props) {
        const token = getTokenFromLocalStorage();
        const isLoggedIn = !!token;
        if (isLoggedIn) {
            if (window.location.pathname === "/login" || window.location.pathname === "/register") {
                window.location.pathname = "/"
                return null;
            }
            api.defaults.headers.common["Authorization"] = token;
        }
        return <BaseComponent {...props} />;
    }
    return Restricted();
}
