import React from 'react';
import Fade from "react-reveal/Fade";
import Card from './Card';
import { Button } from 'react-bootstrap';
import '../styles/work.css';

function Work(props) {
    return (
        <div className="container work-wrapper" id="work">

            <div className="code-wrapper">
                <Fade bottom>
                    <h3>FEATURED PROJECTS</h3>
                    <h1><span id="code-title">I code...</span></h1>
                </Fade>
                
                <Fade bottom cascade>
                    <div className="grid">
                    <Card
                            heading="LiveTogether"
                            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text."
                            imgSrc="/images/maps.png"
                            projectLink=""
                            color="#b4cfa3"
                            font="white"
                            button={
                                <Button style={{ width: '150px'}} className="card-btn" variant="outline-light" target="_blank" >
                                    COMING SOON
                                </Button>
                            }
                            className="project code-card"
                        />

                        <Card
                            heading="Dungeon Exploration"
                            paragraph="Designed and developed a 2D tile-based dungeon exploration game. Features include 
                                        random world generation, keyboard interaction, save and load feature, and an interactive GUI."
                            imgSrc="/images/dungeon.png"
                            projectLink="https://gitlab.com/sooyeonoh/worldgeneration"
                            color="#8092b0"
                            font="white"
                            button={
                                <Button className="card-btn" variant="outline-light" target="_blank" >
                                    EXPLORE
                                </Button>
                            }
                            className="project code-card"
                        />

                        <Card
                            heading="Bear Maps"
                            paragraph="Developed the backend of Google Maps clone for the Berkeley area inspired by Google Maps. 
                                Supports rastering, converting query requests to bit-mapped images, and location lookup."
                            imgSrc="/images/maps.png"
                            projectLink="https://gitlab.com/sooyeonoh/worldgeneration"
                            color="#fff0e4"
                            font="black"
                            button={
                                <Button className="card-btn" variant="outline-dark" target="_blank" >
                                    EXPLORE
                                </Button>
                            }
                            className="project code-card"
                        />

                        <Card
                            heading="NBody Simulation"
                            paragraph="Simulates the motion of N objects on a plane. It draws an animation of 
                                bodies floating and tugging on each other with the power of gravity."
                            imgSrc="/images/nbody.png"
                            projectLink="https://github.com/Berkeley-CS61B-Student/fa20-s515/tree/master/proj0"
                            color="#080841"
                            font="white"
                            button={
                                <Button className="card-btn" variant="outline-light" target="_blank" >
                                    EXPLORE
                                </Button>
                            }
                            className="project code-card"
                        />
                    </div>
                </Fade>
            </div>
            
            <div className="design-wrapper">
                <Fade bottom>
                    <h1><span id="design-title">...and design.</span></h1>
                </Fade>
                
                <Fade bottom cascade>
                    <div className="grid">
                        <Card
                            heading="Launch Service"
                            paragraph="UI/UX & web design for a startup launching web application."
                            imgSrc="/images/launch.png"
                            color="#394ea9"
                            font="white"
                            className="project design-card"
                        />

                        <Card
                            heading="King Pin Donuts"
                            paragraph="UI/UX & web design for a static e-commerce website."
                            imgSrc="/images/donuts.png"
                            projectLink=""
                            color="#8092b0"
                            font="white"
                            className="project design-card"
                        />

                        <Card
                            heading="Astroland"
                            paragraph="Graphic design for a branding package for Astroland, a family entertainment center."
                            imgSrc="/images/astroland.png"
                            projectLink=""
                            color="#243550"
                            font="white"
                            button={
                                <Button className="card-btn" variant="outline-light" target="_blank" >
                                    EXPLORE
                                </Button>
                            }
                            className="project design-card"
                        />

                        <Card
                            heading="This Only Happens Once"
                            paragraph="Publication design for a yearbook with the theme: This Only Happens Once."
                            imgSrc="/images/spread.png"
                            projectLink=""
                            color="#dfe0e2"
                            font="black"
                            button={
                                <Button className="card-btn" variant="outline-dark" target="_blank" >
                                    EXPLORE
                                </Button>
                            }
                            className="project design-card"
                        />
                        
                        {/* {data.designprojects.map((project, index) => (
                            <Card
                            key={index}
                            heading={project.title}
                            paragraph={project.para}
                            imgSrc={project.imageSrc}
                            projectLink=""
                            className="project design-card"
                            color={project.color}
                            font={project.fontColor}
                            />
                        ))} */}
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Work;