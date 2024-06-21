import './Setting.css'
import React from "react";
import Nav from '../component/Nav.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Profiledata from "../component/Profiledata.js";
import Resetpassdata from "../component/Resetpassdata.js"
import { Route,useNavigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
function Setting({token}) {
    let navigate = useNavigate();

    async function logout() {
        try {
          // Send a POST request to the logout endpoint
          const response = await fetch('http://127.0.0.1:8000/api/auth/logout', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
      
          // Check if the response is successful
          if (response.ok) {
            // Remove the token from local storage
            localStorage.removeItem('token');
            alert('Logged out successfully!');
            navigate("/SignIn")
            console.log(localStorage.getItem('token'))
          } else {
            // Handle errors if the logout was not successful
            console.error('Logout failed:', response.statusText);
            alert('Failed to log out. Please try again.');
          }
        } catch (error) {
          // Handle network errors or other unforeseen errors
          console.error('An error occurred:', error);
          alert('An error occurred. Please try again.');
        }
      }
    return (
        <>
          <div className="fixed-top">
     <Header token={token}/>
       <Nav/>
     </div>
            <div className="container-fluid" >
                <div className="row" style={styles.row}>
                    <h2>Account Settings</h2>
                    <div className="col-lg-3 col-md-2 col-sm-1 " style={styles.sidebar}>
                        <div style={{borderBottom:"1px solid gray"}}>
                            <Link to={"/Profiledata"} style={styles.link}>
                                <p><CgProfile style={{float:"left",fontSize:"large",marginTop:"10px"}}/>My Account <FaChevronRight style={{float:"right",fontSize:"large" ,marginTop:"10px"}}/></p>
                            </Link>
                        </div>
                        <div style={{borderBottom:"1px solid gray"}}>
                            <Link to={"/Resetpassdata"} style={styles.link}>
                                <p><RiLockPasswordLine style={{float:"left",fontSize:"large",marginTop:"10px"}} />Reset Password <FaChevronRight style={{float:"right",fontSize:"large" ,marginTop:"10px"}}/></p>
                            </Link>
                        </div>
                        <div style={{borderBottom:"1px solid gray"}}>
                            <Link onClick={()=>logout()} style={styles.link}>
                                <p style={{color:"red"}}><IoIosLogOut style={{float:"left",fontSize:"large",marginTop:"10px"}} />Log Out <FaChevronRight style={{float:"right",fontSize:"large" ,marginTop:"10px"}}/></p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-5 col-sm-3 " style={styles.content}>
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
    row:{backgroundColor:"white",
        margin:"150px 60px 30px 60px",
        padding: "30px 0px 30px 100px",
        borderRadius:"60px",
        },
    sidebar: {
        padding: "10px ",
        borderRight: "1px solid #d9d6d6",
    },
    link: {
        textDecoration: "none",
        padding: "10px 5px",
        textAlign: "center",
        display: "block",
        color: "black",
    },
    content: {
        margin: "auto"
        }
};


export default Setting;

