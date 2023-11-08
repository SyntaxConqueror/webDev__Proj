import React, {createContext, useContext} from 'react';
import ProductDetail from "./ProductDetail/ProductDetail";
import CommentForm from "./CommentForm/CommentForm";
import styles from './productPage.module.css';
import {Header} from "../Header/Header";
import {useParams} from "react-router-dom";
import {DataContext} from "../../App";
export const ProductData = createContext(null);
const ProductPage = () => {

    const { index } = useParams();

    const products = useContext(DataContext);
    const product = products[index];

    const productData = {
        name: Object.keys(product),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: product[Object.keys(product)[0]], // гривні
    };

    return (
        <>
            <Header></Header>
            <div className={styles.product__page__container}>
                <ProductData.Provider value={productData}>
                    <ProductDetail />
                </ProductData.Provider>
                <CommentForm />
            </div>
        </>

    );
};

export default ProductPage;