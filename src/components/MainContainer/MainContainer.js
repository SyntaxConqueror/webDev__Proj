import {ProductList} from "./ProductList/ProductList";
import styles from './styles.module.css';
import {Header} from "../Header/Header";
export const MainContainer = ({productsList}) => {
    return (
        <>
            <Header></Header>
            <div className={styles.main__container}>
                <ProductList productList={productsList}/>
            </div>
        </>

    )
}