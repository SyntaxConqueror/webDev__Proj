import styles from './login.module.css';
import {Button, Input, Modal} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, {useState} from "react";
import {FormInstance} from "antd/lib";
import {Formik, Form, ErrorMessage, Field} from "formik";
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
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Please input your email!';
                        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.password) {
                            errors.password = 'Please input your password!';
                        } else if (values.password.length < 6) {
                            errors.password = 'Password should be longer than 6 symbols!';
                        } else if (values.password.length > 12) {
                            errors.password = 'Password should be less than 12 symbols!';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values);
                        setSubmitting(false);
                    }}
                >
                    <Form className={styles.modal__body}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                style={{width:"100%", marginBottom:10}}
                                prefix={<UserOutlined />}
                            />
                            <ErrorMessage style={{color:"red", marginBottom:10}} name="email" component="div" className="ant-form-item-explain" />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="ant-input ant-input-lg"
                                prefix={<LockOutlined />}
                                style={{width:"100%", marginBottom:10}}
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                            <ErrorMessage style={{color:"red", marginBottom:10}} name="password" component="div" className="ant-form-item-explain" />
                        </div>

                        <Button key="submit" htmlType="submit" type="primary" onClick={handleSubmit} loading={confirmLoading}>
                            Login
                        </Button>
                    </Form>
                </Formik>

            </Modal>
        </div>
    )
}
