import React, { useCallback, useState }  from 'react';
import '../components-style/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import links from '../utilities/links';
// import {icon} from '@fortawesome/fontawesome-svg-core'
// import  from '@fortawesome/free-solid-svg-icons'
// import {faFacebookF} from '@fortawesome/free-regular-svg-icons'

function Footer() {
    const [showCode, setVisible] = useState(false);
    const displayCode = useCallback(() => setVisible(true), []);
    return (
        <div className='footer'>
            <div className='icons_bar'>
                <a href={links.FaceBook} target='blank' className='icon'><FontAwesomeIcon icon={faFacebookF} style={{color: "#ffffff",}} /></a>
                <a href={links.Instagram} target='blank' className='icon'><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
                <a href={links.Twitter} target="blank" className='icon'><FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} /></a>
                <a href={links.YouTube} target="blank" className='icon'><FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}} /></a>

            </div>
            <div className='listContainer'>
                <div className='lists'>
                    <ul>
                        <li>Audio Description</li>
                        <li>Investor Relations</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
                <div className='lists'>
                    <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                    </ul>
                </div>
                <div className='lists'>
                    <ul>
                        <li>Gift Cards</li>
                        <li>Terms of Use</li>
                        <li>Corporate Information</li>
                    </ul>
                </div>
                <div className='lists'>
                    <ul>
                        <li>Media Center</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            {showCode ? (<button className='service-code' onClick={displayCode}>971 - 919</button>) : (<button className='service-code' onClick={displayCode}>Service Code</button>)}
            
            <div className='copyright'>&copy; Netflix, Inc</div>
        </div>
    )
}

export default Footer;
