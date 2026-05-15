import React, { Component } from 'react'
import  './Header.css';
import Logoimg from '../../Assets/logo.png';
import Donatebtn from '../Buttons/Donatebtn';
import { Link } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <header>
          <div className="logo">
              <Link to={'/'}> <img src={Logoimg} alt="logo" /> </Link>
              <div className="toggle">
                  <i class="bi bi-list"></i>
              </div>
          </div>
          <div className="menus">
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/charity'}>Charity</Link></li>
                <li><Link to={'/contact'}>Conctact</Link></li> 
              </ul>
          </div>
          <div className="donatebtn">
              <Donatebtn btnTitle={"Donate"}/>
          </div>
      </header>
    )
  }
}
