import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PortfolioSection.css";

gsap.registerPlugin(ScrollTrigger);


const backgroundStrips = [
  {
    id: 1,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d2ea74d38dd08c3e6cf_1.svg",
  },
  {
    id: 2,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d2e45a7790d44e9faea_2.svg",
  },
  {
    id: 3,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d2fef5490651bfbb1cb_3.svg",
  },
  {
    id: 4,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d30986922e0ab39cd2c_4.svg",
  },
  {
    id: 5,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d300301f06cf862925c_5.svg",
  },
  {
    id: 6,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d31aa3205022403149e_6.svg",
  },
  {
    id: 7,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d32465b65aa38d86c79_7.svg",
  },
  {
    id: 8,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d32465b65aa38d86c79_7.svg",
  },
  {
    id: 9,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d32465b65aa38d86c79_7.svg",
  },
  {
    id: 10,
    src: "https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c98d32b4d1c9b50fdfc83f_8.svg",
  },
];

const portfolioItems = [
  {
    id: 1,
    title: "Trigun Studio",
    category: "Website and SEO Projects",
    imageSrc:
      "https://www.trigunstudio.com/assets/images/banner/best-architects-interior.webp",
    link: "https://www.trigunstudio.com/",
  },
  {
    id: 2,
    title: "Tuneaethetics",
    category: "Website and SEO Projects",
    imageSrc:
      "https://tuneaesthetics.com/wp-content/uploads/2024/12/best-aesthetics-solutions.jpg",
    link: "https://tuneaesthetics.com/",
  },
  {
    id: 3,
    title: "Designroots3d",
    category: "Website and SEO Projects",
    imageSrc:
      "https://www.designroots3d.com/asstes/image/home/design-roots-3d-products-machines.webp",
    link: "https://www.designroots3d.com/",
  },
  {
    id: 4,
    title: "Beingsocial",
    category: "Website and SEO Projects",
    imageSrc:
      "https://www.beingsocialmedia.com/assets/images/bg/home-shape.png",
    link: "https://www.beingsocialmedia.com/",
  },
  {
    id: 5,
    title: "Industro Venture",
    category: "Website and SEO Projects",
    imageSrc:
      "https://www.industroventure.com/assets/world-map-D4JACZBV.svg",
    link: "https://www.industroventure.com/",
  },
  {
    id: 6,
    title: "Mayon Foundations",
    category: "Website and SEO Projects",
    imageSrc:
      "https://www.mayonfoundations.com/images/slidenew01.webp",
    link: "https://www.mayonfoundations.com/",
  },
  {
    id: 7,
    title: "Keva Clinic",
    category: "Website and SEO Projects",
    imageSrc:
      "https://www.kevaclinic.com/assets/our-image/banner/best-skin-care-hospital-keva-coimbatore.webp",
    link: "https://www.kevaclinic.com/",
  },
  {
    id: 8,
    title: "Golden Gateway",
    category: "Website and SEO Projects",
    imageSrc:
      "https://www.goldengatewayedu.com/assets/img/home/testimonial-bg-2.webp",
    link: "https://www.goldengatewayedu.com/",
  },
  {
    id: 9,
    title: "Sushruta",
    category: "Website and SEO Projects",
    imageSrc:
      "https://www.sushruta.in/assets/img/slider/plastic-surgery-center-coimbatore_1.webp",
    link: "https://www.sushruta.in/",
  },
  {
    id: 10,
    title: "Bluestone",
    category: "E-commerce Websites",
    imageSrc:
      "https://kinclimg5.bluestone.com/f_webp/static/hp/d/bgu_v1.jpg",
    link: "https://www.bluestone.com/",
  },
  {
    id: 11,
    title: "Nirvana",
    category: "E-commerce Websites",
    imageSrc:
      "https://nirvanagemsandjewels.com/wp-content/uploads/2025/01/Aurum-bella-3-scaled.jpg",
    link: "https://nirvanagemsandjewels.com",
  },
  {
    id: 12,
    title: "Candere",
    category: "E-commerce Websites",
    imageSrc:
      "https://www.candere.com/media/home_page_images/slider/Banner_100625.jpg",
    link: "https://www.candere.com",
  },
  {
    id: 13,
    title: "Goat-Robotics",
    category: "E-commerce Websites",
    imageSrc:
      "https://www.goat-robotics.com/assets/reff/empowring-industries-autonomous-mobility.webp",
    link: "https://www.goat-robotics.com",
  },
  {
    id: 14,
    title: "Nobuyrent",
    category: "E-commerce Websites",
    imageSrc:
      "https://nobuyrent.com/hire/advertisement/254/1091140424.webp",
    link: "https://nobuyrent.com",
  },
  {
    id: 15,
    title: "Gehna",
    category: "E-commerce Websites",
    imageSrc:
      "https://www.gehnaindia.com/_next/image?url=https%3A%2F%2Fcdn-assets.gehnaindia.com%2F2hxcrkr388v2ppwgf0uiqpk5n1fg&w=1920&q=75",
    link: "https://www.gehnaindia.com",
  },
  {
    id: 16,
    title: "Mohan Jewellery",
    category: "E-commerce Websites",
    imageSrc:
      "https://mohanjewellery.com/wp-content/uploads/2022/01/home-4-min.jpg",
    link: "https://mohanjewellery.com/",
  },
];

