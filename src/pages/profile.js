import React from "react";
import Nav from '../component/Nav.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import Profiledata from "../component/Profiledata.js";


function Profile(){
    
    return(
        <>
        <Header/>
        <Nav/>
        <Profiledata/>
        <Footer/>
        </>
    );
    }
export default Profile;