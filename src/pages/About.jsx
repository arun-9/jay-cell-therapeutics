import Breadcrumbs from "../components/AboutPageComponent/Breadcrumbs";
import AboutSection from "../components/AboutPageComponent/AboutSection";
//import StatisticsSection from "../components/AboutPageComponent/StatisticsSection";
import TeamSection from "../components/AboutPageComponent/TeamMember";
//import TestimonialSlider from "../components/AboutPageComponent/TestimonialSlider";
//import FAQAccordion from "../components/AboutPageComponent/FAQAccordion";
import CTASection from "../components/AboutPageComponent/CTASection";
import PatentsSection from "../components/AboutPageComponent/PatentsSection";
import QASection from "../components/AboutPageComponent/QASection";
import PartnerWithUs from "../components/AboutPageComponent/PartnerWithUs";
import NewsSection from "../components/AboutPageComponent/NewsSection";
const About = () => {
  return (
    <div>
      <Breadcrumbs />
      <AboutSection />
      {/*<StatisticsSection />*/}
      <TeamSection />
      {/*<TestimonialSlider />*/}
      <PatentsSection />
      <QASection />
      {/*<FAQAccordion />*/}
      <PartnerWithUs />
      <NewsSection />
      <CTASection />
    </div>
  );
};

export default About;
