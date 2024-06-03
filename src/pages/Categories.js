import React, { useEffect, useState } from "react";
import Nav from '../component/Nav.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import { Link } from 'react-router-dom';
import Categorydata from "../component/categorydata.js";
import Pagination from "../component/Pagination.js";
import axios from 'axios';

function Categories() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const res = await axios.get('https://dummyjson.com/products');
            setData(res.data.products);  // Correct the data structure
            setLoading(false);
        };
        fetchProducts();
        getCategories();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <Header />
            <Nav />
            <div style={styles.container}>
                <div style={styles.sidebar}>
                    <ul className="list-unstyled">
                        {categories.map((category, index) => (
                            <li key={index} style={styles.listItem}>
                                <Link to={`/category/${category}`} style={styles.link}>
                                    {category}
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
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                                stock={product.stock}
                                discount={product.discountPercentage}
                                img={product.images[0]}
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
        marginTop: "95px",
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
    '@media (max-width: 768px)': {
        container: {
            gridTemplateColumns: "1fr",
        },
        productGrid: {
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        },
    },
    '@media (max-width: 480px)': {
        productGrid: {
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        },
    },
};

export default Categories;
