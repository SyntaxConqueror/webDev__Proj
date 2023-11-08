import styles from './menu.module.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import {Debug} from "../../DebugPage/Debug";
export const Menu = () => {

    const [show, setShow] = useState(false);

    return (
        <ul className={styles.menu__list}>
            <Link to={'/'}><li>Main</li></Link>
            <Link to={'/catalog'}><li>Catalog</li></Link>
            <Link to={'/about'}><li>About us</li></Link>
            <Link to={'/contact'}><li>Contact us</li></Link>
            <li onClick={()=>setShow(true)}>Debug</li>
            <Debug show={show} setShow={setShow} />
        </ul>
    )
}