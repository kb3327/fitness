import React from 'react';
import { motion } from 'framer-motion';

const NutritionPage = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white text-gray-800 py-10 px-6 sm:px-12 lg:px-24">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-green-700 mb-6 text-center"
      >
        The Best Protein Sources for Vegans & Vegetarians
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-8 max-w-4xl mx-auto text-lg leading-relaxed"
      >
        <p>Hey, friend! So, you’ve gone vegan or vegetarian, or maybe you’re just curious about cutting back on meat—either way, I’m so excited to chat with you about protein!...</p>

        <h2 className="text-2xl font-semibold text-green-600">How Much Protein Do You Need, Anyway?</h2>
        <p>Okay, let’s start with the basics—how much protein should you aim for?... Mix and match foods to get all the building blocks—those essential amino acids—our bodies love.</p>

        <h2 className="text-2xl font-semibold text-green-600">Legumes: Your Cozy, Go-To Pals</h2>
        <p>Legumes are my comfort food heroes—beans, lentils, chickpeas, and peas steal my heart every time!...</p>

        <h2 className="text-2xl font-semibold text-green-600">Soy Stuff: My Flexible Favorites</h2>
        <p>Soy is like my kitchen sidekick—tons of protein and ready for anything!...</p>

        <h2 className="text-2xl font-semibold text-green-600">Nuts and Seeds: Crunchy Little Loves</h2>
        <p>Nuts and seeds are my grab-and-go darlings—protein, good fats, and a crunch I can’t resist!...</p>

        <h2 className="text-2xl font-semibold text-green-600">Whole Grains: My Sneaky Sidekicks</h2>
        <p>Whole grains sneak protein into my day, and I love their vibe!...</p>

        <h2 className="text-2xl font-semibold text-green-600">Veggies: My Quiet Helpers</h2>
        <p>Veggies don’t brag, but they chip in protein and color!...</p>

        <h2 className="text-2xl font-semibold text-green-600">Plant-Based Meats: Fun and Tasty Twists</h2>
        <p>New to this or missing meat? Plant-based meats are my fun fix!...</p>

        <h2 className="text-2xl font-semibold text-green-600">Dairy and Eggs: Vegetarian Hugs</h2>
        <p>Vegetarians, this is your moment! Eggs are my pal—6 grams per large one—...</p>

        <h2 className="text-2xl font-semibold text-green-600">Boosters: My Secret Sprinkles</h2>
        <p>Time for fun extras! Nutritional yeast is my vegan BFF—...</p>

        <h2 className="text-2xl font-semibold text-green-600">Easy-Peasy Tips to Dig In</h2>
        <p>Let’s make it happen! Breakfast? Oats with chia and soy milk—15 to 20 grams, and I’m ready to roll!...</p>

        <h2 className="text-2xl font-semibold text-green-600">You’ve Got This, Friend!</h2>
        <p>Vegan, vegetarian, or just testing the waters—protein’s so easy and tasty!... You’re doing great, and I’m cheering for you!</p>
      </motion.div>
    </div>
  );
};

export default NutritionPage;
