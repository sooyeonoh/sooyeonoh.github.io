var data = {

  // Work Section --------------------------

    workData: [
      {
          title: 'Software Engineering Intern',
          company: 'MongoDB',
          season: 'summer',
          year: '2022',
          points: [
          ],
          color: '#007bff',
      },

      {
          title: 'Software Engineering Intern',
          company: 'Lyft',
          season: 'winter',
          year: '2022',
          points: [
            'Built an end-to-end acceptance test for critical user flow processes',
            'Designed a solution for optimizing refund failures with the goal to boost success rate for refunds by 40%',
            'Utilized data visualization tools to debug and monitor performance'
        ],
          color: '#ffc107',
      },

      {
          title: 'Software Engineering Intern',
          company: 'Thermo Fisher Scientific',
          season: 'summer',
          year: '2021',
          points: [
              'Created a web app MVP that connects to a camera and performs live cell detection on the browser using deep learning',
              'Improved image rendering speed 4-5x by using optimization techniques',
              'Cloned an existing desktop app to a web app using Blazor as a proof of concept'
          ],
          color: '#dc3545'
      },
      {
          title: 'Computer Science Fellow',
          company: 'Edlyft',
          season: 'summer',
          year: '2021',
          points: [
              'Led conceptual review and exam prep sessions for UC Berkeley students taking Machine Structures course',
              'Developed frontend components for student portal website using React',
              'Face bi-weekly performance reviews and effectively incorporated critiques from team'
          ],
          color: '#007bff'
      }
  ],

  // Projects Section --------------------------

  codeprojects: [
    {
      title: "LiveTogether",
      para:
      "Web application that provides a centralized platform for housemates to interact and reduce conflicts. Task assignment and grocery list building are some features.",
      imageSrc:
      "/images/livetogether.png",
      url: "https://github.com/sooyeonoh/LiveTogether",
      color: "#b4cfa3",
      fontColor: "white",
      buttonColor: "outline-light"
    },
    {
      title: "Dungeon Escape",
      para:
        "Designed and developed a 2D tile-based dungeon exploration game. Features include random world generation, keyboard interaction, save and load feature, and an interactive GUI.",
      imageSrc:
        "/images/dungeon.png",
      url: "https://gitlab.com/sooyeonoh/worldgeneration",
      color: "#8092b0",
      fontColor: "white",
      buttonColor: "outline-light"
    },
    {
      title: "Bear Maps",
      para:
        "Developed the backend of Google Maps clone for the Berkeley area inspired by Google Maps. Supports rastering, converting query requests to bit-mapped images, and location lookup.", 
      imageSrc:
        "/images/maps.png",
      url: "https://gitlab.com/sooyeonoh/bearmaps",
      color: "#fff0e4",
      fontColor: "black",
      buttonColor: "outline-dark"
    },
    {
      title: "NBody Simulation",
      para:
        "Simulates the motion of N objects on a plane. It draws an animation of bodies floating and tugging on each other with the power of gravity.", 
      imageSrc:
        "/images/nbody.png",
      url: "https://github.com/Berkeley-CS61B-Student/fa20-s515/tree/master/proj0",
      color: "#080841",
      fontColor: "white",
      buttonColor: "outline-light"
    }
  ],

  designprojects: [
    {
      title: "Launch Service",
      para:
        "UI/UX & web design for a startup launching web application.",
      imageSrc:
        "/images/launch.png",
      color: "#394ea9",
      fontColor: "white",
      explore: false
    },
    {
      title: "King Pin Donuts",
      para:
        "UI/UX & web design for a static e-commerce website.",
      imageSrc:
        "/images/donuts.png",
      color: "#e4c3ab",
      fontColor: "white",
      explore: false
    },
    {
      title: "Astroland",
      para:
        "Graphic design for a branding package for Astroland, a family entertainment center.", 
      imageSrc:
        "/images/astroland.png",
      url: "/",
      color: "#243550",
      fontColor: "white",
      buttonColor: "outline-light",
      explore: true
    },
    {
      title: "This Only Happens Once",
      para:
        "Publication design for a yearbook with the theme: This Only Happens Once.", 
      imageSrc:
        "/images/spread.png",
      url: "/",
      color: "#dfe0e2",
      fontColor: "black",
      buttonColor: "outline-dark",
      explore: true
    }
  ],

  // Skills Section --------------------------

  skills: {
        programming: [
            {
                img: "https://img.icons8.com/material-outlined/50/000000/java-coffee-cup-logo.png",
                para:
                  "Java",
              },
              {
                img: "https://img.icons8.com/ios/50/000000/python--v1.png",
                para:
                  "Python",
              },
              {
                img: "https://img.icons8.com/dotty/50/000000/c.png",
                para:
                  "C",
              },
              {
                img: "https://img.icons8.com/ios/50/000000/javascript--v1.png",
                para:
                  "Javascript",
              }
        ],
        webdev: [
            {
                img: "https://img.icons8.com/ios/50/000000/html-5--v2.png",
                para:
                  "HTML",
              },
              {
                img: "https://img.icons8.com/ios/50/000000/css3.png",
                para:
                  "CSS",
              },
              {
                img: "https://img.icons8.com/windows/50/000000/node-js.png",
                para:
                  "Node.JS",
              },
              {
                img: "https://img.icons8.com/ios/50/000000/react-native--v1.png",
                para:
                  "React",
              },
          ],
          design: [
            {
                img: "https://img.icons8.com/ios/50/000000/adobe-logo.png",
                para:
                  "Adobe Suite",
              },
            {
                img: "https://img.icons8.com/ios/50/000000/figma--v1.png",
                para:
                  "Figma",
            }
          ]
    }

  // End Skills Section --------------------------

}

export default data;