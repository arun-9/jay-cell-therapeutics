import { useState } from "react";

const PublicationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const publications2021_2023 = [
    {
      title:
        "Expanded natural killer cells potentiate the antimyeloma activity of daratumumab, lenalidomide, and dexamethasone in a myeloma xenograft model",
      journal: "Cancer Immunology, Immunotherapy · Nov 16, 2022",
      funding:
        "National Research Foundation of Korea, 2018R1A5A2024181, Ministry of Education, Science and Technology, 2021R1A2B5B0100214911",
      link: "https://link.springer.com/article/10.1007/s00262-022-03322-1"
    },
    {
      title:
        "A novel method for clinical scale production of natural killer cells from clonal master induced pluripotent stem cells with CISH knockout for next generation, off-the-shelf cancer immunotherapy",
      journal:
        "Proceedings of the American Association for Cancer Research Annual Meeting 2023",
      funding: "ISSN: 1538-7445",
      link: "https://aacrjournals.org/cancerres/article/83/7_Supplement/2919/720783"
    },
    {
      title:
        "Natural killer cell therapy potentially enhances the antitumor effects of bevacizumab plus irinotecan in a glioblastoma mouse model",
      journal: "Frontiers in Immunology · Jan 10, 2023",
      funding:
        "Grant Number: HCRI19011, Chonnam National University Hwasun Hospital Institute for Biomedical Science",
      link: "https://www.frontiersin.org/articles/10.3389/fimmu.2022.1009484/full"
    },
    {
      title:
        "Targeting hematological malignancies and solid tumors with switchable chimeric antigen receptor-engineered iPSC-derived natural killer cells",
      journal: "Cancer Research · June 15, 2022",
      funding: "ISSN: 1538-7445",
      link: "https://aacrjournals.org/cancerres/article/82/12_Supplement/559/701328"
    },
    {
      title:
        "Novel IL-15 dendritic cells have a potent immunomodulatory effect in immunotherapy of multiple myeloma",
      journal: "Translational Oncology · June 1, 2022",
      funding:
        "National Research Foundation of Korea (NRF) grant funded by the Korea government (NRF-2020R1A5A2031185, NRF-2020R1A2C2010098)",
      link: "https://www.sciencedirect.com/science/article/pii/S1936523322000754"
    },
    {
      title:
        "Expanded natural killer cells with daratumumab, lenalidomide and dexamethasone combination potentiates antimyeloma activity in a myeloma xenograft model",
      journal: "Clinical Lymphoma Myeloma and Leukemia · October 1, 2021",
      funding:
        "Cancer Immunology, Immunotherapy volume 72, pages1233–1246 (2023)",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S2152265021021406"
    },
    {
      title:
        "Expansion of cytotoxic natural killer cells in multiple myeloma patients using K562 cells expressing OX40 ligand and membrane-bound IL-18 and IL-21",
      journal: "Cancer Immunology, Immunotherapy · June 20, 2021",
      funding:
        "National Research Foundation of Korea (NRF), funded by the Ministry of Education, Science and Technology (2018R1A2B6006200, 2020R1A2C2010098)",
      link: "https://link.springer.com/article/10.1007/s00262-021-02982-9"
    },
    {
      title:
        "Expanded natural killer cells augment the antimyeloma effect of daratumumab, bortezomib, and dexamethasone in a mouse model",
      journal: "Cellular & Molecular Immunology · July 2021",
      funding: "ISSN: 2042-0226",
      link: "https://www.nature.com/articles/s41423-021-00686-9"
    },
    {
      title:
        "A combination of immunoadjuvant nanocomplexes and dendritic cell vaccines in the presence of immune checkpoint blockade for effective cancer immunotherapy",
      journal: "Cellular & Molecular Immunology · June 2021",
      funding: "ISSN: 2042-0226",
      link: "https://www.nature.com/articles/s41423-021-00666-z"
    },
    {
      title:
        "Potent anti-myeloma efficacy of dendritic cell therapy in combination with pomalidomide and programmed death-ligand 1 blockade in a preclinical model of multiple myeloma",
      journal: "Cancer Immunology, Immunotherapy · January 2021",
      funding:
        "National Research Foundation of Korea (NRF), funded by the Ministry of Education, Science, and Technology (2018R1A5A2024181, NRF-2018R1C1B5041536, NRF-2020R1A2C2010098)",
      link: "https://link.springer.com/article/10.1007/s00262-020-02654-0"
    }
  ];

  const publications2017_2020 = [
    {
      title:
        "A Combination Therapy with Dendritic Cells, Pomalidomide and Programmed Death-Ligand 1 Blockade Exerts a Potent Antitumor Immunity in a Murine Model of Multiple Myeloma",
      source: "Blood | American Society of Hematology",
      date: "Nov 13, 2019",
      volume: "Volume 134, Issue Supplement_1",
      link: "https://ashpublications.org/blood/article/134/Supplement_1/1819/427746/A-Combination-Therapy-with-Dendritic-Cells"
    },
    {
      title: "Cellular immunotherapy in multiple myeloma",
      source: "The Korean journal of internal medicine",
      date: "September 2019",
      funding:
        "National Research Foundation of Korea (NRF), funded by the Korea government (MSIT), grants (NRF-2018R1C1B5041536, 2018R1A5A2024181)",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6718748/"
    },
    {
      title:
        "PS1357 FITNESS SIGNATURES IN MULTIPLE MYELOMA PROGRESSION AND RESISTANCE",
      source: "HemaSphere, Immunotherapy",
      date: "June 1, 2019",
      funding:
        "National Research Foundation of Korea, 2018R1A5A2024181, Ministry of Education, Science and Technology, 2021R1A2B5B0100214911",
      link: "https://journals.lww.com/hemasphere/Abstract/2019/06001/PS1357_FITNESS_SIGNATURES_IN_MULTIPLE_MYELOMA.1242.aspx"
    },
    {
      title:
        "Enhancement of Antitumor Immunity Using Dendritic Cells Combined with Lenalidomide and Programmed Death Ligand-1 Blockade in Multiple Myeloma Mouse Model",
      source: "Blood | American Society of Hematology",
      date: "Nov 29, 2018",
      volume: "Volume 132, Issue Supplement 1",
      link: "https://ashpublications.org/blood/article/132/Supplement%201/3194/263531/Enhancement-of-Antitumor-Immunity-Using-Dendritic"
    },
    {
      title:
        "Synergistic antimyeloma activity of dendritic cells and pomalidomide in a murine myeloma model",
      source: "Frontiers in Immunology",
      date: "August 3, 2018",
      funding:
        "National Research Foundation of Korea (NRF), funded by the Ministry of Education, Science, and Technology. Grants (2015R1D1A1A09057809, 2018R1A5A2024181, NRF-2018R1C1B5041536)",
      link: "https://www.frontiersin.org/articles/10.3389/fimmu.2018.01798/full"
    },
    {
      title:
        "Lenalidomide and programmed death-1 blockade synergistically enhances the effects of dendritic cell vaccination in a model of murine myeloma",
      source: "Frontiers in Immunology",
      date: "June 18, 2018",
      funding:
        "National Research Foundation of Korea, 2018R1A5A2024181, Ministry of Education, Science and Technology",
      link: "https://www.frontiersin.org/articles/10.3389/fimmu.2018.01370/full"
    },
    {
      title:
        "Synergistic anti-myeloma activity by combination of dendritic cells, pomalidomide and dexamethasone in a murine myeloma model",
      source: "EUROPEAN JOURNAL OF IMMUNOLOGY",
      date: "May 01, 2018",
      funding:
        "National Research Foundation of Korea, 2018R1A5A2024181, Ministry of Education, Science and Technology, Grants (2015R1D1A1A09057809, 2018R1A5A2024181, NRF-2018R1C1B5041536)",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6085413/"
    },
    {
      title:
        "Expanded natural killer cells potentiate the antimyeloma activity of daratumumab, lenalidomide, and dexamethasone in a myeloma xenograft model",
      source: "Blood | American Society of Hematology",
      date: "May 01, 2018",
      volume: "Volume 130, Supplement 1",
      link: "https://www.sciencedirect.com/science/article/pii/S0006497119859712"
    },
    {
      title:
        "Cytoplasmic Transduction Peptide-Fused Recombinant Tumor-Associated Antigens Elicit Potent Myeloma-Specific Cytotoxic T Lymphocytes By Loading Onto Dendritic Cells: Implications of Feasible Tumor Antigens for Clinical Application Against Multiple Myeloma",
      source: "Blood | American Society of Hematology",
      date: "Dec 07, 2017",
      volume: "Volume 130, Supplement 1",
      link: "https://www.sciencedirect.com/science/article/pii/S0006497119859712"
    },
    {
      title:
        "Multimodality Targeting of Dendritic Cell Vaccination Combined with Immunomodulatory Drug and Immune Checkpoint Blockade Has Synergistically Induced a Marked Tumor Regression By Modulating Tumor Microenvironment in a Murine Myeloma Model",
      source: "Blood | American Society of Hematology",
      date: "Dec 07, 2017",
      volume: "Volume 130, Issue Supplement 1",
      link: "https://ashpublications.org/blood/article/130/Supplement%201/5453/115783"
    }
  ];

  const allPublications = [...publications2021_2023, ...publications2017_2020];

  const getFilteredPublications = () => {
    switch (selectedCategory) {
      case "2021-2023":
        return publications2021_2023;
      case "2017-2020":
        return publications2017_2020;
      default:
        return allPublications;
    }
  };
  return (
    <div className="container mx-auto p-8">
      {/* Category Selector Tabs */}
      <div className="flex justify-center border-b border-gray-300 mb-6">
        {["All", "2021-2023", "2017-2020"].map((category) => (
          <button
            key={category}
            className={`px-6 py-3 text-lg font-medium border-b-4 transition ${
              selectedCategory === category
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Publications Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {getFilteredPublications().map((pub) => (
          <div
            key={pub.title}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {pub.title}
            </h3>
            {pub.journal && (
              <p className="text-sm text-gray-600">📜 {pub.journal}</p>
            )}
            {pub.source && (
              <p className="text-sm text-gray-700">
                📜 {pub.source} · {pub.date}
              </p>
            )}
            {pub.volume && (
              <p className="text-sm text-gray-500">📚 {pub.volume}</p>
            )}
            {pub.funding && (
              <p className="text-sm text-gray-500">🏛️ {pub.funding}</p>
            )}
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsPage;
