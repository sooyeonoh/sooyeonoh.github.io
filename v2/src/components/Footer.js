import React from 'react';
import '../styles/main/footer.css';

function Footer(props) {
    return (
        <div className="container footer-wrapper">
            <div className="credits">
                <p>Made with
                    <span role="img" aria-label="Emoji"> &nbsp; ❤ &nbsp; </span>
                    by Sooyeon Oh
                </p>
            </div>
            <p>Built using React.</p>
        </div>
    );
}

export default Footer;