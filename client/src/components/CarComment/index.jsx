import styles from './index.module.css';
import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import CommentEditModal from '../CommentEditModal';
import replaceTextEmojis from '../../validations/emojis'

function CarComment(trigger) {
    const { userId } = useContext(AuthContext);
    const [comments, setComments] = useState([])
    const { carId } = useParams();
    const [removed, setRemoved] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCommentId, setEditingCommentId] = useState(null); //

    useEffect(() => {
        commentService.getAll(carId)
            .then(setComments);

    }, [carId, trigger, removed]);

    const deleteButtonClickHandler = async (commentId) => {
        const hasConfirmed = confirm(`Are you sure you want to delete comment?`)

        if (hasConfirmed) {
            await commentService.remove(commentId)
            setRemoved(!removed)
        }
    }

    const editButtonClickHandler = (commentId) => {
        setEditingCommentId(commentId);
        setIsModalOpen(true);
    };

    return (
        <div className={styles.comment} >
            {/* <h3>Comments:</h3> */}
            {
                comments.toReversed().map(comment => (
                    <section key={comment._id} className={styles.info} >
                        <p className={styles.meta}><span>{comment.owner.username || comment.owner.email}</span> said on {`${new Date(comment._createdOn).toLocaleDateString()} at ${new Date(comment._createdOn).toLocaleTimeString()}`}:</p>
                        <h6 className={styles.commentText}>{comment.text && replaceTextEmojis(comment.text)}</h6>
                        {comment._ownerId === userId && (
                            <div className={styles.controlsWrapper}>
                                <div>
                                    <button className={styles.button} onClick={() => editButtonClickHandler(comment._id)}>EDIT</button>
                                    {editingCommentId === comment._id && (
                                        <CommentEditModal text={comment.text} commentId={comment._id} isOpen={isModalOpen} onClose={() => {
                                            setIsModalOpen(false);
                                            setEditingCommentId(null); 
                                        }}
                                            onCommentUpdate={(updatedCommentId, updatedText) => {
                                                setComments(currentComments => currentComments.map(comment =>
                                                    comment._id === updatedCommentId
                                                        ? { ...comment, text: updatedText }
                                                        : comment
                                                ));
                                            }}
                                        />
                                    )}
                                </div>
                                <button className={styles.button} onClick={() => deleteButtonClickHandler(comment._id)}>DELETE</button>
                            </div>
                        )}
                    </section>
                ))}
            {comments.length === 0 && (
                <p className={styles.empty}>No comments yet...</p>
            )}
        </div>
    );
}

export default CarComment;