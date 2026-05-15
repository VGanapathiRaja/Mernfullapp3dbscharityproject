import React from 'react'
import './Home.css';
export default function Aboutboxdesign({aICon,aTitle,aPara}) {
  return (
    <div>
        <div className="aboutbox">
              <div className="icons">
                {aICon}
                  
              </div>
              <div className="aboutcontent">
                  <h3>{aTitle}</h3>
                  <p> {aPara} </p>
              </div>
          </div>
    </div>
  )
}
