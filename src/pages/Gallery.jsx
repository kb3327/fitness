import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/Images/img1.jpg";
import img2 from "../assets/Images/img2.jpg";
import img3 from "../assets/Images/img3.jpg";
import img4 from "../assets/Images/img4.jpg";
import img5 from "../assets/Images/img5.jpg";
import img6 from "../assets/Images/img6.jpg";
import img7 from "../assets/Images/img7.jpg";
import img8 from "../assets/Images/img8.jpg";
import img9 from "../assets/Images/img9.jpg";
import img10 from "../assets/Images/img10.jpg";
import img11 from "../assets/Images/img11.jpg";
import img12 from "../assets/Images/img12.jpg";
import img13 from "../assets/Images/img13.jpg";
import img14 from "../assets/Images/img14.jpg";
import img15 from "../assets/Images/img15.jpg";

const Gallery = () => {
  const allImages = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allImages.length));
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
          Our Gallery
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Witness the power of transformation through our fitness journey
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      >
        {allImages.slice(0, visibleCount).map((img, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative overflow-hidden rounded-2xl"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)" // Light red shadow
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300,
              boxShadow: { duration: 0.3 }
            }}
          >
            <motion.img
              src={img}
              alt={`Fitness Transformation ${index + 1}`}
              className="w-full h-72 sm:h-80 object-cover border-2 border-transparent hover:border-red-500 transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>

      {visibleCount < allImages.length && (
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={loadMore}
            className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-red-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;