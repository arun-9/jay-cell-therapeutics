import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-left"
        >
          <p className="text-lg text-blue-600 font-semibold">
            CUTTING-EDGE OFF-THE-SHELF TREATMENTS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Our focus includes optimizing iPSC-derived NK cell manufacturing
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Jay Cell Therapeutics is committed to pioneering next-generation
            cellular immunotherapies, expanding into CAR-T cell research to
            develop synergistic treatment strategies for difficult-to-treat
            cancers.
          </p>
          <motion.a
            href="/contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-medium transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            <span className="relative group">
              Talk to our Scientists
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }} // Moves the icon slightly on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaArrowRight />
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <img
            src="/section-cta.png"
            alt="Healing Journey"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
