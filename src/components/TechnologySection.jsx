import { motion } from "framer-motion";
import { FaDna, FaMicroscope, FaUserMd } from "react-icons/fa"; // Import Icons

const features = [
  {
    icon: <FaDna className="text-blue-500 text-6xl" />, // Styled Icon
    title: "Engineered & Enhanced NK Cells",
    description: "Enhancing NK cells for better tumor targeting."
  },
  {
    icon: <FaMicroscope className="text-green-500 text-6xl" />, // Styled Icon
    title: "Proprietary Expansion Technology",
    description: "Developing scalable expansion methods."
  },
  {
    icon: <FaUserMd className="text-yellow-500 text-6xl" />, // Styled Icon
    title: "Potential to Reach More Patients",
    description: "Ensuring broad accessibility of NK cell therapy."
  }
];

const TechnologySection = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
        Technology
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Floating Icon Effect */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              {feature.icon}
            </motion.div>

            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;
