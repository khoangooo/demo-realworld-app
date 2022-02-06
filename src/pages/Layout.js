import { useEffect } from "react";
import { Header, Footer } from "../containers";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { USER } from "../constants/endpoints";
import axios from "axios";
import { loginAccountWithToken } from "../redux/login/slice";
import { getTokenFromLocalStorage } from "../utils";

const token = getTokenFromLocalStorage();
let api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: token,
    },
});

function Layout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            api.get(`/${USER}`).then((res) => {
                dispatch(loginAccountWithToken(res.data.user))
            });
        }
    }, [dispatch, navigate]);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
