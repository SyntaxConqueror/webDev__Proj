import styles from './listItem.module.css';
import {useEffect, useState} from "react";
export const ListItem = ({index, product, getCheckBoxChange}) => {

    const handleCheckBoxChange = (e) => {
        const { checked } = e.target;
        getCheckBoxChange(checked);
    }


    return (
        <div className={styles.list__item}>
            <input
                className={styles.checkbox__custom}
                onChange={handleCheckBoxChange}
                type={"checkbox"}/>
            <li><a href={`/productPage/${index}`}>{product}</a></li>
        </div>

    )
}