import caseStudyVideo from "../src/assets/case-study/1AtelierMkupVideo.mp4";

const CaseStudy = () => {
  return (
    <>
      <section id="case-study" className="case-study-sec">
        <div className="tit-wraper-2">
          <span className="tit-sub">
            <div>//</div> Case Study
          </span>
          <h3 className="what-we-do-secondry-tit-2">
            Atelier Creation - Transforming Local Businesses with Digital
            Marketing Company
          </h3>
        </div>
        <div className="case-study-container">
          <div className="case-study-video">
            <video
              src={caseStudyVideo}
              autoPlay
              muted
              loop
              controls={false}
              playsInline
              preload="auto"
              style={{ width: "100%", height: "auto" }}
            ></video>
          </div>

          <div className="case-study-cont">
            {/* <h3 className="tit">
            
            </h3> */}

            <p>
              Atelier Creation, a leading digital marketing agency,
              revolutionized the online presence of a local business in
              Coimbatore. Through a targeted SEO strategy, optimized Google My
              Business profile, and engaging social media marketing campaigns,
              the business saw a remarkable 35% increase in foot traffic and a
              50% boost in online orders within just three months. Our
              data-driven approach to local search optimization helped the
              business secure top rankings in local map packs, driving greater
              visibility and customer engagement.
            </p>
          </div>
        </div>
        <div className="case-study-numbers">
          <div>
            <span className="c-s-num">5+</span> <span>Clients Worldwide</span>
          </div>
          <div>
            <span className="c-s-num">75+</span> <span>Projects Completed</span>
          </div>
          <div>
            <span className="c-s-num">20+ </span>
            <span>Team Members</span>
          </div>
          <div>
            <span className="c-s-num">1m+</span> <span>Revenue Generated</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
