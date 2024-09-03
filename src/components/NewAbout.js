import React from "react";
import styled from "styled-components";
import togame from "../images/togame.jpeg";

const AboutContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  clip-path: ellipse(120% 100% at 50% 0%);
`;

const Content = styled.div`
  z-index: 2;
  text-align: left;
  color: white;
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
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
  position: absolute;
  right: 0;
  bottom: -50px;
  z-index: 1;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  clip-path: ellipse(50% 75% at 50% 50%);
`;

export default function NewAbout() {
  return (
    <AboutContainer>
      <Content>
        <Title>Hi, I'm Marvs.</Title>
        <Description>I love to build amazing apps.</Description>
        <Button href="#contact">Work With Me</Button>
        <Button href="#projects">See My Past Work</Button>
      </Content>
      <ImageContainer>
        <StyledImage src={togame} alt="Marvs" />
      </ImageContainer>
    </AboutContainer>
  );
}
