import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import mecLogo from '../assets/mecLogo.png'
import kerala_chapter from '../assets/kerala_chapter.jpg'
export default function Navbar() {
  return (
    <div className="navbar">
            <div className="logo-div">
                  <img src={kerala_chapter} alt="" />
                  <span>ICTEST</span>
            </div>
            <ul>
                  <li><div className='hover-circle'></div><a href={'/'}>home</a></li>
                  <li><div className='hover-circle'></div><a href={'/gallery'}>gallery</a></li>
                  <li><div className='hover-circle'></div><a href={'/publications'}>publications</a></li>
                  <li><div className='hover-circle'></div><a href={'/schedule'}>schedule</a></li>
            </ul>
            <div className="logo-div">
                  <img src={mecLogo} alt="" />
            </div>            
            <button className='login-btn-li'><div className='hover-circle-loginBtn'></div>Login</button>
    </div>
  )
}