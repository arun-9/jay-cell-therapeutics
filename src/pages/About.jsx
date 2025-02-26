import Breadcrumbs from "../components/AboutPageComponent/Breadcrumbs";
import AboutSection from "../components/AboutPageComponent/AboutSection";
//import StatisticsSection from "../components/AboutPageComponent/StatisticsSection";
import TeamSection from "../components/AboutPageComponent/TeamMember";
import TestimonialSlider from "../components/AboutPageComponent/TestimonialSlider";
import FAQAccordion from "../components/AboutPageComponent/FAQAccordion";
const About = () => {
  return (
    <div>
      <Breadcrumbs />
      <AboutSection />
      {/*<StatisticsSection />*/}
      <TeamSection />
      <TestimonialSlider />
      <FAQAccordion />
    </div>
  );
};

export default About;
