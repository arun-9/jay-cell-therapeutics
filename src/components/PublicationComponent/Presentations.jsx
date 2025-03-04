// eslint-disable-next-line react/prop-types
const PosterPresentation = ({ title, pdfLink, conference, date, type }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white mb-6">
      {/* Added border-gray-200 for a light border around the card */}
      <p className="text-xl mb-2">
        <a
          href={pdfLink}
          target="_blank"
          className="block text-blue-600 hover:text-blue-800"
        >
          {title}
        </a>
      </p>
      <p className="text-sm text-gray-600">
        <small>
          {type} | <strong>{conference}</strong> | {date}
        </small>
      </p>
      <hr className="my-4 border-gray-200" />
    </div>
  );
};

const Presentations = () => {
  const posters = [
    {
      title:
        "Patient-Tailored Treatment with the CD19-Directed CAR NK Cell Therapy, NKX019 is Safe and Feasible, including Dose Optimization and Successful Retreatment",
      pdfLink: "/file.cfm/75/docs/nkarta_2024 pan pacific_nkx019 poster.pdf",
      conference: "Pan Pacific Lymphoma Conference",
      date: "July 2024",
      type: "Poster Presentation"
    },
    {
      title:
        "NKX101, an allogeneic off-the-shelf NKG2D CAR-NK cell therapy, has potent in vitro cytotoxicity against patient-derived AML leukemic stem cells and non-leukemic stem cell blasts",
      pdfLink:
        "/file.cfm/75/docs/nkarta_aacr_2024_nkx101 in vitro cytotoxicity_poster 3604.pdf",
      conference: "AACR",
      date: "April 2024",
      type: "Poster Presentation"
    },
    {
      title:
        "NKX101, an allogeneic off-the-shelf CAR NK cell therapy targeting NKG2D-Ls, has potent anti-leukemic activity alone or in combination with Ara-C",
      pdfLink:
        "/file.cfm/75/docs/nkarta_aacr 2024_nkx101 anti-leukemic activity_poster 3603.pdf",
      conference: "AACR",
      date: "April 2024",
      type: "Poster Presentation"
    }
    // Add more posters here...
  ];

  return (
    <div className="bg-gray-50 mt-8 mb-8 px-4">
      {/* Added bg-gray-50 for a soft background */}
      <div className="contentwrapper">
        <div className="widthwrapper">
          <h2 className="text-center text-3xl font-semibold my-6 text-gray-800">
            Presentations & Posters
          </h2>
          <hr className="my-4 border-gray-200" />
          <div
            id="present"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posters.map((poster, index) => (
              <PosterPresentation key={index} {...poster} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentations;
