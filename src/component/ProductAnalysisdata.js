import React, { useState, useEffect ,useContext} from 'react';
import ProductAnalysisCard from './ProductAnalysisCard';
import {ProductContext} from '../context/ProductContext';
const ProductAnalysisdata = () => {
  const [productData, setProductData] = useState(null);
  const {id}=useContext(ProductContext);
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/product/${id}`);
      const jsonData = await response.json();
      setProductData(jsonData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div>
      {productData && (
         <ProductAnalysisCard
         key={productData.id}
         key2={productData.id}
         desc={productData.description}
         title={productData.title}
         price={productData.price}
         discount={productData.discountPercentage}
         rating={productData.rating}
         stock={productData.stock}
         brand={productData.brand}
         category={productData.category}
         img={productData.images}/>
      )}
    </div>
  );
};

export default ProductAnalysisdata;
