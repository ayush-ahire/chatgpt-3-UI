import React from 'react';
import gpt3Logo from '../../assets/logo-white.png';
import './footer.css';

const Footer = () => (
    <div className="gpt3__footer section__padding">


        <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <img src={gpt3Logo} alt="gpt3_logo" />
                <p>All Rights Reserved</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Company</h4>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Get in touch</h4>
                <p>09-34532389</p>
                <p>ayu$contact@mail.net</p>
            </div>
        </div>

        <div className="gpt3__footer-copyright">
            <p>@2023 GPT-3. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;