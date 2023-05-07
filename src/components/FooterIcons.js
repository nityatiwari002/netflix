import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import links from "../utilities/links";
import "../components-style/Footer.css";

function FooterIcons() {
    return (
        <div className="icons_bar">
            <a href={links.FaceBook} target="blank" className="icon">
                <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ color: "#ffffff" }}
                />
            </a>
            <a href={links.Instagram} target="blank" className="icon">
                <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#ffffff" }}
                />
            </a>
            <a href={links.Twitter} target="blank" className="icon">
                <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "#ffffff" }}
                />
            </a>
            <a href={links.YouTube} target="blank" className="icon">
                <FontAwesomeIcon
                    icon={faYoutube}
                    style={{ color: "#ffffff" }}
                />
            </a>
        </div>
    );
}

export default FooterIcons;
