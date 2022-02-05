export function storeTokenToLocalStorage(token) {
    localStorage.setItem("token", JSON.stringify(token));
}

export function getTokenFromLocalStorage() {
    let token = JSON.parse(localStorage.getItem("token"))
    if (token) {
        return `Token ${token}`;
    }
    return;
}

export function removeToken() {
    localStorage.removeItem("token")
}
