import { Article, Home, Login, Register, CreateOrEditArticle, Settings, Profile } from "../pages";

const headerMenuItem = [
    {
        path: "/",
        element: <Home />,
        index: true,
    },
    {
        path: "login",
        element: <Login />,
        index: false,
    },
    {
        path: "article/:article_slug",
        element: <Article />,
        index: false,
    },
    {
        path: "register",
        element: <Register />,
        index: false,
    },
    {
        path: "editor/",
        element: <CreateOrEditArticle />,
        index: false,
    },
    {
        path: "editor/:article_slug",
        element: <CreateOrEditArticle />,
        index: false,
    },
    {
        path: "settings",
        element: <Settings />,
        index: false,
    },
    {
        path: ":username",
        element: <Profile />,
        index: false,
    }
];

export default headerMenuItem;
