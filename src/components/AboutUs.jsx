import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-blue-600 font-semibold">About JayCell</p>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Each cell therapy we develop is uniquely designed for each patient,
            harnessing the power of the immune system to target and attack
            cancer.
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our broad and diversified pipeline includes research to discover
            novel ways to improve patients’ responses to cell therapy, different
            cell therapy modalities, and ways to increase the speed of our
            manufacturing efforts.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="/about"
          className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-medium hover:bg-blue-700 transition-all"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Learn More About Us
        </motion.a>
      </div>
    </section>
  );
};

export default AboutUs;
