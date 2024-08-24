import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import mecLogo from '../assets/mecLogo.png'
export default function Navbar() {
  return (
    <div className="navbar">
            <div className="logo-div">
                  <img src={mecLogo} alt="" />
                  <span>ICTEST</span>
            </div>
            <ul>
                  <li><div className='hover-circle'></div><a href={'/'}>home</a></li>
                  <li><div className='hover-circle'></div><a href={'/gallery'}>gallery</a></li>
                  <li><div className='hover-circle'></div><a href={'/publication'}>publications</a></li>
                  <li><div className='hover-circle'></div><a href={'/schedules'}>schedule</a></li>
            </ul>
            <button className='login-btn-li'><div className='hover-circle-loginBtn'></div>Login</button>
    </div>
  )
}