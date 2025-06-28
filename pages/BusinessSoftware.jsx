// import Services from "../componets/services"
import Header from "../componets/header"
// import LandingPage from "../componets/landing-page"
// import FreelancerHub from "../componets/freelancers-hub"
import Footer from "../componets/footer"
// import SEO from "../src/assets/services/SEO.svg";
// import serviceCardIcon from "../src/assets/services/service-card-icon.svg";
// import UiUx from "../src/assets/services/ui-ux.svg";
// import SoftwareDevelopment from "../src/assets/services/software-development.svg"
// import SocialMediaMarketing from "../src/assets/services/Social-Media-Marketing.svg"
// import GraphicDesigning from "../src/assets/services/Graphic-Design-3D-2D.svg"


import ERPSoftware from "../src/assets/inner-service-pages/ERP.svg"
import HRMSSoftware from "../src/assets/inner-service-pages/HRMS.svg"
import CRMSoftware from "../src/assets/inner-service-pages/CRMSoftware.svg"

import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect } from "react"

const BusinessSoftware = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  
  return (
    <>
    <Helmet>
      <title>Best Digital Marketing & Designing Agency in Coimbatore
      </title>
      <meta name="description"
    content="Atelier is a top creative designing &  digital marketing agency in Coimbatore, offering SEO, SMM, Ads, web design, app design & online branding services."
    />
    </Helmet>
    <div className="sec-listing-wrap">
    <section className="serv-banner BusinessSoftware">
        <h1 className="banner-h1">
        Business Software Service
        </h1>
    </section>
      <Header />
      <section id="services" className="services-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="our-container">
              <div className="tit-wraper">
                <span className="tit-sub">
                  <div>//</div> Services
                </span>
                <h2 className="secondry-title1">
                Best Digital Marketing & Creative Designing Company/Agency 
                </h2>
              </div>
              {/* <a className="service-btn" href="#">
                Our Services
              </a> */}
            </div>
            <div className="our-container-1">
              <div className="row justify-content-center">
                {/* Service Card 1 */}
                <div className="col-md-4 ">
                  <div className="service-card " data-aos="fade-up" data-aos-duration="1000">
                    <div className="srv-card-icon">
                      <img src={ERPSoftware} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    ERP software
                    </h3>
                    <p className="sev-card-cont">
                    We provide top app development services, creating user-friendly, high-performance, customized apps to improve your digital presence.
                    </p>
                    <Link className="service-card-btn" to="/best-erp-software-service-provider-india">
                      Read More
                      </Link>
                  </div>
                </div>
                
                <div className="col-md-4 " >
                  <div className="service-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="srv-card-icon">
                      <img src={HRMSSoftware} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    HRMS software
                    </h3>
                    <p className="sev-card-cont">
                    We provide customized software solutions for medium and large businesses, including applications, API development, and maintenance.
                    </p>
                    <Link className="service-card-btn" to="/best-hr-management-software-service-agency">
                      Read More
                      </Link>
                  </div>
                </div>

                <div className="col-md-4 " >
                  <div className="service-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="srv-card-icon">
                      <img src={CRMSoftware} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    CRM software
                    </h3>
                    <p className="sev-card-cont">
                    We provide customized software solutions for medium and large businesses, including applications, API development, and maintenance.
                    </p>
                    <Link className="service-card-btn" to="/best-crm-software-service-agency">
                      Read More
                      </Link>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FreelancerHub /> */}
      <Footer />
      </div>
    </>
  )
}

export default BusinessSoftware