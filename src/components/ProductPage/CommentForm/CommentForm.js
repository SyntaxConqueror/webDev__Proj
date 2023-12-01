import React, {useState} from 'react';
import styles from './commentForm.module.css';
import {ErrorMessage, Field, FormikProvider, useField, useFormik} from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const CustomTextarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <textarea {...field} {...props} placeholder={label} />
            {meta.touched && meta.error ? (
                <div style={{ color: 'red' }}>{meta.error}</div>
            ) : null}
        </div>
    );
};

CustomTextarea.propTypes = {
    label: PropTypes.string.isRequired,
};


const CommentForm = () => {
    const [comments, setComments] = useState([]);

    const addComment = (text) => {
        if (!text) return alert('Your message is empty!');

        const comment = { content: text };
        setComments((prevState) => {
            return [...prevState, comment];
        });
    };

    const formik = useFormik({
        initialValues: {
            comment: '',
        },
        validationSchema: Yup.object({
            comment: Yup.string().required('Comment is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            addComment(values);
            resetForm();
        },
    });

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className={styles.comment__form}>
                <div className={styles.comment__container}>
                    {comments.map((comment, idx) => (
                        <div key={idx}>
                            <h5>User {idx + 1}</h5>
                            <div style={{ paddingLeft: '10px' }}>{comment.content.comment}</div>
                        </div>
                    ))}
                </div>

                <CustomTextarea
                    className={styles.comment__textarea}
                    label={"Залиште відгук"}
                    id="comment"
                    name="comment"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                />

                <button className={styles.submit__btn} type="submit">
                    Submit
                </button>
            </form>
        </FormikProvider>
    );
};

export default CommentForm;



