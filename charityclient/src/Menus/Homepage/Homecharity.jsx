import React from 'react'
import Donatebtn from '../../Components/Buttons/Donatebtn'

export default function Homecharity() {
  return (
    <section className='charity'>
        <div className="charitycontent">
            <h1>Like What We Offer?</h1>
            <p>Start with this demo now or check the others in the full version of Monstroid².</p>
            <Donatebtn btnTitle={"Donate Now"} />
        </div>
    </section>
  )
}
