import React from 'react';
import Fade from "react-reveal/Fade";
import '../styles/main/work.css';
import data from '../data.js';

function Work(props) {
    return (
        <div className="work-wrapper" id="work">
            <Fade bottom>
                <h3>WORK</h3>
                <h1><span>Here's what I've been up to.</span></h1>
            </Fade>
            <Fade bottom cascade>
                <div className="work-grid">
                    {(data.workData).map((item, index) => (
                        <div className="work" key={index}>
                            <div className="work-dot-container" style={{backgroundColor: item.color}}>
                                {/* <span style={{backgroundColor: item.color}}></span> */}
                                <p style={{position: 'absolute', color: 'white'}}><span style={{fontSize: '16px'}}>{item.year}</span><br></br>{item.season}</p>
                            </div>
                            <div className="work-text-container">
                                <p style={{textTransform: 'uppercase', fontSize: '16px', color: item.color, fontWeight: '600', paddingBottom: '0.5rem'}}>{item.company}</p>
                                <h4 style={{fontSize: '18px'}}>{item.title}</h4>
                                <ul>
                                    {(item.points).map((p, index) => (
                                        <li key={index} style={{fontSize: '15px', listStyleType: 'circle'}}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    );
}

export default Work;