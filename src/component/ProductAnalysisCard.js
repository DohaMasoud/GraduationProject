import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import {ProductContext} from"../context/ProductContext"
function ProductAnalysisCard({key2,desc,title,price,discount,rating,stock,brand,category,img}){
  const {IdHandler}=useContext(ProductContext);
  const Star = ({ filled }) => {
        return (
          <span style={{ color: filled ? 'gold' : 'lightgray' }}>
            &#9733; 
          </span>
        );
      };
      const SmallImg = ({imgs}) => {
       if(imgs.length!=1){
        return (
          <div className="row mt-3">
            {imgs.map((imgs, index) => (
              <img className="bg-image border rounded mx-1 col"  style={{paddingLeft:'0px',paddingRight:"0px"}} key={index} src={imgs} alt={`Image ${index + 1}`} />
            ))}
          </div>
        );
       }else{
        return(
            <></>
        );
       }
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
        <div key={key2} className="row justify-content-center mb-3" style={{marginTop: '40px'}}>
      <div className="col-md-12 col-xl-10">
        <div className="card shadow-0 border rounded-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src={img[0]}className="w-100 rounded" />
                  <a href="#!">
                  <div className="hover-overlay">
                    <div className="mask"></div>
                  </div>
                  </a>
                </div>
                   <SmallImg imgs={img}/> 
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
              {stock > 0 ? (<p className="text-success"><i className="bi bi-check2-all"></i>In stock</p>) : (<p className="text-danger">Out of stock</p>)}
                <h5>{title}</h5>
                  <div className="text-danger mb-1 me-2">
                    <Rating rating={rating}/>
                    <span className="mx-2">{rating}</span>
                    <span className="text-muted"> • </span>
                    <span className="text-muted">25</span>
                    <span className="mx-0 text-muted">reviews</span>
                  </div>
                  <div>
                  <p className=" mb-4 mb-md-0">
                  {desc}
                  </p>
                </div><hr/>
                <div className="text-muted small" style={{marginBottom:'-30px',marginTop:"-10px"}}>
                <span className="text-primary"> • </span>
                  <span>Brand: {brand}</span><br/>
                  <span className="text-primary"> • </span>
                  <span>category: {category}</span><br/>
                  <span className="text-primary"> • </span>
                  <span>stock: {stock}<br /></span><br/>
                </div><hr/>
                <div className="mb-2 text-muted small" style={{marginTop:'-10px'}}>
                <span className="text-primary"> • </span>
                  <span>Unique design</span><br/>
                  <span className="text-primary"> • </span>
                  <span>For men</span><br/>
                  <span className="text-primary"> • </span>
                  <span>Casual<br /></span>
                </div>
               
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none " style={{height:"fit-content",padding:"10px"}}>
                <div className="border rounded " style={{height:"fit-content",padding:"10px"}}>
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">${Math.round(price*discount/100)}</h4>
                  <span className="text-danger"><s>${price}</s></span>
                </div>
                <h6 className="text-success">Free shipping</h6>
                </div>
                <span data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm" type="button" onClick={()=>{IdHandler(key2)}}><FaHeart/>save for later </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
        </>
    );
    }
    export default ProductAnalysisCard;