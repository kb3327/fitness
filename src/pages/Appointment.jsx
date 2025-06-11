import React, { useState } from "react";

const packages = [
  {
    name: "Quick Chat",
    price: "Rs500",
    duration: "15 mins",
    features: ["Basic guidance", "General advice", "Q&A session"],
    color: "from-blue-400 to-blue-600",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    name: "Personal Session",
    price: "Rs1000",
    duration: "30 mins",
    features: ["1-on-1 video call", "Custom workout", "Diet tips", "Follow-up email"],
    color: "from-purple-500 to-purple-700",
    popular: true,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    name: "Premium Coaching",
    price: "Rs2000",
    duration: "60 mins",
    features: ["In-depth analysis", "Full fitness plan", "Nutrition guide", "Weekly check-ins", "Progress tracking"],
    color: "from-red-500 to-red-700",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const ConsultationPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    message: "" 
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for booking ${selectedPackage.name}! We'll contact you shortly.`);
    setSelectedPackage(null);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Expert Fitness Consultation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your fitness journey with personalized guidance from our certified trainers
          </p>
        </div>

        {/* Packages */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 ${pkg.popular ? "scale-105 z-10" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 text-xs font-bold rounded-bl-lg">
                  RECOMMENDED
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
              
              <div className="p-8 bg-gray-400">
                <div className={`mb-6 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${pkg.color} text-white`}>
                  {pkg.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">{pkg.price}</span>
                  <span className="ml-2 text-gray-500">/ {pkg.duration}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    pkg.popular 
                      ? `bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white` 
                      : 'bg-blue-400 hover:bg-blue-500 text-gray-800 border-2 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPackage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${selectedPackage.color}`}></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedPackage.name}</h3>
                    <p className="text-gray-600">{selectedPackage.price} / {selectedPackage.duration}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedPackage(null)} 
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Your Goals (Optional)</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="What would you like to achieve?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-lg font-bold text-white bg-gradient-to-r ${selectedPackage.color} hover:opacity-90 transition-opacity`}
                  >
                    Confirm Booking - {selectedPackage.price}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationPage;