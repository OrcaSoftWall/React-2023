import styles from './index.module.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as commentService from '../../services/commentService'


function CommentModal({ isOpen, onClose }) {
    const [comment, setComment] = useState('');
    const { carId } = useParams();
    const [error, setError] = useState(false)

    const handleSubmit = async () => {
        if (comment.trim() && comment.length > 0) {
            const newComment = await commentService.create(carId, comment)
            // console.log(newComment);
            setComment('')
            setError(false)
            onClose();
        } else setError(true)


    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h3>New Comment:</h3>
                <textarea autoFocus
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment here..."
                />
                {error && <p className={styles.error} >Comment cannot be empty!</p>}
                <div>
                    <button onClick={handleSubmit}>OK</button>
                    <button onClick={() => { setComment(''); setError(false); onClose() }}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default CommentModal;
