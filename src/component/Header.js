import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import{ NavLink }from'react-router-dom';
import Image  from 'react-bootstrap/Image';
import { IoSettingsSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import './Header.css'
function Header() {
  return (
    <Navbar  expand="lg" className="bg-white head " style={{borderBottom:"1px solid rgb(205, 199, 199)"}}>
      <Container fluid>
        <Navbar.Brand href="/Home" style={{marginLeft:'100px'}}><Image src="asset/logo.png" width={75} style={{marginTop: "-50px"}}/>Econfiy</Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{width:"350px"}}
            />
            <Button className='btn1' style={{width:'130px',marginLeft:"-13px"}}>Search</Button>
          </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 headui"
            style={{ maxHeight: '100px' }}
            navbarScroll>
                <ul>
        {/* <li className='icon'><CgProfile/></li> */}
        <NavLink to="/Profile" className="nav-link1" ><CgProfile /><br/>profile</NavLink> 
    </ul>
    <ul >
        {/* <li className='icon'><IoSettingsSharp/></li> */}
        <NavLink to="/Setting" className="nav-link1"><IoSettingsSharp /><br/>setting</NavLink>
    </ul>
    <ul>
        {/* <li className='icon'><FaHeart/></li> */}
        <NavLink to='/Favorites' className="nav-link1" style={{textDecorationLine:"none"}}><FaHeart/><br/>favorites</NavLink>
    </ul> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;