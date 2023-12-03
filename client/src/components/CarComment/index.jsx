import styles from './index.module.css';
import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import useForm from '../../hooks/useForm';
import Path from "../../paths";
import CommentModal from '../CommentModal';


function CarComment(trigger) {
    const { userId } = useContext(AuthContext);
    const [comments, setComments] = useState([])
    // const [comments, dispatch] = useReducer(reducer, []);
    const { carId } = useParams();
    const [removed, setRemoved] = useState(false);
    const navigate = useNavigate()


    useEffect(() => {
        commentService.getAll(carId)
            .then(setComments);

        // commentService.getAll(carId)
        //     .then((result) => {
        //         dispatch({
        //             type: 'GET_ALL_COMMENTS',
        //             payload: result,
        //         });
        //     });
    }, [carId, trigger, removed]);

    const deleteButtonClickHandler = async (commentId) => {
        const hasConfirmed = confirm(`Are you sure you want to delete comment?`)

        if (hasConfirmed) {
            await commentService.remove(commentId)
            setRemoved(!removed)
        }
    }

    return (
        <div className={styles.comment} >
            <h3>Comments:</h3>
            {
                comments.toReversed().map(comment => (
                    <section key={comment._id} className={styles.info} >
                        <p className={styles.meta}><span>{comment.owner.username||comment.owner.email}</span> said at {`${new Date(comment._createdOn).toLocaleDateString()} ${new Date(comment._createdOn).toLocaleTimeString()}`}:</p>
                        <h6>{comment.text}</h6>
                        {comment._ownerId === userId && (
                            <>
                                <Link to=""><button className={styles.button}>EDIT</button></Link>
                                <button className={styles.button} onClick={() => deleteButtonClickHandler(comment._id)}>DELETE</button>
                            </>
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