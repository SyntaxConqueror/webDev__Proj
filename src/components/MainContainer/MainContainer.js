import {ProductList} from "./ProductList/ProductList";
import styles from './styles.module.css';
import {Header} from "../Header/Header";
import {DataContext} from "../../App";
export const MainContainer = () => {
    return (
        <>
            <Header></Header>
            <div className={styles.main__container}>
                <ProductList />
            </div>
        </>

    )
}