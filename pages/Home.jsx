import LandingPage from "../componets/landing-page"
import Header from "../componets/header"
import FirstSection from "../componets/first-section"
import Services from "../componets/services"
import WhatWeDo from "../componets/what-we-de"
import HowWeWork from "../componets/how-we-work"
import BenefitsWWU from "../componets/benefits-of-work-with-us"
import ContentMarketing from "../componets/content-marketing"
import Footer from "../componets/footer"
import Testimonial from "../componets/testimonial"
import DiscoverUs from "../componets/discover-us"
import Contacts from "../componets/contacts"
import SocialMediaSec from "../componets/Social-media-sec"
import CaseStudy from "../componets/case-study"
// import FreelancerHub from "../componets/freelancers-hub"
import {Helmet} from "react-helmet";
import PortfolioGrid from "../componets/PortfolioGrid/PortfolioGrid"


const Home = () => {
  
  return (
    <>
    <Helmet>
      <title>Best Digital Marketing & Designing Agency in Coimbatore
      </title>
      <meta name="description"
    content="Atelier is a top creative designing &  digital marketing agency in Coimbatore, offering SEO, SMM, Ads, web design, app design & online branding services."
    />
    </Helmet>
    {/* <LandingPage />    */}
      <Header />
      <FirstSection />
      <Services />
      <WhatWeDo />
      <HowWeWork />
      <Testimonial />
      <CaseStudy />
      <BenefitsWWU />
      <ContentMarketing />
      {/* <DiscoverUs /> */}
      <Contacts />
      <SocialMediaSec />
      {/* <FreelancerHub /> */}
      <Footer />
    </>
  )
}

export default Home