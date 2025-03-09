import { motion } from "framer-motion";
//import ManufacturingSteps from "./ManufacturingSteps";

const TechnologyContent = () => {
  return (
    <>
      {/* Technology Section */}
      <section className="bg-gray-100 py-12 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">Our Technology</h1>
          <blockquote className="mt-4 border-l-4 border-blue-500 pl-4">
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Advancing Cell-Based Therapies with Innovative Engineering for
              Targeted Treatment.
            </motion.p>
          </blockquote>
        </motion.div>
      </section>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[500px] md:h-[600px] lg:h-[700px]"
        style={{ backgroundImage: "url('/home_heroimage.jpg')" }}
      ></section>

      {/* Content Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Power of Natural Killer Cells
              </h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Jay Cell Therapeutics is pioneering NK cell therapy to
                revolutionize cancer treatment. Unlike traditional approaches,
                our next-generation technologies enhance the natural ability of
                NK cells to eliminate cancer cells efficiently and safely.
              </p>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/nk_cell_therapy.jpg"
                alt="NK Cell Therapy"
                className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg object-cover"
              />
            </motion.div>
          </div>
          {/* Feature Comparison Table */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-blue-900 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Jay Cell Therapeutics Advanced CAR-NK Therapy
          </motion.h2>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse bg-white shadow-lg">
              <thead>
                <tr className="bg-blue-900 text-white text-sm md:text-base">
                  <th className="p-4">Feature</th>
                  <th className="p-4">CAR-T</th>
                  <th className="p-4">Allo CAR-T</th>
                  <th className="p-4">NK Cell</th>
                  <th className="p-4">CAR-NK</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t even:bg-gray-50">
                  <td className="p-4 font-semibold">
                    Improved Solid Tumor Activity
                  </td>
                  <td className="p-4 text-center">✗</td>
                  <td className="p-4 text-center">✗</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓✓</td>
                </tr>
                <tr className="border-t even:bg-gray-50">
                  <td className="p-4 font-semibold">Low GVHD Risk</td>
                  <td className="p-4 text-center">✗</td>
                  <td className="p-4 text-center">TBD</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓✓</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Manufacturing Process Section */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-blue-900 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Off-the-Shelf Manufacturing
          </motion.h2>
          <p className="mt-4 text-lg text-gray-700 text-center leading-relaxed">
            Jay Cell Therapeutics proprietary platform enables scalable,
            allogeneic NK cell production for rapid, off-the-shelf use.
          </p>

          {/* Manufacturing Steps */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="/manufacturing_process.jpg"
              alt="Manufacturing Process"
              className="rounded-lg shadow-lg w-full max-w-4xl object-cover"
            />
          </motion.div>
          {/*<ManufacturingSteps />*/}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-sm md:text-base mt-6">
            {[
              {
                step: "1 | Collect & Isolate",
                description:
                  "NK cells collected from healthy donors by leukapheresis.",
              },
              {
                step: "2 | Activate",
                description:
                  "NK cell expansion using proprietary stimulatory cells.",
              },
              {
                step: "3 | Engineer",
                description:
                  "Expanded NK cells are transduced to express mbIL-15 and CAR.",
              },
              {
                step: "4 | Expand",
                description: "Continued expansion driven by mbIL-15.",
              },
              {
                step: "5 | Cryopreserve",
                description:
                  "Harvesting and cryopreservation of final cell product.",
              },
              {
                step: "6 | Thaw & Administer",
                description:
                  "NK product candidate is thawed for off-the-shelf administration to patients.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="p-4 border rounded-lg shadow-md bg-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="font-semibold text-blue-900">{step.step}</p>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhancing the Immune Response Against Cancer */}
      {/* Enhancing the Immune Response Against Cancer */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Enhancing the Immune Response Against Cancer
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            In cancer patients, the natural immune response is often
            ineffective. Jay Cell Therapeutics is pioneering a breakthrough in
            <b> allogeneic, off-the-shelf NK cell-based therapies </b> that are
            designed to amplify and optimize the bodys defense mechanisms.
          </motion.p>

          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              {
                title: "Enhanced Tumor Recognition",
                description:
                  "Advanced NK cell engineering improves precision in identifying and attacking cancer cells.",
              },
              {
                title: "Scalable & Abundant Supply",
                description:
                  "Allogeneic NK cells are expanded efficiently for off-the-shelf availability.",
              },
              {
                title: "Longer Persistence & Activity",
                description:
                  "Optimized persistence allows NK cells to remain active in the body for sustained response.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-blue-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="mt-10 text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Our mission is to create a
            <b> versatile and powerful NK cell therapy </b> that can be
            seamlessly integrated with existing treatments,
            <b> improving patient outcomes </b>
            across a wide range of allogeneic applications.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default TechnologyContent;
