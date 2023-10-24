import React, { useState } from 'react';
import styles from './commentForm.module.css';
import {useLogger} from "../../../hooks/loggerHook/useLogger";
const CommentForm = () => {
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);
    const {setLoggerValue} = useLogger(null);
    const handleChange = (e) => {
        setCommentText(e.target.value);
        setLoggerValue(e.target.value);
    };

    const addComment = (text) => {
        if(!text){
            alert("Your message is empty!");
            return;
        }
        const comment = {content: text}
        setComments((prevState)=> {
            return [...prevState, comment];
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Ваш відгук: ' + commentText + ' додано успішно!');
        alert('Ваш відгук: ' + commentText + ' додано успішно!');
        setCommentText('');
    };

    return (
        <form className={styles.comment__form} onSubmit={handleSubmit}>
            <div className={styles.comment__container}>
                {comments.map((comment, key)=> {
                    return (
                        <div key={key} className={styles.comment}>
                            <p>User 1</p>
                            <p>{comment.content}</p>
                        </div>
                    )
                })}

            </div>
            <h2>Додати відгук:</h2>
            <textarea
                className={styles.comment__textarea}
                value={commentText}
                onChange={handleChange}
                placeholder="Напишіть свій відгук..."
            />
            <button onClick={()=>addComment(commentText)} className={styles.add_comment__btn} type="submit">Додати відгук</button>
        </form>

    );
};

export default CommentForm;