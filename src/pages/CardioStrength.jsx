import React from 'react';
import img1 from '../assets/Images/img12.jpg';

const ServiceDetails = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-red-700 text-red-600 py-24 px-8">
        <h1 className="text-5xl font-bold animate-fadeInUp">Cardio Strength</h1>
        <p className="mt-4 text-lg text-gray-200">Boost endurance and power through dynamic cardio training</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <img
            src={img1}
            alt="Cardio Strength"
            className="rounded-xl shadow-lg  transition-transform duration-300 w-full h-33"
          />

          <h2 className="text-3xl font-bold">Elevate Fitness with Cardio Strength Training</h2>
          <p className="text-gray-700 leading-relaxed">
            Cardio strength training is a dynamic combination of cardiovascular and resistance exercises
            designed to elevate your heart rate while building muscle strength. This style of training
            blends aerobic workouts like running, cycling, and jump rope with functional strength moves such
            as squats, push-ups, and kettlebell swings. It’s perfect for those looking to lose weight,
            boost endurance, and improve overall fitness in a time-efficient, results-driven way.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Unlike traditional workouts that isolate cardio or strength, cardio strength sessions maximize
            calorie burn and muscle engagement at once. With customized circuits and interval-based formats,
            each workout challenges your heart, lungs, and muscles simultaneously. Trainers monitor your
            intensity, modify movements based on your level, and help you maintain proper form for safety and
            efficiency. Whether you're a beginner or an experienced athlete, this approach brings variety and
            energy to your fitness journey.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cardio strength training improves not only physical stamina but also promotes a stronger core,
            better balance, and faster metabolism. It’s ideal for those with limited time who want full-body
            benefits. Through regular sessions, you’ll notice enhanced cardiovascular capacity, lean muscle gain,
            and increased energy. Guided programs ensure you’re challenged without being overwhelmed, helping
            you stay committed and see consistent results.
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
