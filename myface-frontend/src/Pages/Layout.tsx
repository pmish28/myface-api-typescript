import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Layout.scss";

interface LayoutProp {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProp) {
  return (
    <div className="Layout">
      <nav className="NavBar">
        <p className="logo"> My Face </p>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/users">Users</Link>
        </div>
      </nav>
      <div className="Main">{children}</div>

      <footer className="Footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default Layout;
