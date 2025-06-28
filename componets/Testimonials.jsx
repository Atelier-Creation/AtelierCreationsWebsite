import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const cardFrontRef = useRef(null);
  const cardBackRef = useRef(null);
  const reviewsRef = useRef([]);
  const bgLinesRef = useRef([]);

  const addToReviewRefs = (el) => {
    if (el && !reviewsRef.current.includes(el)) {
      reviewsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Reset in case of remount
    reviewsRef.current = [];

    // Animate card entry
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
      },
    });

    // Background lines
    bgLinesRef.current.forEach((line, i) => {
      gsap.from(line, {
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
        },
      });
    });

    // Review animations
    reviewsRef.current.forEach((review, i) => {
      gsap.from(review, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.15,
        ease: "back.out(1)",
        scrollTrigger: {
          trigger: review,
          start: "top 90%",
        },
      });

      review.addEventListener("mouseenter", () =>
        gsap.to(review, {
          scale: 1.02,
          boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
          duration: 0.3,
        })
      );

      review.addEventListener("mouseleave", () =>
        gsap.to(review, {
          scale: 1,
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          duration: 0.3,
        })
      );
    });

    // Card flip
    const front = cardFrontRef.current;
    const back = cardBackRef.current;

    if (front && back) {
      gsap.set(back, { rotationY: 180, opacity: 0 });

      const flipIn = () => {
        gsap.to(front, { rotationY: 180, opacity: 0, duration: 0.6 });
        gsap.to(back, { rotationY: 0, opacity: 1, duration: 0.6 });
      };

      const flipOut = () => {
        gsap.to(front, { rotationY: 0, opacity: 1, duration: 0.6 });
        gsap.to(back, { rotationY: -180, opacity: 0, duration: 0.6 });
      };

      cardRef.current.addEventListener("mouseenter", flipIn);
      cardRef.current.addEventListener("mouseleave", flipOut);

      return () => {
        cardRef.current.removeEventListener("mouseenter", flipIn);
        cardRef.current.removeEventListener("mouseleave", flipOut);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  const testimonials = [
    {
      name: "Anuali Sharma",
      role: "Head of Design",
      quote: "Highly recommend anyone seeking interior design project",
      rating: 4.5,
    },
    {
      name: "Anjai S.",
      role: "Head of Marketing",
      quote:
        "For the first time, I felt completely independent moving through a public space",
      rating: 4.9,
    },
    {
      name: "Purov Jha",
      role: "Software developer",
      quote:
        "Their attention to detail and kind of RPWD compliance gave us confidence in the process.",
      rating: 4.6,
    },
    {
      name: "Kaitaj K.",
      role: "Advocate",
      quote: "Equispace delivered accessibility without compromising on aesthetics",
      rating: 4.7,
    },
    {
      name: "Tanuj Ahuja",
      role: "Tech Lead",
      quote:
        "Equispace consistently delivers designs that meet and exceed national accessibility standards.",
      rating: 4.9,
    },
    {
      name: "Sahov Sha",
      role: "Head of Design",
      quote: "Equispace transformed our building into a truly inclusive space.",
      rating: 4.9,
    },
  ];

  return (
    <section ref={sectionRef} className="testimonials-section">
      <div className="card-section">
        <div className="card-wrapper" ref={cardRef}>
          <div className="card">
            <div className="card-front" ref={cardFrontRef}>
              <img
                src="https://cdn.prod.website-files.com/67f622de004cb2787adbbc2e/67f622de004cb2787adbbc3b_grommet-icons%3Aprojects.svg"
                loading="lazy"
                alt="projects square"
                className="card-icon"
              />
              <div className="frame-24">
                <div className="text-4">TESTIMONIALS</div>
                <div className="text-5">⠞⠑⠎⠞⠊⠍⠕⠝⠊⠁⠇⠎</div>
              </div>
            </div>
            <div className="card-back" ref={cardBackRef}>
              <div className="back-content">
                <h3>Client Feedback</h3>
                <p>What our clients say about our work</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-bg-2">
          {[...Array(10)].map((_, i) => (
            <img
              key={i}
              ref={(el) => (bgLinesRef.current[i] = el)}
              src={`https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d2ea74d38dd08c3e6cf_${i + 1}.svg`}
              loading="lazy"
              alt=""
              className="bg-line"
            />
          ))}
        </div>

       <div className="review-holders">
        {testimonials.map((t, i) => (
            <div
            key={i}
            className={`review review-${i}`}
            ref={addToReviewRefs}
            style={{ opacity: i === 2 || i === 4 ? 0.3 : 1 }}
            >
            <div className="ellipse"></div>
            <div className="frame-1000004350">
                <div className="frame-1000004356">
                <div className="frame-1000004357">
                    <div className="name">{t.name}</div>
                    <div className="text-24">|</div>
                    <div className="role">{t.role}</div>
                </div>
                <div className="frame-1000004358">
                    <div className="rating">{t.rating}</div>
                    <div className="frame-1000004359">
                    <img
                        src="https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c9a085bd7d0f970c3b9a3c_Star-1.svg"
                        loading="lazy"
                        width="12"
                        height="12"
                        alt="star"
                        className="star"
                    />
                    </div>
                </div>
                </div>
                <div className="quote">"{t.quote}"</div>
            </div>
            </div>
        ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
