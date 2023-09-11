import styles from './header.module.css';
import {Logo} from "../Logo/Logo";
import {Menu} from "../Menu/Menu";
export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo></Logo>
            <Menu></Menu>
        </div>
    );
}