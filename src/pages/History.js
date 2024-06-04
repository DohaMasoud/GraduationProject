import Nav from "../component/Nav.js";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import { Row, Col, Container } from "react-bootstrap";
import { IoIosStar } from "react-icons/io";
import "./history.css";

function History() {
  return (
    <>
     <div className="fixed-top">
     <Header/>
       <Nav/>
     </div>
      <Container style={{ padding: "50px" , marginTop:"80px"}}>
        <Row className="product">
          <Col className="date col-11">Wed, 17 May | 08.30 AM</Col>
          <img className="img col" src="asset/iphone.jpg" alt=""></img>
          <Col className="col-10">
            <h2 className="title">Amazon</h2>
            <p className="hist_p">logitech k120 usb wired standard.....</p>
            <div style={{ marginBottom: "10px" }}>
              <IoIosStar style={{ color: "#FF9017", fontSize: "25px" }} />
              <span className="rate">4.8</span>
              <span className="reviews">(4,279 reviews)</span>
            </div>
          </Col>
        </Row>

        <Row className="product">
          <Col className="date col-11">Wed, 17 May | 08.30 AM</Col>
          <img className="img col" src="asset/iphone.jpg" alt=""></img>
          <Col className="col-10">
            <h1 className="title">Amazon</h1>
            <p className="hist_p">logitech k120 usb wired standard.....</p>
            <div style={{ marginBottom: "10px" }}>
              <IoIosStar style={{ color: "#FF9017", fontSize: "25px" }} />
              <span className="rate">4.8</span>
              <span className="reviews">(4,279 reviews)</span>
            </div>
          </Col>
        </Row>

        <Row className="product">
          <Col className="date col-11">Wed, 17 May | 08.30 AM</Col>
          <img className="img col" src="asset/iphone.jpg" alt=""></img>
          <Col className="col-10">
            <h1 className="title">Amazon</h1>
            <p className="hist_p">logitech k120 usb wired standard.....</p>
            <div style={{ marginBottom: "10px" }}>
              <IoIosStar style={{ color: "#FF9017", fontSize: "25px" }} />
              <span className="rate">4.8</span>
              <span className="reviews">(4,279 reviews)</span>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default History;