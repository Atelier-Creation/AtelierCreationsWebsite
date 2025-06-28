import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import ServiceOne from "../pages/ServiceOne";
import SEO from "../pages/SEO";
import SMM from "../pages/SMM";
import UIUX from "../pages/UI-UX";
import PaidAdvertising from "../pages/PaidAdvertising";
import BusinessSoftware from "../pages/BusinessSoftware";
import GraphicDesign from "../pages/GraphicDesign";
import MobileAppDevelopment from "../pages/MobileAppDevelopment";
import WebDevelopment from "../pages/WebDevelopment";
import Development from "../pages/development";
import ERP from "../pages/ERP";
import CRM from "../pages/CRM";
import HRMS from "../pages/HRMS";
import ProductBranding from "../pages/ProductBranding";
import EMailMarketing from "../pages/EMailMarketing";
import BlogDetail from "../pages/BlogDetail";
import DigitalMarketing from "../pages/Digital-marketing";
import Blog1 from "../pages/Blog1";
import Branding from "../pages/Branding";
import BlogDesignPage2 from "../pages/BlogDesign-page-2";
import GridOverView from "../componets/GridOverView/GridOverView";
import { Portfolio } from "../pages/Portfolio";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    AOS.refresh(); // Refresh on page mount
  }, []);

  return (
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
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ServiceOne" element={<ServiceOne />} />
        <Route path="/:projectName" element={<GridOverView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
