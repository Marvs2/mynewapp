import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

// Import your images here
import image1 from "../images/togame.jpeg";
import image2 from "../images/tip.png";
import image3 from "../images/businessman.jpg";
import image4 from "../images/mayor.jpg";

export const projects = [
  {
    title: "React Reserve",
    description: "A full-stack MERN application",
    image: image1,
    link: "https://reactbootcamp.com",
  },
  {
    title: "React Tracks",
    description: "React and Python integration",
    image: image2,
    link: "https://reedbarger.com",
  },
  {
    title: "DevChat",
    description: "Chat application using React and Firebase",
    image: image3,
    link: "https://jsbootcamp.com",
  },
  {
    title: "Epic Todo App",
    description: "To-do list application with React Hooks",
    image: image4,
    link: "https://pythonbootcamp.com",
  },
];

const SliderContainer = styled.div`
  padding: 2px;
  // background-color: #f5f5f5;
  position: relative;
    object-fit: cover;
  justify-content: center;
  align-items: center;
`;

const BackgroundBox = styled.div`
  position: absolute;
  left: 100px;
  right: 45px;
  bottom: 3dvh;
  width: 310px;
  height: 410px;
  background-color: white;
    object-fit: cover;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const SliderItem = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
    cursor: pointer;
`;

const StyledImage = styled.img`
position: relative;
 z-index: 2;
  width: 300px;
  height: 400px;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
`;

const SliderContent = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <SliderItem key={index}>
            <BackgroundBox />
            <StyledImage src={project.image} alt={project.title} />
            <SliderContent>
              <h3 style={{ marginBottom: "6px", fontSize: "1rem" }}>{project.title}</h3>
              <p style={{ marginBottom: "6px", fontSize: "1rem" }}>{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: '#ffcc00', 
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}>
                View Project
              </a>
            </SliderContent>
          </SliderItem>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ImageSlider;
