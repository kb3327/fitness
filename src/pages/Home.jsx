import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFire, FaHeartbeat, FaDumbbell, FaClock, FaCheck, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import heroImage from '../assets/images/img2.jpg';
import trainerImg from '../assets/images/img17.jpg';
import class1 from '../assets/images/img7.jpg';
import class2 from '../assets/images/img9.jpg';
import class3 from '../assets/images/img14.jpg';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import contactImage from '../assets/images/img23.jpg';
import aboutImage from '../assets/images/img12.jpg'; // Updated about image

const HomePage = () => {
  // BMI Calculator State
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setBmiCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setBmiCategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setBmiCategory('Overweight');
      } else {
        setBmiCategory('Obese');
      }
    }
  };

  return (
    <div className="bg-gray-50">
      {/* ... (Previous sections remain unchanged until Gallery section) ... */}
       {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src={heroImage} 
          alt="Fitness Training" 
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center px-4 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            NO PAIN<span className="text-red-500">NO GAIN</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/signup" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-lg mr-4 inline-block">
              JOIN NOW
            </Link>
            <Link to="/services" className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-bold text-lg inline-block">
              VIEW PROGRAMS
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section id="bmi-calculator" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl p-8 shadow-xl"
          >
            <Link to="/bmi-calculator" className="block">
              <h2 className="text-3xl font-bold mb-6 text-center hover:text-red-500 transition">
                CHECK YOUR <span className="text-red-500 hover:text-red-400">BMI</span>
              </h2>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter height"
                />
              </div>
              <div>
                <label className="block mb-2">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter weight"
                />
              </div>
            </div>
            <button
              onClick={calculateBMI}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold mb-6"
            >
              CALCULATE BMI
            </button>
            
            {bmi && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center p-4 bg-gray-700 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2">Your BMI: {bmi}</h3>
                <p className="text-lg">Category: <span className="font-medium">{bmiCategory}</span></p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              <Link to="/services" className="hover:text-red-600 transition">
                OUR <span className="text-red-600 hover:text-red-700">SERVICES</span>
              </Link>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive fitness solutions for all your needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Training",
                desc: "One-on-one sessions with certified trainers",
                img: class1,
                icon: <FaDumbbell className="text-4xl mb-4 text-red-500" />,
                link: "/personal-training"
              },
              {
                title: "Group Classes",
                desc: "Dynamic workouts in motivating group settings",
                img: class2,
                icon: <FaHeartbeat className="text-4xl mb-4 text-red-500" />,
                link: "/group-classes"
              },
              {
                title: "Nutrition Plans",
                desc: "Custom meal plans for your fitness goals",
                img: class3,
                icon: <FaFire className="text-4xl mb-4 text-red-500" />,
                link: "/nutrition"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <Link to={service.link}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <div className="flex justify-center">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-red-600 transition">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.desc}</p>
                    <div className="text-red-600 font-medium flex items-center justify-center mx-auto">
                      Learn more <FaArrowRight className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery Section - Updated with 2 images per row */}
      <section id="gallery" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              <Link to="/gallery" className="hover:text-red-600 transition">
                OUR <span className="text-red-600 hover:text-red-700">GALLERY</span>
              </Link>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Witness the transformations we've helped create
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[img1, img2, img3, img4, img5, img6].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <Link to="/gallery">
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-80 object-cover hover:scale-105 transition duration-500"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section - Updated with img12.jpg and matched height */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div 
              className="lg:w-1/2 h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-full">
                <img 
                  src={aboutImage} 
                  alt="About Our Gym" 
                  className="w-full h-full max-h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <h3 className="text-white text-2xl font-bold">Our Fitness Journey</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 h-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/about" className="block mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-red-600 transition">
                  ABOUT <span className="text-red-600 hover:text-red-700">US</span>
                </h2>
              </Link>
              <p className="text-gray-700 mb-6">
                Founded in 2015, Rizwan Fitness has been transforming lives through scientifically-backed training programs. 
                Our mission is to make professional fitness accessible to everyone, regardless of their starting point.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <FaCheck className="text-red-600" />
                  </div>
                  <p className="text-gray-700">10+ years of fitness training experience</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <FaCheck className="text-red-600" />
                  </div>
                  <p className="text-gray-700">500+ satisfied clients transformed</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <FaCheck className="text-red-600" />
                  </div>
                  <p className="text-gray-700">Certified and experienced trainers</p>
                </div>
              </div>
              <Link 
                to="/about" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Read Our Full Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <Link to="/contact" className="hover:text-red-500 transition">
                CONTACT <span className="text-red-500 hover:text-red-400">US</span>
              </Link>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-3xl mx-auto"
            >
              Get in touch to start your fitness journey
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-400">123 Fitness Street, Islamabad, Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-400">+92 300 1234567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-400">info@rizwanfitness.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>
                <Link 
                  to="/contact" 
                  className="inline-block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold text-center"
                >
                  SEND MESSAGE
                </Link>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <br />

      {/* ... (Rest of the sections remain unchanged) ... */}
    </div>
  );
};

export default HomePage;