import { Article, Home, Login, Register } from "../pages";

const headerMenuItem = [
    {
        path: "/",
        element: <Home />,
        index: true,
    },
    // {
    //     to: "/",
    //     component: null,
    // },
    // {
    //     to: "/",
    //     component: null,
    // },
    {
        path: "login",
        element: <Login />,
        index: false,
    },
    {
        path: "article/:article_slug",
        element: <Article />,
        index: false,
        title: ""
    },
    {
        path: "register",
        element: <Register />,
        index: false,
    },
];

export default headerMenuItem;
