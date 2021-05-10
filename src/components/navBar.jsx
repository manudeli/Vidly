import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <span style={{ fontSize: 40 }}>📼</span>
      </Link>
      <div className=" navbar-collapse" id="navbarNav">
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
          {!user && (
            <>
              <NavLink className="nav-link" to="/login">
                로그인
              </NavLink>
              <NavLink className="nav-link" to="/register">
                회원가입
              </NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink className="nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-link" to="/logout">
                로그아웃
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
