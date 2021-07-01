import React from 'react';
import '../styles/footer.css';

function Footer(props) {
    return (
        <div className="container footer-wrapper">
            <div className="credits">
                <p>Made with
                    <span role="img" aria-label="Emoji"> &nbsp; ❤ &nbsp; </span>
                    by Sooyeon Oh.
                </p>
            </div>
            <p>Inspired by Brittany Chiang & Chetan Verma.</p>
        </div>
    );
}

export default Footer;