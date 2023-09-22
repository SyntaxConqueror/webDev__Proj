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
                {productList.map((product, key) => {
                    return (
                        <ListItem
                            key={key}
                            getCheckBoxChange={getCheckBoxChange}
                            product={product}/>
                    )
                })}
            </ul>
            <div>Chosen products: {productsCounter}</div>
        </>

    )
}