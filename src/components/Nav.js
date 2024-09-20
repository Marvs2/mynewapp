// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Nav = () => {
//   // State to manage the navbar's visibility
//   const [nav, setNav] = useState(false);

//   // Toggle function to handle the navbar's display
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   // Array containing navigation items
//   const navItems = [
//     { id: 1, text: 'Home' },
//     { id: 2, text: 'Company' },
//     { id: 3, text: 'Resources' },
//     { id: 4, text: 'About' },
//     { id: 5, text: 'Contact' },
//   ];

//   return (
//     <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
//       {/* Logo */}
//       <h1 className='w-full text-3xl font-bold text-[#ffffff]'><a href="#anotherabout" className="ml-3 text-2xl text-[#00df9a] hover:animate-gradient">
//             VINMAR
//           </a></h1>

//       {/* Desktop Navigation */}
//       <ul className='hidden md:flex'>
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
//             : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
//         }
//       >
//         {/* Mobile Logo */}
//         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

//         {/* Mobile Navigation Items */}
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Nav;

// import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import styled from "styled-components";

// Gradient animation using styled-components
const Link = styled.section`
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

   background: linear-gradient(to bottom, #000000, #0a0f24);  // Black to slight black gradient
  color: white;

  a:hover {
    font-weight: bold;
    line-height: 1.2;
    background: linear-gradient(270deg, #ff6ec4, #7873f5, #1fe4f5, #ff6ec4);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientAnimation 3s linear infinite;
  }
`;

const Nav = () => {

//   const [nav, setNav] = useState
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 1, text: 'Projects', link: '#projects' },
    { id: 2, text: 'Skills', link: '#skills' },
    { id: 3, text: 'About', link: '#testimonials' },
    { id: 4, text: 'Contact', link: '#contact' },
  ];

  return (
      <Link>
        <div className="container mx-auto flex flex-wrap p-4 h-24 flex-col md:flex-row items-center">
          {/* Logo */}
          <h1 className="w-full text-3xl font-bold text-[#ffffff] lg:w-auto p-2">
            <a href="#anotherabout" className="ml-3 text-2xl hover:animate-gradient">
              VINMAR
            </a>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:mr-2 md:ml-auto"> {/* if you want the navItems in left like in Vinmar text them {md:ml-6 md:mr-auto}*/}
            {navItems.map(item => (
              <a
                key={item.id}
                href={item.link}
                className="mr-8 p-4 hover:bg-[#141199] rounded-xl m-2 cursor-pointer duration-300 hover:text-white"
              >
                {item.text}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Icon */}
          <div onClick={handleMenuClick} className="block md:hidden ml-auto m-3 p-1">
            {isMenuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>

          {/* Mobile Navigation Menu */}
        {/* Just put here the needed burger */}

          {isMenuOpen && (
            <div className="absolute right-12 left-0 top-0 w-[93%] p-6 h-17 bg-[#0a0f24] border-r border-r-gray-900 ease-in-out duration-500 rounded-lg md:hidden">
                 <h1 className="w-full text-3xl font-bold text-[#f7f7f8] lg:w-auto mb-3">
            <a href="#anotherabout" className="ml-3 text-2xl hover:animate-gradient">
              VINMAR
            </a>
          </h1>

              {navItems.map(item => (
                <a
                  key={item.id}
                  href={item.link}absolute
                  className="block mb-1 text-lg p-3 hover:bg-[#070F2B] rounded-xl hover:text-black"
                >
                  {item.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </Link>
  );
};

export default Nav;
