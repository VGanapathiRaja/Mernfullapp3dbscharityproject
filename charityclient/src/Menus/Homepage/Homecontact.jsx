import React from 'react'
import './Home.css';
import subImg from '../../Assets/logo.png'
import Donatebtn from '../../Components/Buttons/Donatebtn';
import { useState } from 'react';
export default function Homecontact() {
  const [subscribe,setSub] = useState({semail:"",smobile:""});
  const [err,setErr] = useState({});

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

  function handleSubmit(sdata){
      sdata.preventDefault();

      if(handleValidateform()){
        console.log(subscribe);
        alert("Subscribed successfully...!");
        console.log("successfully subscribed....!!!");
        setSub({semail:"",smobile:""});
      }
  }

  return (
    <section className='homecontact'>
        <div className="subscribeleft">
              <img src={subImg} alt="" />
        </div>
        <div className="homesubscribes">
            <h2>Get latest news delivered daily!
We will send you breaking news right to your inbox.</h2>

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
    </section>
  )
}
