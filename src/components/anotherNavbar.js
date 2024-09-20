import React from 'react';
import styled from "styled-components";

const Navigation = styled.nav`
    display: flex;
    width: 500px;
`;

const Unordered = styled.ul`
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
`;

const Ordered = styled.li`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
`;

export default function AnotherNavbar () {
  return (
    <Navigation>
    <nav className='flex w-1/2'>
     <Unordered>
      <ul>
        <Ordered>
        <li>
          <a href="#anotherabout">
            <div className="icon">{/* Your icon here */}</div>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#skills">
            <div className="icon">{/* Your icon here */}</div>
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#projects">
            <div className="icon">{/* Your icon here */}</div>
            <span>Services</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <div className="icon">{/* Your icon here */}</div>
            <span>Contact</span>
          </a>
        </li>
        </Ordered>
      </ul>
      </Unordered>
    </nav>
    </Navigation>
  );
};
