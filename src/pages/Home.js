import Nav from "../component/Nav.js";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./home.css";
import { useState, useEffect,useContext } from "react";
import {TokenContext} from"../context/TokenContext.js"

import axios from "axios";

function Home() {
  const{token}=useContext(TokenContext)
  const [recomended, setRecomended] = useState([]);
  const [brands, setBrands] = useState({});
  const [brandsProducts, setBrandsProducts] = useState([]);

  const recomended_api_url = "http://127.0.0.1:8000/api/recomended";
  const brands_api_url = "http://127.0.0.1:8000/api/random-brand";
  const brands_products_api_url =
    "http://127.0.0.1:8000/api/brand-products?brand_id=";

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
  }, []);

  useEffect(() => {
    if (brands.id) {
      fetchBrandProducts(brands.id);
    }
  }, [brands]);

  return (
    <>
      <div className="fixed-top">
        <Header />
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
          <Col
            className="cat-label col-3"
            style={{ backgroundImage: `url(${brands.icon})` }}
          >
            <h2 className="cat-title">{brands.name}</h2>
          </Col>
          {brandsProducts.map((item) => {
            return (
              <Col className="product-home">
                <p className="product-name">{item.name}</p>
                <p className="product-price">From USD {item.price}</p>
                <img className="img-product" src={item.image} alt=""></img>
              </Col>
            );
          })}
        </Row>
        <h1 style={{ marginTop: "70px" }}>Recommended items</h1>
        <Row>
          {recomended.map((item) => {
            return (
              <Card
                className="recommend-div"
                style={{ width: "244px" }}
                key={item.product.id}
              >
                <Card.Img
                  className="recommend-img"
                  variant="top"
                  src={item.product.image}
                />
                <Card.Body>
                  <Card.Title>${item.product.price}</Card.Title>
                  <Card.Text className="recommend-title">
                    {item.product.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
