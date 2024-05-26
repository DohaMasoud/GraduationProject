import Nav from "../component/Nav.js";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaAws } from "react-icons/fa";
import "./favorites.css";

function Favorites() {
  return (
    <>
      <Header />
      <Nav />
      <Container>
        <div className="ms-5">
          <h1 className="mt-5">favorites</h1>
          <p className="fav_p"> find your saved items</p>
        </div>

        <Row className="product">
          <img className="product_img" src="asset/iphone.jpg" alt=""></img>
          <Col className="col-9 product_details">
            <p className="pt-3">Canon Cmera EOS 2000, Black 10x zoom</p>
            <span className="price">$998.00</span>
            <span className="del_Price">
              <del>$1128.00</del>
            </span>
            <br />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#ddd" }} />
            <span style={{ color: "#FF9017", marginLeft: "10px" }}>7.5</span>
            <span className="dot">.</span>
            <span style={{ color: "#8B96A5" }}>154 orders</span>
            <span className="dot">.</span>
            <span style={{ color: "#00B517" }}>Free Shipping</span>
            <p style={{ color: "#8B96A5" }}>
              lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
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

        <Row className="product">
          <img className="product_img" src="asset/iphone.jpg" alt=""></img>
          <Col className="col-9 product_details">
            <p className="pt-3">Canon Cmera EOS 2000, Black 10x zoom</p>
            <span className="price">$998.00</span>
            <span className="del_Price">
              <del>$1128.00</del>
            </span>
            <br />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#ddd" }} />
            <span style={{ color: "#FF9017", marginLeft: "10px" }}>7.5</span>
            <span className="dot">.</span>
            <span style={{ color: "#8B96A5" }}>154 orders</span>
            <span className="dot">.</span>
            <span style={{ color: "#00B517" }}>Free Shipping</span>
            <p style={{ color: "#8B96A5" }}>
              lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
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

        <Row className="product">
          <img className="product_img" src="asset/iphone.jpg" alt=""></img>
          <Col className="col-9 product_details">
            <p className="pt-3">Canon Cmera EOS 2000, Black 10x zoom</p>
            <span className="price">$998.00</span>
            <span className="del_Price">
              <del>$1128.00</del>
            </span>
            <br />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#ddd" }} />
            <span style={{ color: "#FF9017", marginLeft: "10px" }}>7.5</span>
            <span className="dot">.</span>
            <span style={{ color: "#8B96A5" }}>154 orders</span>
            <span className="dot">.</span>
            <span style={{ color: "#00B517" }}>Free Shipping</span>
            <p style={{ color: "#8B96A5" }}>
              lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
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

        <Row className="product">
          <img className="product_img" src="asset/iphone.jpg" alt=""></img>
          <Col className="col-9 product_details">
            <p className="pt-3">Canon Cmera EOS 2000, Black 10x zoom</p>
            <span className="price">$998.00</span>
            <span className="del_Price">
              <del>$1128.00</del>
            </span>
            <br />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#FF9017" }} />
            <IoIosStar style={{ color: "#ddd" }} />
            <span style={{ color: "#FF9017", marginLeft: "10px" }}>7.5</span>
            <span className="dot">.</span>
            <span style={{ color: "#8B96A5" }}>154 orders</span>
            <span className="dot">.</span>
            <span style={{ color: "#00B517" }}>Free Shipping</span>
            <p style={{ color: "#8B96A5" }}>
              lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <button className="view_details">View detials</button>
          </Col>
          <Col>
            <button className="fav_btn">
              <FaHeart  />
            </button>
            <br></br>
            <FaAws/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Favorites;