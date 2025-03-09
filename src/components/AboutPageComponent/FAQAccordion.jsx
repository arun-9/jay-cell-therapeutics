import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question:
      "What are the key differences between NK cell therapy and CAR-T cell therapy?",
    answer:
      "NK (Natural Killer) cell therapy utilizes innate immune cells that can recognize and kill tumor cells without prior sensitization, while CAR-T (Chimeric Antigen Receptor T) cell therapy uses genetically engineered T cells that are specifically designed to target cancer cells expressing a particular antigen. ",
  },
  {
    question:
      "How does CAR-NK cell therapy combine the advantages of both approaches?",
    answer:
      "CAR-NK cell therapy integrates the antigen-specific targeting ability of CAR-T cells with the natural cytotoxicity and safety profile of NK cells. By engineering NK cells with a chimeric antigen receptor (CAR), they gain enhanced specificity and persistence in targeting cancer cells while maintaining their ability to kill through innate mechanisms",
  },
  {
    question:
      "What are the latest advancements in improving CAR-NK cell therapy for solid tumors?",
    answer:
      "Recent advancements include genetic modifications to improve persistence (e.g., IL-15 secretion), strategies to overcome immunosuppressive signals (e.g., knocking down TGF-β signaling), and combination therapies with checkpoint inhibitors or monoclonal antibodies.",
  },
  {
    question:
      "Why is CAR-T cell therapy more effective in hematologic malignancies than in solid tumors?",
    answer:
      "CAR-T cells have shown remarkable success in treating blood cancers like leukemia and lymphoma because these malignancies present well-defined target antigens (e.g., CD19, BCMA) that are easily accessible.",
  },
  {
    question:
      "What are the advantages of using allogeneic NK cells over autologous CAR-T cells in cancer therapy?",
    answer:
      "NK cells can be pre-manufactured and stored for immediate use, whereas CAR-T therapy requires a time-consuming patient-specific manufacturing process.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (openIndex !== null) {
      const timer = setTimeout(() => {
        setOpenIndex(null);
      }, 5000); // Auto-collapse after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [openIndex]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-medium focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-hidden={openIndex !== index}
                className={`transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-screen opacity-100 p-4 border-t text-gray-600"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
