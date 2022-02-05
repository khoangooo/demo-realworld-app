import { CustomNavLink } from "../components";
import { useSelector } from "react-redux";

function Header() {
    const user = useSelector((store) => store.login);
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <CustomNavLink className="navbar-brand" to="/">
                    conduit
                </CustomNavLink>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <CustomNavLink to="/">Home</CustomNavLink>
                    </li>
                    {user.isLoggedIn ? (
                        <>
                            <li className="nav-item">
                                <CustomNavLink to="/edit">
                                    <i className="ion-compose"></i>&nbsp;New Article
                                </CustomNavLink>
                            </li>
                            <li className="nav-item">
                                <CustomNavLink to="/settings">
                                    <i className="ion-gear-a"></i>&nbsp;Settings
                                </CustomNavLink>
                            </li>
                            <li className="nav-item">
                                <CustomNavLink to={`/@${user.userAccount.username}`}>
                                    <img
                                        src={user.userAccount.image}
                                        className="user-pic"
                                        alt={user.userAccount.username}
                                    />
                                    &nbsp;{user.userAccount.username}
                                </CustomNavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <CustomNavLink to="/login">Sign in</CustomNavLink>
                            </li>
                            <li className="nav-item">
                                <CustomNavLink to="/register">Sign up</CustomNavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Header;
