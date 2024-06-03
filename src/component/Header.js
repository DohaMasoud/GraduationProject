import React from 'react';
import{ NavLink }from'react-router-dom';
import Image  from 'react-bootstrap/Image';
import { IoSettingsSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import './Header.css';

function Header(){
return(
    <div className='c1 fixed-top'>

        <Image src="asset/logo.png" width={75} style={{marginTop: "-50px"}}/>
        <h3>Econfiy</h3>
        <input></input>
        <button>search</button>
    <ul>
        {/* <li className='icon'><CgProfile/></li> */}
        <NavLink to="/Profile" className="nav-link" ><CgProfile /><br/>profile</NavLink> 
    </ul>
    <ul >
        {/* <li className='icon'><IoSettingsSharp/></li> */}
        <NavLink to="/Setting" className="nav-link"><IoSettingsSharp /><br/>setting</NavLink>
    </ul>
    <ul>
        {/* <li className='icon'><FaHeart/></li> */}
        <NavLink to='/Favorites' className="nav-link" style={{textDecorationLine:"none"}}><FaHeart/><br/>favorites</NavLink>
    </ul>      
    </div>
    
    
)
}
export default Header;
