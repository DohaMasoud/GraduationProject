import React, { useContext } from "react";
import Nav from '../component/Nav.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import ProductAnalysisdata from "../component/ProductAnalysisdata.js";

function ProductAnalysis(){
    return(
        <>
        <Header/>
        <Nav/>
        <ProductAnalysisdata/>

        <Footer/>
        </>
    );
    }
    export default ProductAnalysis;