import Navigation from "./Navigation";

function Header() {
    return (
        <header className="header-container">
            <div className="header-name">
                <a href={`/`}>@instantcraft</a>
            </div>
            <Navigation></Navigation>
        </header>
    )
}

export default Header;
