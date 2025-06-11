import React from 'react';
import img1 from '../assets/Images/img17.jpg'; // Replace with a Yoga-relevant image if available

const ServiceDetails = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-red-700 text-red-600 py-24 px-8">
        <h1 className="text-5xl font-bold animate-fadeInUp">Basic Yoga</h1>
        <p className="mt-4 text-lg text-gray-200">Find balance, flexibility, and inner peace through ancient practice</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <img
            src={img1}
            alt="Basic Yoga"
            className="rounded-xl shadow-lg  transition-transform duration-300 w-full"
          />

          <h2 className="text-3xl font-bold">Begin Your Yoga Journey With Mindfulness</h2>
          <p className="text-gray-700 leading-relaxed">
            Basic Yoga introduces you to the foundational postures (asanas) and breathing techniques (pranayama) that form the core of this ancient practice. Designed for beginners, these gentle movements help improve flexibility, build strength, and reduce stress while being accessible to all fitness levels. You'll learn proper alignment in poses like Mountain Pose, Downward Dog, and Warrior positions, establishing a safe practice that nurtures both body and mind. Yoga isn't about perfection but about connecting with your body and creating awareness in each movement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As you progress through basic sequences, you'll notice improved posture, better breathing patterns, and enhanced mental clarity. Each session combines physical movement with mindful attention, helping release tension stored in the body. The practice emphasizes the connection between breath and movement, teaching you to flow with intention rather than force. Even simple poses, when performed with awareness, can strengthen muscles you rarely use while improving joint mobility and circulation. Basic Yoga provides tools to manage daily stress and cultivate a sense of calm that extends beyond the mat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond the physical benefits, Basic Yoga offers a pathway to inner peace and self-discovery. The practice encourages you to slow down, observe your thoughts without judgment, and develop patience with yourself. Regular practice can lead to better sleep, reduced anxiety, and increased energy levels. Whether you're looking to enhance your fitness routine or find a moment of stillness in a busy life, Basic Yoga provides a foundation for holistic well-being. This timeless practice meets you where you are, offering benefits that deepen over time as you grow in your practice.
          </p>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Services List */}
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="text-xl font-semibold border-b pb-2 mb-4">All Services</h4>
            {[
              'Basic Yoga',
              'Personal Training',
              'Cardio Strength',
              'Muscle Building',
              'Power Lifting',
              'Body Balance',
              'Beginner Pilates',
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