import { useEffect } from "react";
import { Header, Footer } from "../containers";
import { Outlet } from "react-router-dom";

function Layout({title}) {
    
    useEffect(() => {
        document.title = title
    })

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
