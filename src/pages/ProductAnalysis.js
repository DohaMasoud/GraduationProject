import React, { useContext } from "react";
import Nav from '../component/Nav.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import ProductAnalysisdata from "../component/ProductAnalysisdata.js";
import FilterReviews from"../component/FilterReviews.js";
function ProductAnalysis(){
    return(
        <>
        <div className="fixed-top">
     <Header/>
       <Nav/>
     </div>
        <ProductAnalysisdata/>
        <h4 className="text-left" style={{marginLeft:"100px"}}>FIlTERED REVIEWS <hr style={{width:"300px"}}/></h4>
       <div className="row text-center" style={{justifyContent:'space-around',alignItems: 'baseline',display:'grid',gridTemplateColumns: '40% 40%'}}>
       <div className="col border rounded shadow" style={{}}><FilterReviews/></div>   
            <div className="col container border rounded " style={{backgroundColor:"white"}}>
            <p style={{textAlign:"left"}}>You May Like</p>
        </div>
        </div>
        <Footer/>
        </>
    );
    }
    export default ProductAnalysis;