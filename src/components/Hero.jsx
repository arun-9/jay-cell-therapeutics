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
    <div>
      <div className="relative flex flex-col items-center justify-center h-screen text-white">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/your-background-image.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-600/60 to-blue-400/50"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl font-extrabold backdrop-blur-md bg-white/10 p-4 rounded-xl shadow-lg">
            The Power of <br />
            <span className="text-yellow-300">
              <Typewriter
                words={[
                  "Natural Killer Cells",
                  "Immune System",
                  "Cell Therapy"
                ]}
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
          className="relative mt-8 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-xl hover:bg-yellow-500 transition-all duration-300"
        >
          Scroll to Content ↓
        </motion.button>

        {/* Scroll Target */}
        <div id="pagedown" className="mt-20"></div>
      </div>
    </div>
  );
};

export default HeroSection;
