import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <motion.div
      className="w-full bg-gray-900 text-white py-2 px-4 flex justify-between items-center text-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Location */}
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-red-500" />
        <span>1234 Therapy St, Wellness City</span>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2">
        <FaEnvelope className="text-blue-400" />
        <span>contact@jeycell.com</span>
      </div>
    </motion.div>
  );
};

export default TopBar;
