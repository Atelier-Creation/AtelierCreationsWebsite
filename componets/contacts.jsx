
import { useEffect } from "react"



const Contacts = () => {
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])
  return (
    <>
     <section className="contact-us-sec" id="contact-us-sec">
      <div className="contact-us-container">
        <div className="contact-us-part-1">
           <h4 className="contact-us-tit" data-aos="fade-up" data-aos-duration="1000">
           Have a project! Let's discuss
           </h4>

           <div className="contact-us-para">
            <span>Thank you for getting in touch! </span>
            <span>Kindly. </span>
            <span>Fill the form, have a great day!</span>
           </div>
        </div>
        <div className="contact-us-part-2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
             <form target="_blank" action="https://docs.google.com/forms/d/e/1FAIpQLSe5Q8l_Ye6YO-lf6CSZ4de1qlx2YCINVQcA8sgX8rxHGxkJmQ/formResponse" >
              <div className="form-container">
                <input type="text" name="entry.395706424" id="name"  placeholder='Your Name' required />

                <input type="email" name="entry.2086582263" id="email" placeholder='Your Email' required />

                <input type="number" name="entry.1395835555" id="number" maxLength="10" placeholder='Phone number' required />

                <select name="entry.1020629178" id="contry" required>
                  <option value="Contry">Country</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="Finland">Finland</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Qatar">Qatar</option>
                </select>

                <input type="text" name="entry.1685055836" id="company-name" placeholder='Company Name' required />

                <select name="entry.1187872503" id="contry" required >
                  <option value="web-development">Interested in</option>
                  <option value="web-development">Social Media Marketing</option>
                  <option value="designing">Paid Advertising</option>
                  <option value="Finland">Advanced Analytics</option>
                  <option value="Yemen">SEO Optimization</option>
                  <option value="Qatar">Funnel Optimization</option>
                  <option value="Qatar">Condent Marketing</option>
                </select>

                <input className="message" type="text" name="entry.146220427" id="message" placeholder='Message' required />

              </div>
               <button target="_blank" className="form-btn"> Submit</button>
             </form>
        </div>
      </div>
     <div className="bg-txt-1">
     CONTACT US
     </div>
     

     </section>
    </>
  )
}

export default Contacts