import { motion } from "framer-motion";

const PartnerWithUs = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-gray-800"
        >
          Partner with Jay Cell Therapeutics
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Join us in pioneering next-generation immunotherapies. We collaborate
          with research institutions, biotech firms, and investors to develop
          innovative CAR-NK and CAR-T therapies for cancer treatment.
        </motion.p>

        {/* Partnership Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Research Collaboration",
              desc: "Work with us on cutting-edge cell therapy research."
            },
            {
              title: "Investment Opportunities",
              desc: "Partner in funding and accelerating breakthrough therapies."
            },
            {
              title: "Clinical Development",
              desc: "Join our mission in bringing life-saving treatments to patients worldwide."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8"
        >
          <a
            href="/contact-us"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
