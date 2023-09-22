import styles from './header.module.css';
import {Logo} from "./Logo/Logo";
import {Menu} from "./Menu/Menu";
import {Login} from "./Authorization/LogIn/Login";
import {Logout} from "./Authorization/LogOut/Logout";
import {useState} from "react";
export const Header = () => {

    const [isLoginClicked, setIsLoginClicked]
        = useState(false);

    const handleLoginClicked = () => {
        setIsLoginClicked(!isLoginClicked);
    }

    return (
        <div className={styles.header}>
            <Logo />
            <Menu />
            <div className={styles.auth__btns}>
                <Login
                    onLoginClick={handleLoginClicked}
                    isLogoutClicked={!isLoginClicked}
                />
                <Logout
                    onLogoutClick={handleLoginClicked}
                    isLoginClicked={isLoginClicked}
                />
            </div>
        </div>
    );
}