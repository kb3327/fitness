import React from 'react';
import img1 from '../assets/Images/img3.jpg'; // Replace with an appropriate Body Balance image if available

const ServiceDetails = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-red-700 text-red-600 py-24 px-8">
        <h1 className="text-5xl font-bold animate-fadeInUp">Body Balance</h1>
        <p className="mt-4 text-lg text-gray-200">Enhance coordination, flexibility, and inner strength</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <img
            src={img1}
            alt="Body Balance"
            className="rounded-xl shadow-lg  transition-transform duration-300 w-full"
          />

          <h2 className="text-3xl font-bold">Achieve Harmony Through Body Balance Training</h2>
          <p className="text-gray-700 leading-relaxed">
            Body balance training is designed to improve overall stability, core strength, and posture. It blends
            elements of yoga, Pilates, and functional movements to create a workout that enhances both physical
            and mental well-being. Perfect for individuals of all fitness levels, body balance routines focus on
            mindful movement, breathing control, and improving body awareness. These sessions not only strengthen
            your core muscles but also support injury prevention and better coordination.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you're an athlete looking to refine your form or someone aiming for better flexibility and
            posture, body balance programs can be tailored to suit your goals. The workouts are typically low
            impact, yet they activate deep muscles that are often neglected in high-intensity routines. You’ll
            experience improved joint mobility, muscular endurance, and smoother movement patterns, which carry
            over into daily life and other forms of exercise.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In addition to physical benefits, body balance practices encourage mindfulness and stress reduction.
            Focused breathing, gentle transitions, and mental engagement help calm the nervous system and promote
            inner peace. Over time, this type of training enhances self-control, emotional resilience, and overall
            balance in life. It’s more than a workout—it’s a journey toward a stronger, more centered you.
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
