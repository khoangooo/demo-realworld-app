import { NavLink } from "react-router-dom";

function CustomNavLink({
  children,
  to = "",
  className = "nav-link",
  ...props
}) {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        isActive ? `${className} active` : `${className}`
      }
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
