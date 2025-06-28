import atelier from "../src/assets/home/header-logo.png"
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Header(){
   useEffect(() => {
     const nav = document.getElementById('nav');
let top = window.scrollY;

window.addEventListener("scroll", () => {
  if (top < window.scrollY) {
    nav.classList.add("hide-nav");
  } else {
    nav.classList.remove("hide-nav");
  }

  // Update scroll position
  top = window.scrollY;

  // Remove section ID from URL if present
  if (window.location.hash) {
    history.replaceState("", document.title, window.location.pathname + window.location.search);
  }
});

    }, []);
   return (
    <>
    <section id="nav"  className="header-sec">
      <div className="container-fluid">
         <div className="row">
            <header className="header">
               <div className="main-logo">
               <Link to="/"><img src={atelier} alt="img" width="216" height="74" loading="lazy" title="" /></Link>
               </div>

               <ul className="nav-bar">
                  <li className="active-nav"><Link to="/">Home</Link></li>
                  <li><a href="/#about-us">About</a></li>
                  <li> <a href="/#services">Services</a></li>
                  <li className="nav-pages"><a href="/#case-study">Case study</a></li>
                  <li> <a href="https://forms.gle/Z93DK6jRqdWmGGxZ9" target="_blank" rel="noopener noreferrer">Careers</a></li>
                  <li><a href="/#blogs">Blogs</a></li>
               </ul>

               {/* <a className="hub-btn" href="#">
               freelancer Hub
               </a> */}

               <div className="handburger-menu">
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                  <span className="line-3"></span>
               </div>
            </header>
         </div>
      </div>
    </section>

    
    </>
   )
}

export default Header