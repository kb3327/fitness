import React from 'react';
import img1 from '../assets/Images/img2.jpg';

const ServiceDetails = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-red-700 text-red-600 py-24 px-8">
        <h1 className="text-5xl font-bold animate-fadeInUp">Personal Training</h1>
        <p className="mt-4 text-lg text-gray-200">One-on-one coaching tailored to your goals</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <img
            src={img1}
            alt="Personal Training"
            className="rounded-xl shadow-lg  transition-transform duration-300 w-full"
          />

          <h2 className="text-3xl font-bold">Transform with Personal Training</h2>
          <p className="text-gray-700 leading-relaxed">
            Personal training offers a focused, customized approach to fitness. 
            Whether you're starting your fitness journey or pushing toward advanced goals,
             personal trainers provide structure, motivation, and results-driven programming.
             Personal training is more than just working out—it's about unlocking your 
             potential with expert guidance and a tailored plan that fits your body, goals,
              and lifestyle. Unlike generic routines, personal training is based on science 
              and strategy, helping you get results faster and more safely. A certified trainer
               evaluates your fitness level, identifies strengths and weaknesses, and creates a 
               plan that grows with you.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A personalized training plan takes into account your body type, goals,
             schedule, and fitness level. Your trainer adjusts your workouts as you
              progress, helping you avoid plateaus and stay challenged safely.
               Whether you're trying to lose weight, build muscle,
                improve endurance, or recover from an injury, a personal trainer ensures you're
                 doing the right exercises the right way. This one-on-one attention not only builds
                  your physical strength but also keeps you motivated and accountable. In a world full 
                  of fitness fads, personal training offers structure, progress tracking, and real support 
                  every step of the way.
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
