import React, {useState} from 'react';
import styles from './productDetail.module.css';
import {Header} from "../../Header/Header";
const ProductDetail = ({ product }) => {
    const { name, description, price } = product;
    const [usdPrice, setUsdPrice] = useState(0);

    return (

        <div>

            <div className={styles.product__detail__container}>
                <h1>{name}</h1>
                <img
                    src={'https://www.usatoday.com/gcdn/presto/2023/09/12/USAT/6cf3be59-7123-4b38-bab5-1ccba07fe9c3-VPC_APPLE_IPHONE_15_courtesy_apple.jpg?width=1280&height=720&fit=crop&format=pjpg&auto=webp'}
                    alt={'Iphone 15 Pro Max'}
                    className={styles.product__preview}/>
                <div className={styles.product__description}>{description}</div>
                <div className={styles.convert__container}>
                    <p className={styles.product__price}>Ціна: {price} грн</p>
                    <button
                        onClick={()=> setUsdPrice(Math.round(price / 37.5))}
                    >Конвертувати</button>
                    <p className={styles.product__price}>{usdPrice} USD</p>
                </div>

            </div>
        </div>

    );
};

export default ProductDetail;