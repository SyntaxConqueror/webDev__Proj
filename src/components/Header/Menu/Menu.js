import styles from './menu.module.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import {Debug} from "../../DebugPage/Debug";
import RegistrationForm from "../Registration/RegistrationForm";
import {addToProducts} from "../../../redux/actions";
import {useDispatch} from "react-redux";
import store from "../../../redux/store";
export const Menu = () => {

    const [show, setShow] = useState(false);
    const dispatch = useDispatch();  // Get the dispatch function

    console.log(store);
    const addProduct = () => {

        dispatch(addToProducts({"iPhone 13 Pro Max": 24520}));
        console.log(store);
    };

    return (
        <ul className={styles.menu__list}>
            <Link to={'/'}><li>Main</li></Link>
            <Link to={'/catalog'}><li>Catalog</li></Link>
            <Link to={'/about'}><li>About us</li></Link>
            <Link to={'/contact'}><li>Contact us</li></Link>
            <RegistrationForm/>
            <li onClick={()=>setShow(true)}>Debug</li>
            <Debug show={show} setShow={setShow} />
            <div onClick={addProduct}>Add product</div>
        </ul>
    )
}