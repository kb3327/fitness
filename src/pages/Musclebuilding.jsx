import React from 'react';
import img1 from '../assets/Images/img16.jpg'; // Replace with an ab workout-relevant image

const ServiceDetails = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-red-700 text-red-600 py-24 px-8">
        <h1 className="text-5xl font-bold animate-fadeInUp"> Muscle Building</h1>
        <p className="mt-4 text-lg text-gray-200">Sculpt strong, defined core muscles with targeted training</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <img
            src={img1}
            alt="Ab Muscle Building"
            className="rounded-xl shadow-lg  transition-transform duration-300 w-full"
          />

          <h2 className="text-3xl font-bold">Build Powerful Core Strength</h2>
          <p className="text-gray-700 leading-relaxed">
             Muscle Building focuses on developing all layers of your abdominal muscles - the rectus abdominis (six-pack muscles), obliques (side muscles), and transverse abdominis (deep core stabilizers). Our scientifically-designed program combines compound movements with targeted isolation exercises to maximize muscle growth and definition. You'll learn proper form for exercises like weighted crunches, hanging leg raises, and cable rotations that progressively overload your abs for continuous development. Unlike generic core workouts, we emphasize both hypertrophy (muscle growth) and strength to create visible results while improving functional fitness.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The program teaches you how to properly engage your core during every movement to prevent injuries and maximize efficiency. We incorporate various training techniques including time-under-tension, drop sets, and isometric holds to challenge your muscles in different ways. You'll discover that building impressive abs requires more than just endless crunches - it demands strategic exercise selection, progressive resistance, and proper nutrition. Our approach ensures balanced development of all abdominal regions, preventing weak points and creating that coveted 3D abdominal appearance that stands out even at rest.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond aesthetics, our Ab Muscle Building program enhances overall athletic performance and daily functionality. A strong core improves posture, reduces back pain, and increases power transfer between upper and lower body. We debunk common myths about spot reduction and teach you how body fat percentage affects visibility of your abdominal muscles. The program includes guidance on optimal training frequency, recovery protocols, and nutrition strategies specifically tailored for abdominal development. Whether you're preparing for a competition or simply want to feel stronger in everyday life, our systematic approach will help you build core strength that lasts.
          </p>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Services List */}
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="text-xl font-semibold border-b pb-2 mb-4">All Services</h4>
            {[
              'Ab Muscle Building',
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