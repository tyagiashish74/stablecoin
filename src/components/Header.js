import React from 'react'
import './Header.css';
import Navbar from './Navbar';
import Slide from './Slide';
import Card from './CardBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import ZeroFee from './ZeroFee';


function Header(){
    

    return(
        <div>
            <Navbar></Navbar>
             <Slide/> 
             <Card></Card>
             <ZeroFee></ZeroFee>
            
        </div>
    );
}
export default Header;
