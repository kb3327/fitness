import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import logo from '../assets/Images/logo (2).png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logo} alt="Rizwan Nabi Fitness" className="h-14 w-auto" />
              <h2 className="ml-3 text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">RIZWAN NABI</h2>
            </div>
            <p className="text-gray-300 text-lg">
              Transform your body with Pakistan's top fitness coach. Certified trainer with 10+ years of experience.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-300 hover:text-red-500 text-xl transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-500 text-xl transition-colors">
                <FaFacebook />
              </a>
             
              <a href="#" className="text-gray-300 hover:text-red-600 text-xl transition-colors">
                <FaYoutube />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-b-2 border-red-500 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Online Coaching
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Training Programs
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Success Stories
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> Nutrition Plans
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> 1-on-1 Sessions
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-b-2 border-red-500 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiPhone className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+92 300 1234567</p>
                  <p className="text-sm text-gray-400">Mon-Sat, 9AM-6PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <FiMail className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">coach@rizwannabi.com</p>
                  <p className="text-sm text-gray-400">24/7 Support</p>
                </div>
              </li>
              <li>
                <p className="text-gray-300">Lahore, Pakistan</p>
                <p className="text-sm text-gray-400">Main Gym Location</p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-b-2 border-red-500 pb-2 inline-block">Join Our Community</h3>
            <p className="text-gray-300">
              Get exclusive fitness tips, workout videos, and special offers straight to your inbox.
            </p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/20"
              >
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rizwan Nabi Fitness. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;