import React from 'react';
import { motion } from 'framer-motion';
import gymEntrance from '../assets/Images/img7.jpg';
import gymCulture from '../assets/Images/img9.jpg';
import firstWorkout from '../assets/Images/img11.jpg';
import nutrition from '../assets/Images/img15.jpg';
import progress from '../assets/Images/img23.jpg';

const BeginnersGymGuide = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen max-h-[800px] overflow-hidden">
        <img 
          src={gymEntrance} 
          alt="Gym entrance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-red-600 mb-4"
            >
              Beginner's Guide 
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-white/90"
            >
              From nervous newcomer to confident gym-goer – your no-nonsense roadmap
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

        {/* Introduction */}
        <section>
          <p className="text-lg mb-6">
            We've all been there – standing at the gym entrance with that knot in your stomach, 
            pretending to adjust your phone while secretly scanning the room. Even the most muscular 
            person once didn’t know how to adjust a bench.
          </p>
          <p className="text-lg">
            Starting your fitness journey might feel intimidating, but this guide walks you through 
            every step with no confusing jargon – just real talk from someone who’s been exactly where you are.
          </p>
        </section>

        {/* Why Gym Section */}
        <section className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-6">Why This Gym Thing is Worth the Nerves</h2>
          <p className="text-lg mb-6">
            Beyond physical changes, regular gym visits gift you confidence that spreads into every 
            part of your life. Imagine carrying heavy bags effortlessly, playing with your kids, or 
            feeling an energy boost that coffee can’t match.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="font-medium text-blue-800">
              The gym becomes less about lifting weights and more about lifting your entire quality of life.
            </p>
          </div>
        </section>

        {/* First Week Section */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-6">Your First Week: The 'Just Show Up' Phase</h2>
          <p className="text-lg mb-6">
            Forget complicated routines for now. Your only mission? Show up for 15-20 minutes:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              "5 min walking on treadmill (no incline)",
              "5 min trying one machine (ask staff for help)",
              "5 min stretching"
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="text-2xl mb-2">{index + 1}.</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="text-lg">
            Do this 3 times in your first week – that’s already half the battle won.
          </p>
        </section>

        {/* Gym Culture Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src={gymCulture} 
              alt="Gym culture" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Navigating Gym Culture Without the Anxiety</h2>
            <p className="text-lg mb-6">
              Every gym has unwritten rules, but they all come down to being respectful:
            </p>
            <ul className="space-y-4">
              {[
                "Always wipe down equipment with the provided spray",
                "Put weights back where you found them",
                "Ask politely if unsure: 'Mind showing me how this works?'"
              ].map((rule, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* First Workout Section */}
        <section className="bg-white p-8 rounded-xl shadow-md flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src={firstWorkout} 
              alt="First workout" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Your First Proper Workout (Simplified)</h2>
            <p className="text-lg mb-6">Try this basic and beginner-friendly routine:</p>
            <div className="space-y-4">
              {[
                "5 min warm-up on any cardio machine",
                "Leg press machine: 3 sets of 10 reps",
                "Chest press machine: 3 sets of 10 pushes",
                "Finish with planks (20 sec) and stretching"
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full mr-3">{index + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <p className="text-lg mt-6">
              This 30-minute workout targets all key muscles – simple but effective!
            </p>
          </div>
        </section>

        {/* Nutrition Section */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl shadow-md flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src={nutrition} 
              alt="Nutrition" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Eating for Energy (Without Turning Into a Rabbit)</h2>
            <p className="text-lg mb-6">
              Nutrition is about balance – not punishment. Keep it real:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Protein with each meal (eggs, chicken, fish)",
                "Veggies (frozen mixes count!)",
                "Drink water like it’s your job",
                "Still enjoy that occasional slice of pizza"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="font-medium text-orange-800">
                The best diet is the one you can stick with and enjoy!
              </p>
            </div>
          </div>
        </section>

        {/* Progress Section */}
        <section className="bg-white p-8 rounded-xl shadow-md flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src={progress} 
              alt="Progress" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Seeing Progress – Without Obsessing</h2>
            <p className="text-lg mb-4">
              Don’t chase the scale – chase consistency. Celebrate non-scale wins:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Your clothes fit better</li>
              <li>You’re sleeping deeper</li>
              <li>You're lifting heavier or walking farther</li>
            </ul>
            <p className="text-lg mt-6">
              Trust the process. One day you’ll look back and thank yourself for starting today.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BeginnersGymGuide;
