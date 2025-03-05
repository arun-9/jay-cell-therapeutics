import { motion } from "framer-motion";
//import { FaAward, FaHeart, FaSmile, FaSketch } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-gray-800"
        >
          Welcome to The Jay Cell
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          It is a trusted counseling and therapy center, staffed by experienced
          professionals dedicated to listening, supporting, and guiding you. We
          believe in everyone potential to heal and grow with the right care.
        </motion.p>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <img
            src="/section-about.jpg"
            alt="Jay Cell"
            className="rounded-lg shadow-lg w-full max-w-lg"
          />
        </motion.div>

        {/* Mission & Vision */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              At Jay Cell, our mission is to provide compassionate, personalized
              mental health care that helps individuals and families overcome
              challenges.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              Our vision is to be a leading center for mental health, where
              everyone has access to the care and support they need.
            </p>
          </motion.div>
        </div>

        {/* Counter Section */}
        {/*<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <CounterItem
            icon={<FaSketch />}
            number={20}
            label="Years of Experience"
          />
          <CounterItem
            icon={<FaSmile />}
            number={2000}
            label="Happy Customers"
          />
          <CounterItem
            icon={<FaHeart />}
            number={46}
            label="Therapy Sessions"
          />
          <CounterItem
            icon={<FaAward />}
            number={15}
            label="Certifications/Awards"
          />
        </div>*/}
      </div>
    </section>
  );
};

{
  /*const CounterItem = ({ icon, number, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
    >
      <div className="text-4xl text-yellow-400">{icon}</div>
      <h4 className="text-3xl font-bold mt-2">{number}+</h4>
      <p className="text-gray-600 mt-1">{label}</p>
    </motion.div>
  );
};*/
}

export default AboutSection;
