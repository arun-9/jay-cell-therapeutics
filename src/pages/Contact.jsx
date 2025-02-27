import GoogleMapEmbed from "../components/ContactUsPage/GoogleMapEmbed";
import ContactSection from "../components/ContactUsPage/ContactSection";
const Contact = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Find Us</h2>
      <GoogleMapEmbed />
      <ContactSection />
    </section>
  );
};

export default Contact;
