const publications = [
  {
    title:
      "The Rise of Allogeneic Natural Killer Cells As a Platform for Cancer Immunotherapy: Recent Innovations and Future Developments",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5450018/",
    journal: "Front Immunol",
    author: "Veluchamy et al",
    date: "May 2017"
  },
  {
    title:
      "Expanded and Activated Natural Killer Cells for Immunotherapy of Hepatocellular Carcinoma",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/27197065",
    journal: "Cancer Immunol Res",
    author: "Kamiya, Chang, Campana",
    date: "July 2016"
  },
  {
    title:
      "Ex Vivo-Expanded Natural Killer Cells Demonstrate Robust Proliferation in Vivo in High-Risk Relapsed Multiple Myeloma Patients",
    link: "https://pubmed.ncbi.nlm.nih.gov/25415285/",
    journal: "J Immunother",
    author: "Szmania et al",
    date: "January 2015"
  },
  {
    title:
      "Autonomous Growth and Increased Cytotoxicity of Natural Killer Cells Expressing Membrane-Bound Interleukin-15",
    link: "https://pubmed.ncbi.nlm.nih.gov/25006133/",
    journal: "Blood",
    author: "Imamura et al",
    date: "August 2014"
  },
  {
    title:
      "Clearance of Acute Myeloid Leukemia by Haploidentical Natural Killer Cells Is Improved Using IL-2 Diphtheria Toxin Fusion Protein",
    link: "https://pubmed.ncbi.nlm.nih.gov/24719405/",
    journal: "Blood",
    author: "Bachanova et al",
    date: "June 2014"
  },
  {
    title:
      "A Chimeric Receptor With NKG2D Specificity Enhances Natural Killer Cell Activation and Killing of Tumor Cells",
    link: "https://pubmed.ncbi.nlm.nih.gov/23302231/",
    journal: "Cancer Res",
    author: "Chang et al",
    date: "March 2013"
  },
  {
    title: "Natural Killer Cell Reprogramming With Chimeric Immune Receptors",
    link: "https://pubmed.ncbi.nlm.nih.gov/23296936/",
    journal: "Methods Mol Biol",
    author: "Shimasaki, Campana",
    date: "2013"
  },
  {
    title:
      "Cytotoxicity of Activated Natural Killer Cells Against Pediatric Solid Tumors",
    link: "https://pubmed.ncbi.nlm.nih.gov/20542985/",
    journal: "Clin Cancer Res",
    author: "Cho et al",
    date: "August 2010"
  },
  {
    title:
      "Genetic modification of primary natural killer cells overcomes inhibitory signals and induces specific killing of leukemic cells",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/15755898",
    journal: "Blood",
    author: "Imai, Iwamoto, Campana",
    date: "March 2008"
  },
  {
    title:
      "Natural Killer Cells May Be Scaled and Engineered as a Next Generation, Off-the-Shelf Cell Therapy for Cancer",
    link: "/file.cfm/76/docs/TragerNKReview2019.pdf",
    journal: "Cell & Gene Therapy Insights",
    author: "Trager",
    date: "October 2019"
  }
];

const Publications = () => {
  return (
    <div className="bg-gray-50 mt-8 mb-8 px-4">
      {/* Added bg-gray-50 for soft content background */}
      <div className="contentwrapper">
        <div className="widthwrapper">
          <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
            <a id="pubs" name="pubs" aria-hidden="true"></a>Publications &
            References
          </h2>
          <hr className="my-4 border-gray-200" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg shadow-sm mb-6 bg-white"
              >
                {/* Added bg-white for each card */}
                <p className="text-lg text-gray-800">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-500 hover:text-blue-700"
                  >
                    {pub.title}
                  </a>
                  <em className="block text-gray-600">{pub.journal}</em>
                  <small className="text-gray-500">
                    {pub.author}, {pub.date}
                  </small>
                </p>
                <hr className="my-4 border-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
