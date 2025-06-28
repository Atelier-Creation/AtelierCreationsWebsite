// import LandingPage from "../componets/landing-page"
// import Header from "../componets/header"
// import FirstSection from "../componets/first-section"
// import Services from "../componets/services"
// import WhatWeDo from "../componets/what-we-de"
// import HowWeWork from "../componets/how-we-work"
// import BenefitsWWU from "../componets/benefits-of-work-with-us"
// import ContentMarketing from "../componets/content-marketing"
// import Footer from "../componets/footer"
// import Testimonial from "../componets/testimonial"
// import DiscoverUs from "../componets/discover-us"
// import Contacts from "../componets/contacts"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import ServiceOne from "../pages/ServiceOne"
import SEO from "../pages/SEO"
import SMM from "../pages/SMM"
import UIUX from "../pages/UI-UX"
import PaidAdvertising from "../pages/PaidAdvertising"
import BusinessSoftware from "../pages/BusinessSoftware"
import GraphicDesign from "../pages/GraphicDesign"
import MobileAppDevelopment from "../pages/MobileAppDevelopment"
import WebDevelopment from "../pages/WebDevelopment"
import Development from "../pages/development"
import ERP from "../pages/ERP"
import CRM from "../pages/CRM"
import HRMS from "../pages/HRMS"
import ProductBranding from "../pages/ProductBranding"
import EMailMarketing from "../pages/EMailMarketing"
import BlogDetail from "../pages/BlogDetail"
import DigitalMarketing from "../pages/Digital-marketing"
import Blog1 from "../pages/Blog1"
import Branding from "../pages/Branding"
import { BrowserRouter , Route , Routes } from "react-router-dom"
import AOS from 'aos';
import BlogDesignPage2 from "../pages/BlogDesign-page-2"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css'; 
import GridOverView from "../componets/GridOverView/GridOverView"
// ..
AOS.init();


function App(){
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best-creative-ui-ux-design-service-company" element={<UIUX />} />
        <Route path="/web-development-company-india" element={<WebDevelopment />} />
        <Route path="/top-seo-ranking-specialist" element={<SEO />} />
        <Route path="/mobile-app-development-company-india" element={<MobileAppDevelopment />} />
        <Route path="/best-social-media-marketing-advertising-agency" element={<SMM />} />
        <Route path="/top-2d-3d-graphics-designing-service-agency" element={<GraphicDesign />} />
        <Route path="/top-paid-advertising-company" element={<PaidAdvertising />} />
        <Route path="/development" element={<Development />} />
        <Route path="/best-hr-management-software-service-agency" element={<HRMS />} />
        <Route path="/best-crm-software-service-agency" element={<CRM />} />
        <Route path="/BusinessSoftware" element={<BusinessSoftware />} />
        <Route path="/best-erp-software-service-provider-india" element={<ERP />} />
        <Route path="/digitalMarketing" element={<DigitalMarketing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/EMailMarketing" element={<EMailMarketing />} />
        <Route path="/ProductBranding" element={<ProductBranding />} />
        <Route path="/blog" element={<BlogDetail />} />
        <Route path="/Helpful-Content-King" element={<Blog1 />} />
        <Route path="/the-role-ai-modern-design" element={<BlogDesignPage2 />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/ServiceOne" element={<ServiceOne />} />
        <Route path="/:name" element={<GridOverView/>} />
      </Routes>
      </BrowserRouter>

    </>
  )
}
export default App
