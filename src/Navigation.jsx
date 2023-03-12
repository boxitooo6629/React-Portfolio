import React from "react";
import { useLocation } from "react-router-dom";

function Navigation() {
    const location = useLocation();

    return (
        <div className="header-navigation">
            <a
                className={
                    location.pathname.startsWith("/projects") ? "active" : ""
                }
                href={`/projects`}
            >
                Projects
            </a>
            <a
                className={
                    location.pathname.startsWith("/contacts") ? "active" : ""
                }
                href={`/contacts`}
            >
                Contacts
            </a>
        </div>
    );
}

export default Navigation;
