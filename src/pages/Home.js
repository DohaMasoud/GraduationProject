import Nav from "../component/Nav.js";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./home.css";
import { useState, useEffect } from "react";

import axios from "axios";

function Home({token}) {
  const [recomended, setRecomended] = useState([]);
  const [brands, setBrands] = useState({});
  const [brandsProducts, setBrandsProducts] = useState([]);
  const recomended_api_url = "http://127.0.0.1:8000/api/recomended";
  const brands_api_url = "http://127.0.0.1:8000/api/random-brand";
  const brands_products_api_url =
    "http://127.0.0.1:8000/api/brand-products?brand_id=";
    const getTruncatedText = (text, limit) => {
      if (text.length <= limit) return text;
      return text.substring(0, limit) + '...';
    };
  
    const descriptionLimit = 15; 
  const fetchRecommended = async () => {
    // const token = "5|78O5nAEGWzPhfsUcPCF1xYMPv9mqOdWh7MO07k3Fca5824d3";
    const response = await axios.get(recomended_api_url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setRecomended(response.data.data.products);
  };

  const fetchBrands = async () => {
    const response1 = await axios.get(brands_api_url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBrands(response1.data.data.brands.data[0]);
  };

  const fetchBrandProducts = async (id) => {
    const response2 = await axios.get(`${brands_products_api_url}${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBrandsProducts(response2.data.data.products.data);
  };

  useEffect(() => {
    fetchRecommended();
    fetchBrands();
  },[token]);

  useEffect(() => {
    if (brands.id) {
      fetchBrandProducts(brands.id);
    }
  }, [brands,token]);
  const Star = ({ filled }) => {
    return (
      <span style={{ color: filled ? 'gold' : 'lightgray' }}>
        &#9733; 
      </span>
    );
  }; const Rating = ({ rating }) => {
    const filledStars = Math.round(rating);
     const stars = Array.from({ length: 5 }, (_, index) => (
      <Star key={index} filled={index < filledStars} />
    ));
  
    return <i>{stars}</i>;
  };

  return (
    <>
      <div className="fixed-top">
        <Header token={token}/>
        <Nav />
      </div>
      <Container style={{ marginTop: "140px" }}>
        <Row className="offers">
          <Col className="offer-col">
            <h2 className="offer-title">Deals and offers</h2>
            <p style={{ color: "#616161" }}>Hygiene equipments</p>
            <div className="offer-time">04 Days</div>
            <div className="offer-time">13 Hour</div>
            <div className="offer-time">34 Min</div>
            <div className="offer-time">56 Sec</div>
          </Col>
          <Col className="offer-col">
            <img className="offer-img" src="asset/iphone.jpg" alt=""></img>
            <p className="offer-name">Smart watches</p>
            <div className="offer-per">-25%</div>
          </Col>
          <Col className="offer-col">
            <img className="offer-img" src="asset/iphone.jpg" alt=""></img>
            <p className="offer-name">Smart watches</p>
            <div className="offer-per">-25%</div>
          </Col>
          <Col className="offer-col">
            <img className="offer-img" src="asset/iphone.jpg" alt=""></img>
            <p className="offer-name">Smart watches</p>
            <div className="offer-per">-25%</div>
          </Col>
          <Col className="offer-col">
            <img className="offer-img" src="asset/iphone.jpg" alt=""></img>
            <p className="offer-name">Smart watches</p>
            <div className="offer-per">-25%</div>
          </Col>
        </Row>
        <Row className="cat">
          <Col className="cat-label col-2 " style={{textAlign:'center'}}>
            <h2 className="cat-title">{brands.name}</h2>
            <img src={brands.icon} style={{width:"150px",height:"100px"}}/>
          </Col>
          {brandsProducts.map((item) => {
            return (
              <Col className="product-home">
               <img className="img-product" src={item.image} alt=""></img>
                <p className="product-name">{getTruncatedText(item.name, descriptionLimit)}</p>
                <p className="product-price"><Rating rating={item.average_rating}/>({item.average_rating})</p>
              </Col>
            );
          })}
        </Row>
        <Row>
        <h2 style={{ marginTop:"70px" }}>Recommended items</h2>
        <Row style={{display: "flex",justifyContent: "center"}}>
          {recomended.map((item) => {
            return (
              <Card
                className="recommend-div"
                style={{width:"fit-content"}}
                key={item.product.id}
              >
                <Card.Img
                  className="recommend-img"
                  variant="top"
                  src={item.product.image}
                />
                <Card.Body>
                  <Card.Title style={{fontSize:"large"}}>{item.product.price} EG</Card.Title>
                  <Card.Text className="recommend-title">{getTruncatedText(item.product.name, descriptionLimit)}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
