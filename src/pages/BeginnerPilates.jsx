import React from 'react';
import img1 from '../assets/Images/img7.jpg'; // Replace with a Pilates-relevant image if available

const ServiceDetails = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-red-700 text-red-600 py-24 px-8">
        <h1 className="text-5xl font-bold animate-fadeInUp">Beginner Pilates</h1>
        <p className="mt-4 text-lg text-gray-200">Strengthen your core, improve posture, and enhance flexibility</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <img
            src={img1}
            alt="Beginner Pilates"
            className="rounded-xl shadow-lg  transition-transform duration-300 w-full"
          />

          <h2 className="text-3xl font-bold">Start Your Pilates Journey With Confidence</h2>
          <p className="text-gray-700 leading-relaxed">
            Beginner Pilates is a great entry point for anyone looking to build strength, flexibility, and control without
            high-impact movement. It focuses on precise, low-intensity exercises that emphasize core engagement, posture,
            and breathing. These movements are safe and adaptable, making Pilates ideal for those new to fitness, recovering
            from injury, or looking to improve their overall body awareness and mobility. With the right guidance, even simple
            exercises can deliver powerful results.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each session introduces fundamental Pilates principles like alignment, concentration, and flow. You’ll learn how to
            activate deep stabilizing muscles to support your spine and joints while also improving balance and coordination.
            Whether you’re lying on a mat or using props like resistance bands and stability balls, the movements are designed
            to challenge you gently and progressively. This structured approach helps reduce tension, correct muscle imbalances,
            and build a strong foundation for more advanced workouts in the future.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond the physical benefits, Beginner Pilates encourages mental focus and stress relief. Controlled breathing
            patterns help center your mind, making Pilates not just a workout, but a mindful practice that promotes inner calm.
            Over time, you’ll notice better posture, improved circulation, and a deeper connection between mind and body.
            Pilates is a lifelong practice—and starting with the basics ensures you grow stronger, more confident, and more
            in tune with your body’s needs.
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
