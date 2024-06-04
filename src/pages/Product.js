import React, { useContext } from "react";
import Nav from '../component/Nav.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import ProductInfo from "../component/ProductInfo.js";
import ReviwesInfo from "../component/ReviewsInfo.js";
import Relatedinfo from "../component/Relatedinfo.js";
import Likedinfo from "../component/Likedinfo.js";
function Product(){
    return(
        <>
       <div className="fixed-top">
     <Header/>
       <Nav/>
     </div>
        <ProductInfo />
        <h4 className="text-left" style={{marginLeft:"100px"}}>DETAILED REVIEWS <hr style={{width:"300px"}}/></h4>
       <div className="row text-center" style={{justifyContent:'space-around',alignItems: 'baseline',display:'grid',gridTemplateColumns: '40% 25%'}}>
        <div className="col border rounded shadow" style={{ padding:"15px "}}><ReviwesInfo/></div>
        <div className="col container border rounded " style={{backgroundColor:"white"}}>
            <p style={{textAlign:"left"}}>You May Like</p>
            <Likedinfo/>
        </div>
       </div>
       <div style={{display:"grid",gridTemplateColumns:`${100/5}$`}}>
       <div className="row  bg-white m-3 p-1 rounded border">
        <p>Related Product</p>
       <Relatedinfo/>
       </div>
        </div>
        <Footer/>
        </>
    );
    }
    export default Product;