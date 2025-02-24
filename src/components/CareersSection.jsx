import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CareersSection = () => {
  return (
    <section className="relative flex items-center justify-center py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <img
              src="/career-image.jpg"
              alt="Join Our Team"
              className="w-full rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl font-bold text-gray-800">Join Our Team</h2>
            <p className="mt-4 text-gray-600">
              We are an innovative company with a passion for bringing new
              solutions to cancer treatment. We welcome diversity and fresh
              perspectives.
            </p>

            {/* CTA Button */}
            <Link
              to="/careers"
              className="inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              Explore Careers →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
