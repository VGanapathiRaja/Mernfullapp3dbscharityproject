import React from 'react'
import './Home.css';
import Aboutimg from '../../Assets/bg-banner1.jpg';
import Aboutboxdesign from './Aboutboxdesign';
export default function Homeabout() {
  return (
   <section className='homeabout'>
      <div className="aboutleft">
          <img src={Aboutimg} alt="abiut img" />
      </div>
      <div className="aboutright">
          <div className="heading">
              <h1>Our Mission</h1>
              <p>Our organization pursues several goals that can be identified as our mission. Learn more about them below.</p>
          </div>
          
          <Aboutboxdesign aICon={<i class="bi bi-amd"></i>} aTitle={"Saving Children"} aPara={"Our main mission is to save and rescue permanently displaced children."} />

          <Aboutboxdesign aICon={<i class="bi bi-award-fill"></i>} aTitle={"Saving Children"} aPara={"Our main mission is to save and rescue permanently displaced children."}/>
          
          <Aboutboxdesign aICon={<i class="bi bi-award-fill"></i>} aTitle={"Saving Children"} aPara={"Our main mission is to save and rescue permanently displaced children."}/>


      </div>
   </section>
  )
}
