import React from "react";
import contactImage from "../assets/Images/img23.jpg";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const hoverEffect = {
    scale: 1.03,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 py-12 px-4 sm:px-6">
      {/* Animated Information Cards Section */}
      <div className="max-w-6xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Card */}
        <motion.div 
          className="bg-gray-400 p-6 rounded-xl shadow-lg flex items-start cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          whileHover={hoverEffect}
        >
          <motion.div 
            className="bg-red-400 p-3 rounded-full mr-4"
            whileHover={{ rotate: 10 }}
          >
            <FaMapMarkerAlt className="text-red-600 text-xl" />
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600">
              Islamabad,Punjab,Pakistan
            </p>
            <motion.div 
              className="mt-3 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Contact Info Card */}
        <motion.div 
          className="bg-gray-400 p-6 rounded-xl shadow-lg flex items-start cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          whileHover={hoverEffect}
          transition={{ delay: 0.1 }}
        >
          <motion.div 
            className="bg-blue-400 p-3 rounded-full mr-4"
            whileHover={{ rotate: 10 }}
          >
            <FaPhone className="text-blue-600 text-xl" />
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Info</h3>
            <p className="text-gray-600">+163-6589-9654</p>
            <p className="text-gray-600">info@fliktl.com</p>
            <motion.div 
              className="mt-3 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Opening Hours Card */}
        <motion.div 
          className="bg-gray-400 p-6 rounded-xl shadow-lg flex items-start cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          whileHover={hoverEffect}
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="bg-green-400 p-3 rounded-full mr-4"
            whileHover={{ rotate: 10 }}
          >
            <FaClock className="text-green-600 text-xl" />
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Opening Hours</h3>
            <p className="text-gray-600">Mon to Sat: 6AM - 8PM</p>
            <p className="text-gray-600">Sunday Closed</p>
            <motion.div 
              className="mt-3 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>

      {/* Main Contact Form Section */}
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left Side - Contact Form */}
        <div className="p-8 sm:p-10 flex flex-col justify-center">
          <motion.h2 
            className="text-3xl font-bold text-red-600 mb-6 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get In Touch!
          </motion.h2>

          <form className="space-y-5">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 pl-10"
                />
                <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500">
                <option value="">Select Service</option>
                <option value="personal-training">Personal Training</option>
                <option value="nutrition-plan">Nutrition Plan</option>
                <option value="online-coaching">Online Coaching</option>
                <option value="group-classes">Group Classes</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <textarea
                rows="4"
                placeholder="Write Message...."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:from-red-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
              >
                Send Message
              </button>
            </motion.div>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block relative">
          <img 
            src={contactImage} 
            alt="Fitness Consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex items-end p-8">
            <motion.div 
              className="text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-2">Start Your Fitness Journey</h3>
              <p className="text-gray-200">
                Our expert trainers are ready to help you achieve your goals
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;