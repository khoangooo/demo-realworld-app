import { CustomNavLink } from "../components";

function MainMenu() {
    return (
        <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
                <CustomNavLink to="/">Home</CustomNavLink>
            </li>
            <li className="nav-item">
                <CustomNavLink to="/login">Sign in</CustomNavLink>
            </li>
            <li className="nav-item">
                <CustomNavLink to="/register">Sign up</CustomNavLink>
            </li>
        </ul>
    );
}

export default MainMenu;
