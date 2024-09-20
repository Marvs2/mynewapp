// // import React, { useState } from "react";
// // import styled from "styled-components";
// // import image1 from "../images/togame.jpeg";
// // import image2 from "../images/doit.jpg";
// // import image3 from "../images/businessman.jpg";
// // import image4 from "../images/mayor.jpg";

// // // Define your images in an array
// // const images = [image1, image2, image3, image4];

// // const Container = styled.div`
// //   position: relative;
// //   width: 360px;
// //   height: 640px;
// //   margin-top: 150px;
// //   background: rgba(0, 0, 0, 0);
// //   transform: rotate(-30deg) skew(25deg) scale(0.8);
// //   transition: 0.5s;
// //   &:hover img:nth-child(4) {
// //     transform: translate(160px, -160px);
// //     opacity: 1;
// //   }
// //   &:hover img:nth-child(3) {
// //     transform: translate(120px, -120px);
// //     opacity: 0.8;
// //   }
// //   &:hover img:nth-child(2) {
// //     transform: translate(80px, -80px);
// //     opacity: 0.6;
// //   }
// //   &:hover img:nth-child(1) {
// //     transform: translate(40px, -40px);
// //     opacity: 0.4;
// //   }
// // `;

// // const Image = styled.img`
// //   position: absolute;
// //   width: 100%;
// //   height: 100%;
// //   transition: transform 0.5s, opacity 0.5s;
// //   backface-visibility: hidden;
// // `;

// // const ImageFlicker = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const handleClick = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //   };

// //   return (
// //     <Container onClick={handleClick}>
// //       {images.map((img, index) => (
// //         <Image
// //           key={index}
// //           src={img}
// //           alt={`Image ${index + 1}`}
// //           style={{
// //             transform: `translateZ(${index * 20}px)`, // Adjust Z-axis translation for stacking
// //             opacity: index === currentIndex ? 1 : 0,
// //           }}
// //         />
// //       ))}
// //     </Container>
// //   );
// // };

// // export default ImageFlicker;
// import React, { useState } from "react";
// import styled from "styled-components";
// import image1 from "../images/togame.jpeg";
// import image2 from "../images/doit.jpg";
// import image3 from "../images/businessman.jpg";
// import image4 from "../images/mayor.jpg";

// // Define your images in an array
// const images = [image1, image2, image3, image4];

// const Container = styled.div`
//   position: relative;
//   width: 360px;
//   height: 640px;
//   margin-top: 150px;
//   background: rgba(0, 0, 0, 0);
//   transform: rotate(-30deg) skew(25deg) scale(0.8);
//   transition: 0.5s;
  
//   // Hover effect: stack images with reduced opacity
//   &:hover img:nth-child(4) {
//     transform: translate(160px, -160px);
//     opacity: 1;
//   }
//   &:hover img:nth-child(3) {
//     transform: translate(120px, -120px);
//     opacity: 0.8;
//   }
//   &:hover img:nth-child(2) {
//     transform: translate(80px, -80px);
//     opacity: 0.6;
//   }
//   &:hover img:nth-child(1) {
//     transform: translate(40px, -40px);
//     opacity: 0.4;
//   }
// `;

// const Image = styled.img`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   transition: transform 0.5s, opacity 0.5s;
//   backface-visibility: hidden;
// `;

// const ImageFlicker = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <Container onClick={handleClick}>
//       {images.map((img, index) => (
//         <Image
//           key={index}
//           src={img}
//           alt={`Image ${index + 1}`}
//           style={{
//             transform: `translateZ(${index * 20}px)`, // Adjust Z-axis translation for stacking
//             opacity: index === currentIndex ? 1 : 0,  // Display only the current image
//           }}
//         />
//       ))}
//     </Container>
//   );
// };

// export default ImageFlicker;



import React, { useState } from "react";
import styled from "styled-components";
import image1 from "../images/togame.jpeg";
import image2 from "../images/doit.jpg";
import image3 from "../images/businessman.jpg";
import image4 from "../images/mayor.jpg";

// Define your images in an array
const initialImages = [image1, image2, image3, image4];

