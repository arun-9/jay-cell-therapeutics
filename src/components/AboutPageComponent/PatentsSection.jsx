import { motion } from "framer-motion";

const patents = [
  {
    title: "Nanoparticle-Based Drug Delivery System",
    filingDate: "2023-08-15",
    status: "Granted",
    description:
      "A novel drug delivery system utilizing nanoparticles to improve bioavailability and target specificity."
  },
  {
    title: "Biodegradable Polymer for Tissue Engineering",
    filingDate: "2024-02-10",
    status: "Pending",
    description:
      "A biodegradable polymer scaffold designed for tissue regeneration applications."
  }
];

export default function PatentsSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Patents
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {patents.map((patent, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{patent.title}</h3>
              <p className="text-gray-600 mb-1">
                <strong>Filing Date:</strong> {patent.filingDate}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Status:</strong> {patent.status}
              </p>
              <p className="text-gray-700">{patent.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* future enhnacements : Would you like additional features like filtering or a search bar? */
