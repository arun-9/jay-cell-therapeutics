import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "---",
    message: "",
    access_key: "5f81f87b-29c5-440a-a39f-0ef3b0f2d9c2" // Replace with your actual key
  });

  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
      setStatus({ success: true, message: "Form submitted successfully!" });
      setFormData({
        name: "",
        phone: "",
        service: "---",
        message: "",
        access_key: "your-web3forms-access-key"
      });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong. Please try again."
      });
    }
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 shadow-lg rounded-lg">
          <div>
            <div className="text-left mb-6">
              <p className="text-lg text-blue-600">Why Choose Us</p>
              <h3 className="text-2xl font-bold">
                Free Consultation - Begin Your Healing Journey
              </h3>
              <p className="text-gray-600 mt-2">
                Connect with a dedicated specialist today and take the first
                step towards a healthier, more fulfilling life.
              </p>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-600" />{" "}
                <a href="mailto:themesflat@gmail.com">themesflat@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-600" /> 1-333-345-6868
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" /> 101 E 129th St,
                East Chicago, IN 46312, US
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center mt-4 text-blue-600 font-medium hover:underline"
            >
              Open map <FaArrowRight className="ml-2" />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <h4 className="text-lg font-semibold text-center mb-4">
              Get A Free Consultation
            </h4>
            <input
              type="hidden"
              name="access_key"
              value={formData.access_key}
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              required
              value={formData.name}
              className="w-full p-3 border rounded"
              onChange={handleChange}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              className="w-full p-3 border rounded"
              onChange={handleChange}
            />
            <select
              name="service"
              className="w-full p-3 border rounded"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="---">Choose Services</option>
              <option value="Individual Counseling">
                Individual Counseling
              </option>
              <option value="Family Therapy">Family Therapy</option>
              <option value="Couples Therapy">Couples Therapy</option>
              <option value="Group Therapy">Group Therapy</option>
              <option value="Child & Adolescent Therapy">
                Child & Adolescent Therapy
              </option>
              <option value="Trauma Counseling">Trauma Counseling</option>
            </select>
            <textarea
              name="message"
              placeholder="Your message"
              required
              value={formData.message}
              className="w-full p-3 border rounded"
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
            {status.message && (
              <p
                className={`text-center mt-2 ${
                  status.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
