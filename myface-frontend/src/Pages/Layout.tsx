import React from "react";
import { Link } from "react-router-dom";

interface LayoutProp {
    children:React.ReactNode;
}

function Layout({children}:LayoutProp){

    return (
        <div className="Layout">

            <nav className="NavBar" >
                <p>My Face </p>
                <Link to="/posts">Posts</Link>
                <Link to="/home">Home</Link>
                <Link to="/users">Users</Link>
            </nav>
            <div className="Main" >
                {children}
            </div>

        <footer className="Footer">
            <p>Footer</p> 
        </footer>

        </div>

    );
}

export default Layout;