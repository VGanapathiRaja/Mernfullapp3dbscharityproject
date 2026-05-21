import React from 'react'
import './Home.css';
import subImg from '../../Assets/logo.png'
import Donatebtn from '../../Components/Buttons/Donatebtn';
import { useState } from 'react';
import axios from "axios";
export default function Homecontact() {
  const [contact,setContact] = useState({cname:"",semail:"",smobile:""});
  const [err,setErr] = useState({});

  const handleChange =(sdata)=>{
    setContact({...contact,[sdata.target.name]:sdata.target.value});
    setErr({...err,[sdata.target.name]:""});
  };

  function handleValidateform(){
        let tempErr ={};

        
        if(!contact.cname.trim()){
           tempErr.cname ="please fill Email data";
        }

        if(!contact.semail.trim()){
           tempErr.semail ="please fill Email data";
        }

         const mobilePattern = /^[+]91(9|8|7|6)\d{9}$/;
        if(!contact.smobile.trim()){
          tempErr.smobile="please fill Mobile data data"
        }
        else if(!mobilePattern.test(contact.smobile)){
           tempErr.smobile="please fill correct Mobile data data"
        }

        setErr(tempErr);

        return Object.keys(tempErr).length === 0;
  }

  // const formSubmit = async()=>{
  //   try{
  //     await
  //   }
  //   catch(){

  //   }
  // }

 async function handleSubmit(sdata){
      sdata.preventDefault();

      if(handleValidateform()){
        console.log(contact);
        alert("contactd successfully...!");
        console.log("successfully contactd....!!!");
        setContact({semail:"",smobile:""});
      }

      try{
        await axios.post("http://localhost:5000/contactdata",contact);
        alert("Data sented to backend or DB")
      }
      catch(err){
        if(err){
          console.error("Data not send backend",err);
          alert("Data not sent to backend....!")
        }
      }
     
  }

  return (
    <section className='homecontact formpart'>
        <div className="homesubscribes">
              <img src={subImg} alt="" />
        </div>
        <div className="homecontacts">
            <h2>Get latest news delivered daily!
We will send you breaking news right to your inbox.</h2>
<h3>We connect to via Mongo Db Local 👌👌👌👌</h3>

            <form onSubmit={handleSubmit}>
              <div className="inputs">
                  <input type="text" name="cname" placeholder='Enter your Full Name'  
                    onChange={handleChange}
                    value={contact.cname}
                  />
                  {
                    err.cname && <p> {err.cname} </p>
                  }
                </div>
                <div className="inputs">
                  <input type="email" name="semail" placeholder='Enter your Mail id' required 
                    onChange={handleChange}
                    value={contact.semail}
                  />
                  {
                    err.semail && <p> {err.semail} </p>
                  }
                </div>
                <div className="inputs">
                  <input type="tel" name="smobile" placeholder='Enter your Mobile Number' 
                  onChange={handleChange}
                    value={contact.smobile}/>
                  {
                    err.smobile && <p> {err.smobile} </p>
                  }
                </div>
                <div className="inputs btn">
                  <Donatebtn btnTitle={"Contact Now..!"} />
                </div>
            </form>

        </div>
    </section>
  )
}
