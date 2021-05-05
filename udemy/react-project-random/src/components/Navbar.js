import { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";

import auth from "../auth";

const Navbar = (props) => {
  const authHandler = () => {
    if (auth.isAuthenticated()) {
      auth.logout(() => {
        props.history.push("/");
      });
    } else {
      auth.login(() => {
        props.history.push("/about");
      });
    }
  };

  const authButton = auth.isAuthenticated() ? "Logout" : "Login";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav nav-tabs me-auto">
            <li>
              <NavLink className="nav-item nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <button className="btn btn-success navbar-btn " onClick={authHandler}>
            {authButton}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
