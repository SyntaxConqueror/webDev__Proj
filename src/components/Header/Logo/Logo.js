import styles from './logo.module.css';
import logo from '../../../logo.svg';
export const Logo = () => {
    return (
        <>
            <img src={logo} alt="Logo"/>
            <span className={styles.logo__title}>Logo</span>
        </>
    )
}