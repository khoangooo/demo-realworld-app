import { Layout } from "./pages";
import { Routes, Route } from "react-router-dom";
import mainRoutes from "./routes";
import { authHOC } from "./utils";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={authHOC(Layout)}>
                {mainRoutes.map((item, index) => {
                    return item.index ? (
                        <Route key={index} index={item.index} element={item.element} />
                    ) : (
                        <Route key={index} path={item.path} element={item.element} />
                    );
                })}
            </Route>
        </Routes>
    );
}

export default App;
