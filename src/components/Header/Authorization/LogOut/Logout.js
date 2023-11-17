import styles from './logout.module.css';
import {Button, Modal, Spin} from "antd";
import {CSSTransition} from "react-transition-group";
import React, {useState} from "react";
export const Logout = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleLogout = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            props.onLogoutClick()
            setOpen(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <>
            <div className={styles.logout__btn}>
                {props.isLoginClicked
                    ?
                    <a
                        onClick={handleOpen}
                        href={'#'}
                        style={{ background: "rgba(225, 0, 0, 0.3)" }}
                    >Log Out</a>

                    : ""
                }
            </div>


            <CSSTransition
                in={open}
                timeout={300}
                classNames="logout-window"
                unmountOnExit
                onExited={() => setIsOpen(false)}>

                <Modal
                    title="Logout"
                    open = {open}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="cancel" onClick={handleCancel}>
                            Cancel
                        </Button>,
                        <Button key="login" type="primary" onClick={handleLogout}>
                            Logout
                        </Button>,
                    ]}
                >
                    <CSSTransition in={isLoading} timeout={300} classNames="spin" unmountOnExit>
                        <Spin style={{padding: "2em"}} tip="Logging in..." />
                    </CSSTransition>
                </Modal>

            </CSSTransition>

        </>
    )
}