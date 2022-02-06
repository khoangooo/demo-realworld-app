import { NavLink } from "react-router-dom";

function CustomNavLink({
  children,
  to = "",
  className = "nav-link",
  onClick=() => {},
  ...props
}) {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        isActive ? `${className} active` : `${className}`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
