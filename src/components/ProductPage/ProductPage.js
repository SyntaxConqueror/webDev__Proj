import React, {createContext, useEffect, useState} from 'react';
import ProductDetail from "./ProductDetail/ProductDetail";
import CommentForm from "./CommentForm/CommentForm";
import styles from './productPage.module.css';
import {Header} from "../Header/Header";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const ProductPage = () => {

    const [productData, setProductData] = useState();
    const { index } = useParams();
    const products = useSelector((state) => state.products);


    useEffect(() => {
        if (products && index >= 0 && index < products.length) {
            const product = products[index];
            setProductData({
                name: Object.keys(product)[0],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                price: product[Object.keys(product)[0]],
            });
        }
    }, [products, index]);


    return (
        <>
            <Header></Header>
            <div className={styles.product__page__container}>
                <ProductDetail product={productData} />
                <CommentForm />
            </div>
        </>

    );
};

export default ProductPage;