import React from "react";

function Home() {
    return (
        <div className="home-page">
            <p className="introduction"><span className="emphasis">Hi</span>, my name is <span className="emphasis">Blago.</span></p>
            <span className="avatar-container"><img className="avatar" src="./avatar.jpeg" alt="Me :)"></img></span>
        </div>
    );
}

export default Home;
