import {ProductList} from "./ProductList/ProductList";
import styles from './styles.module.css';
export const MainContainer = ({productsList}) => {
    return (
        <div className={styles.main__container}>
            <ProductList productList={productsList}/>
        </div>
    )
}