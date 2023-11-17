import styles from './login.module.css';
import {Button, Input, Modal, Form} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, {useState} from "react";
import {FormInstance} from "antd/lib";
export const Login = (props) => {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    const handleSubmit = (event) => {

        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            props.onLoginClick()
        }, 2000);
    }


    return (
        <div className={styles.login__btn}>
            {props.isLogoutClicked
                ? <a
                    onClick={() => {
                        showModal()
                    }}
                    href={'#'}
                    style={{ background: props.isLogoutClicked
                            ? "rgba(56, 225, 0, 0.3)"
                            : "rgba(225, 0, 0, 0.3)" }}
                >Log In</a>
                : ""
            }

            <Modal
                title="Login"
                open={open}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={[]}
            >
                <Form layout="vertical" className={styles.modal__body}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                type: "email",
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input size="large" prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<LockOutlined />}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                    </Form.Item>

                    <Button key="submit" htmlType="submit" type="primary" onClick={handleSubmit} loading={confirmLoading}>
                        Login
                    </Button>
                </Form>

            </Modal>
        </div>
    )
}
