import { motion } from 'framer-motion';
import { FaFire, FaHeartbeat, FaDumbbell, FaClock, FaCheck } from 'react-icons/fa';
import classHero from '../assets/Images/img3.jpg';
import trainerImg from '../assets/Images/img17.jpg';

const levels = [
  {
    title: "BEGINNER FOUNDATION",
    description: "Build proper form and fundamental movement patterns",
    duration: "45 min sessions",
    intensity: "Low-Medium",
    benefits: [
      "Master basic exercises",
      "Develop body awareness",
      "Establish workout routine",
      "Build confidence"
    ],
    color: "bg-blue-500",
    schedule: "Mon/Wed/Fri - 9:00 AM"
  },
  {
    title: "INTERMEDIATE TRANSFORMATION",
    description: "Take your fitness to the next level with progressive training",
    duration: "60 min sessions",
    intensity: "Medium-High",
    benefits: [
      "Increase strength",
      "Improve endurance",
      "Learn advanced techniques",
      "Body recomposition"
    ],
    color: "bg-purple-600",
    schedule: "Tue/Thu - 6:00 PM"
  },
  {
    title: "ADVANCED PERFORMANCE",
    description: "Elite training for maximum results",
    duration: "75 min sessions",
    intensity: "High",
    benefits: [
      "Sport-specific training",
      "Peak conditioning",
      "Advanced programming",
      "Competition prep"
    ],
    color: "bg-red-600",
    schedule: "Mon/Wed/Sat - 4:00 PM"
  }
];

const ClassLevels = () => {
  return (
    <div className="bg-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src={classHero} 
          alt="Fitness Classes" 
          className="w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            FIND YOUR <span className="text-red-500">LEVEL</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Personalized training programs for every fitness stage
          </p>
        </div>
      </div>

      {/* Choose Your Level Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            CHOOSE YOUR <span className="text-red-600">LEVEL</span>
          </h2>
          <p className="text-gray-50 max-w-3xl mx-auto">
            Our progressive training system adapts to your current abilities
          </p>
        </div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${level.color} text-white rounded-xl shadow-xl overflow-hidden`}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4">{level.title}</h3>
                <p className="mb-6 opacity-90">{level.description}</p>
                
                <div className="flex items-center mb-4">
                  <FaClock className="mr-3" />
                  <span>{level.duration}</span>
                </div>
                <div className="flex items-center mb-6">
                  <FaFire className="mr-3" />
                  <span>Intensity: {level.intensity}</span>
                </div>
                
                <div className="bg-white/20 rounded-lg p-4 mb-6 flex-grow">
                  <h4 className="font-bold mb-3">YOU'LL ACHIEVE:</h4>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="mt-1 mr-2 text-sm" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <p className="mb-4 text-sm opacity-90">
                    <FaHeartbeat className="inline mr-2" />
                    {level.schedule}
                  </p>
                  <button className="w-full bg-white text-gray-900 hover:bg-gray-100 py-3 rounded-lg font-bold">
                    JOIN {level.title.split(' ')[0]} PROGRAM
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trainer Spotlight */}
        <div className="bg-gray-300 rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gray-300 p-8 flex justify-center">
              <div className="w-64 h-64 rounded-full border-4 border-red-600 shadow-lg overflow-hidden">
                <img 
                  src={trainerImg} 
                  alt="Rizwan Nabi" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">RIZWAN NABI</h3>
              <p className="text-xl text-red-600 mb-6">Master Trainer</p>
              
              <div className="prose prose-lg text-gray-700 mb-8">
                <p>
                  With over 10 years of experience transforming bodies and lives, Rizwan brings scientific training methods 
                  combined with motivational coaching to every session. His progressive approach has helped hundreds achieve 
                  their fitness goals safely and effectively.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-gray-900 mb-3">TRAINING PHILOSOPHY</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <FaCheck className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Form before intensity</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Evidence-based progression</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-3">CREDENTIALS</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <FaCheck className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span>MSc Exercise Science</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span>NASM Certified</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Class Schedule */}
        <div className="bg-gray-300 rounded-xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-10">CLASS SCHEDULE</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-4">TIME</th>
                  <th className="p-4">MONDAY</th>
                  <th className="p-4">TUESDAY</th>
                  <th className="p-4">WEDNESDAY</th>
                  <th className="p-4">THURSDAY</th>
                  <th className="p-4">FRIDAY</th>
                  <th className="p-4">SATURDAY</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="p-4 font-medium">6:00 - 7:00 AM</td>
                  <td className="p-4">Advanced</td>
                  <td className="p-4">-</td>
                  <td className="p-4">Advanced</td>
                  <td className="p-4">-</td>
                  <td className="p-4">Advanced</td>
                  <td className="p-4">-</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-4 font-medium">9:00 - 10:00 AM</td>
                  <td className="p-4">Beginner</td>
                  <td className="p-4">-</td>
                  <td className="p-4">Beginner</td>
                  <td className="p-4">-</td>
                  <td className="p-4">Beginner</td>
                  <td className="p-4">-</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">6:00 - 7:00 PM</td>
                  <td className="p-4">-</td>
                  <td className="p-4">Intermediate</td>
                  <td className="p-4">-</td>
                  <td className="p-4">Intermediate</td>
                  <td className="p-4">-</td>
                  <td className="p-4">Open Gym</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-red-600 mb-6">WHY CHOOSE OUR PROGRAMS?</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaDumbbell className="text-red-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">PROGRESSIVE TRAINING</h4>
                  <p className="text-gray-50">
                    Scientifically designed programs that adapt as you improve, preventing plateaus
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaHeartbeat className="text-red-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">EXPERT GUIDANCE</h4>
                  <p className="text-gray-50">
                    Rizwan provides real-time form corrections and personalized adjustments
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-red-600 mb-6">MEMBERSHIP BENEFITS</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-50">Access to all level-appropriate classes</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-50">Progress tracking and assessments</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-50">Nutrition guidance</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-50">24/7 online support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassLevels;
