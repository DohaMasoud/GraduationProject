import React, { useState, useEffect ,useContext} from 'react';
import ReviwesCard from './ReviwesCard';
import PaginationP from './PaginationP.js';
import { ProductContext } from "../context/ProductContext.js";
import axios from 'axios';
const ReviewsInfo= () => {
  const {id} = useContext(ProductContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=9`);
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <div className='container mt-5'>
      {currentPosts.map((product) =>{ 
        return (
          <ReviwesCard
              key={product.id}
              key2={product.id}
              name={product.name}
              email={product.email}
              body={product.body}
              loading={loading}
             />
        )})
     }
    </div>
     <PaginationP
     postsPerPage={postsPerPage}
     totalPosts={posts.length}
     paginate={paginate}
   />
   </>
  );
};

export default ReviewsInfo;
/*import React from "react";
import { useEffect, useState,useContext} from "react";
import ReviwesCard from "./ReviwesCard.js";
import { ProductContext } from "../context/ProductContext.js";
export default function ReviwesInfo(){
  const [data,setdata]=useState([]);
  const [loading,setloading]=useState(false);
  const[currentpage,setcurrentpage]=useState(1);
  const[postsperpage,setpostsperpage]=useState(5);
  const {id} = useContext(ProductContext);
  const fetchUserData = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setdata(data)
      })
  }
  console.log(data)
  useEffect(() => {
    fetchUserData()
  }, [])
 return(
   <>
       {data?.map((product) =>{ 
          return (
            <ReviwesCard
                key={product.id}
                key2={product.id}
                name={product.name}
                email={product.email}
                body={product.body}
               />
          )})
      }
    </>
);
}*/