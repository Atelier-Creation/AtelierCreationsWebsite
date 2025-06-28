import serviceCardIcon from "../src/assets/services/service-card-icon.svg";

import SEO from "../src/assets/services/SEO.svg";
import FunnelOptimization from "../src/assets/services/funnel-optimization.svg";
import AdvancedAnalytics from "../src/assets/services/advanced-analytics.svg";
import PaidAdvertising from "../src/assets/services/paid-advertising.svg";
import UiUx from "../src/assets/services/ui-ux.svg";
import SoftwareDevelopment from "../src/assets/services/software-development.svg";
import SocialMediaMarketing from "../src/assets/services/Social-Media-Marketing.svg";
import GraphicDesigning from "../src/assets/services/Graphic-Design-3D-2D.svg";
import Branding from "../src/assets/services/branding.png";

import { Link, useNavigate } from "react-router-dom";

// ✅ DATA ARRAY
const servicesData = [
  {
    id: 1,
    icon: UiUx,
    title: "UI UX",
    desc: "We offer creative UI/UX design services, crafting intuitive interfaces for web and mobile applications using modern technologies.",
    link: "/best-creative-ui-ux-design-service-company",
    delay: 0,
  },
  {
    id: 2,
    icon: SoftwareDevelopment,
    title: "Development",
    desc: "We provide customized software solutions for medium and large businesses, including applications, API development, and maintenance.",
    link: "/development",
    delay: 200,
  },
  {
    id: 3,
    icon: SEO,
    title: "SEO",
    desc: "We offer result-driven SEO services, including Local, Regional, and International SEO, to achieve top Google rankings.",
    link: "/top-seo-ranking-specialist",
    delay: 400,
  },
  {
    id: 4,
    icon: SocialMediaMarketing,
    title: "Digital Marketing",
    desc: "We provide top app development services, creating user-friendly, high-performance, customized apps to improve your digital presence",
    link: "/digitalMarketing",
    delay: 0,
  },
  {
    id: 5,
    icon: SocialMediaMarketing,
    title: "Business Software",
    desc: "We provide expert social media marketing services, managing platforms to engage and grow your target audience",
    link: "/BusinessSoftware",
    delay: 200,
  },
  {
    id: 6,
    icon: Branding,
    title: "Branding",
    desc: "Visual branding elements play a crucial role in branding. We design visually appealing logos, packaging, and marketing materials that reflect your brand’s identity.",
    link: "/branding",
    delay: 400,
  },
];

function Services() {
  const navigate = useNavigate();
  return (
    <>
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
            </div>

            <div className="our-container-1">
              <div className="row">

                {servicesData.map((service) => (
                  <div className="col-md-4" key={service.id}>
                    <div
                      className="service-card"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={service.delay}
                    >
                      <div className="srv-card-icon">
                        <img src={service.icon} alt={service.title} loading="lazy" />
                      </div>
                      <h3 className="service-card-tit">{service.title}</h3>
                      <p className="sev-card-cont">{service.desc}</p>
                      <a className="service-card-btn cursor-pointer" href="" onClick={()=>navigate(service.link)}>
                        Read More
                      </a>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
