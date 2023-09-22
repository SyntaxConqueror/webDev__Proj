import styles from './login.module.css';
export const Login = (props) => {
    console.log(props.isLogoutClicked);
    return (
        <div className={styles.login__btn}>
            <a
                onClick={props.onLoginClick}
                href={'#'}
                style={{ background: props.isLogoutClicked
                        ? "rgba(56, 225, 0, 0.3)"
                        : "rgba(225, 0, 0, 0.3)" }}
            >Log In</a>
        </div>
    )
}