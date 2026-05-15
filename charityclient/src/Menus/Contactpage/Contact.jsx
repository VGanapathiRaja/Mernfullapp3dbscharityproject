import React from 'react'
import Breadcumbs from '../../Components/Breadcumbs/Breadcumbs'
import Donatebtn from '../../Components/Buttons/Donatebtn'
import './Contact.css';
export default function Contact() {
  return (
    <section>
      <Breadcumbs bTitle={"Contact"} bLink={"contact"} />

        <div style={{width: "100%"}}>
          <iframe 
          width="100%" 
          height="600" 
          frameborder="0" 
          scrolling="no" 
          marginheight="0" 
          marginwidth="0" 
          allowfullscreen="" 
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&amp;q=Mern7&amp;maptype=roadmap&amp;zoom=14">
          <a href="https://www.maps.ie/create-google-map/">Embed Google Street View map</a>
          </iframe>
          </div>

          <div className="contactform">
              <div className="formleftpart">
                  <h3>Contact Details</h3>
                  <p>Address 4578 Marmora Road, Glasgow, D04 89GR</p>
                  <p>Phones (800) 123-0045 (800) 123-0045</p>
                  <p>E-mail info@demolink.org</p>
                  <p>We are open Mn-Fr: 10 am-8 pm</p>
              </div>
              <div className="formrightpart">
                  <h3>Let’s Get in Touch</h3>
                  <form >
                    <div className="inputs">
                        <input type="text" name="cname" placeholder='Enter your Name' />
                    </div>
                    <div className="inputs">
                        <input type="email" name="cname" placeholder='Enter your Name' />
                    </div>
                    <div className="inputs">
                        <input type="tel" name="cname" placeholder='Enter your Name' />
                    </div>
                    <div className="inputs">
                        <textarea name="cmesasge" placeholder='Enter your Comments'></textarea>
                    </div>
                    <div className="inputs">
                        <Donatebtn btnTitle={"Send your Messages"} />
                    </div>
                  </form>
              </div>
          </div>
    </section>
  )
}
