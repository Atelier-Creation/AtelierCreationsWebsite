
import Header from "../componets/header"
// import FreelancerHub from "../componets/freelancers-hub"
import Footer from "../componets/footer"
import SoftwareDevelopment from "../src/assets/services/software-development.svg"

import SocialMediaMarketing from "../src/assets/inner-service-pages/SMM.svg"
import GraphicDesigning from "../src/assets/inner-service-pages/graphic-design.svg"



import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect } from "react"

const digitalMarketing = () => {
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
    <section className="serv-banner Digital-Marketing">
        <h1 className="banner-h1">
         Digital Marketing 
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
                      <img src={SocialMediaMarketing} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    Social media marketing
                    </h3>
                    <p className="sev-card-cont">
                    We provide expert social media marketing services, managing platforms to engage and grow your target audience
                    </p>
                    <Link className="service-card-btn" to="/best-social-media-marketing-advertising-agency">
                      Read More
                      </Link>
                  </div>
                </div>
                
                <div className="col-md-4 " >
                  <div className="service-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="srv-card-icon">
                      <img src={GraphicDesigning} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    Graphic designing
                    </h3>
                    <p className="sev-card-cont">
                    The best graphic and logo design company, we create custom logos that capture your brand's identity and vision.
                    </p>
                    <Link className="service-card-btn" to="/top-2d-3d-graphics-designing-service-agency">
                      Read More
                      </Link>
                  </div>
                </div>

                <div className="col-md-4 " >
                  <div className="service-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="srv-card-icon">
                      <img src={SoftwareDevelopment} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    E mail marketing
                    </h3>
                    <p className="sev-card-cont">
                    The best graphic and logo design company, we create custom logos that capture your brand's identity and vision.
                    </p>
                    <Link className="service-card-btn" to="/EMailMarketing">
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

export default digitalMarketing