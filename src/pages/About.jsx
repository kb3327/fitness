import { motion } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaAward, FaUsers } from 'react-icons/fa';
import aboutImage from '../assets/images/img5.jpg'; // Side image
import facility1 from '../assets/images/img11.jpg'; // Training facility images
import facility2 from '../assets/images/img12.jpg';
import facility3 from '../assets/images/img13.jpg';

const AboutUs = () => {
  const stats = [
    { value: '10+', label: 'Years Experience', icon: <FaAward className="text-3xl" /> },
    { value: '5K+', label: 'Clients Transformed', icon: <FaUsers className="text-3xl" /> },
    { value: '50+', label: 'Fitness Programs', icon: <FaDumbbell className="text-3xl" /> },
    { value: '100%', label: 'Client Satisfaction', icon: <FaHeartbeat className="text-3xl" /> }
  ];

  return (
    <div className="bg-gray-200">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-gray-900/80"
        />
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-16 pt-48 px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold text-white"
            >
              About <span className="text-red-500">Rizwan Nabi</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-3xl"
            >
              Pakistan's Premier Fitness Coach Transforming Lives Since 2012
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-red-500 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            The <span className="text-red-500">Rizwan Nabi</span> Fitness Journey
          </h2>
          
          <p className="text-gray-600">
            Born in 1988 in the bustling city of Lahore, Rizwan Nabi's fitness journey began as a personal battle against childhood obesity. 
            At age 14, weighing 95kg, he decided to transform his life through fitness. What started as a personal challenge became 
            an all-consuming passion that would define his career.
          </p>
          
          <p className="text-gray-600">
            After completing his BS in Sports Science from the University of Punjab in 2010, Rizwan became certified as a personal trainer 
            through NASM (National Academy of Sports Medicine). He spent the next two years working at premier gyms in Lahore, honing his 
            skills and developing his unique training methodology that blends traditional strength training with functional movements.
          </p>
          
          <p className="text-gray-600">
            In 2013, Rizwan established his first training facility in DHA Lahore with just 200 square feet and three pieces of equipment. 
            Through word-of-mouth and undeniable results, his client base grew exponentially. Today, Rizwan Nabi Fitness operates from three 
            state-of-the-art facilities across Lahore, serving over 500 active clients.
          </p>
          
          <p className="text-gray-600">
            Rizwan's approach emphasizes sustainable fitness - "Training for life, not just for looks." His programs focus on functional strength, 
            mobility, and nutrition education. He's particularly renowned for his post-rehabilitation training programs, helping clients recover 
            from injuries while rebuilding strength.
          </p>
          
          <p className="text-gray-600">
            Beyond physical training, Rizwan conducts quarterly fitness workshops and has mentored over 50 trainers who now implement his 
            methodologies across Pakistan. His vision extends to making quality fitness education accessible to all socioeconomic levels through 
            his upcoming online platform.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium shadow-lg mt-4"
          >
            Read Full Biography
          </motion.button>
        </motion.div>

        {/* Smaller Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mt-8 md:mt-0"
        >
          <img 
            src={aboutImage} 
            alt="Rizwan Nabi training" 
            className="rounded-xl shadow-lg w-full h-auto max-w-md mx-auto"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-4"
          >
            <motion.p 
              className="text-white text-sm"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              Rizwan conducting a personal training session (2018)
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8"
          >
            Our <span className="text-red-500">Fitness Philosophy</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 text-left"
          >
            <p className="text-gray-700 mb-4">
              "True fitness isn't measured by the weight on your barbell or the size of your biceps - it's measured by your quality of life. 
              My methodology focuses on building resilient bodies that can handle life's demands, not just look good in photos."
            </p>
            <p className="text-gray-700 mb-4">
              "We emphasize three pillars: movement competency (doing exercises correctly), nutritional adequacy (fueling properly), and 
              recovery sufficiency (resting enough). Most programs fail because they ignore at least one of these pillars."
            </p>
            <p className="text-gray-700">
              - <span className="font-semibold text-red-600">Rizwan Nabi</span>, Founder & Head Coach
            </p>
          </motion.div>
        </div>
      </div>

      {/* Facilities Section with Imported Images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          World-Class <span className="text-red-500">Training Facilities</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Facility 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="h-60 overflow-hidden">
              <img 
                src={facility1}
                alt="Premium Equipment Facility"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Equipment</h3>
              <p className="text-gray-600">
                Featuring Hammer Strength machines, Eleiko Olympic platforms, and Woodway treadmills - the finest 
                equipment imported from Europe and USA for optimal training experience.
              </p>
            </div>
          </motion.div>

          {/* Facility 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="h-60 overflow-hidden">
              <img 
                src={facility2}
                alt="Personal Training Zone"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Training Zone</h3>
              <p className="text-gray-600">
                Private training pods with specialized equipment for one-on-one coaching, rehabilitation work, 
                and performance testing with BodPod body composition analysis.
              </p>
            </div>
          </motion.div>

          {/* Facility 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="h-60 overflow-hidden">
              <img 
                src={facility3}
                alt="Group Classes Arena"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Group Classes Arena</h3>
              <p className="text-gray-600">
                2000 sq ft dedicated space for group training with shock-absorbing flooring, full mirror walls, 
                and specialized equipment for HIIT, yoga, and functional movement classes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;