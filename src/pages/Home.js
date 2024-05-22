import Nav from "../component/Nav.js";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Card,
} from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Container>
        <Row className="offers">
          <Col className="offer-col col-3">
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
          <Col className="cat-label col-3">
            <h2 className="cat-title">Consumer electronics and gadgets</h2>
          </Col>
          <Col>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
          </Col>
          <Col>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
          </Col>
          <Col>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
          </Col>
          <Col>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
          </Col>
        </Row>

        <Row className="cat">
          <Col className="cat-label col-3">
            <h2 className="cat-title">Consumer electronics and gadgets</h2>
          </Col>
          <Col>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
          </Col>
          <Col>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
          </Col>
          <Col>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
          </Col>
          <Col>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
            <Row className="product-home">
              <p className="product-name">Smart watches</p>
              <p className="product-price">From USD 19</p>
              <img className="img-product" src="asset/iphone.jpg" alt=""></img>
            </Row>
          </Col>
        </Row>

        <h1 style={{ marginTop: "70px" }}>Recommended items</h1>
        <Row>
          <Card className="recommend-div" style={{ width: "244px" }}>
            <Card.Img
              className="recommend-img"
              variant="top"
              src="asset/iphone.jpg"
            />
            <Card.Body>
              <Card.Title>$10.30</Card.Title>
              <Card.Text className="recommend-title">
                T-shirts with multiple colors, for men
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="recommend-div" style={{ width: "244px" }}>
            <Card.Img
              className="recommend-img"
              variant="top"
              src="asset/iphone.jpg"
            />
            <Card.Body>
              <Card.Title>$10.30</Card.Title>
              <Card.Text className="recommend-title">
                T-shirts with multiple colors, for men
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="recommend-div" style={{ width: "244px" }}>
            <Card.Img
              className="recommend-img"
              variant="top"
              src="asset/iphone.jpg"
            />
            <Card.Body>
              <Card.Title>$10.30</Card.Title>
              <Card.Text className="recommend-title">
                T-shirts with multiple colors, for men
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="recommend-div" style={{ width: "244px" }}>
            <Card.Img
              className="recommend-img"
              variant="top"
              src="asset/iphone.jpg"
            />
            <Card.Body>
              <Card.Title>$10.30</Card.Title>
              <Card.Text className="recommend-title">
                T-shirts with multiple colors, for men
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="recommend-div" style={{ width: "244px" }}>
            <Card.Img
              className="recommend-img"
              variant="top"
              src="asset/iphone.jpg"
            />
            <Card.Body>
              <Card.Title>$10.30</Card.Title>
              <Card.Text className="recommend-title">
                T-shirts with multiple colors, for men
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="recommend-div" style={{ width: "244px" }}>
            <Card.Img
              className="recommend-img"
              variant="top"
              src="asset/iphone.jpg"
            />
            <Card.Body>
              <Card.Title>$10.30</Card.Title>
              <Card.Text className="recommend-title">
                T-shirts with multiple colors, for men
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="recommend-div" style={{ width: "244px" }}>
            <Card.Img
              className="recommend-img"
              variant="top"
              src="asset/iphone.jpg"
            />
            <Card.Body>
              <Card.Title>$10.30</Card.Title>
              <Card.Text className="recommend-title">
                T-shirts with multiple colors, for men
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="recommend-div" style={{ width: "244px" }}>
            <Card.Img
              className="recommend-img"
              variant="top"
              src="asset/iphone.jpg"
            />
            <Card.Body>
              <Card.Title>$10.30</Card.Title>
              <Card.Text className="recommend-title">
                T-shirts with multiple colors, for men
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="recommend-div" style={{ width: "244px" }}>
            <Card.Img
              className="recommend-img"
              variant="top"
              src="asset/iphone.jpg"
            />
            <Card.Body>
              <Card.Title>$10.30</Card.Title>
              <Card.Text className="recommend-title">
                T-shirts with multiple colors, for men
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="recommend-div" style={{ width: "244px" }}>
            <Card.Img
              className="recommend-img"
              variant="top"
              src="asset/iphone.jpg"
            />
            <Card.Body>
              <Card.Title>$10.30</Card.Title>
              <Card.Text className="recommend-title">
                T-shirts with multiple colors, for men
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>

        <Row className="subscribe">
          <h2 style={{ fontWeight: "bold" }}>Subscribe on our newsletter</h2>
          <p style={{ color: "#8B96A5" }}>
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
          <InputGroup className="mb-3" style={{ width: "500px" }}>
            <InputGroup.Text id="basic-addon1">
              <AiOutlineMail />
            </InputGroup.Text>
            <Form.Control
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button variant="primary" style={{ width: "150px", height: "38px" }}>
            Subscribe
          </Button>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
