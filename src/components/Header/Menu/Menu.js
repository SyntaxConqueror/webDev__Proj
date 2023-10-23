import styles from './menu.module.css';
export const Menu = () => {
    return (
        <ul className={styles.menu__list}>
            <li><a href={"/"}>Main</a></li>
            <li><a href={"/"}>Catalog</a></li>
            <li><a href={"/"}>About us</a></li>
            <li><a href={"/"}>Contact us</a></li>
        </ul>
    )
}