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
                  <li><div className='hover-circle'></div><a href={'/schedule'}>For Authors</a></li>
                  <li><div className='hover-circle'></div><a href={'/'}>committee   </a></li>
                  <li><div className='hover-circle'></div><a href={'/gallery'}>ICTEST <span className="year-2024">2024</span></a></li>

            </ul>
            <div className="logo-div">
                  <img class="mec-logo" src={mecLogo} alt="" />
            </div>                 
    </div>
  )
}