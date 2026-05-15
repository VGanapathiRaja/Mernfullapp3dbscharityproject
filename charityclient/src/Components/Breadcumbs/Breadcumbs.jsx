import React from 'react'
import './Breadcumbs.css';
import { Link } from 'react-router-dom'

export default function Breadcumbs({bTitle,bLink}) {
  return (
        <div className="breadcumbs">
            <div className="breadcumtitel">
                <h3> {bTitle} </h3>
            </div>
            <div className="menulist">
                <ul>
                    <li> <Link to={'/'} > Home </Link> </li>
                    <li> / </li>
                    <li> <Link to={'/'} > {bLink} </Link> </li>
                </ul>
            </div>
        </div>
  )
}