const Container = styled.div`
  position: relative;
  width: 360px;
  height: 640px;
  margin-top: 150px;
  background: rgba(0, 0, 0, 0);
  transform: rotate(0deg) skew(0deg) scale(0.8);
  transition: 0.5s;

  &:hover img:nth-child(4) {
    transform: translate(160px, -160px);
    opacity: 1;
  }

  &:hover img:nth-child(3) {
    transform: translate(120px, -120px);
    opacity: 0.8;
  }

  &:hover img:nth-child(2) {
    transform: translate(80px, -80px);
    opacity: 0.4;
  }

  &:hover img:nth-child(1) {
    transform: translate(40px, -40px);
    opacity: 0.2;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 1s, opacity 0.2s;
  backface-visibility: hidden;
  //new
  transform: ${({ active }) => 
        active ? "translate(0, 0)" : "translate(-40px, -40px)"};
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

const ImageFlicker = () => {
    const [images, setImages] = useState(initialImages);

    // Function to handle the click event and rearrange images
    const handleClick = () => {
      const newImages = [...images]; // Copy the current images array
      const firstImage = newImages.shift(); // Remove the first image
      newImages.push(firstImage); // Add the first image to the end of the array
      setImages(newImages); // Update the state with the new array
    };

  return (
    <Container onClick={handleClick}>
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Image ${index + 1}`}
          style={{ opacity: 1 }} // Default opacity when not hovered Its this code 
        //   style={{
        //     zIndex: images.length - index, // Ensure correct layering of images
        //     transform: index === 0 ? "translate(0, 0)" : `translate(${index * 40}px, ${index * 40}px)`,
        //     opacity: index === 0 ? 1 : 0.8 - index * 0.2, // Control opacity for each image
        //   }}   
        />
      ))}
    </Container>
  );
};

export default ImageFlicker;


// import React, { useState } from "react";
// import styled from "styled-components";
// import image1 from "../images/togame.jpeg";
// import image2 from "../images/doit.jpg";
// import image3 from "../images/businessman.jpg";
// import image4 from "../images/mayor.jpg";

// // Define your images in an array
// const initialImages = [image1, image2, image3, image4];

// const Container = styled.div`
//   position: relative;
//   width: 360px;
//   height: 640px;
//   margin-top: 150px;
//   background: rgba(0, 0, 0, 0);
//   transform: rotate(-5deg)0 skew(15deg) scale(0.8);
//   transition: 0.5s;
// `;

// const Image = styled.img`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   transition: transform 1s ease, opacity 1s ease;
//   backface-visibility: hidden;
//   transform: ${({ active }) =>
//     active ? "translate(0, 0)" : "translate(-40px, -40px)"};
//   opacity: ${({ active }) => (active ? 1 : 0)};
// `;

// const ImageFlicker = () => {
//   const [images, setImages] = useState(initialImages);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Function to handle the click event and rearrange images
//   const handleClick = () => {
//     if (isAnimating) return; // Prevent double-clicking during animation
//     setIsAnimating(true);

//     setTimeout(() => {
//       const newImages = [...images]; // Copy the current images array
//       const firstImage = newImages.shift(); // Remove the first image
//       newImages.push(firstImage); // Add the first image to the end of the array
//       setImages(newImages); // Update the state with the new array
//       setIsAnimating(false); // Allow another click after animation
//     }, 1000); // Animation duration matches the CSS transition
//   };

//   return (
//     <Container onClick={handleClick}>
//       {images.map((img, index) => (
//         <Image
//           key={index}
//           src={img}
//           alt={`Image ${index + 1}`}
//           active={index === 0} // Apply active styling to the front image
//           style={{
//             zIndex: images.length - index, // Ensure correct layering of images
//             transform: index === 0 ? "translate(0, 0)" : `translate(${index * 40}px, ${index * 40}px)`,
//             opacity: index === 0 ? 1 : 0.8 - index * 0.2, // Control opacity for each image
//           }}
//         />
//       ))}
//     </Container>
//   );
// };

// export default ImageFlicker;
