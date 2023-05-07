import React, { useCallback, useState } from "react";
import "../components-style/Footer.css";
import FooterIcons from "./FooterIcons";
import FooterLists from "./FooterLists";

function Footer() {
    const [showCode, setVisible] = useState(false);
    const displayCode = useCallback(() => setVisible(true), []);
    return (
        <div className="footer">
            <FooterIcons/>
            <FooterLists/>
            {showCode ? (
                <button className="service-code" onClick={displayCode}>
                    971 - 919
                </button>
            ) : (
                <button className="service-code" onClick={displayCode}>
                    Service Code
                </button>
            )}

            <div className="copyright">&copy; Netflix, Inc</div>
        </div>
    );
}

export default Footer;
