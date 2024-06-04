import React, { useState ,useContext} from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { FaAws } from 'react-icons/fa';
import {ProductContext} from"../context/ProductContext"
import './Categoriess.css'; 

function Categorydata({ key2, title, price, rating, stock, discount, img }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const {IdHandler}=useContext(ProductContext);
    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const Star = ({ filled }) => (
        <span style={{ color: filled ? 'gold' : 'lightgray' }}>
            &#9733;
        </span>
    );

    const Rating = ({ rating }) => {
        const filledStars = Math.round(rating);
        const stars = Array.from({ length: 5 }, (_, index) => (
            <Star key={index} filled={index < filledStars} />
        ));
        return <i>{stars}</i>;
    };

    return (
        <Card className="card-container">
            <div className="card-img-container">
                <Card.Img variant="top" src={img} className="card-img" />
                <div className="card-overlay">
                <NavLink to="/Product"  className="view_details" type="button" onClick={()=>{IdHandler(key2)}}>View detials</NavLink>
                </div>
            </div>
            <hr style={{margin:"1px"}}></hr>
            <Card.Body>
                <div>{title}</div>
                <div
                    className="favorite-icon"
                    style={{ color: isFavorite ? 'red' : 'blue' }}
                    onClick={handleFavoriteClick}
                >
                    {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                </div>
                <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">${Math.round(price * (discount / 100))}</h4>
                    <span style={{ color: 'gray' }}><s>${price}</s></span>
                </div>
                <Card.Text style={{ fontSize: '20px' }}>
                    <span style={{ marginTop: '0px' }}><Rating rating={rating} /> {rating}</span>
                    {stock > 0 ? (
                        <p className="text-success"><i className="bi bi-check2-all"></i> In stock</p>
                    ) : (
                        <p className="text-danger">Out of stock</p>
                    )}
                    <span>
                        <FaAws style={{ fontSize: '30px', float: 'right', marginTop: '-35px', color: 'blue' }} />
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Categorydata;
