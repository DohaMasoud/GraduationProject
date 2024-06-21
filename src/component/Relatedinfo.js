import React from "react";
import { useEffect, useState} from "react";
import Related from "./Related.js";
export default function Relatedinfo({token}){
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
               <Related 
               key={product.id}
               key2={product.id}
               title={product.title}
               price={product.price}
               img={product.images[0]}
               />
               </>
          )}})
      }
    </>
);
}