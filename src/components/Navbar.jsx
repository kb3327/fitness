import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Images/logo (2).png";

const Navbar = () => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const pagesRef = useRef();
  const profileRef = useRef();
  const mobileMenuRef = useRef();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setPagesOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Pages",
      subLinks: [
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Classes Details", path: "/classes" },
        { name: "BMI Calculator", path: "/bmi" },
        { name: "Gallery", path: "/gallery" },
        { name: "Personal Consultation", path: "/appointment" },
        { name: "Workout", path: "/workout" },
        { name: "Guide For Beginners", path: "/guide" },





      ]
    },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-5 flex items-center justify-between h-20">
        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center group">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-12 md:h-14 w-auto object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

        </Link>

        {/* CENTER - Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            link.subLinks ? (
              <div className="relative" ref={pagesRef} key={link.name}>
                <motion.button
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className="flex items-center text-white hover:text-red-400 transition-colors font-medium text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                  <motion.span
                    animate={{ rotate: pagesOpen ? 180 : 0 }}
                    className="ml-1"
                  >
                    ▼
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {pagesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white text-gray-800 rounded-lg shadow-2xl overflow-hidden z-50 min-w-[200px]"
                    >
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block px-6 py-3 hover:bg-gray-100 transition-colors font-medium border-b border-gray-100 last:border-0"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
                <Link
                  to={link.path}
                  className="text-white hover:text-red-400 transition-colors font-medium text-lg"
                >
                  {link.name}
                </Link>
              </motion.div>
            )
          ))}
        </div>

        {/* RIGHT - Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/feedback"
              className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:shadow-red-500/30 transition-all"
            >
              Feedback
            </Link>
          </motion.div>

          <div className="flex space-x-4">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 text-xl transition-colors"
              whileHover={{ y: -2 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 text-xl transition-colors"
              whileHover={{ y: -2 }}
            >
              <FaInstagram />
            </motion.a>
          </div>

          <div className="relative" ref={profileRef}>
            <motion.button
              onClick={() => setProfileOpen(!profileOpen)}
              className="text-gray-300 hover:text-white text-2xl transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaUser />
            </motion.button>
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-3 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden z-50 min-w-[160px]"
                >
                  <Link
                    to="/signup"
                    className="block px-6 py-3 hover:bg-gray-100 transition-colors font-medium border-b border-gray-100"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="block px-6 py-3 hover:bg-gray-100 transition-colors font-medium"
                  >
                    Login
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              {navLinks.map((link) => (
                link.subLinks ? (
                  <div key={link.name} className="space-y-2">
                    <button
                      onClick={() => setPagesOpen(!pagesOpen)}
                      className="flex items-center justify-between w-full text-white text-lg font-medium"
                    >
                      {link.name}
                      <span>{pagesOpen ? "−" : "+"}</span>
                    </button>
                    {pagesOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pl-4 space-y-3"
                      >
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.path}
                            className="block text-gray-300 hover:text-white"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-white text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                )
              ))}

              <div className="pt-4 border-t border-gray-700">
                <Link
                  to="/feedback"
                  className="block w-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-center py-3 rounded-lg font-medium mb-4"
                >
                  Feedback
                </Link>

                <div className="flex justify-center space-x-6">
                  <a href="https://facebook.com" className="text-gray-300 hover:text-blue-500 text-xl">
                    <FaFacebook />
                  </a>
                  <a href="https://instagram.com" className="text-gray-300 hover:text-pink-500 text-xl">
                    <FaInstagram />
                  </a>
                </div>

                <div className="flex justify-center space-x-4 mt-4">
                  <Link to="/signup" className="text-gray-300 hover:text-white">
                    Sign Up
                  </Link>
                  <Link to="/login" className="text-gray-300 hover:text-white">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;