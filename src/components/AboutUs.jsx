import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMicroscope, FaFlask } from "react-icons/fa"; // Importing Icons

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Outer 1-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Column 1 (Single Row) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">
              About Us
            </h2>
            <p className="text-lg text-gray-700">
              We are dedicated to realizing the potential of natural killer (NK)
              cells for cancer treatment. Our proprietary technology enhances
              their ability to detect and eliminate tumor cells.
            </p>
            <Link
              to="/about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Learn More →
            </Link>
          </motion.div>

          {/* Column 2 (Two Rows) */}
          <div className="grid grid-rows-2 gap-6">
            {/* Row 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-4"
            >
              <FaMicroscope className="text-blue-600 text-5xl" /> {/* Icon */}
              <div>
                <h3 className="text-xl font-semibold text-blue-600">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  Advancing NK cell technology to improve cancer treatment.
                </p>
              </div>
            </motion.div>

            {/* Row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-4"
            >
              <FaFlask className="text-blue-600 text-5xl" /> {/* Icon */}
              <div>
                <h3 className="text-xl font-semibold text-blue-600">
                  Our Technology
                </h3>
                <p className="text-gray-600">
                  Proprietary NK cell engineering for enhanced tumor targeting.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
