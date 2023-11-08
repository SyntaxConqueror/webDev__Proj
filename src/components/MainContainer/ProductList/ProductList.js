import {ListItem} from "./ListItem/ListItem";
import styles from './productList.module.css';
import {useContext, useState} from "react";
import {DataContext} from "../../../App";
export const ProductList = () => {
    const [productsCounter, setProductsCounter] = useState(0);

    const getCheckBoxChange = (checked) => {
        setProductsCounter((prev) => {
            return checked ? prev + 1 : prev - 1;
        })
    }

    return (
        <>
            <DataContext.Consumer>
                { products=> (
                    <ul className={styles.product__list}>
                        {products.map((product, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    index={index}
                                    getCheckBoxChange={getCheckBoxChange}
                                    product={Object.keys(product)[0]}/>
                            )
                        })}
                    </ul>
                )}
            </DataContext.Consumer>
            <div>Chosen products: {productsCounter}</div>
        </>

    )
}