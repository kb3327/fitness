import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import service1 from '../assets/images/service1.svg';
import service2 from '../assets/images/service2.svg';
import service3 from '../assets/images/service3.svg';
import service4 from '../assets/images/service4.svg';
import service5 from '../assets/images/service5.svg';
import service6 from '../assets/images/service6.svg';
import service7 from '../assets/images/service7.svg';
import service8 from '../assets/images/service8.svg';
import service9 from '../assets/images/service9.svg';
import serviceHero from '../assets/images/img15.jpg'; // Hero section background image

const services = [
  {
    id: 1,
    title: "Gym & Fitness Training",
    description: "Adaptable to various fitness levels with safety-focused equipment.",
    image: service1,
    path: "/gym-training"
  },
  {
    id: 2,
    title: "Personal Training",
    description: "Customized programs with certified trainers for optimal results.",
    image: service2,
    path: "/personal-training"
  },
  {
    id: 3,
    title: "Power Lifting",
    description: "Specialized strength training for serious athletes.",
    image: service3,
    path: "/power-lifting"
  },
  {
    id: 4,
    title: "Cardio Strength",
    description: "Combine cardiovascular and strength training for full-body fitness.",
    image: service4,
    path: "/cardio-strength"
  },
  {
    id: 5,
    title: "Weight Lifting",
    description: "Build muscle and strength with professional guidance.",
    image: service5,
    path: "/weight-lifting"
  },
  {
    id: 6,
    title: "Body Balance",
    description: "Improve flexibility, strength and mental focus.",
    image: service6,
    path: "/body-balance"
  },
  {
    id: 7,
    title: "Beginner Pilates",
    description: "Low-impact exercises to build core strength.",
    image: service7,
    path: "/beginner-pilates"
  },
  {
    id: 8,
    title: "Basic Yoga",
    description: "Enhance mindfulness while improving flexibility.",
    image: service8,
    path: "/basic-yoga"
  },
  {
    id: 9,
    title: "Muscle Building",
    description: "Structured programs for maximum muscle growth.",
    image: service9,
    path: "/muscle-building"
  }
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={serviceHero} 
            alt="Fitness Training" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-gray-900/80"
        />
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-24 pt-48 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold text-white"
            >
              Our <span className="text-red-500">Services</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Transform your body with our specialized fitness programs
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
             
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-red-600">Training Programs</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Designed for all fitness levels - from beginners to professional athletes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              <Link to={service.path}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl border border-gray-200">
                  <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="h-32 w-auto object-contain"
                      animate={{
                        scale: hoveredCard === service.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <motion.div
                      className="text-red-600 font-medium flex items-center"
                      initial={{ x: 0 }}
                      animate={{ 
                        x: hoveredCard === service.id ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Learn more
                      <svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Body?</h3>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            Book a  consultation with our fitness experts to create your personalized training plan
          </p>
          <Link 
            to="/appointment" 
            className="inline-block bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;