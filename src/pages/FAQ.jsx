import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How often should I work out to stay fit?",
    answer: "It's recommended to work out at least 3–5 times a week, mixing strength training and cardio for balanced results.",
  },
  {
    question: "What's the best time of day to exercise?",
    answer: "The best time is the one that fits your schedule! Morning workouts boost metabolism, while evening sessions improve strength.",
  },
  {
    question: "Do I need supplements to build muscle?",
    answer: "Supplements can help but are not required. A balanced diet rich in protein, carbs, and healthy fats is most important.",
  },
  {
    question: "Can I lose weight without going to the gym?",
    answer: "Yes! Bodyweight exercises, walking, running, and diet control can all help with weight loss outside the gym.",
  },
  {
    question: "How long does it take to see fitness results?",
    answer: "You may start feeling better in 1–2 weeks and seeing visible changes in 4–8 weeks with consistent effort.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-4">
          Fitness FAQs
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Get answers to your most common fitness questions
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/20 transition-all"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center"
                whileHover={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {faq.question}
                </h3>
                <motion.span
                  className="text-2xl text-red-500"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                >
                  +
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-5">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;