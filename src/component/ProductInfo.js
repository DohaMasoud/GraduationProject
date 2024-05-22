import React, { useState, useEffect ,useContext} from 'react';
import ProductCard from './ProductCard';
import {ProductContext} from '../context/ProductContext';
const ProductInfo = () => {
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
         <ProductCard
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

export default ProductInfo;
