import Nav from "../component/Nav.js";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaAws } from "react-icons/fa";
import "./favorites.css";
import { useState, useEffect } from "react";

function Favorites() {
  const api_url = "https://fakestoreapi.com/products";
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, []);

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

  return (
    <>
      <Header />
      <Nav />
      <Container style={{ marginTop: "125px" }}>
        <div className="ms-5">
          <h1 className="mt-5">favorites</h1>
          <p className="fav_p"> find your saved items</p>
        </div>

        {favorites.map((fav) => {
          return (
            <Row className="product" key={fav.id}>
              <img className="product_img" src={fav.image} alt=""></img>
              <Col className="col-8 product_details">
                <p className="pt-3">{fav.title}</p>
                <span className="price">{fav.price} $</span>
                {/* <span className="del_Price">
              <del>$1128.00</del>
            </span> */}
                <br />
                <Rating rating={fav.rating.rate} />
                <span style={{ color: "#FF9017", marginLeft: "10px" }}>
                  {fav.rating.rate}
                </span>
                <span className="dot">.</span>
                <span style={{ color: "#8B96A5" }}>154 orders</span>
                <span className="dot">.</span>
                <span style={{ color: "#00B517" }}>Free Shipping</span>
                <p style={{ color: "#8B96A5" }}>{fav.description}</p>
                <button className="view_details">View detials</button>
              </Col>
              <Col>
                <button className="fav_btn">
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
