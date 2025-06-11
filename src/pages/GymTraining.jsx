import React from 'react';
import img1 from '../assets/Images/img1.jpg';
import img2 from '../assets/Images/img2.jpg';

const ServiceDetails = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-red-700 text-red-600 py-24 px-8">
        <h1 className="text-5xl font-bold animate-fadeInUp">Gym & Fitness Training</h1>
        <p className="mt-4 text-lg text-gray-200">Your body transformation starts here</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <img
            src={img1}
            alt="Gym Training"
            className="rounded-xl shadow-lg  transition-transform duration-300 w-full"
          />

          <h2 className="text-3xl font-bold">Gym & Fitness Training</h2>
          <p className="text-gray-700 leading-relaxed">
            Gyms provide the best space for people aiming to improve their health,
            build strength, and boost endurance. Whether you're a beginner or advanced athlete,
            a well-equipped gym provides you the opportunity to unlock your full potential.
            Every individual is different — from body type and fitness level to goals and
            health conditions. That's why a personalized gym training plan is more effective
            than following a one-size-fits-all routine.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With the guidance of certified personal trainers,
            clients receive support, motivation, and customized
            plans tailored to their fitness goals. From cardio
            to resistance training, every session helps you move
            closer to a stronger version of yourself.A tailored
            workout plan helps you save time and energy by focusing
            only on the exercises that give you real results. It’s efficient,
            structured, and keeps you on track toward your specific goals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Group classes like HIIT, spinning, and yoga provide community energy,
            while personal workouts build discipline. The environment is designed
            to inspire consistency and track measurable results.Personalized plans
            also prevent injuries. When your workouts are designed around your mobility
            and limits, you're far less likely to strain or overtrain your muscles.
          </p>

        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Services List */}
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="text-xl font-semibold border-b pb-2 mb-4">All Services</h4>
            {['Beginner Pilates', 'Gym & Fitness', 'Cardio Strength', 'Muscle Building', 'Power Lifting', 'Body Balance', 'Basic Yoga', 'Weight Lifting'].map(service => (
              <div
                key={service}
                className="py-2 px-4 hover:bg-red-600 hover:text-white transition rounded cursor-pointer"
              >
                {service}
              </div>
            ))}
          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-4xl shadow p-6 space-y-4 mt-10">
            <h4 className="text-xl font-semibold border-b pb-2">Get a Quote</h4>
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded focus:outline-none" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded focus:outline-none" />
            <textarea rows="3" placeholder="Message" className="w-full p-2 border rounded focus:outline-none" />
            <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
