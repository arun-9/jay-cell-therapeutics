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
          Welcome to The JayCell
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Jay Cell Therapeutics is a cutting-edge biotech company dedicated to
          advancing NK cell-based immunotherapies for cancer. Leveraging
          innovative genetic engineering, we develop potent CAR-NK cell
          therapies to target both hematologic and solid tumors. Our research
          integrates CRISPR-based gene editing, iPSC-derived NK cells, and novel
          checkpoint inhibition strategies to enhance persistence, efficacy, and
          safety.
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
              At JayCell, our mission is mission is to develop innovative,
              off-the-shelf CAR-NK and CAR-T cell therapies to revolutionize
              cancer treatment worldwide.
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
              Our vision is to become a global leader in next-generation cell
              therapies, pioneering safe, effective, and accessible NK and CAR-T
              treatments to cure cancer.
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
