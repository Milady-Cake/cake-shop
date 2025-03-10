// import { FaUser, FaRegComment, FaImage, FaDownload } from "react-icons/fa";
// import { motion } from "framer-motion";
// import React from "react";

// const blogPosts = [
//   {
//     id: 1,
//     title: "New Organic Ingredients",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit dui.",
//     author: "NICDARK",
//     comments: 20,
//     image:
//       "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-3-720x720.jpg",
//   },
//   {
//     id: 2,
//     title: "Popular Recipes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit dui.",
//     author: "NICDARK",
//     comments: 30,
//     image:
//       "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-2-720x720.jpg",
//   },
//   {
//     id: 3,
//     title: "Special Opening",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit dui.",
//     author: "NICDARK",
//     comments: 10,
//     image:
//       "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-9-700x720.jpg",
//   },
// ];

// const NewsSection = () => (
//   <section className="text-center py-12 bg-white">
//     <h2 className="text-4xl font-serif font-semibold mb-8">Our News</h2>

//     <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//       {blogPosts.map(({ id, title, description, author, comments, image }, index) => (
//         <motion.div
//           key={id}
//           className={`bg-white border rounded-lg shadow-sm overflow-hidden flex flex-col ${
//             index === 1 ? "flex-col-reverse" : ""
//           }`}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: index * 0.2 }}
//         >
//           {/* Content Section */}
//           <div className="p-6 text-center flex-grow">
//             <h3 className="text-xl font-serif font-semibold">{title}</h3>
//             <p className="text-gray-600 mt-2">{description}</p>
//             <a
//               href="#"
//               className="text-[#C3A27C] uppercase tracking-widest text-sm font-semibold mt-4 inline-block"
//             >
//               Read More
//             </a>
//           </div>

//           {/* Image Section */}
//           <motion.div
//             className="relative group"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             {/* Image Icon */}
//             <div className="absolute bottom-10 right-4 bg-[#C3A27C] p-2 rounded">
//               <FaImage className="text-white text-xl" />
//             </div>

//             {/* Author & Comments Inside Image */}
//             <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 max-md:px-1 py-2 text-white text-sm bg-black/50">
//               <div className="flex items-center gap-2">
//                 <FaUser className="text-white" />
//                 <span>BY {author}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FaRegComment className="text-white" />
//                 <span>{comments} COMMENTS</span>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       ))}
//     </div>

//     {/* Contact Section with Blur & Opacity */}
//     <section className="relative bg-cover bg-center text-white py-8 mt-9 px-6 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto overflow-hidden">
//       {/* Background Image with Blur & Overlay */}
//       <div
//         className="absolute inset-0 bg-black/60 backdrop-blur-md"
//         style={{
//           backgroundImage:
//             "url('https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/post-7-150x150.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       ></div>

//       {/* Left Side - Icon & Text */}
//       <div className="relative flex flex-col md:flex-row items-center gap-4 z-10 text-center md:text-left">
//         <FaDownload className="text-white text-5xl border-2 border-white p-2 rounded" />
//         <div>
//           <h2 className="text-xl md:text-2xl font-serif font-semibold tracking-wide">
//             CONTACT US NOW ! + 12 123 456 789
//           </h2>
//           <p className="text-white/80 text-xs md:text-sm">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//         </div>
//       </div>

//       {/* Right Side - Button (Centered on Mobile) */}
//       <motion.a
//         href="#"
//         className="relative bg-[#C3A27C] text-white px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold tracking-widest rounded shadow hover:bg-opacity-80 transition z-10 mt-4 md:mt-0"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//       >
//         GET A QUOTE
//       </motion.a>
//     </section>
//   </section>
// );

// export default NewsSection;



import { FaUser, FaRegComment, FaImage, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "New Organic Ingredients",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit dui.",
    author: "NICDARK",
    comments: 20,
    image:
      "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-3-720x720.jpg",
  },
  {
    id: 2,
    title: "Popular Recipes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit dui.",
    author: "NICDARK",
    comments: 30,
    image:
      "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-2-720x720.jpg",
  },
  {
    id: 3,
    title: "Special Opening",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit dui.",
    author: "NICDARK",
    comments: 10,
    image:
      "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-9-700x720.jpg",
  },
];

const NewsSection = () => (
  <section className="text-center py-16 bg-white">
    <h2 className="text-5xl font-serif font-semibold mb-10">Our News</h2>

    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {blogPosts.map(({ id, title, description, author, comments, image }, index) => (
        <motion.div
          key={id}
          className={`bg-white border rounded-xl shadow-md overflow-hidden flex flex-col ${
            index === 1 ? "flex-col-reverse" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="p-8 text-center flex-grow">
            <h3 className="text-2xl font-serif font-semibold">{title}</h3>
            <p className="text-gray-600 mt-3 text-lg">{description}</p>
            <a
              href="#"
              className="text-[#C3A27C] uppercase tracking-widest text-base font-semibold mt-5 inline-block"
            >
              Read More
            </a>
          </div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-12 right-6 bg-[#C3A27C] p-3 rounded">
              <FaImage className="text-white text-2xl" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-3 text-white text-lg bg-black/50">
              <div className="flex items-center gap-3">
                <FaUser className="text-white text-xl" />
                <span>BY {author}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaRegComment className="text-white text-xl" />
                <span>{comments} COMMENTS</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>

    <section className="relative bg-cover bg-center text-white py-10 mt-12 px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto overflow-hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        style={{
          backgroundImage:
            "url('https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/post-7-150x150.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative flex flex-col md:flex-row items-center gap-6 z-10 text-center md:text-left">
        <FaDownload className="text-white text-6xl border-4 border-white p-3 rounded" />
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-wide">
            CONTACT US NOW ! + 12 123 456 789
          </h2>
          <p className="text-white/80 text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <motion.a
        href="#"
        className="relative bg-[#C3A27C] text-white px-6 md:px-8 py-3 md:py-4 text-lg font-semibold tracking-widest rounded shadow hover:bg-opacity-80 transition z-10 mt-6 md:mt-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        GET A QUOTE
      </motion.a>
    </section>
  </section>
);

export default NewsSection;