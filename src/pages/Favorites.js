import Nav from "../component/Nav.js";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaAws } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";
import "./favorites.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

function Favorites({token}) {
  const api_url = "http://127.0.0.1:8000/api/favourites";
  const [favorites, setFavorites] = useState([]);
  const { IdHandler } = useContext(ProductContext);

  useEffect(() => {
    const fetchData = async () => {
      // const token = "5|78O5nAEGWzPhfsUcPCF1xYMPv9mqOdWh7MO07k3Fca5824d3";
      const response = await axios.get(api_url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFavorites(response.data.data.favourites.data);
    };
    fetchData();
  }, []);

  const handleRemoveFavorite = async (favoriteId) => {
    try {
      // const token = "9|uMX7bNLu1Q1GyeP4iftuTXiXDrp0pVvJTEr822XB2f1d795f";
      const deleteUrl = `http://127.0.0.1:8000/api/favourites/${favoriteId}`;
      await axios.delete(deleteUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFavorites(favorites.filter(item => item.id !== favoriteId));
    } catch (error) {
      console.error('Error removing product from favorites:', error);
    }
  };

  const Star = ({ filled }) => {
    return (
      <span style={{ color: filled ? "#FF9017" : "#ddd" }}>
        <IoIosStar />
      </span>
    );
  };

  const Rating = ({ rating }) => {
    const filledStars = Math.round(rating);
    const stars = Array.from({ length: 5 }, (_, index) => (
      <Star key={index} filled={index < filledStars} />
    ));

    return <i>{stars}</i>;
  };

  const getTruncatedText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + '...';
  };

  const descriptionLimit = 100; // Set a character limit for the truncated text

  return (
    <>
      <div className="fixed-top">
        <Header />
        <Nav />
      </div>
      <Container style={{ marginTop: "125px" }}>
        <div className="ms-5">
          <h1 className="mt-5">Favorites</h1>
          <p className="fav_p">Find your saved items</p>
        </div>

        {favorites.map((item) => {
          return (
            <Row className="product" key={item.product.id}>
              <img
                className="product_img"
                src={item.product.image}
                alt=""
              ></img>
              <Col className="col-8 product_details">
                <p className="pt-3">{item.product.name}</p>
                <span className="price">{item.product.price} $</span>
                <br />
                <Rating rating={item.product.average_rating} />
                <span style={{ color: "#FF9017", marginLeft: "10px" }}>
                  {item.product.average_rating}
                </span>
                <span className="dot">.</span>
                <span style={{ color: "#8B96A5" }}>
                  {item.product.total_reviews} orders
                </span>
                <span className="dot">.</span>
                <span style={{ color: "#00B517" }}>Free Shipping</span>
                <p style={{ color: "#8B96A5" }}>
                  {item.product.short_description.slice(0, 250)}
                </p>
                <NavLink
                  to="/Product"
                  className="view_details1"
                  type="button"
                  onClick={() => {
                    IdHandler(item.product.id);
                  }}
                >
                  View detials
                </NavLink>
              </Col>
              <Col>
                <button className="fav_btn" onClick={() => handleRemoveFavorite(item.id)}>
                  <FaHeart className="heart" />
                </button>
                <br></br>
                <FaAws className="AWS" />
              </Col>
            </Row>
          );
        })}
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
