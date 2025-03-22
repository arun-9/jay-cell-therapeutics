const Pipeline = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Pipeline Chart */}
      <div className="flex justify-center">
        <img
          src="/file.cfm/80/docs/2024 10 24 - pipeline chart.png"
          alt="Pipeline Chart / Pipleline Table"
          className="w-full max-w-7xl h-auto"
        />
      </div>

      {/* Lead Programs Section */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-bold">Lead Programs</h2>
      </div>

      {/* NKX101 Section */}
      <div className="my-12">
        <h2 id="platform" className="text-2xl font-semibold text-center mb-6">
          NKX101
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <blockquote className="text-lg italic border-l-4 border-blue-500 pl-4 mb-4">
              Engineered to target NKG2D ligands
            </blockquote>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Opportunity to treat a variety of hematologic malignancies and
                solid tumors
              </li>
              <li>
                Targets of NKG2D are selectively over-expressed in cancer cells
              </li>
              <li>
                Native NK activation and tumor killing largely driven by NKG2D
                receptor
              </li>
              <li>
                Expression of the activating chimeric receptor is increased 10X
                relative to non-engineered NK cells
              </li>
              <li>
                OX40 selected based on superiority vs. other costimulatory
                domains
              </li>
              <li>
                Visit{" "}
                <a
                  href="https://clinicaltrials.gov/ct2/show/NCT04623944"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  ClinicalTrials.gov (NCT04623944)
                </a>{" "}
                for more details.
              </li>
            </ul>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/file.cfm/80/docs/NKX101.jpg"
              alt="NKX101 Cell Structure"
              className="rounded-lg shadow-lg w-full max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* NKX019 Section */}
      <div className="my-12">
        <h2 className="text-2xl font-semibold text-center mb-6">NKX019</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <blockquote className="text-lg italic border-l-4 border-blue-500 pl-4 mb-4">
              Engineered to target CD19
            </blockquote>
            <p className="text-gray-700 mb-4">
              For patients with many B-cell malignancies, there remains a
              substantial unmet medical need today.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Large opportunity remains despite approved autologous CAR-T
                products:
              </li>
              <ul className="list-disc pl-5 text-gray-600">
                <li>
                  Gr3+ cytokine release syndrome (CRS):{" "}
                  <span className="font-semibold">13-49%</span>
                </li>
                <li>
                  Gr3+ neurotoxicity:{" "}
                  <span className="font-semibold">18-31%</span>
                </li>
                <li>Limited number of specialized sites can treat</li>
              </ul>
              <li>Compelling commercial opportunity</li>
              <li>
                A Phase 1 clinical trial of NKX019 is currently enrolling. Visit{" "}
                <a
                  href="https://clinicaltrials.gov/ct2/show/NCT05020678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  ClinicalTrials.gov (NCT05020678)
                </a>{" "}
                for details.
              </li>
            </ul>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/file.cfm/80/docs/NKX019.jpg"
              alt="NKX019 Cell Structure"
              className="rounded-lg shadow-lg w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipeline;
