// import { ArrowRightIcon } from "@heroicons/react/solid";
// import React from "react";

// export default function Navbar() {
//   return (
//     <header className="bg-gray-800 md:sticky top-0 z-10">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <p className="title-font font-medium text-white mb-4 md:mb-0">
//           <a href="#anotherabout" className="ml-3 text-xl">
//             Marvin's
//           </a>
//         </p>
//         <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
//           <a href="#projects" className="mr-5 hover:text-white">
//             Past Work
//           </a>
//           <a href="#skills" className="mr-5 hover:text-white">
//             Skills
//           </a>
//           <a href="#testimonials" className="mr-5 hover:text-white">
//             Testimonials
//           </a>
//         </nav>
//         <a
//           href="#contact"
//           className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
//           Hire Me
//           <ArrowRightIcon className="w-4 h-4 ml-1" />
//         </a>
//       </div>
//     </header>
//   );
// }
import { ArrowRightIcon, MenuAlt2Icon } from "@heroicons/react/solid";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-medium text-white lg:w-3/5 mx-auto leading-relaxed text-base">
          {/* mb-4 md:mb-0 md:py-1*/}
          <a href="#anotherabout" className="ml-3 text-xl">
            Marvin's
          </a>
        </p>
        {/* md:pl-2 md:border-l flex flex-wrap */}
        <nav className={`md:mr-auto md:ml-4 md:py-1 flex items-center text-base   
justify-center ${isMenuOpen || window.innerWidth < 768 ? 'hidden' : 'flex'}`}>
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>   

        </nav>
        <div className="md:hidden">
          <button
            onClick={handleMenuClick}
            className="inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            <MenuAlt2Icon className="w-6 h-6" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-12 right-0 bg-gray-800 p-4 rounded-lg">
              <a href="#projects" className="block mb-2 hover:text-white">
                Projects
              </a>
              <a href="#skills" className="block mb-2 hover:text-white">
                Skills
              </a>
              <a href="#testimonials" className="block mb-2 hover:text-white">
                Testimonials
              </a>
              <a href="#contact" className="block mb-2 hover:text-white">
                Hire Me
              </a>
            </div>
          )}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}