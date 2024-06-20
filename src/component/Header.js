import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, NavLink } from "react-router-dom";
import React, { useState,useContext } from 'react';  // Added useState import
import Image from 'react-bootstrap/Image';
import { IoSettingsSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { ProductContext } from '../context/ProductContext';
import axios from "axios";
import './Header.css';
import {TokenContext} from"../context/TokenContext.js"
function Header() {
  const {id, IdHandler } = useContext(ProductContext);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const{token}=useContext(TokenContext)

  let navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch2 = (event) => {
    event.preventDefault();
    // You can now use the 'query' state variable to fetch data from your API
    handleSearch (query);
  };
  const handleSearch = async (query) => {
    setLoading(true);
    try {
      // const token = "12|Np1zbZGbaOZNnLcR4HIdBVn3aE9i8QSsFHpjkAra6e40b604"; // Define the token here
      const response = await axios.get(`http://127.0.0.1:8000/api/url-feach?url=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      IdHandler(response.data.data.product.id);
      navigate("/Product")
       // You can process the response data here
      // You can process the response data here
    } catch (error) {
      console.error('There was an error fetching the data:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Navbar expand="lg" className="bg-white head" style={{ borderBottom: "1px solid rgb(205, 199, 199)" }}>
      <Container fluid>
        <Navbar.Brand href="/Home" style={{ marginLeft: '100px' }}>
          <Image src="asset/logo.png" width={75} style={{ marginTop: "-50px" }} />
          Econfiy
        </Navbar.Brand>
        <Form className="d-flex" onSubmit={handleSearch2}>
        <Form.Control
          className="me-2"
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search"
        />
        <Button type="submit" className="btn1" style={{ width: '130px', marginLeft: '-13px' }}>
          Search
        </Button>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 headui"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <ul>
              <NavLink to="/Profile" className="nav-link1">
                <CgProfile /><br />profile
              </NavLink>
            </ul>
            <ul>
              <NavLink to="/Setting" className="nav-link1">
                <IoSettingsSharp /><br />setting
              </NavLink>
            </ul>
            <ul>
              <NavLink to='/Favorites' className="nav-link1" style={{ textDecorationLine: "none" }}>
                <FaHeart /><br />favorites
              </NavLink>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
