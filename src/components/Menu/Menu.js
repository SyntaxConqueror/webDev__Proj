import styles from './menu.module.css';
export const Menu = () => {
    return (
        <ul className={styles.menu__list}>
            <li>Main</li>
            <li>Catalog</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
    )
}