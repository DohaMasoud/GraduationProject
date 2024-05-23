
import './Setting.css'
import React from "react";
import Nav from '../component/Nav.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Profiledata from "../component/Profiledata.js";
import Resetpassdata from "../component/Resetpassdata.js"
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function Setting() {
    return (
        <>
            <Header />
            <Nav />
            <div className="container-fluid">
                <div className="row" style={styles.row}>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-12" style={styles.sidebar}>
                        <div>
                            <Link to={"/Profiledata"} style={styles.link}>
                                <p>My Account <FaChevronRight /></p>
                            </Link>
                        </div>
                        <hr />
                        <div>
                            <Link to={"/Resetpassdata"} style={styles.link}>
                                <p>Reset Password <FaChevronRight /></p>
                            </Link>
                        </div>
                        <hr />
                        <div>
                            <Link to={"/SignUp"} style={styles.link}>
                                <p>Log Out <FaChevronRight /></p>
                            </Link>
                        </div>
                        <hr />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-12" style={styles.content}>
                        <Profiledata />
                        {/* <Resetpassdata /> */}
                        <Routes>
                            <Route path='/Profiledata' element={<Profiledata/>}></Route>
                            <Route path='/Resetpassdata' element={<Resetpassdata />}></Route>
                        </Routes>  
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

const styles = {
    row: {
        minHeight: "1000px",
    },
    sidebar: {
        background: "white",
        padding: "10px ",
        overflowY: "auto",

        height: "100vh",
    },
    link: {
        textDecoration: "none",
        padding: "10px 5px",
        textAlign: "center",
        display: "block",
        color: "black",
    },
    content: {
        height: "100%",
    }
};


export default Setting;
