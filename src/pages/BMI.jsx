import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BMICalculator = () => {
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
  <>
    {/* BMI Calculator Section */}
    <section className="py-20 bg-gray-900 text-white">
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
  </>
);
}
export default BMICalculator;