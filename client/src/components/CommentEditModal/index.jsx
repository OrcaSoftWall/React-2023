import styles from './index.module.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as commentService from '../../services/commentService'


function CommentEditModal({ commentId, text, isOpen, onClose, onCommentUpdate }) {
    const [comment, setComment] = useState(text);
    const [error, setError] = useState(false)

    const handleSubmit = async () => {
        if (comment.trim() && comment.length > 0) {
        try {
            const editComment = await commentService.patch(commentId, comment)
            if (editComment) {
                onCommentUpdate(commentId, comment);
            }
            setComment('')
            onClose();
        } catch (err) {
            console.log("Edit of Comment error: ", err);
        }} else setError(true)
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h3>Edit Comment:</h3>
                <textarea autoFocus
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment here..."
                />
                {error && <p className={styles.error} >Comment cannot be empty!</p>}
                <div>
                    <button onClick={handleSubmit}>OK</button>
                    {/* <button onClick={onClose}>Close</button> */}
                    <button onClick={() => { setComment(''); setError(false); onClose() }}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default CommentEditModal;
