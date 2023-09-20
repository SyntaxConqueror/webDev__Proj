import styles from './logout.module.css';
import {useState} from "react";
export const Logout = (props) => {

    return (
        <div className={styles.logout__btn}>
            <a
                onClick={props.onLogoutClick}
                href={'#'}
                style={{ background: props.isLoginClicked ? "rgba(56, 225, 0, 0.3)" : "rgba(225, 0, 0, 0.3)" }}
            >Log Out</a>
        </div>
    )
}