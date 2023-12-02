import styles from './index.module.css';
import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import * as carsService from '../../services/carsService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import useForm from '../../hooks/useForm';
import Path from "../../paths";
import CommentModal from '../CommentModal';


function CarComment() {
    const { email, username, userId } = useContext(AuthContext);
    const [comments, setComments] = useState([])
    // const [comments, dispatch] = useReducer(reducer, []);
    const { carId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()

    
    useEffect(() => {
        commentService.getAll(carId)
            .then(setComments);
        console.log(comments)

        // commentService.getAll(carId)
        //     .then((result) => {
        //         dispatch({
        //             type: 'GET_ALL_COMMENTS',
        //             payload: result,
        //         });
        //     });
    }, [carId]);

    const deleteButtonClickHandler = async (commentId) => {
        const hasConfirmed = confirm(`Are you sure you want to delete comment?`)

        if (hasConfirmed) {
            await commentService.remove(commentId)
            // navigate('/cars/gallery')
        }
    }

    return (
        <div className={styles.carDetails} >
            {
                comments.toReversed().map(comment => (
                    <section key={comment._id} className={styles.info} >
                        {/* <p>Added at {`${new Date(comment._createdOn).toLocaleDateString()} ${new Date(comment._createdOn).toLocaleTimeString()}`}</p> */}
                        <p>{comment.owner.email} said at {`${new Date(comment._createdOn).toLocaleDateString()} ${new Date(comment._createdOn).toLocaleTimeString()}`}:</p>
                        <h6>{comment.text}</h6>
                        {comment._ownerId === userId && (
                            <>
                                <Link to=""><button className={styles.button}>EDIT</button></Link>
                                <button className={styles.button} onClick={() => deleteButtonClickHandler(comment._id)}>DELETE</button>
                            </>
                        )}
                    </section>
                ))}
        </div>

    );
}

export default CarComment;