import {ListItem} from "./ListItem/ListItem";
import styles from './productList.module.css';
import {useState} from "react";
export const ProductList = ({productList}) => {
    const [productsCounter, setProductsCounter] = useState(0);

    const getCheckBoxChange = (checked) => {
        setProductsCounter((prev) => {
            return checked ? prev + 1 : prev - 1;
        })
    }

    return (
        <>
            <ul className={styles.product__list}>
                {productList.map((product, index) => {
                    return (
                        <ListItem
                            key={index}
                            index={index}
                            getCheckBoxChange={getCheckBoxChange}
                            product={Object.keys(product)[0]}/>
                    )
                })}
            </ul>
            <div>Chosen products: {productsCounter}</div>
        </>

    )
}