import styles from './index.module.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as commentService from '../../services/commentService'


function CommentModal({ isOpen, onClose }) {
    const [comment, setComment] = useState('');
    const { carId } = useParams();

    const handleSubmit = async () => {
        const newComment = await commentService.create(carId, comment)
        console.log(newComment);
        setComment('')
        onClose(); // Close the modal after submitting
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
                <div>
                    <button onClick={handleSubmit}>New Comment</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default CommentModal;
