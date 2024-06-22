import React from "react";
import { useEffect, useState} from "react";
import Liked from "./Liked.js";
export default function Likedinfo({token}){
  const [data,setdata]=useState([]);
  const fetchUserData = () => {
    fetch(`https://dummyjson.com/product`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setdata(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])
 return(
   <>
       {data?.products?.map((product ,index) =>{ 
        if(index<=5){
          return (
            <>
            <Liked
                key={product.id}
                key2={product.id}
                title={product.title}
                price={product.price}
                discount={product.discountPercentage}
                img={product.images[0]}
               />

               </>
          )}})
      }
    </>
);
}