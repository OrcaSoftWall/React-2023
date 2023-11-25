import styles from './index.module.css';
import React, { useState } from 'react';

function CommentModal({ isOpen, onClose }) {
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        // Handle the submit action here

        console.log(comment);
        onClose(); // Close the modal after submitting
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
            <h3>New Comment:</h3>
                <textarea
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
