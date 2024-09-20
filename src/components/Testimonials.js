import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from '../data';
import styled from "styled-components";

const BackTest = styled.section`
    background-color: #1B1A55;
  color: white;
  height: 100%;
`;

export default function Testimonials() {
  return (
    <section id="testimonials">
      <BackTest>
      <div className="container px-5 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4 hover:animate-gradient" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white hover:animate-gradient mb-12">
          Curriculum Vitae
        </h1>

        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial, index) => (
            <div
              className={`w-full max-w-xl p-4 ${
                testimonials.length > 2 ? "md:w-1/2 lg:w-1/3" : ""
              }`}
              key={index}
            >
              <div className="h-full bg-[#070F2B] bg-opacity-90 p-8 rounded flex flex-col items-center text-justify">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <div className="h-auto overflow-y-auto mb-6">
                  <p className="text-sm">{testimonial.quote}</p>
                </div>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-10 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </BackTest>
    </section>
  );
}