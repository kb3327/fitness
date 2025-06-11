import React from 'react';
import img1 from '../assets/Images/img11.jpg';

const ServiceDetails = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-red-700 text-red-600 py-24 px-8">
        <h1 className="text-5xl font-bold animate-fadeInUp">Power Lifting</h1>
        <p className="mt-4 text-lg text-gray-200">Build extreme strength with expert lifting programs</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <img
            src={img1}
            alt="Power Lifting"
            className="rounded-xl shadow-lg  transition-transform duration-300 w-full"
          />

          <h2 className="text-3xl font-bold">Master Strength Through Power Lifting</h2>
          <p className="text-gray-700 leading-relaxed">
            Power lifting is a discipline focused on maximizing strength through three core lifts:
            squat, bench press, and deadlift. This training style builds raw power, muscle density,
            and mental toughness. Ideal for athletes and fitness enthusiasts aiming to push their limits,
            power lifting requires precision technique and a structured program designed for progressive overload.
            With professional coaching, lifters improve form, avoid injuries, and break through strength plateaus
            in a safe, sustainable way.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Personalized power lifting plans are tailored to your current strength level, mobility, and goals.
            Whether you're preparing for competition or just want to get stronger, each workout is built around
            proper technique, rest periods, and progressive intensity. A coach monitors your progress, adjusts your
            plan, and ensures you're performing at your best. With the right support system, power lifting not only
            transforms your physique but also builds confidence, discipline, and mental resilience.
          </p>
          <p className='text-gray-700 leading-relaxed'>
            Power lifting is a strength-focused training discipline 
            centered around three main lifts: the squat, bench press,
             and deadlift. It emphasizes building maximum power, muscle density,
              and physical endurance through progressive overload and proper technique.
               This training style not only enhances raw strength but also develops discipline, 
               mental toughness, and confidence. Whether you’re training for competition or simply 
               aiming to improve your strength, power lifting requires a structured program tailored to 
               your goals and fitness level. 
          </p>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Services List */}
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="text-xl font-semibold border-b pb-2 mb-4">All Services</h4>
            {[
              'Beginner Pilates',
              'Personal Training',
              'Cardio Strength',
              'Muscle Building',
              'Power Lifting',
              'Body Balance',
              'Basic Yoga',
              'Weight Lifting',
            ].map(service => (
              <div
                key={service}
                className="py-2 px-4 hover:bg-red-600 hover:text-white transition rounded cursor-pointer"
              >
                {service}
              </div>
            ))}
          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-xl shadow p-6 space-y-4 mt-10">
            <h4 className="text-xl font-semibold border-b pb-2">Get a Quote</h4>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded focus:outline-none"
            />
            <textarea
              rows="3"
              placeholder="Message"
              className="w-full p-2 border rounded focus:outline-none"
            />
            <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
