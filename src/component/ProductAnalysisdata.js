import React, { useState, useEffect, useContext } from 'react';
import ProductAnalysisCard from './ProductAnalysisCard';
import { ProductContext } from '../context/ProductContext';

import axios from 'axios';

const ProductAnalysisdata = ({token}) => {
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useContext(ProductContext);
  const api_url = `http://127.0.0.1:8000/api/product/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api_url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductData(response.data.data.product);
      } catch (error) {
        setError(error);
        console.error('There was an error fetching the data:', error);
      }
    };
    fetchData();
  }, [token]);

  if (error) {
    return <p>There was an error fetching the data: {error.message}</p>;
  }

  if (!productData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {productData && (
         <ProductAnalysisCard
           key={productData.id}
           key2={productData.id}
           title={productData.name}    
           price={productData.price}
           rating={productData.average_rating} 
           total_reviews={productData.total_reviews}
           brand={productData.brand.name}      
           img={productData.image}
           token={token}
         />
      )}
    </div>
  );
};

export default ProductAnalysisdata;
