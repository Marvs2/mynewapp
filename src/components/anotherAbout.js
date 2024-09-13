import React, { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import styled from "styled-components";
import image1 from "../images/togame.jpeg";
import image2 from "../images/doit.jpg";
import image3 from "../images/businessman.jpg";
import image4 from "../images/mayor.jpg";



// Define your images in an array
const images = [image1, image2, image3, image4];

const SliderContainer = styled.div`
  padding: 5px 2px;
  background-color: #0a0f24;
  color: white;
`;

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 50px;
  background-color: #0a0f24;
  color: white;
  height: 100vh;

   @media (max-width: 728px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
    }

    @media (min-width: 90%) {
        padding: 100px 100px;
    }
`;

const Content = styled.div`
  flex: 2;
  max-width: 700px;
  text-align: left;
  left: 150px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const Button = styled.a`
  background-color: #ff5e57;
  padding: 12px 24px;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  margin-right: 10px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 728px) {
        width: 100%;
    }
`;

const BackgroundBox = styled.div`
  position: absolute;
  left: 195px;
  right: 37dvh;
  bottom: 4dvh;
  width: 270px;
  height: 410px;
  background-color: blue;
  z-index: 1;
   @media (max-width: 728px) {
        left: 0;
        right: 0;
    }
`;

const BackgroundBox2 = styled.div`
  position: absolute;
  right: 105px;
  left: 41dvh;
  top: 4dvh;
  width: 277px;
  height: 400px;
  background-color: orange;
  z-index: 1;
  @media (max-width: 728px) {
        left: 0;
        right: 0;
    }
`;

const StyledImage = styled.img`
  position: relative;
  left: 12dvh;
  z-index: 2;
  width: 300px;
  height: 400px;
  object-fit: cover;
//   border: 1.5px solid #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
  transition: opacity 0.5s ease;
  @media (max-width: 728px) {
        width: 100%;
        height: auto;
    }

    @media (min-width: 90%) {
        width: 350px;
    }
`;




const AnotherAbout = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (autoSlide) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }
        }, 3000); // Adjust the interval time as needed

        return () => clearInterval(intervalId);
    }, [autoSlide]);
  
    const handleImageClick = () => {
      setAutoSlide(false); // Pause auto-sliding when clicked
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  return (
    <section id="anotherabout">
    <SliderContainer onClick={handleImageClick}>
    <AboutContainer>
      <Content>
        <Title><TypeAnimation
        sequence={[
          "Hi, I'm Marvin! ",
          2000,
          "I'm a Front-End Developer",
          2000,
          "I'm a Back-End Developer",
          2000,
          "I'm a Lead Developer",
          2000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '3rem' }}
      /></Title>
        <Description>I work in the sweet spot for innovation, somewhere between strategy, design, and technology. I love the Web and the work we do.</Description>
        <Button href="#contact">Work With Me</Button>
      </Content>
      <ImageContainer>
        <BackgroundBox />
         <StyledImage src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
         <BackgroundBox2 />
      </ImageContainer>
    </AboutContainer>
    </SliderContainer>
    </section>
  );
};

export default AnotherAbout;
