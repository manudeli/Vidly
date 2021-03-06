import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <span style={{ fontSize: 40 }}>πΌ</span>
      </Link>
      <div className=" navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink className="nav-link" to="/movies">
            μν
          </NavLink>
          <NavLink className="nav-link" to="/customers">
            κ³ κ°
          </NavLink>
          <NavLink className="nav-link" to="/rentals">
            λμ¬
          </NavLink>
          {!user && (
            <>
              <NavLink className="nav-link" to="/login">
                λ‘κ·ΈμΈ
              </NavLink>
              <NavLink className="nav-link" to="/register">
                νμκ°μ
              </NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink className="nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-link" to="/logout">
                λ‘κ·Έμμ
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