const testimonials = [
  {
    name: "Shivani A.",
    title: "Product lead",
    rating: "4.2",
    quote:
      "Equispace transformed our outdated office into a space that's truly inclusive",
    ellipseClass: "ellipse-5",
    wrapperClass: "review1-copy-copy-copy",
  },
  {
    name: "Poonam Bansal",
    title: "NGO Director",
    rating: "5",
    quote: "Their accessible designs changed how our students move and learn",
    ellipseClass: "ellipse-8",
    wrapperClass: "review1",
  },
  {
    name: "Arushi Sharma",
    title: "Head of Design",
    rating: "4.5",
    quote: "Highly recommend anyone seeking interior design project",
    ellipseClass: "ellipse-4",
    wrapperClass: "review2",
    dataWid: "c5accebb-19af-013e-0384-e4b4272636e3",
    opacity: 0,
  },
  {
    name: "Kshitij K.",
    title: "Advocate",
    rating: "4.7",
    quote:
      "Equispace delivered accessibility without compromising on aesthetics",
    ellipseClass: "ellipse-1",
    wrapperClass: "review1-copy",
    dataWid: "c5accebb-19af-013e-0384-e4b4272636f5",
    opacity: 0,
  },
  {
    name: "Anjali S.",
    title: "Head of Marketing",
    rating: "4.9",
    quote:
      "For the first time, I felt completely independent moving through a public space",
    ellipseClass: "ellipse-3",
    wrapperClass: "review2-copy",
    dataWid: "51bcb942-39cd-c249-fda8-e3c8abef3742",
    opacity: 0,
  },
  {
    name: "Tanuj Ahuja",
    title: "Tech Lead",
    rating: "4.9",
    quote:
      "Equispace consistently delivers designs that meet and exceed national accessibility standards.",
    ellipseClass: "ellipse-7",
    wrapperClass: "review1-copy1",
  },
  {
    name: "Purav Jha",
    title: "Software developer",
    rating: "4.6",
    quote:
      "Their attention to detail and knowledge of RPWD compliance gave us complete confidence in the process.",
    ellipseClass: "ellipse-6",
    wrapperClass: "review2-copy-copy",
  },
  {
    name: "Rishav Sha",
    title: "Head of Design",
    rating: "4.9",
    quote: "Equispace transformed our building into a truly inclusive space.",
    ellipseClass: "ellipse-2",
    wrapperClass: "review1-copy1-copy",
    dataWid: "31f3f657-2324-4456-a139-09da54977a29",
    opacity: 0,
  },
];


