import React, {useRef, useState} from 'react';
import { Form, Input, Button, List, Avatar } from 'antd';
import styles from './commentForm.module.css';
import { useLogger } from '../../../hooks/loggerHook/useLogger';
import {UserOutlined} from "@ant-design/icons";
import { CSSTransition } from 'react-transition-group';

const CommentForm = () => {
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);
    const [showMessage, setShowMessage] = useState(true);
    const { setLoggerValue } = useLogger(null);
    const nodeRef = useRef(null);

    const handleChange = (e) => {
        setCommentText(e.target.value);
        setLoggerValue(e.target.value);
    };

    const addComment = (text) => {
        if (!text) return alert('Your message is empty!');

        const comment = { content: text };
        setComments((prevState) => {
            return [...prevState, comment];
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Ваш відгук: ' + commentText + ' додано успішно!');
        alert('Ваш відгук: ' + commentText + ' додано успішно!');
        setCommentText('');
    };

    return (
        <Form className={styles.comment__form} onFinish={handleSubmit}>
            <div className={styles.comment__container}>
                <List
                    dataSource={comments}
                    renderItem={(comment, index) => (
                        <CSSTransition
                            in={showMessage}
                            nodeRef={nodeRef}
                            timeout={1100}
                            classNames={{
                                enter: styles.alertEnter,
                                enterActive: styles.alertEnterActive,
                                exit: styles.alertExit,
                                exitActive: styles.alertExitActive,
                            }}
                            unmountOnExit
                        >

                            <List.Item ref={nodeRef}>
                                <List.Item.Meta
                                    avatar={<Avatar icon={<UserOutlined />} />}
                                    title={`User ${index + 1}`}
                                    description={comment.content}
                                />
                            </List.Item>
                        </CSSTransition>
                    )}
                />
            </div>
            <h4>Додати відгук:</h4>
            <Form.Item>
                <Input.TextArea
                    className={styles.comment__textarea}
                    value={commentText}
                    onChange={handleChange}
                    placeholder="Напишіть свій відгук..."
                />
            </Form.Item>

            <Button
                onClick={() => addComment(commentText)}
                className={styles.add_comment__btn}
                type="primary"
                htmlType="submit"
            >
                Додати відгук
            </Button>

        </Form>
    );
};

export default CommentForm;



