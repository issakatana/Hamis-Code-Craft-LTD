import LandingPageSlider from "@components/LandingPageSlider"
import LandingPageAboutSection from "@components/LandingPageAboutSection"
import IndustriesWeServe from "@components/LandingPageServicesSection"
import LandingPageOurWorkSection from "@components/LandingPageOurWorkSection"
import Pricing from "@components/Pricing"
import Testimonials from "@components/Testimonials"


const Home = () => {
  return (
    <>
      <LandingPageSlider />
      <LandingPageAboutSection />
      <IndustriesWeServe/>
      <LandingPageOurWorkSection />
      <Pricing />
      <Testimonials />
      {/* <FAQ />
      <ContactUs /> */}
    </>
  )
}

export default Home



