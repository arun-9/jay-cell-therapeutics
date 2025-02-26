import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John R.",
    location: "Los Angeles, CA",
    text: "The expertise and encouragement from Jay Cell made a significant difference in my life. The tailored approach and dedicated team helped me achieve my goals."
  },
  {
    name: "Emily T.",
    location: "Chicago, IL",
    text: "Thanks to Jay Cell’s exceptional team, I have gained valuable insights and tools to manage my stress effectively. The personalized care truly made a positive impact."
  },
  {
    name: "Michael L.",
    location: "Miami, FL",
    text: "I can't thank Jay Cell enough for their unwavering support. The personalized guidance has been crucial in my journey toward a more balanced life."
  },
  {
    name: "Sarah M.",
    location: "New York, NY",
    text: "I am incredibly grateful for the compassionate and professional care I received. The support from the team was instrumental in my healing journey."
  },
  {
    name: "David W.",
    location: "Seattle, WA",
    text: "Jay Cell’s holistic approach and exceptional service helped me navigate my challenges with ease and confidence."
  }
];

const TestimonialSlider = () => {
  return (
    <motion.section
      className="bg-gray-100 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3 className="text-3xl font-bold text-gray-800">
          What Our Clients Are Saying
        </h3>
        <p className="text-gray-600 mt-2">
          Hear firsthand accounts of healing and positive change.
        </p>
      </motion.div>

      <motion.div
        className="mt-8 max-w-6xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 }
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 4000 }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex justify-center text-yellow-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic">
                  {testimonial.text}
                </p>
                <div className="mt-4">
                  <h6 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h6>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default TestimonialSlider;
