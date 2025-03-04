import {
  FaFlask,
  FaBolt,
  FaTools,
  FaChartBar,
  FaSnowflake,
  FaHandHoldingMedical
} from "react-icons/fa";
import { motion } from "framer-motion";

const manufacturingSteps = [
  {
    step: "1 | Collect & Isolate",
    description:
      "NK cells are collected from healthy donors using leukapheresis.",
    icon: <FaFlask className="text-blue-600 text-3xl" />
  },
  {
    step: "2 | Activate",
    description:
      "NK cell expansion is initiated with proprietary stimulatory cells.",
    icon: <FaBolt className="text-blue-600 text-3xl" />
  },
  {
    step: "3 | Engineer",
    description:
      "Expanded NK cells are genetically modified to express CAR and mbIL-15.",
    icon: <FaTools className="text-blue-600 text-3xl" />
  },
  {
    step: "4 | Expand",
    description:
      "NK cells undergo further expansion to enhance therapeutic potency.",
    icon: <FaChartBar className="text-blue-600 text-3xl" />
  },
  {
    step: "5 | Cryopreserve",
    description:
      "Final NK cell product is cryopreserved for long-term storage and distribution.",
    icon: <FaSnowflake className="text-blue-600 text-3xl" />
  },
  {
    step: "6 | Thaw & Administer",
    description:
      "NK cells are thawed and prepared for off-the-shelf patient administration.",
    icon: <FaHandHoldingMedical className="text-blue-600 text-3xl" />
  }
];

const ManufacturingSteps = () => {
  return (
    <motion.div
      className="mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {manufacturingSteps.map((step, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="mb-4">{step.icon}</div>
          <h3 className="text-lg font-semibold text-blue-900">{step.step}</h3>
          <p className="mt-2 text-gray-700">{step.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ManufacturingSteps;
