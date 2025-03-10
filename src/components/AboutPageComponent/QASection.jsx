import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const qaData = [
  {
    category: "Technical Insights",
    question:
      "How does the nanoparticle-based drug delivery system enhance bioavailability?",
    answer:
      "The system uses engineered nanoparticles to improve solubility, protect the drug from degradation, and enable targeted delivery to specific cells, thereby enhancing bioavailability."
  },
  {
    category: "Research Queries",
    question:
      "What are the advantages of biodegradable polymers in tissue engineering?",
    answer:
      "Biodegradable polymers break down naturally within the body, eliminating the need for surgical removal. They also provide temporary structural support while tissue regeneration occurs."
  }
];

export default function QASection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [filter, setFilter] = useState("All");

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredData =
    filter === "All"
      ? qaData
      : qaData.filter((item) => item.category === filter);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mb-6 flex justify-center space-x-4">
          {["All", "Technical Insights", "Research Queries"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-xl transition ${
                filter === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full p-4 flex justify-between items-center text-left bg-gray-100 hover:bg-gray-200 transition"
                onClick={() => toggleAnswer(index)}
              >
                <span className="font-semibold">
                  [{item.category}] {item.question}
                </span>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white text-gray-700 border-t border-gray-300">
                  {item.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Here are some additional categories you might consider for the Q&A section:

Patent Information – Questions related to the patenting process, intellectual property rights, and legal aspects.
Clinical Applications – Queries on how the research and patents translate into real-world medical or therapeutic applications.
Manufacturing & Scale-up – Questions about the production process, scalability, and industrial applications.
Regulatory Compliance – Information on FDA/EMA approvals, compliance with industry regulations, and ethical considerations.
Innovation & Future Trends – Insights on upcoming trends, emerging technologies, and the next steps in research.
Would you like me to add any of these categories to your Q&A filtering system?  */