const PortfolioSection = () => {
  const cardRef = useRef(null);
  const cardFrontRef = useRef(null);
  const cardBackRef = useRef(null);
  const revealSectionRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const cardFront = cardFrontRef.current;
    const cardBack = cardBackRef.current;
    const revealSection = revealSectionRef.current;

    if (!card || !cardFront || !cardBack || !revealSection) return;

    gsap.set(revealSection, {
      opacity: 1,
      scale: 1.1,
      clipPath: "circle(0% at center)",
    });
    gsap.set(card, { transformStyle: "preserve-3d" });

    const rotationValue = { y: 0 };
    let isScrolling = false;
    let scrollEndTimeout;
    let tiltIntensity = 1;

    const flipTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-wrapper",
        start: "top 30%",
        end: "bottom+=550%",
        scrub: 1,
        pin: true,
        anticipatePin: 0,
        onEnterBack: () => {
          gsap.to(rotationValue, { y: 0, duration: 1 });
          gsap.to(
            { tilt: 1 },
            { tilt: 1, duration: 1, onUpdate: () => (tiltIntensity = 1) }
          );
        },
        onUpdate: ({ progress }) => {
          isScrolling = true;
          clearTimeout(scrollEndTimeout);
          scrollEndTimeout = setTimeout(() => (isScrolling = false), 300);
          tiltIntensity = Math.max(1 - progress * 0.7, 0.3);
        },
      },
    });

    flipTimeline
      .to(rotationValue, {
        y: 180,
        ease: "power3.inOut",
        duration: 1.45,
        onUpdate: () => {
          gsap.set(card, { rotationY: rotationValue.y });
          if (rotationValue.y > 90) {
            cardFront.style.visibility = "hidden";
            cardBack.style.visibility = "visible";
            gsap.to(revealSection, {
              clipPath: "circle(100% at center)",
              duration: 2,
              ease: "power3.out",
            });
          } else {
            cardFront.style.visibility = "visible";
            cardBack.style.visibility = "hidden";
          }
        },
      })
      .to(card, { scale: 16, ease: "power3.inOut", duration: 2 }, "<")
      .to(
        revealSection,
        { opacity: 1, ease: "power2.out", duration: 1.5 },
        "-=0.5"
      );

    const handleMouseMove = (e) => {
      if (isScrolling) return;
      const offsetX =
        (e.clientX - window.innerWidth / 2) / (50 / tiltIntensity);
      const offsetY =
        (e.clientY - window.innerHeight / 2) / (50 / tiltIntensity);
      gsap.to(card, {
        rotationX: offsetY,
        rotationY: rotationValue.y - offsetX,
        ease: "power1.out",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      if (isScrolling) return;
      gsap.to(card, {
        rotationX: 0,
        rotationY: rotationValue.y,
        ease: "power2.out",
        duration: 0.5,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      flipTimeline.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="card_section">
        {/* Card Flip */}
        <div className="card-wrapper">
          <div className="card" ref={cardRef}>
            <div className="card-front" ref={cardFrontRef}>
              <img
                src="https://cdn.prod.website-files.com/67f622de004cb2787adbbc2e/67f622de004cb2787adbbc3b_grommet-icons%3Aprojects.svg"
                width="Auto"
                height="64"
                alt="projects"
                className="grommet-iconsprojects"
              />
              <div className="frame-24">
                <div className="text-4">PROJECTS</div>
                <div className="text-5">⠏⠗⠕⠚⠑⠉⠞⠎</div>
              </div>
            </div>
            <div className="card-back" ref={cardBackRef}></div>
          </div>
        </div>

        {/* BG stripes */}
        <div className="card-bg-2">
          {backgroundStrips.map(({ id, src }) => (
            <img
              key={id}
              src={src}
              alt={`background-${id}`}
              className="_1-4"
              loading="lazy"
            />
          ))}
        </div>

        {/* Testimonials */}
        {/* ——— Review Holder 0 ——— */}
       {/* Testimonials */}
{[0, 2, 4, 6].map((startIndex, holderIndex) => (
  <div key={holderIndex} className={`review-holder-${holderIndex}`}>
    {testimonials.slice(startIndex, startIndex + 2).map((review, index) => (
      <div
        key={review.name + index}
        className={review.wrapperClass}
        data-w-id={review.dataWid || undefined}
        style={review.opacity === 0 ? { opacity: 0 } : {}}
      >
        <div className={review.ellipseClass} />
        <div className="frame-1000004350">
          <div className="frame-1000004356">
            <div className="frame-1000004357">
              <div className="rishav-sha-3">{review.name}</div>
              <div className="text-24">|</div>
              <div className="rishav-sha-3">{review.title}</div>
            </div>
            <div className="frame-1000004358">
              <div className="_49-3">{review.rating}</div>
              <div className="frame-1000004359">
                <img
                  className="star-3"
                  src="https://cdn.prod.website-files.com/67a752e08b9173b38eb90a41/67c9a085bd7d0f970c3b9a3c_Star-1.svg"
                  alt=""
                  width={12}
                  height={12}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="text-26">"{review.quote}"</div>
        </div>
      </div>
    ))}
  </div>
))}

      </div>
      {/* Featured Work */}
      <div className="work-holder" ref={revealSectionRef} style={{marginTop:'40rem'}}>
        <section className="s2">
          <div className="text-head">
            <h1 className="featured-work">Featured Work</h1>
            <section className="space2"></section>
            <div className="work_text">
              <div className="w" >
                <p className="paragraph_4">Step inside our spaces where</p>
              </div>
              <div className="w" >
                <p className="paragraph_4">
                  accessibility meets innovation—because
                </p>
              </div>
              <div className="w" >
                <p className="paragraph_4">great design belongs to everyone</p>
              </div>
            </div>
          </div>
        </section>

<section className="work">
  {Array.from({ length: Math.ceil(portfolioItems.length / 2) }).map((_, rowIndex) => (
    <div className={`portfolio-row row${rowIndex + 1} w-layout-grid`} key={rowIndex}>

      {portfolioItems.slice(rowIndex * 2, rowIndex * 2 + 2).map((item) => (
        <a
          key={item.id}
          href={item.title}
          className="projects w-inline-block"
        >
          <div className="img-hold">
            <img
              src={item.imageSrc}
              alt={item.title}
              className={`image-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
            />
          </div>
          <div className="div-block-5">
            <div className="text-block-4">{item.category}</div>
            <div className="div-block-32">
              <div className="div-block-33">
                <img
                  className="img-2"
                  alt="arrow"
                  src="./arrow.png"
                />
                <h1 className="heading-2">{item.title}</h1>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  ))}
</section>

      </div>
    </section>
  );
};

export default PortfolioSection;
