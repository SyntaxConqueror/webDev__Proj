import React, {useContext, useState} from 'react';
import styles from './productDetail.module.css';
import {Header} from "../../Header/Header";
import {useConverter} from "../../../hooks/converterHook/useConverter";
import {useLogger} from "../../../hooks/loggerHook/useLogger";
import {ProductData} from "../ProductPage";
import { Typography, Button, Image } from 'antd';

const { Title, Paragraph } = Typography;
const ProductDetail = () => {

    const { name, description, price } = useContext(ProductData);
    const {usdPrice, setConvertValue} = useConverter(0);
    
    return (

        <div>
            <div style={{ padding: '20px' }}>
                <Title>{name}</Title>
                <Image
                    src="https://www.usatoday.com/gcdn/presto/2023/09/12/USAT/6cf3be59-7123-4b38-bab5-1ccba07fe9c3-VPC_APPLE_IPHONE_15_courtesy_apple.jpg?width=1280&height=720&fit=crop&format=pjpg&auto=webp"
                    alt="Iphone 15 Pro Max"
                    preview={false}
                    style={{ maxWidth: '100%', aspectRatio: "2" }}
                />
                <Paragraph>{description}</Paragraph>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Title level={4} style={{margin: 0}}>Ціна: {price} грн</Title>
                    <Button type="primary" style={{ marginLeft: '10px' }} onClick={() => setConvertValue(price)}>
                        Конвертувати
                    </Button>
                    <Paragraph style={{ margin: ' 0 0 0 10px' }}>{usdPrice} USD</Paragraph>
                </div>
            </div>
        </div>

    );
};

export default ProductDetail;