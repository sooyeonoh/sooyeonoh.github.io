import React from 'react';
import '../styles/main/work.css';

function Card(props) {
    return (
        <div className={props.className}>
            <img src={props.imgSrc} alt="Project"/>
            <span className="img-background" style={{backgroundColor: props.color}}></span>
            <div className="content" style={{backgroundColor: props.color, color: props.font}}>
                <h4 className="header">{props.heading}</h4>
                <p className="text">{props.paragraph}</p>
                {props.button}
            </div>
        </div>
    );
}

export default Card;