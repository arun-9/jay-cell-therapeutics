import { FaBookOpen } from "react-icons/fa";
import { MdPictureAsPdf, MdSlideshow } from "react-icons/md";

const NavSecondary = () => {
  return (
    <nav className="bg-gray-100 p-4 shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex space-x-6">
        <a
          href="#present"
          className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded flex items-center gap-2"
        >
          <MdSlideshow className="text-blue-600" />
          Presentations & Posters
        </a>
        <a
          href="#pubs"
          className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded flex items-center gap-2"
        >
          <FaBookOpen className="text-blue-600" />
          Publications & References
        </a>
      </div>
    </nav>
  );
};

const presentations = [
  {
    title:
      "Patient-Tailored Treatment with the CD19-Directed CAR NK Cell Therapy, NKX019 is Safe and Feasible",
    pdfLink: "/file.cfm/75/docs/nkx019_poster.pdf",
    conference: "Pan Pacific Lymphoma Conference",
    date: "July 2024",
    type: "Poster Presentation"
  },
  {
    title:
      "NKX101, an allogeneic off-the-shelf NKG2D CAR-NK cell therapy, has potent in vitro cytotoxicity",
    pdfLink: "/file.cfm/75/docs/nkx101_poster.pdf",
    conference: "AACR",
    date: "April 2024",
    type: "Poster Presentation"
  }
];

// eslint-disable-next-line react/prop-types
const PosterPresentation = ({ title, pdfLink, conference, date, type }) => (
  <div className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
      <MdPictureAsPdf className="text-red-500" />
      <a
        href={pdfLink}
        target="_blank"
        className="text-blue-600 hover:text-blue-800"
      >
        {title}
      </a>
    </h3>
    <p className="text-sm text-gray-600">
      {type} | <strong>{conference}</strong> | {date}
    </p>
  </div>
);

const Presentations = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          id="present"
          className="text-center text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2"
        >
          <MdSlideshow className="text-blue-600" />
          Presentations & Posters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {presentations.map((poster, index) => (
            <PosterPresentation key={index} {...poster} />
          ))}
        </div>
      </div>
    </section>
  );
};

const publications = [
  {
    title:
      "The Rise of Allogeneic Natural Killer Cells As a Platform for Cancer Immunotherapy",
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
  }
];

const Publications = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          id="pubs"
          className="text-center text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2"
        >
          <FaBookOpen className="text-blue-600" />
          Publications & References
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="p-5 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {pub.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600">{pub.journal}</p>
              <p className="text-xs text-gray-500">
                {pub.author} | {pub.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PublicationsPage = () => {
  return (
    <div>
      <NavSecondary />
      <Presentations />
      <Publications />
    </div>
  );
};

export default PublicationsPage;
