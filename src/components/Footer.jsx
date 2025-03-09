import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Column: Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold text-white">
              Jay Cell Therapeutics
            </h2>
            <p className="mt-3 text-sm">
              Advancing cell therapy to fight diseases with innovative
              technology
            </p>
          </motion.div>

          {/* Center Column: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className="hover:text-yellow-400 transition"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-yellow-400 transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="mt-3 flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-yellow-400 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaInstagram size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Jay Cell Therapeutics. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
