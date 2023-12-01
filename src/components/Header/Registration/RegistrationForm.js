import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from "../Authorization/LogIn/login.module.css";
import {Button, Modal} from "antd";

const RegistrationForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, 'Ім’я має бути не менше 3 символів')
                .required('Це поле є обов’язковим'),
            lastName: Yup.string()
                .max(40, 'Прізвище не повинно перевищувати 40 символів')
                .required('Це поле є обов’язковим'),
            email: Yup.string()
                .email('Введіть правильну електронну пошту')
                .required('Це поле є обов’язковим'),
            password: Yup.string()
                .matches(
                    /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
                    'Пароль повинен містити хоча б 1 велику літеру та 1 знак відмінний від букви'
                )
                .required('Це поле є обов’язковим'),
        }),
        onSubmit: (values) => {
            console.log('Submitted values:', values);
        },
    });

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    return (
        <div >
            <a
                onClick={() => {
                    showModal()
                }}
                href={'#'}
            >Register</a>


            <Modal
                title="Register"
                open={open}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={[]}
            >
            <form onSubmit={formik.handleSubmit}>
                <div style={{marginBottom: 10}}>
                    <label htmlFor="firstName">Ім'я:</label>
                    <input
                        style={{width:"100%"}}
                        type="text"
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div style={{color:"red"}}>{formik.errors.firstName}</div>
                    ) : null}
                </div>

                <div style={{marginBottom: 10}}>
                    <label htmlFor="lastName">Прізвище:</label>
                    <input
                        style={{width:"100%"}}
                        type="text"
                        id="lastName"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div style={{color:"red"}}>{formik.errors.lastName}</div>
                    ) : null}
                </div>

                <div style={{marginBottom: 10}}>
                    <label htmlFor="email">Електронна пошта:</label>
                    <input
                        style={{width:"100%"}}
                        type="text"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div style={{color:"red"}}>{formik.errors.email}</div>
                    ) : null}
                </div>

                <div style={{marginBottom: 10}}>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        style={{width:"100%"}}
                        type="password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div style={{color:"red"}}>{formik.errors.password}</div>
                    ) : null}
                </div>

                <Button type="primary" style={{width:"100%"}} onClick={handleCancel} htmlType={"submit"}>Зареєструватися</Button>
            </form>
            </Modal>
        </div>
    );
};

export default RegistrationForm;