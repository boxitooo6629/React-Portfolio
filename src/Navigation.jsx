import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
    const location = useLocation();

    return (
        <div className="header-navigation">
            <Link
                className={
                    location.pathname.startsWith("/projects") ? "active" : ""
                }
                to={"/projects"}
            >
                Projects
            </Link>
            <Link
                className={
                    location.pathname.startsWith("/contacts") ? "active" : ""
                }
                to={"/contacts"}
            >Contacts</Link>
        </div>
    );
}

export default Navigation;