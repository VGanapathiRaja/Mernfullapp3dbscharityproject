import React from 'react'
import './Home.css'
import subImg from '../../Assets/logo.png'
import Donatebtn from '../../Components/Buttons/Donatebtn';
import { useState } from 'react';
import axios  from 'axios';
export default function Homedonate() {
    const [subscribe,setSub] = useState({semail:"",smobile:""});
    const [err,setErr] = useState({});
    const [submitSuccess,setSubmitss] = useState();
    
      const handleChange =(sdata)=>{
        setSub({...subscribe,[sdata.target.name]:sdata.target.value});
        setErr({...err,[sdata.target.name]:""});
      };
    
      function handleValidateform(){
            let tempErr ={};
    
            if(!subscribe.semail.trim()){
               tempErr.semail ="please fill Email data";
            }
    
             const mobilePattern = /^[+]91(9|8|7|6)\d{9}$/;
            if(!subscribe.smobile.trim()){
              tempErr.smobile="please fill Mobile data data"
            }
            else if(!mobilePattern.test(subscribe.smobile)){
               tempErr.smobile="please fill correct Mobile data data"
            }
    
            setErr(tempErr);
    
            return Object.keys(tempErr).length === 0;
      }
    
    async  function handleSubmit(sdata){
          sdata.preventDefault();
    
          if(handleValidateform()){
            console.log(subscribe);
            // alert("Subscribed successfully...!");
            setSubmitss("Subscribed successfully...!")
            setTimeout(()=>{setSubmitss(" ");},2000)
            console.log("successfully subscribed....!!!");
            setSub({semail:"",smobile:""});
          }
          try{
            // await axios.post("http://localhost:4000/subscribdata",subscribe);
            await axios.post("https://charityserverside.onrender.com//subscribdata",subscribe);
            alert("successfully subscribed...!")
          }
          catch(err){
            if(err){
                console.log("data not sent ",err)
                alert("not subscribed...!")
            }
          }
      }
  return (
    <section className='homedonate formpart'>
        <div className="donateleft">
            <h2>Get latest news delivered daily!
            We will send you breaking news right to your inbox.</h2>
            <h2>we connect to mongoDb Atlas 😍😍</h2>
            {
                submitSuccess ? (
                <p className='successmesages'> 
                    {submitSuccess} 
                </p>
                ) : null
            }
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <input type="email" name="semail" placeholder='Enter your Mail id' required 
                    onChange={handleChange}
                    value={subscribe.semail}
                    />
                    {
                    err.semail && <p> {err.semail} </p>
                    }
                </div>
                <div className="inputs">
                    <input type="tel" name="smobile" placeholder='Enter your Mobile Number' 
                    onChange={handleChange}
                    value={subscribe.smobile}/>
                    {
                    err.smobile && <p> {err.smobile} </p>
                    }
                </div>
                <div className="inputs btn">
                    <Donatebtn btnTitle={"Subscribe..!"} />
                </div>
            </form>

        </div>
        <div className="donateright">
            <img src={subImg} alt="" />
        </div>
    </section>
  )
}
