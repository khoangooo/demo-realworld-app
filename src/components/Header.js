import { Link } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";

function Header() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <CustomNavLink className="nav-link" to="/">
              Home
            </CustomNavLink>
          </li>
          {/* <li className="nav-item">
            <CustomNavLink className="nav-link" to="">
              <i className="ion-compose"></i>&nbsp;New Article
            </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink className="nav-link" to="">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </CustomNavLink>
          </li> */}
          <li className="nav-item">
            <CustomNavLink className="nav-link" to="/login">
              Sign in
            </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink className="nav-link" to="/register">
              Sign up
            </CustomNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
