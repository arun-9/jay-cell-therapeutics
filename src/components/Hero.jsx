import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  // Smooth Scroll Function
  const handleScroll = () => {
    const target = document.getElementById("pagedown");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/jay.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Overlay for Readability *
      <div className="absolute inset-0 bg-black/50"></div>/}

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center px-6"
      >
        <h1 className="text-5xl font-extrabold backdrop-blur-md bg-white/10 p-4 rounded-xl shadow-lg">
          The Power of <br />
          <span className="text-yellow-300">
            <Typewriter
              words={["Natural Killer Cells", "Immune System", "Cell Therapy"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
            />
          </span>
        </h1>
      </motion.div>

      {/* Interactive Scroll Button */}
      <motion.button
        onClick={handleScroll}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-28 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-xl hover:bg-yellow-500 transition-all duration-300"
      >
        Scroll to Content ↓
      </motion.button>

      {/* Scroll Target */}
      <div id="pagedown" className="mt-20"></div>
    </div>
  );
};

export default HeroSection;
