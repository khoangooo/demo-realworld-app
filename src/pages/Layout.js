import { Header, Footer} from "../containers";
import { Routes, Route } from "react-router-dom";
import mainRoutes from "../routes";

function Layout() {
    return (
        <>
            <Header />
            <Routes>
                <Route>
                    {mainRoutes.map((item, index) => (
                        <Route key={index} path={item.path} element={<item.component />} />
                    ))}
                </Route>
            </Routes>
            <Footer />
        </>
    );
}

export default Layout;
