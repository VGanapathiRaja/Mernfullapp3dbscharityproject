import React from 'react'
import subImg from '../../Assets/logo.png'
import Donatebtn from '../../Components/Buttons/Donatebtn';
import { useState } from 'react';
import axios from 'axios'
export default function Homeconnect() {
    const [contactData, setContactData] = useState({
        cname: "",
        cemail: "",
        cmobile: "",
        cmessage: ""
    });

    const [errors, setErrors] = useState({});

    // Handle Change
    const handleChange = (e) => {

        const { name, value } = e.target;

        setContactData({
            ...contactData,
            [name]: value
        });

        // Remove error while typing
        setErrors({
            ...errors,
            [name]: ""
        });
    };

    // Validation Function
    const validateForm = () => {

        let tempErrors = {};

        // Name Validation
        if (!contactData.cname.trim()) {
            tempErrors.cname = "Please Enter Your Name";
        }

        // Email Validation
        const emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!contactData.cemail.trim()) {
            tempErrors.cemail = "Please Enter Your Email";
        }
        else if (!emailPattern.test(contactData.cemail)) {
            tempErrors.cemail = "Please Enter Valid Email";
        }

        // Mobile Validation
        const mobilePattern = /^[6-9]\d{9}$/;

        if (!contactData.cmobile.trim()) {
            tempErrors.cmobile = "Please Enter Mobile Number";
        }
        else if (!mobilePattern.test(contactData.cmobile)) {
            tempErrors.cmobile =
                "Please Enter Valid Mobile Number";
        }

        // Message Validation
        if (!contactData.cmessage.trim()) {
            tempErrors.cmessage =
                "Please Enter Your Message";
        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    // Submit
     const handleSubmit = async (e) => {

        e.preventDefault();

        if (validateForm()) {
            
            console.log(contactData);

            console.log("Form Submitted Successfully");

            setContactData({
                cname: "",
                cemail: "",
                cmobile: "",
                cmessage: ""
            });

            setErrors({});
        }

        try{
            await axios.post("http://localhost:4040/connect",contactData);
            alert("Data sented submitted...!");
        }
        catch(e){
            if(e){
                console.error("Data not sent db",e);
                alert("Data not sent db or backend");
            }
        }

    };

  return (
    <section className='homeconnect formpart'>
        <div className="connectright">
            <img src={subImg} alt="" />
        </div>
         <div className="connectleft">

            <h2>Let’s Get in Touch</h2>

            <h2>we connect to Mysql 😍😍</h2>

            <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="inputs">

                    <input
                        type="text"
                        name="cname"
                        placeholder='Enter your Name'
                        value={contactData.cname}
                        onChange={handleChange}
                    />

                    {
                        errors.cname &&
                        <p>{errors.cname}</p>
                    }

                </div>

                {/* Email */}
                <div className="inputs">

                    <input
                        type="email"
                        name="cemail"
                        placeholder='Enter your Email'
                        value={contactData.cemail}
                        onChange={handleChange}
                    />

                    {
                        errors.cemail &&
                        <p>{errors.cemail}</p>
                    }

                </div>

                {/* Mobile */}
                <div className="inputs">

                    <input
                        type="tel"
                        name="cmobile"
                        placeholder='Enter your Mobile'
                        value={contactData.cmobile}
                        onChange={handleChange}
                    />

                    {
                        errors.cmobile &&
                        <p>{errors.cmobile}</p>
                    }

                </div>

                {/* Message */}
                <div className="inputs">

                    <textarea
                        name="cmessage"
                        placeholder='Enter your Comments'
                        value={contactData.cmessage}
                        onChange={handleChange}
                    ></textarea>

                    {
                        errors.cmessage &&
                        <p>{errors.cmessage}</p>
                    }

                </div>

                {/* Button */}
                <div className="inputs">

                    <button type='submit'>
                        Send your Messages
                    </button>

                </div>

            </form>

        </div>
        
    </section>
  )
}
