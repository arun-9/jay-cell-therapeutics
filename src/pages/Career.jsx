const Career = () => {
  const jobListings = [
    "React Native Developer",
    "Node Developer",
    "Business Development Manager",
    "Software Quality Analyst",
    "PHP Developer",
    "IT Business Analyst"
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800">Join Our Team</h2>
        <p className="text-lg text-gray-600 mt-2">
          Open Positions Available Now!
        </p>
      </div>

      {/* Job Listings */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobListings.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-lg text-lg font-semibold text-gray-800 text-center hover:shadow-lg transition"
          >
            {job}
          </div>
        ))}
      </div>

      {/* Resume Submission */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800">
          Drop in your resume..
        </h2>
        <a
          href="mailto:mkum9417@gmail.com"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          hr@JayCell.in
        </a>
      </div>
    </section>
  );
};

export default Career;
