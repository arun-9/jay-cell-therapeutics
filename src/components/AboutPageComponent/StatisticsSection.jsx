import { motion } from "framer-motion";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Trophy, Users, Heart, ShieldCheck } from "lucide-react";

// eslint-disable-next-line react/prop-types
const CounterItem = ({ icon: Icon, count, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transition-all"
    >
      <div className="bg-blue-500 p-4 rounded-full text-white">
        <Icon size={40} />
      </div>
      <h3 className="text-4xl font-bold mt-3">
        {inView && <CountUp start={0} end={count} duration={2} />}
      </h3>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

const StatisticsSection = () => {
  const stats = [
    { icon: Trophy, count: 20, label: "Years of Experience" },
    { icon: Users, count: 2000, label: "Happy Clients" },
    { icon: Heart, count: 46, label: "Therapy Sessions" },
    { icon: ShieldCheck, count: 15, label: "Certifications" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 py-12 bg-gray-100">
      {stats.map((stat, index) => (
        <CounterItem key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatisticsSection;
