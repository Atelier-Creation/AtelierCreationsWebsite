import { useEffect, useRef } from "react";
import './GridOverView.css'
import image1 from '../../src/assets/portfolioGridImage/gridImage1.jpg'
import image2 from '../../src/assets/portfolioGridImage/image1.jpg'
import image3 from '../../src/assets/portfolioGridImage/image2.jpg'
import image4 from '../../src/assets/portfolioGridImage/image3.jpg'
import { gridData } from "../PortfolioGrid/PortfolioGrid";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
const images = [image1,image2,image3,image4]
function GridOverView() {
  const location = useLocation();
  const data = location.state?.data;
  const images = data?.imageSrc || [];
    const { projectName } = useParams();
    const navigate = useNavigate();
    const scrollContainer = useRef(null);
    
    useEffect(() => {
        const container = scrollContainer.current;
    
        const onWheel = (e) => {
          if (container) {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
          }
        };
    
        container.addEventListener("wheel", onWheel, { passive: false });
    
        return () => container.removeEventListener("wheel", onWheel);
      }, []);
      const currentIndex = gridData.findIndex(item => item.head === projectName);
      const nextIndex = (currentIndex + 1) % gridData.length; // loop
      const nextProject = gridData[nextIndex];
  return (
    <div className='grid-overview-container'ref={scrollContainer}>
      <div className='data-details-section'>
        <h1>{data.title}</h1>
        <div className='data-details-para'>
            <p>Equispace collaborated with IBM to create a truly inclusive and accessible environment, ensuring compliance with the Rights of Persons with Disabilities (RPWD) Act. Our expertise in accessibility solutions helped transform IBM’s spaces into barrier-free, adaptive, and safe environments for all individuals.</p>
            <p>Through our partnership, IBM has taken a significant step towards creating workplaces that are truly inclusive, ensuring equal access for everyone.</p>
        </div>
        <div className='data-sevices'>
            <h4>Services</h4>
            <p>Tactile Installations</p>
            <p>Braille Signages</p>
            <p>Emergency evacuation wheel chair</p>
            <p>Evacuation maps & Floor Directory</p>
        </div>
        <div className='data-sevices'>
            <h4>Location</h4>
            <p>IBM RPWD works - Kolkata, Mumbai, Pune, Ahmadabad, Gurgaon, Noida, Kochi, Hyderabad, Bengaluru</p>
        </div>
      </div>
      <div className='data-overview-images'>
      <div className='data-overview-images'>
  {images.map((img, index) => (
    <img src={img} key={index} alt={`image-${index}`} />
  ))}
</div>


      </div>
      <div className="grid-overview-connect">
        <h3>Let&apos;s Connect</h3>
        <p>Tell us about your business. Let&apos;s get this conversation started. Fill in the form or send us an email.</p>
        <div className="grid-overview-connect-link">
            <i className="bi bi-arrow-right"></i>
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=atelierhub.official@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  atelierhub.official@gmail.com
</a>
        </div>
        <hr className="grid-overview-hr-line"/>
        <h1>{nextProject.head}</h1>
        <img src={nextProject.image} alt={nextProject.head}  style={{ cursor: 'pointer' }} onClick={() => navigate(`/${nextProject.head}`)}/>
        <h6 onClick={() => navigate(`/${nextProject.head}`)} style={{cursor:"pointer"}}>NEXT PROJECT</h6>
      </div>

    </div>
  )
}

export default GridOverView
