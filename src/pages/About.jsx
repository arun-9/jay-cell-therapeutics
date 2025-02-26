import Breadcrumbs from "../components/AboutPageComponent/Breadcrumbs";
import AboutSection from "../components/AboutPageComponent/AboutSection";
//import StatisticsSection from "../components/AboutPageComponent/StatisticsSection";
import TeamSection from "../components/AboutPageComponent/TeamMember";
import TestimonialSlider from "../components/AboutPageComponent/TestimonialSlider";
const About = () => {
  return (
    <div>
      <Breadcrumbs />
      <AboutSection />
      {/*<StatisticsSection />*/}
      <TeamSection />
      <TestimonialSlider />
    </div>
  );
};

export default About;
