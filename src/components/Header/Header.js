import styles from './header.module.css';
import {Logo} from "./Logo/Logo";
import {Menu} from "./Menu/Menu";
import {Login} from "./Authorization/LogIn/Login";
import {Logout} from "./Authorization/LogOut/Logout";
import {useState} from "react";
export const Header = () => {

    const [loginClicked, setLoginClicked] = useState(false);
    const [logoutClicked, setLogoutClicked] = useState(true);
    const handleLoginClicked = () => {
        setLoginClicked(true);
        setLogoutClicked(false);
    }
    const handleLogoutClicked = () => {
        setLogoutClicked(true);
        setLoginClicked(false);
    }

    return (
        <div className={styles.header}>
            <Logo />
            <Menu />
            <div className={styles.auth__btns}>
                <Login
                    onLoginClick={handleLoginClicked}
                    isLogoutClicked={logoutClicked}
                />
                <Logout
                    onLogoutClick={handleLogoutClicked}
                    isLoginClicked={loginClicked}
                />
            </div>
        </div>
    );
}