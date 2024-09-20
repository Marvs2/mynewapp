import { ArrowRightIcon, MenuAlt2Icon } from "@heroicons/react/solid";
import React, { useState } from "react";
import styled from "styled-components";

const Link = styled.section`
  /* Gradient Animation CSS */
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
    background-position: 100% 50%;
  }
    100% {
      background-position: 100% 50%;
    }
  }

   background-color: #0a0f24;
  color: white;

  a:hover {
    // font-size: 1.75rem;
    font-weight: bold;
    line-height: 1.2;
    background: linear-gradient(270deg, #ff6ec4, #7873f5, #1fe4f5, #ff6ec4);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientAnimation 3s linear infinite;  // Animate from left to right
  }
`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent md:sticky top-0 z-10">
      <Link>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-medium text-white lg:w-3/5 mx-auto leading-relaxed text-base">
          {/* mb-4 md:mb-0 md:py-1*/}
          
          <a href="#anotherabout" className="ml-3 text-2xl text-[#00df9a] hover:animate-gradient">
            VINMAR
          </a>
        </p>
        {/* md:pl-2 md:border-l flex flex-wrap */}
        <nav className={`md:mr-auto md:ml-3 md:py-5 flex items-center text-base   
justify-center ${isMenuOpen || window.innerWidth < 768 ? 'hidden' : 'flex'}`}>
          <a href="#projects" className="mr-5 hover:text-white hover:animate-gradient">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white hover:animate-gradient">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white hover:animate-gradient">
            About!
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
              <a href="#projects" className="block mb-2 hover:text-white hover:animate-gradient">
                Projects
              </a>
              <a href="#skills" className="block mb-2 hover:text-white hover:animate-gradient">
                Skills
              </a>
              <a href="#testimonials" className="block mb-2 hover:text-white hover:animate-gradient">
                About ME
              </a>
              <a href="#contact" className="block mb-2 hover:text-white hover:animate-gradient">
              Contact me
              </a>
            </div>
          )}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:animate-gradient rounded text-base mt-4 md:mt-0"
        >
          Contact me
          <ArrowRightIcon className="w-3 h-3 ml-1" />
        </a>
      </div>
      </Link>
    </header>
  );
}



// // import { ArrowRightIcon, MenuAlt2Icon } from "@heroicons/react/solid";
// import React, { useState } from "react";
// import styled from "styled-components";

// const Link = styled.section`
//   /* Gradient Animation CSS */
//   @keyframes gradientAnimation {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//     background-position: 100% 50%;
//   }
//     100% {
//       background-position: 100% 50%;
//     }
//   }

//    background-color: #0a0f24;
//   color: white;

//   a:hover {
//     // font-size: 1.75rem;
//     font-weight: bold;
//     line-height: 1.2;
//     background: linear-gradient(270deg, #ff6ec4, #7873f5, #1fe4f5, #ff6ec4);
//     background-size: 200% 200%;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     animation: gradientAnimation 3s linear infinite;  // Animate from left to right
//   }
// `;

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-transparent md:absolute top-0 z-10">
//       <Link>
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <p className="title-font font-medium text-white lg:w-3/5 mx-auto leading-relaxed text-base">
//           {/* mb-4 md:mb-0 md:py-1*/}
          
//           <a href="#anotherabout" className="ml-3 text-2xl text-white hover:animate-gradient">
//             <span className="inline-block">
//               VINMAR
//             <div className="absolute top-0 right-0">
//                   <button
//                     onClick={handleMenuClick}
//                     className="inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
//                   >
//                     <MenuAlt2Icon className="w-6 h-6" />
//                   </button>
//                   {isMenuOpen && (
//                     <div className="absolute top-12 right-0 bg-gray-800 p-4 rounded-lg  text-white hover:animate-gradient">
//                       <a href="#projects" className="block mb-1 hover:text-white hover:animate-gradient">
//                         Projects
//                       </a>
//                       <a href="#skills" className="block mb-1 hover:text-white hover:animate-gradient">
//                         Skills
//                       </a>
//                       <a href="#testimonials" className="block mb-1 hover:text-white hover:animate-gradient">
//                         About ME
//                       </a>
//                       <a href="#contact" className="block mb-1 hover:text-white hover:animate-gradient">
//                         Hire Me
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               </span>
//           </a>
//         </p>
//         {/* md:pl-2 md:border-l flex flex-wrap */}
//         <nav className={`md:mr-auto md:ml-3 md:py-1 flex items-center text-base   
// justify-center ${isMenuOpen || window.innerWidth < 768 ? 'hidden' : 'flex'}`}>
//           <a href="#projects" className="mr-5 hover:text-white hover:animate-gradient">
//             Projects
//           </a>
//           <a href="#skills" className="mr-5 hover:text-white hover:animate-gradient">
//             Skills
//           </a>
//           <a href="#testimonials" className="mr-5 hover:text-white hover:animate-gradient">
//             About!
//           </a>   

//         </nav>
//         <a
//           href="#contact"
//           className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:animate-gradient rounded text-base mt-4 md:mt-0"
//         >
//           Contact me
//           <ArrowRightIcon className="w-3 h-3 ml-1" />
//         </a>
//       </div>
//       </Link>
//     </header>
//   );
// }