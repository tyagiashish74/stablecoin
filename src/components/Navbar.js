import React from 'react'
import './Navbar.css';
import logo from './images/logo.webp';
import {BiHelpCircle } from "react-icons/bi"
import {BiPhoneCall } from "react-icons/bi"
import {AiFillApple } from "react-icons/ai"






function Navbar(){
    

    return(
        <div className='navbar-main-div'>
            <ul>
            <div>
            <a href="" ><img src={logo} alt="logo"  className='main-logo'/></a>
            </div>
            <div>
                 <div className='div-li'>
                <span> <li><a href="#" className='home'>Home</a></li></span>
                <span> <li><a href=""> <BiHelpCircle/> Help </a></li></span>
                  <span><li><a href="https://stablecoin.co.in/about-us-2/">About Us   </a></li></span>
                  <span><li><a href="https://stablecoin.co.in/elementor-2890/">Contact Us </a></li></span>
                  <span><li><a href=""> <BiPhoneCall/> Call</a></li></span>
                  <span><li><a href="https://apps.apple.com/us/app/stablecoin/id1608005499"> <AiFillApple/>App</a></li></span>
                  <span><li><a href="https://my.stablecoin.co.in/en/login">Login      </a></li></span>
                 <button className='btn-register'  >
                      Register</button>
            </div>
             </div>
             </ul>
        </div>
    );
}
export default Navbar;
