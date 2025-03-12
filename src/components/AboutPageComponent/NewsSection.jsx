import { useState } from "react";
import {
  FaNewspaper,
  FaMicroscope,
  FaBriefcase,
  FaFlask,
  FaDna,
  FaHospital,
  FaUserMd,
  FaCapsules,
  FaVials,
  FaHeartbeat,
  FaStethoscope,
  FaNotesMedical
} from "react-icons/fa";

const newsData = [
  {
    id: 1,
    title: "Jey Cell Therapeutics Receives Seed Funding for $10 Million",
    description:
      "Jey Cell Therapeutics has successfully secured $10 million in seed funding to accelerate research and expand its innovative therapeutics pipeline.",
    category: "Funding",
    icon: <FaNewspaper />
  },
  {
    id: 2,
    title: "Our Research Using NK Cells Shows Promising Results",
    description:
      "Recent pre-clinical studies using NK cells have shown remarkable results, paving the way for potential breakthrough treatments in immunotherapy.",
    category: "Research",
    icon: <FaMicroscope />
  },
  {
    id: 3,
    title: "Jey Cell Therapeutics Acquires Poseida Therapeutics",
    description:
      "Jey Cell Therapeutics has completed the acquisition of Poseida Therapeutics, strengthening its position in the cell therapy market.",
    category: "Acquisition",
    icon: <FaBriefcase />
  },
  {
    id: 4,
    title: "New Lab Facility Opens for Advanced Cell Therapy Research",
    description:
      "A state-of-the-art laboratory dedicated to advanced cell therapy research has been inaugurated.",
    category: "Facility",
    icon: <FaFlask />
  },
  {
    id: 5,
    title: "Breakthrough in Genetic Engineering for Cancer Treatment",
    description:
      "Jey Cell scientists develop a novel gene-editing technique for targeting cancer cells more effectively.",
    category: "Research",
    icon: <FaDna />
  },
  {
    id: 6,
    title: "Partnership with Major Hospital to Expand Clinical Trials",
    description:
      "Jey Cell collaborates with leading hospitals to accelerate clinical trials for new therapies.",
    category: "Partnership",
    icon: <FaHospital />
  },
  {
    id: 7,
    title: "Expert Oncologist Joins Jey Cell Advisory Board",
    description:
      "A renowned oncologist has joined our advisory board to guide future research strategies.",
    category: "Advisory",
    icon: <FaUserMd />
  },
  {
    id: 8,
    title: "First Successful Human Trial of Novel Immunotherapy",
    description:
      "Promising early results from the first human trials of our next-generation immunotherapy.",
    category: "Clinical Trial",
    icon: <FaCapsules />
  },
  {
    id: 9,
    title: "New Drug Formulation Shows Higher Efficacy in Lab Tests",
    description:
      "A newly developed drug formulation demonstrates increased potency in preclinical studies.",
    category: "Research",
    icon: <FaVials />
  },
  {
    id: 10,
    title: "Jey Cell Expands Operations to Europe",
    description:
      "A new European headquarters has been established to enhance global research collaborations.",
    category: "Expansion",
    icon: <FaHeartbeat />
  },
  {
    id: 11,
    title: "Collaboration with AI Firm to Enhance Drug Discovery",
    description:
      "Jey Cell partners with an AI-driven biotech firm to accelerate drug discovery and development.",
    category: "Technology",
    icon: <FaStethoscope />
  },
  {
    id: 12,
    title: "FDA Fast-Tracks Jey Cell's New Therapy for Approval",
    description:
      "Regulatory authorities expedite the review process for our latest breakthrough therapy.",
    category: "Regulation",
    icon: <FaNotesMedical />
  }
];

const categories = ["All", ...new Set(newsData.map((news) => news.category))];

const NewsSection = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const filteredNews =
    selectedCategory === "All"
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory);

  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>

      <div className="mb-6 flex justify-center">
        <div className="relative">
          <select
            className="p-3 border rounded-lg shadow-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.slice(0, visibleCount).map((news) => (
          <div
            key={news.id}
            className="bg-white border rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-blue-600 text-2xl">{news.icon}</div>
              <h3 className="text-lg font-semibold">{news.title}</h3>
            </div>
            <p className="text-sm text-gray-600">
              {expanded === news.id
                ? news.description
                : news.description.substring(0, 60) + "..."}
            </p>
            <button
              onClick={() => toggleExpand(news.id)}
              className="mt-3 text-blue-600 font-medium hover:underline"
            >
              {expanded === news.id ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>

      {visibleCount < filteredNews.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount(visibleCount + 6)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsSection;

/*import { useState } from "react";
import { FaNewspaper, FaMicroscope, FaBriefcase } from "react-icons/fa";

const newsData = [
  {
    id: 1,
    title: "Jey Cell Therapeutics Receives Seed Funding for $10 Million",
    description:
      "Jey Cell Therapeutics has successfully secured $10 million in seed funding to accelerate research and expand its innovative therapeutics pipeline.",
    category: "Funding",
    icon: <FaNewspaper />
  },
  {
    id: 2,
    title: "Our Research Using NK Cells Shows Promising Results",
    description:
      "Recent pre-clinical studies using NK cells have shown remarkable results, paving the way for potential breakthrough treatments in immunotherapy.",
    category: "Research",
    icon: <FaMicroscope />
  },
  {
    id: 3,
    title: "Jey Cell Therapeutics Acquires Poseida Therapeutics",
    description:
      "Jey Cell Therapeutics has completed the acquisition of Poseida Therapeutics, strengthening its position in the cell therapy market.",
    category: "Acquisition",
    icon: <FaBriefcase />
  }
];

const NewsSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white border rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-blue-600 text-2xl">{news.icon}</div>
              <h3 className="text-lg font-semibold">{news.title}</h3>
            </div>
            <p className="text-sm text-gray-600">
              {expanded === news.id
                ? news.description
                : news.description.substring(0, 60) + "..."}
            </p>
            <button
              onClick={() => toggleExpand(news.id)}
              className="mt-3 text-blue-600 font-medium hover:underline"
            >
              {expanded === news.id ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;*/
