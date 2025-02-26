import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Link
            to="/"
            className="flex items-center text-blue-600 hover:underline"
          >
            <FaHome className="mr-1" /> Home
          </Link>
          {paths.map((path, index) => (
            <span key={index} className="flex items-center">
              <span className="mx-2"> / </span>
              {index === paths.length - 1 ? (
                <span className="text-gray-900 font-semibold">{path}</span>
              ) : (
                <Link to={`/${path}`} className="text-blue-600 hover:underline">
                  {path}
                </Link>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
