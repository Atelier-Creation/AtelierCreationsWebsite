import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import Header from "../componets/header";
import Footer from "../componets/footer";

import img1 from "../src/assets/s-ui-ux/2d-3d-design.webp";
import img2 from "../src/assets/s-ui-ux/tailored-solutions.webp";
import img3 from "../src/assets/s-ui-ux/app-website-redesign.webp";
import img4 from "../src/assets/s-ui-ux/App-and-Website-Redesign.webp";
import img5 from "../src/assets/s-ui-ux/expert-UI-UX-design.webp";
import img6 from "../src/assets/s-ui-ux/Transformative-Design-Concept.webp";
import img7 from "../src/assets/s-ui-ux/UIUX-Design-Agency.webp";
import img8 from "../src/assets/s-ui-ux/web-mobile-ui-ux.webp";

import "swiper/css";
import "swiper/css/navigation";

// DATA SECTION

const serviceDetailsLeft = [
  { title: "User Research & Analysis", desc: "We deeply deeply understand user needs, behaviors, and motivations through comprehensive research." },
  { title: "Wireframe and Prototype", desc: "Our team creates detailed wireframes and interactive prototypes, laying the foundation for effective design solutions." },
  { title: "User Interface (UI) Design", desc: "We craft visually appealing and intuitive user interfaces that engage and delight users." }
];

const serviceDetailsRight = [
  { title: "User Experience (UX) Design", desc: "Our UX design focuses on creating seamless and enjoyable experiences that resonate with your audience." },
  { title: "Responsive Web & Mobile App Design", desc: "We ensure your digital products are accessible and functional across all devices, providing a consistent experience." },
  { title: "Usability Testing & Optimization", desc: "Our rigorous testing process helps us identify potential issues early, allowing for timely optimization of the user experience." }
];

const extraSections = [
  { type: "light", img: img3, title: "Best Web and Mobile UI/UX Design Service Provider Company", desc: "We specialize in web and mobile UI/UX design, providing responsive web layouts and adaptive mobile interfaces that focus on improve user experience." },
  { type: "dark", img: img4, title: "Premier App and Website Redesign Company for Innovative Solutions", desc: "We specialize in app and website redesigns, transforming the look and feel of your outdated projects while preserving backend functionality." },
  { type: "light", img: img5, title: "Thorough UI/UX Design Audit: Strategic Insights for Effective Enhancements", desc: "Our comprehensive UI/UX design audit meticulously evaluates your current interfaces to identify areas for improvement." },
  { type: "dark", img: img7, title: "Expert UI/UX Design Research Agency in India: Tailored Insights for Your Solutions", desc: "As a Best UI/UX design research agency in India, we offer personalized research services tailored to your unique needs." },
  { type: "light", img: img6, title: "Design Strategy Development: Elevate Your Brand with India’s Top UI/UX Design Agency", desc: "At our design strategy development agency, we empower clients to grasp the significance of exceptional design in business." },
  { type: "dark", img: img8, title: "Transformative Design Concept Development: Bringing Your Ideas to Design", desc: "At Atelier, our design concept development process is centered around collaboration and innovation." }
];

const carouselSlides = [
  { title: "User-Centered Design Approach", desc: "Our design decisions are guided by genuine user insights, ensuring our solutions effectively address your audience's specific needs and preferences." },
  { title: "Collaborative Design Process", desc: "We collaborate closely with clients, developers, and stakeholders through iterative feedback cycles, ensuring our designs align with business objectives." },
  { title: "Prototyping & Testing", desc: "We create interactive prototypes and perform usability testing to validate and refine our design concepts before launch." },
  { title: "Continuous Improvement", desc: "Post-launch, we continuously monitor user interactions and gather feedback. Using analytics, we implement ongoing enhancements to elevate the user experience." }
];

// COMPONENT

const UIUX = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Helmet>
        <title>Best Creative UI/UX Designing Service Company in India</title>
        <meta name="description" content="Atelier Creations offers top-tier UI/UX design services, crafting user-friendly mobile and web applications with fresh, innovative ideas from our expert team." />
      </Helmet>

      <div className="sev-page-wrap">

        <section className="serv-banner UiUx-service-banner">
          <h1 className="banner-h1">UI/UX Design Services</h1>
        </section>

        <section className="serv-point-sec">
          <div className="serv-point-sec-container">
            <div className="servi-point-sec-left-box">
              <p>At Atelier, we focus on transforming customer products by combining User Experience and Design Thinking with a deep understanding of user needs. Our goal is to revolutionize the way businesses engage with their audiences, delivering innovative, user-centered design solutions that emphasize functionality and simplicity.</p>
            </div>
            <div className="servi-point-sec-right-box">
              <div className="seri-first-img">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="service-detailed-sec">
          <h2 className="service-detailed-sec-tit">
            Custom UI/UX Design Services Company Tailored Solutions to Meet Your Design Needs.
          </h2>
          <div className="srv-detai-sec-contain">
            <div className="left-srv-detai-sec">
              {serviceDetailsLeft.map((item, index) => (
                <div className="service-detai-cont-card" key={index}>
                  <h4 className="service-detailed-small-tit">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <div className="service-detailed-main-img">
                <img src={img2} alt="" />
              </div>
            </div>

            <div className="right-srv-detai-sec">
              {serviceDetailsRight.map((item, index) => (
                <div className="service-detai-cont-card" key={index}>
                  <h4 className="service-detailed-small-tit">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {extraSections.map((section, index) => (
          <section className={section.type === "dark" ? "extra-cont-dark" : "extra-cont-light"} key={index}>
            {section.type === "dark" ? (
              <>
                <div className="extra-cont-light-img">
                  <img src={section.img} alt="" />
                </div>
                <div>
                  <h4>{section.title}</h4>
                  <p>{section.desc}</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h4>{section.title}</h4>
                  <p>{section.desc}</p>
                </div>
                <div className="extra-cont-light-img">
                  <img src={section.img} alt="" />
                </div>
              </>
            )}
          </section>
        ))}

        <section className="service-carosoul-sec">
          <h3 className="service-carosoul-tit">Why Choose Atelier Creations for Your UX/UI Design Services?</h3>
          <div className="service-carosoul-container">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {carouselSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="service-carosoul-cards">
                    <h4 className="service-carosoul-cards-tit">{slide.title}</h4>
                    <p>{slide.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </section>

        <section className="contact-card-sec">
          <div className="contact-card-inside-cont">
            <h3 className="contact-inner-tit">Ready to Transform Your Ideas into a Powerful Mobile App?</h3>
            <Link className="contact-card-btn" to="/contact">Launch</Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default UIUX;
