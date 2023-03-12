import React from "react";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillPhone,
    AiFillMail,
} from "react-icons/ai";

function ContactsPage() {
    return (
        <div className="contacts-page-container">
            <h1>Contacts</h1>
            <ul className="contacts-page-list">
                <li>
                    <AiFillGithub />
                    <a href="https://github.com/boxitooo6629">@boxitooo6629</a>
                </li>
                <li>
                    <AiFillLinkedin />
                    <a href="https://linkedin.com/in/blago-dishkov-2378b1256">
                        @blago-dishkov
                    </a>
                </li>
                <li>
                    <AiFillPhone />
                    <a href="call:0123232312331">0123232312331</a>
                </li>
                <li>
                    <AiFillMail />
                    <a href="mailto:blago.dishkov@outlook.com">
                        blago.dishkov@outlook.com
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ContactsPage;
