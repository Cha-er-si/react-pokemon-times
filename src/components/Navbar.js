import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/about");
    }, 2000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Pokemon Times</a>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
