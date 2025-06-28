import { useEffect } from "react";
import Header from "../componets/header";
import Footer from "../componets/footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { servicePoints, serviceDetails, additionalSections, carouselData, faqs } from "../data/smmData";

const SMM = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Helmet>
        <title>Premier Social Media Marketing & Advertising Service Agency</title>
        <meta
          name="description"
          content="We offer premier social media marketing services, managing on Facebook, Instagram, Twitter, YouTube and more to attract & engage your target audience."
        />
      </Helmet>

      {/* Banner */}
      <section className="serv-banner social-media-marketing-service">
        <h1 className="banner-h1">Social Media Strategy Marketing</h1>
      </section>

      {/* Service Points Section */}
      {servicePoints.map((point, idx) => (
        <section className="serv-point-sec" key={idx}>
          <div className="serv-point-sec-container">
            <div className="servi-point-sec-left-box">
              <h3 className="srv-sec-tit">{point.title}</h3>
              <p>{point.description}</p>
            </div>
            <div className="servi-point-sec-right-box">
              <div className="seri-first-img">
                <img src={point.img} alt="" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Service Detailed Section */}
      <section className="service-detailed-sec">
        <h2>{serviceDetails.mainTitle}</h2>
        <p className="service-detailed-main-para">
          <b>Social Media Strategy Development </b>
          <br />
          {serviceDetails.mainDescription}
        </p>

        <div className="srv-detai-sec-contain">
          <div className="left-srv-detai-sec">
            {serviceDetails.left.map((item, idx) => (
              <div className="service-detai-cont-card" key={idx}>
                <h4 className="service-detailed-small-tit">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="service-detailed-main-img">
            <img src={serviceDetails.centerImage} alt="" />
          </div>

          <div className="right-srv-detai-sec">
            {serviceDetails.right.map((item, idx) => (
              <div className="service-detai-cont-card" key={idx}>
                <h4 className="service-detailed-small-tit">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      {additionalSections.map((sec, idx) => (
        <section key={idx} className={sec.type === "light" ? "extra-cont-light" : "extra-cont-dark"}>
          {sec.type === "light" ? (
            <>
              <div>
                <h4>{sec.title}</h4>
                <p>{sec.content}</p>
              </div>
              <div className="extra-cont-light-img">
                <img src={sec.img} alt="" />
              </div>
            </>
          ) : (
            <>
              <div className="extra-cont-light-img">
                <img src={sec.img} alt="" />
              </div>
              <div>
                <h4>{sec.title}</h4>
                <p>{sec.content}</p>
              </div>
            </>
          )}
        </section>
      ))}

      {/* Carousel */}
      <section className="service-carosoul-sec">
        <h3 className="service-carosoul-tit">Why Choose Atelier for Social Media Marketing?</h3>
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
            {carouselData.map((slide, idx) => (
              <SwiperSlide key={idx}>
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

      {/* FAQ Section */}
      <section className="faq-section">
        <h3 className="faq-tit">
          Frequently Asked Questions (FAQs) Atelier Best Social Media Marketing Agency
        </h3>
        <div className="faq-container">
          <div className="accordion" id="accordionExample">
            {faqs.map((faq, idx) => (
              <div className="accordion-item" key={idx}>
                <h3 className="accordion-header" id={`heading${idx}`}>
                  <button
                    className={`accordion-button ${idx !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${idx}`}
                    aria-expanded={idx === 0}
                    aria-controls={`collapse${idx}`}
                  >
                    {faq.question}
                  </button>
                </h3>
                <div
                  id={`collapse${idx}`}
                  className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                  aria-labelledby={`heading${idx}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-card-sec">
        <div className="contact-card-inside-cont">
          <h3 className="contact-inner-tit">
            Ready to Transform Your Ideas into a Powerful Mobile App?
          </h3>
          <Link className="contact-card-btn" to="/contact">
            Launch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SMM;
