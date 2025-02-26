import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What types of therapy do you offer at Jay Cell?",
    answer:
      "We offer a range of therapeutics, including regenerative medicine, cell therapy, and personalized treatments tailored to individual needs."
  },
  {
    question: "How do I know if therapy is right for me?",
    answer:
      "If you are facing health challenges or seeking innovative treatments, a consultation with our specialists can help determine the best approach for you."
  },
  {
    question: "What should I expect during my first consultation?",
    answer:
      "Your first consultation will involve a comprehensive assessment of your condition, medical history, and potential treatment options available at Jey Cell."
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes, we offer online consultations for patients who are unable to visit our clinic in person."
  },
  {
    question: "How long does a typical session last?",
    answer:
      "A standard session typically lasts between 45 minutes to an hour, depending on the type of therapy or consultation."
  }
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
