import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header-container">
            <div className="header-name">
                <Link to="/">@instantcraft</Link>
            </div>
            <Navigation></Navigation>
        </header>
    );
}

export default Header;
