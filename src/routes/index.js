import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const headerMenuItem = [
    {
        path: "/",
        title: "Home",
        component: Home,
        needToBeLogged: false,
    },
    // {
    //     to: "/",
    //     title: "New Article",
    //     component: null,
    //     needToBeLogged: true,
    // },
    // {
    //     to: "/",
    //     title: "Settings",
    //     component: null,
    //     needToBeLogged: true,
    // },
    {
        path: "/login",
        title: "Sign in",
        component: Login,
        needToBeLogged: false,
    },
    {
        path: "/register",
        title: "Sign up",
        component: Register,
        needToBeLogged: false,
    },
];

export default headerMenuItem;
