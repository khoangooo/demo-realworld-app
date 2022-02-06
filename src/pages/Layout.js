import { useEffect, useState, useRef } from "react";
import { Header, Footer } from "../containers";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
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
    const mountedRef = useRef(false);
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        mountedRef.current = true;
        if (token) {
            api.get(`/${USER}`).then((res) => {
                dispatch(loginAccountWithToken(res.data.user));
                setIsMounted(true);
            });
        } else {
            setIsMounted(true)
        }
        return () => (mountedRef.current = false);
    }, [dispatch]);

    return (
        isMounted && (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    );
}

export default Layout;
