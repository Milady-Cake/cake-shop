// import React from "react";


// const HeadPart = ({ heading, image }) => {
//     return (
//       <section className="w-full h-[30vh] bg-gray-100 max-sm:h-[200px] flex  items-center">
//         <div className="relative w-full h-full overflow-hidden rounded-b-lg">
//           <div
//             className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat sm:bg-fixed transition-all duration-500"
//             style={{
//               backgroundImage: `url("${image}")`,
//             }}
//           ></div>
  
//           <div className="w-full h-full bg-black absolute top-0 bg-opacity-65 flex flex-col justify-center items-center px-20 max-sm:px-5">
//             <h1 className="text-xl font-bold sm:text-5xl text-white">
//               {heading}
//             </h1>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default HeadPart;
  


import React from "react";

const HeadPart = ({ heading, image }) => {
  return (
    <section className="w-full h-[30vh] max-h-[300px] bg-gray-100 flex items-center sm:h-[35vh] md:h-[40vh] lg:h-[50vh]">
      <div className="relative w-full h-full overflow-hidden rounded-b-lg">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat object-fill sm:bg-fixed transition-all duration-500"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>

        <div className="w-full h-full bg-black absolute top-0 bg-opacity-65 flex flex-col justify-center items-center px-5 sm:px-10 md:px-20">
          <h1 className="text-lg font-bold text-white sm:text-3xl md:text-5xl">
            {heading}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeadPart;