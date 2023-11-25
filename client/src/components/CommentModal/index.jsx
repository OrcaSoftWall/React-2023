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
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modalContent}>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment here..."
                />
                <button onClick={handleSubmit}>Submit Comment</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default CommentModal;
