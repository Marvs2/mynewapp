import React, { useState } from "react";
import styled from "styled-components";

// Import your images here
import image1 from "../images/togame.jpeg";
import image2 from "../images/doit.jpg";
import image3 from "../images/businessman.jpg";
import image4 from "../images/mayor.jpg";

// Define your images in an array
const images = [image1, image2, image3, image4];

const SliderContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background-color: #f5f5f5;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
  border-radius: 15px;
  transition: opacity 0.5s ease;
`;

const ImageToggle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <SliderContainer onClick={handleImageClick}>
      <StyledImage src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
    </SliderContainer>
  );
};

export default ImageToggle;
