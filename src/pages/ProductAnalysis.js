import React, { useContext } from "react";
import Nav from '../component/Nav.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import ProductAnalysisdata from "../component/ProductAnalysisdata.js";
import FilterReviews from"../component/FilterReviews.js";
import ProductAcard from"../component/ProductAcard.js"
function ProductAnalysis({token}){
    return(
        <>
        <div className="fixed-top">
     <Header token={token}/>
       <Nav/>
     </div>
     <ProductAnalysisdata token={token}/>
     <h4 className="text-left" style={{margin:"60px 60px auto"}}>Data Analysis<hr style={{width:"300px"}}/></h4>
      <div style={{display:"grid",gridTemplateColumns:"30% 30% 30%",justifyContent:"space-evenly", margin:"0px 50px 50px"}}>
      <ProductAcard token={token}/>
        </div> 
         <h4 className="text-left" style={{marginLeft:"100px"}}>FIlTERED REVIEWS <hr style={{width:"300px"}}/></h4>
       <div className="row text-center" style={{justifyContent:'space-around',alignItems: 'baseline',display:'grid',gridTemplateColumns: '40% 40%'}}>
       <div className="col border rounded shadow" style={{}}><FilterReviews token={token}/></div>   
            <div className="col container border rounded " style={{backgroundColor:"white"}}>
            <p style={{textAlign:"left"}}>Price Analysis</p>
        </div>
        </div>
        <Footer/>
        </>
    );
    }
    export default ProductAnalysis;