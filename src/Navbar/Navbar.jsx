import {useState} from 'react';
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const[menu, setMenu]= useState("shop");
  return (
    <div className='navbar'>
        <ul className='nav-menu'>
           <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'> Home</Link>{menu==="shop"? <hr />:<></>}</li>
           <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration: 'none'}} to='/about'>About Us</Link> {menu==="about"? <hr />:<></>}</li>
           <li onClick={()=>{setMenu("product")}}><Link style={{textDecoration: 'none'}} to='/product'>Products </Link>{menu==="product"? <hr />:<></>}</li>
           <li onClick={()=>{setMenu("payment")}}><Link style={{textDecoration: 'none'}} to='/payment'>Payment</Link> {menu==="payment"? <hr />:<></>}</li>
           <li onClick={()=>{setMenu("gallary")}}><Link style={{textDecoration: 'none'}} to='/gallary'>Gallary </Link>{menu==="gallary"? <hr />:<></>}</li>
           <li onClick={()=>{setMenu("feedback")}}><Link style={{textDecoration: 'none'}} to='/feedback'>Feedback </Link> {menu==="feedback"? <hr />:<></>}</li>
           <li onClick={()=>{setMenu("enquiry")}}><Link style={{textDecoration: 'none'}} to='/enquiry'>Enquiry </Link>{menu==="enquiry"? <hr />:<></>}</li>
        </ul>
      
    </div>
  )
}

export default Navbar