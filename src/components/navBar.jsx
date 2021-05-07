import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <span style={{ fontSize: 40 }}>📼</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink className="nav-link" to="/movies">
            영화
          </NavLink>
          <NavLink className="nav-link" to="/customers">
            고객
          </NavLink>
          <NavLink className="nav-link" to="/rentals">
            대여
          </NavLink>
          <NavLink className="nav-link" to="/login">
            로그인
          </NavLink>
          <NavLink className="nav-link" to="/register">
            회원가입
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
