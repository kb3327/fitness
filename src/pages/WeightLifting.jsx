import React from 'react';
import img1 from '../assets/Images/img18.jpg';
import img2 from '../assets/Images/img2.jpg';

const ServiceDetails = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black to-red-700 text-red-600 py-24 px-8">
        <h1 className="text-5xl font-bold animate-fadeInUp">Weight Lifting</h1>
        <p className="mt-4 text-lg text-gray-200">Gain muscle, boost strength, and transform your body</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <img
            src={img1}
            alt="Weight Lifting"
            className="rounded-xl shadow-lg  transition-transform duration-300 w-full h-33"
          />

          <h2 className="text-3xl font-bold">Transform Your Physique Through Weight Lifting</h2>
          <p className="text-gray-700 leading-relaxed">
            Weight lifting is a foundational form of resistance training that focuses on increasing muscle mass,
            strength, and endurance. By using dumbbells, barbells, machines, or bodyweight, individuals can
            target specific muscle groups to enhance tone and definition. It’s ideal for people looking to reshape
            their body, build strength, and boost metabolism. Properly executed weight lifting not only improves
            physical performance but also supports joint health and bone density.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether your goal is hypertrophy (muscle growth), strength development, or fat loss, weight lifting
            programs can be customized to your fitness level and goals. Structured routines, including sets, reps,
            rest intervals, and progression, are key to maximizing results. Trainers help ensure proper form to
            avoid injuries and guide you through compound and isolation exercises that stimulate growth and power
            in every part of the body.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond physical gains, weight lifting promotes mental resilience, discipline, and confidence.
            Regular lifting sessions help regulate hormones, improve mood, and reduce stress. As you become
            stronger over time, you'll notice not only physical transformation but also increased energy,
            better posture, and a more focused mindset. With consistency, weight lifting becomes more than a
            workout—it becomes a lifestyle of strength and self-improvement.
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
