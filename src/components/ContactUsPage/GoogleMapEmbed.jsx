const GoogleMapEmbed = () => {
  return (
    <div className="relative w-full h-[600px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1078103212794!2d77.57615100000001!3d13.028806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c37f33d89f%3A0x302ace04a15d7762!2sGeddalahalii%2C%20Sanjayanagara%2C%20Bengaluru%2C%20Karnataka%20560094!5e0!3m2!1sen!2sin!4v1740668934510!5m2!1sen!2sin "
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
