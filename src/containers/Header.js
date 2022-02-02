import { CustomNavLink } from "../components";
import MainMenu from "./MainMenu";

function Header() {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <CustomNavLink className="navbar-brand" to="/">
                    conduit
                </CustomNavLink>
                <MainMenu />
            </div>
        </nav>
    );
}

export default Header;
