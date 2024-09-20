import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import styled from "styled-components";

const Container = styled.section`
   background-color: #070F2B;
`;

const Hone = styled.section`
  /* Gradient Animation CSS */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Hover Gradient Effect */
h1:hover {
  background: linear-gradient(270deg, #ff6ec4, #7873f5, #1fe4f5, #ff6ec4);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 3s ease infinite;
}
`;


export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <Container>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <Hone>
          <h1 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-white hover:animate-gradient">
            Apps I've Built
          </h1>
          </Hone>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}  // Unique key using project.image
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative h-64 w-full overflow-hidden">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-11/12 h-full object-cover object-center"
                  src={project.image} // Accessing image path from project.image
                  style={{ height: '100%', width: '95%' }} // Same height and width
                />
                <div className="px-2 py-2 relative z-5 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-sm font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-wrap text-sm">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
}