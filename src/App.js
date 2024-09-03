// import React from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// import Click from "./components/Click";
// import Profile from "./components/Profile";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/profile">Profile</Link>
//               </li>
//             </ul>
//           </nav>
//           <Routes>
//           <Route path="/" element={
//               <>
//                 <p>
//                   Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                   className="App-link"
//                   href="https://reactjs.org"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Learn React
//                 </a>
//                 <Click />
//               </>
//             } />
//           </Routes>
//           </header>
//           <main>
//             <Routes>
//             <Route path="/profile" element={<Profile />} />
//             </Routes>
//           </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
// import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
// import NewAbout from "./components/NewAbout";
import AnotherAbout from "./components/anotherAbout";


// import Click from "./components/Click";
// import Counter from "./components/Counter";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* <Click />
      <Counter /> */}
      <Navbar />
      {/* <About /> */}
      {/* <NewAbout/> */}
      <AnotherAbout />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}