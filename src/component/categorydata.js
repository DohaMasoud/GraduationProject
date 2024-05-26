import Card from 'react-bootstrap/Card';
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaAws } from "react-icons/fa";
import { useState } from 'react';


function Categorydata({key2,title,price,rating,stock,discount,img}){
    const [isFavorite, setIsFavorite] =useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const Star = ({ filled }) => {
        
        return (
            <span style={{ color: filled ? 'gold' : 'lightgray' }}>
                &#9733;
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

    return(

                <>
                    
                        <Card className='crt'style={{ margin:"10px 10px"}} >
                            
                            
                            <Card.Img variant="top"  style={{width:"185px", height:"185px",margin:"10px auto"}} src={img}/>
                            <hr style={{color:"gray",margin:"0px"}}/>
                            
                            <Card.Body>
                            <span
                                style={{
                                    ...styles.favoriteIcon,
                                    color: isFavorite ? "red" : "blue",
                                }}
                                onClick={handleFavoriteClick}
                            >
                                {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                            </span>
                            <div className="d-flex flex-row align-items-center mb-1">
                                <h4 className="mb-1 me-1">${Math.round(price*(discount/100))}</h4>
                                <span style={{color:"gray"}}><s>${price}</s></span>
                            </div>
                                
                                <Card.Text style={{fontSize:"20px"}}>{title}
                                <br/>
                                <span style={{marginTop:"0px"}}><Rating rating={rating}/> {rating}</span>
                                {stock > 0 ? (<p className="text-success"><i className="bi bi-check2-all"></i>In stock</p>) : (<p className="text-danger">Out of stock</p>)}
                                
                                <span><FaAws style={{fontSize:"25px" ,float:"right",marginTop:"-35px",marginRight:"30px" ,color:"blue"}} /></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                        

                
                </>
                

        

    );
}

const styles = {

    favoriteIcon: {
        cursor: "pointer",
        fontSize:"25px" ,
        position:"absolute",
        right:"0",
        marginRight:"30px" ,
        // color:"blue" ,
        border:"1px solid #eee",
        padding:"2px 3px",
        borderRadius:"10px"
    },

};


export default Categorydata;