import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Image = () => {
  return (
    <motion.div
      className="w-full h-[50vh] p-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-3 grid-rows-4 gap-2 h-[110%]">
        <div className="col-span-1 row-span-2">
          <motion.img
            src="https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/12/slide-03.jpg"
            alt="Cake"
            className="w-full h-full rounded object-cover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="col-span-1 row-span-2">
          <motion.img
            src="https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/12/slide-02.jpg"
            alt="Bakery"
            className="w-full h-full rounded object-cover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          />
        </div>
        <div className="col-span-1 row-span-2">
          <motion.img
            src="https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/12/slide-01.jpg"
            alt="Dessert"
            className="w-full h-[205%] rounded object-cover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          />
        </div>
        <div className="col-span-2 row-span-2">
          <motion.img
            src="https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/12/slide-04.jpg"
            alt="Pastry"
            className="w-full h-full rounded object-cover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  return (
    <>
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8 mt-20 grid max-md:grid-cols-1   md:grid-cols-3 gap-8 items-start lg:px-6 max-md:px-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:col-span-2 space-y-6 h-auto">
          <p className="text-lg leading-relaxed">
            <span className="text-5xl font-serif font-semibold">A</span> ivamus
            volutpat eros pulvinar velit laoreet, sit amet egestas erat
            dignissim.
          </p>
          <p className="text-lg leading-relaxed">
            Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
            dignissim. Vivamus volutpat eros pulvinar velit laoreet, sit amet
            egestas erat dignissim. Vivamus volutpat eros pulvinar velit
            laoreet, sit amet egestas erat dignissim. Vivamus volutpat eros
            pulvinar velit laoreet, sit amet egestas erat dignissim. Vivamus
            volutpat eros pulvinar velit laoreet, sit amet egestas erat
            dignissim. Vivamus volutpat eros pulvinar velit laoreet, sit amet
            egestas erat dignissim.
          </p>
          <Image />
        </div>
        <div className="flex flex-col space-y-6 h-auto">
          <motion.div
            className="bg-black text-white p-6 rounded h-[230px] flex flex-col justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaMapMarkerAlt className="text-lg" />
              <p className="text-sm">London Ave 232 - London</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-lg" />
              <p className="text-sm">+12345456576</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-lg" />
              <p className="text-sm">info@bakery.com</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#C3A27C] p-6 max-md:p-2 rounded h-[423px] flex flex-col justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h3 className="text-lg text-white font-serif font-semibold mb-4 text-center">
              GET IN TOUCH
            </h3>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 mb-4 border rounded h-[120px]"
            ></textarea>
            <motion.button
              className="bg-white text-black px-6 py-2 rounded w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
            >
              SEND NOW
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
      <div className="footer-map w-full">
        <h2 className="text-center text-2xl tracking-widest py-4 font-semibold mb-4">
          Reach Me With Our Location
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.681406403287!2d80.1966303!3d13.05594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAzJzIxLjQiTiA4MMKwMTEnNDcuOSJF!5e0!3m2!1sen!2sin!4v1727202361514!5m2!1sen!2sin"
          className="w-full h-[300px] border-0"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </>
  );
};

export default ContactSection;
