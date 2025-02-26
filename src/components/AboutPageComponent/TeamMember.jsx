import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";

const team = [
  {
    image: "/team-item-1.jpg",
    name: "Dr. Emily Stevens",
    role: "Lead Therapist",
    delay: 0
  },
  {
    image: "/team-item-2.jpg",
    name: "Michael Carter",
    role: "Family Therapist",
    delay: 0.2
  },
  {
    image: "/team-item-3.jpg",
    name: "Sarah Martinez",
    role: "Child Therapist",
    delay: 0.4
  },
  {
    image: "/team-item-4.jpg",
    name: "Dr. James Mcavoy",
    role: "Clinical Psychologist",
    delay: 0.6
  }
];

// Individual Team Member Component
// eslint-disable-next-line react/prop-types
const TeamMember = ({ image, name, role, delay }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }} // Hover effect
    >
      {/* Responsive Image Container */}
      <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }} // Slight zoom-in on hover
        />
      </div>

      <h5 className="text-lg font-bold mt-4">{name}</h5>
      <p className="text-gray-500">{role}</p>

      <div className="flex justify-center space-x-3 mt-3 text-gray-600">
        <FaFacebookF className="cursor-pointer hover:text-blue-600" />
        <FaTwitter className="cursor-pointer hover:text-black" />
        <FaLinkedinIn className="cursor-pointer hover:text-blue-500" />
        <FaInstagram className="cursor-pointer hover:text-pink-600" />
      </div>
    </motion.div>
  );
};

// Main Team Section Component
const TeamSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-600">Our Teams</p>
          <h3 className="text-3xl font-bold">Meet Our Expert Therapists</h3>
          <p className="text-gray-500">
            A team of licensed therapists focused on your mental health and
            growth.
          </p>
        </motion.div>

        {/* Animated Team Members Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

/*Future Enhancements : Adding Modal Popups for Therapist Details in TeamSection */
