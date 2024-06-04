import React from "react";
import Nav from '../component/Nav.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import Profiledata from "../component/Profiledata.js";


function Profile(){
    
    return(
        <>
        <div className="fixed-top">
     <Header/>
       <Nav/>
     </div>
        <Profiledata/>
        <Footer/>
        </>
    );
    }
export default Profile;