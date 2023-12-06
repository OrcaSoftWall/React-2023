import styles from './index.module.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as commentService from '../../services/commentService'


function CommentEditModal({ commentId, text, isOpen, onClose, onCommentUpdate }) {
    // console.log(commentId, text);
    const [comment, setComment] = useState(text);

    const handleSubmit = async () => {
        try {
            const editComment = await commentService.patch(commentId, comment)
            if (onCommentUpdate) {
                onCommentUpdate(commentId, comment);
            }
            setComment('')
            onClose();
        } catch (err) {
            console.log("Edit of Comment error: ", err);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h3>Edit Comment:</h3>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment here..."
                />
                <div>
                    <button onClick={handleSubmit}>Edit Comment</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default CommentEditModal;
