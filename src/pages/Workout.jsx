import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img3 from '../assets/Images/img3.jpg'; // Meal prep image
import img7 from '../assets/Images/img7.jpg'; // Protein shake image
import img11 from '../assets/Images/img11.jpg'; // Water bottle image
import img14 from '../assets/Images/img14.jpg'; // Supplements image
import img19 from '../assets/images/img19.jpg'; // Happy athlete image

const WorkoutNutritionGuide = () => {
  const [activeTab, setActiveTab] = useState('why');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img 
          src={img19} 
          alt="Athlete enjoying nutrition" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 right-0 text-center pb-16 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-red-600 mb-4"
          >
             Workout 
          </motion.h1>
         
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 -mt-20 relative z-10">
        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            Let's make this workout nutrition guide down-to-earth, like we're chatting over coffee (or, let's be real, a protein shake). 
            I'm not some fitness guru—just a regular person who's stumbled through enough workouts to know what keeps you going 
            without turning your kitchen into a science experiment.
          </p>
          <p className="text-lg text-gray-700">
            Between juggling work, family, and that never-ending laundry pile, I've figured out how to fuel up without losing my mind. 
            Here's the deal, with all the human messiness included.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { id: 'why', label: 'Why Bother?' },
            { id: 'pre', label: 'Pre-Workout' },
            { id: 'post', label: 'Post-Workout' },
            { id: 'hydration', label: 'Hydration' },
            { id: 'supplements', label: 'Supplements' },
            { id: 'mistakes', label: 'Common Mistakes' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Why Bother Section */}
        {activeTab === 'why' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Bother? (No, Really, Hear Me Out)</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  We've all had that moment where we thought, "I'll just wing this workout on an empty stomach and vibes." 
                  Cue the dizziness, the shaky legs, and the "why do I do this to myself?" regret. Eating right around your 
                  workouts isn't about being a health nut—it's about not feeling like garbage.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-bold text-red-700 mb-2">Here's what you get when you nail it:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Workouts that don't feel like a death march</li>
                    <li>Recovery that doesn't leave you hobbling like you ran a marathon</li>
                    <li>No more 3pm slumps where you're Googling "is napping at my desk a crime?"</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Pre-Workout Section */}
        {activeTab === 'pre' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img 
                  src={img3} 
                  alt="Pre-workout meals" 
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Pre-Workout: Don't Overcomplicate It</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The internet loves to hype up some perfect pre-workout meal timed to the second. 
                  I'm here to tell you: chill. You don't need to be a math wizard to eat before exercise.
                </p>
                <div className="space-y-6">
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="font-bold text-amber-700 text-xl mb-3">If you've got 1-3 hours before:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Just eat a normal meal with some carbs and protein</li>
                      <li>Think: a turkey sandwich (even if it's just slapped together)</li>
                      <li>Yogurt with granola, or last night's spaghetti you're eating cold (no judgment)</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="font-bold text-orange-700 text-xl mb-3">If you're running out the door (30 minutes or less):</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Grab a banana with a smear of peanut butter (I'm obsessed)</li>
                      <li>A handful of trail mix you stole from your kid's snack stash</li>
                      <li>Or even a slice of toast with honey when you're desperate</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-medium text-red-800">
                      <span className="font-bold">Life lesson:</span> If your stomach flips out during workouts, skip the milkshake or 
                      greasy fries beforehand. I learned that during a spin class that nearly ended in disaster—let's just say I'm not invited back.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Post-Workout Section */}
        {activeTab === 'post' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
          >
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2">
                <img 
                  src={img7} 
                  alt="Post-workout recovery" 
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Post-Workout: Don't Make It a Thing</h2>
                <p className="text-lg text-gray-700 mb-6">
                  After you're done sweating, your body's like, "Yo, help me out here." It needs two things:
                </p>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <ol className="list-decimal pl-5 space-y-4">
                      <li>
                        <span className="font-bold">Protein</span> to patch up those muscles you just wrecked (20-30g is enough, no need to chug a gallon of whey)
                      </li>
                      <li>
                        <span className="font-bold">Carbs</span> to restock your energy so you're not a zombie later
                      </li>
                    </ol>
                    <p className="mt-4">
                      You don't need some $50 supplement to make this happen.
                    </p>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="font-bold text-indigo-700 text-xl mb-3">Try these simple options:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Scrambled eggs with toast (bonus if you burn the toast like I do)</li>
                      <li>Greek yogurt with whatever fruit's not moldy yet</li>
                      <li>A protein shake for when chewing feels like a chore</li>
                      <li>My secret weapon: chocolate milk. It's like a hug from your childhood, plus it's got the perfect carb-protein mix</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="font-medium text-blue-800">
                      <span className="font-bold">Biggest tip:</span> Eat something within an hour or two. I used to "forget" to eat post-workout, 
                      then wonder why I was sore for days and ready to eat my couch by dinner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Hydration Section */}
        {activeTab === 'hydration' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img 
                  src={img11} 
                  alt="Hydration tips" 
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Hydration: The Thing We All Screw Up</h2>
                <div className="space-y-6">
                  <div className="bg-cyan-50 p-6 rounded-lg">
                    <p className="text-lg text-gray-700 mb-4">
                      Fun fact: if you're thirsty, you're already behind the hydration eight-ball. Here's how to not mess this up:
                    </p>
                    <ul className="list-disc pl-5 space-y-3">
                      <li>Keep a water bottle you actually like (mine's got stickers from my kid—it's cute)</li>
                      <li>For super sweaty sessions, toss a pinch of salt in your water or grab a sports drink (Gatorade's fine, no need to get fancy)</li>
                      <li>
                        <span className="font-bold">Pee check:</span> if it looks like apple juice, chug more water. 
                        If it's pale like lemonade, you're killing it
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Supplements Section */}
        {activeTab === 'supplements' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
          >
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2">
                <img 
                  src={img14} 
                  alt="Supplements" 
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Supplements: Don't Fall for the Hype</h2>
                <div className="space-y-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <p className="text-lg text-gray-700 mb-4">
                      The supplement aisle is a jungle of promises. Most of it's overpriced nonsense. 
                      Here's what's worth it for regular folks like us:
                    </p>
                    <ul className="list-disc pl-5 space-y-3">
                      <li>
                        <span className="font-bold">Protein powder:</span> Handy if you're too lazy to cook or can't stomach another chicken breast
                      </li>
                      <li>
                        <span className="font-bold">Electrolyte tabs:</span> Lifesavers for those sweaty summer runs
                      </li>
                      <li>
                        <span className="font-bold">Creatine:</span> Actually legit for strength training, but don't stress if you skip it
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-medium text-red-800">
                      <span className="font-bold">Anything else?</span> Save your cash unless you're aiming for a bodybuilding trophy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Common Mistakes Section */}
        {activeTab === 'mistakes' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Screw-Ups We've All Made</h2>
              <p className="text-lg text-gray-700 mb-8">
                We're human. We mess up. Here's what I've done (and you probably have too):
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Skipping pre-workout food: Thinking 'I'm fine' until you're not. Even a cracker helps.",
                  "Eating a giant burrito right before: Say hello to burping through burpees.",
                  "'I'll eat later': Then it's 9pm, and you're eating cereal over the sink.",
                  "Only water for long workouts: Enjoy those leg cramps, pal."
                ].map((mistake, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-red-300 transition-colors flex items-start"
                  >
                    <span className="text-2xl mr-3">{"🤦‍♂️😫🤢💀".split('')[index]}</span>
                    <span>{mistake}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Practical Tips Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl shadow-lg overflow-hidden mb-12"
        >
          <div className="p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Making This Fit Your Actual Life</h2>
            <p className="text-lg mb-8">
              I'm not meal-prepping like I'm on a cooking show, and you probably aren't either. Here's my lazy-but-effective system:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Stash easy snacks everywhere—nuts in your bag, protein bars in your car, fruit on the counter",
                "Prep what you can (hard-boiled eggs, grilled chicken) when you're feeling briefly adult",
                "Don't aim for Instagram-worthy meals. Something is always better than nothing"
              ].map((tip, index) => (
                <div 
                  key={index}
                  className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20"
                >
                  <div className="text-3xl mb-3">{"🚀⏱️📸".split('')[index]}</div>
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final Summary */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">The Bottom Line (From One Tired Human to Another)</h2>
            <p className="text-lg text-gray-700 mb-8">
              Fueling your workouts doesn't need to be a full-time job. Just stick to the basics:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🍽️",
                  title: "Pre-Workout",
                  text: "Eat a little something before you move"
                },
                {
                  icon: "💪",
                  title: "Post-Workout",
                  text: "Eat a little something after you're done"
                },
                {
                  icon: "🚰",
                  title: "Hydration",
                  text: "Drink water like you're training to be a camel"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="font-medium text-green-800">
                Do this, and you'll feel like a functional human instead of a walking disaster.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkoutNutritionGuide;