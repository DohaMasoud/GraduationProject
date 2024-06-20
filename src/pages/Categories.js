import React, { useEffect, useState,useContext } from "react";
import Nav from "../component/Nav.js";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import { Link } from "react-router-dom";
import Categorydata from "../component/categorydata.js";
import Pagination from "../component/Pagination.js";
import {TokenContext} from"../context/TokenContext.js"

import axios from "axios";

function Categories() {
  const{token}=useContext(TokenContext)

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const brands_api_url = "http://127.0.0.1:8000/api/brand";
  const products_api_url = "http://127.0.0.1:8000/api/product";
  const brands_products_api_url = "http://127.0.0.1:8000/api/brand-products?brand_id=";

  const getBrands = async () => {
    // const token = "5|78O5nAEGWzPhfsUcPCF1xYMPv9mqOdWh7MO07k3Fca5824d3";
    const response = await axios.get(brands_api_url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBrands(response.data.data.brands.data);
  };

  const fetchProducts = async () => {
    // const token = "5|78O5nAEGWzPhfsUcPCF1xYMPv9mqOdWh7MO07k3Fca5824d3";
    setLoading(true);
    const response = await axios.get(products_api_url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(response.data.data.products.data);
    setLoading(false);
  };

  const getProductInBrand = async (id) => {
    const response = await axios.get(`${brands_products_api_url}${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data.data.products.data);
};

  useEffect(() => {
    fetchProducts();
    getBrands();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="fixed-top">
        <Header />
        <Nav />
      </div>
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <ul className="list-unstyled">
            <li style={styles.listItem}>
              <Link style={styles.link} onClick={() => {
                fetchProducts();
                }}>
                All
              </Link>
            </li>
            {brands.map((brand, index) => (
              <li key={index} style={styles.listItem}>
                <Link style={styles.link} onClick={() => {
                        getProductInBrand(brand.id);
                    }}>
                  {brand.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.productGrid}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            currentItems.map((product) => (
              <Categorydata
                key={product.id}
                key2={product.id}
                title={product.name}
                price={product.price}
                rating={product.average_rating}
                favorite={product.is_favorite}
                // stock={product.stock}
                // discount={product.discountPercentage}
                img={product.image}
              />
            ))
          )}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "20% 80%",
    gap: "10px",
    padding: "20px",
    marginTop: "130px",
  },
  sidebar: {
    backgroundColor: "white",
    padding: "10px",
  },
  listItem: {
    padding: "10px 5px",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  "@media (max-width: 768px)": {
    container: {
      gridTemplateColumns: "1fr",
    },
    productGrid: {
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    },
  },
  "@media (max-width: 480px)": {
    productGrid: {
      gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    },
  },
};

export default Categories;
