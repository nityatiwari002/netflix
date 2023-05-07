import React from "react";
import '../components-style/Footer.css';

function FooterLists() {
    return (
        <div className="listContainer">
            <div className="lists">
                <ul>
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Notices</li>
                </ul>
            </div>
            <div className="lists">
                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                </ul>
            </div>
            <div className="lists">
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div className="lists">
                <ul>
                    <li>Media Center</li>
                    <li>Privacy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
}

export default FooterLists;
