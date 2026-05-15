import React from 'react'
import './Footer.css';
import Logoimg from '../../Assets/logo.png'
export default function Footer() {
  return (
    <footer>
        <div className="footerbox">
              <img src={Logoimg} alt="logo" />

              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Charity</a></li>
                <li><a href="#">Contact US</a></li>
              </ul>

              <div className="socialicon">
                  <ul>
                    <li><a href="#"> <span> <i class="bi bi-amd"></i></span> </a></li>
                    <li><a href="#"> <span> <i class="bi bi-facebook"></i></span> </a></li>
                    <li><a href="#"> <span><i class="bi bi-whatsapp"></i></span> </a></li>
                    <li><a href="#"> <span><i class="bi bi-messenger"></i></span> </a></li>
                  </ul>
              </div>
              <p>© 2026 Helper. All Rights Reserved. Design by MERN07Batchguys@roclers</p>
        </div>
    </footer>
  )
}
