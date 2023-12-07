import styles from './index.module.css';
import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import * as carsService from '../../services/carsService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import CommentModal from '../CommentModal';
import CarComment from '../CarComment';
import replaceTextEmojis from '../../validations/emojis'


function CarDetails() {
    const { email, username, userId } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const [comments, setComments] = useState([])
    const { carId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [creator, setCreator] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        carsService.getOne(carId)
            .then(setCar)
            .catch(err => {
                console.error(`ERROR ${err.code}! \n Server responded with: ${err.message}`)
                navigate('/cars/gallery')
            })

        commentService.getAll(carId)
            .then(setComments);
    }, [carId]);

    const date = new Date(car._createdOn);
    const today = new Date()
    const age = Math.floor((today - date) / 3600000 / 24)
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1))

    const safeAccessproperties = (car) => {
        return car && car.owner ? (car.owner.username || car.owner.email) : 'Loading...';
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${car.make} - ${car.model}`)

        if (hasConfirmed) {
            await carsService.remove(carId)
            navigate('/cars/gallery')
        }
    }
    
    return (
        <div className={styles.carDetails} >
            <h1>{car.make} - {car.model}</h1>
            {/* <p className={styles.added}>Added by <span>{`${username}`}</span> on {`${date.toLocaleDateString()}`} at {`${date.toLocaleTimeString()}`}</p> */}
            {car ? (
                <p className={styles.added}>Added by <span>{`${safeAccessproperties(car)}`}</span>  {age < 1 ? 'today' : `${age} days ago`}</p>
            ) : (
                <p>Loading car data...</p>
            )}
            <hr />
            <button className={styles.buttonBack} onClick={() => navigate(-1)}>← Back</button>
            <div className={styles.container}>
                <div className={styles.slot} >
                    <img src={car.imageURL} alt={`${car.make} - ${car.model}`} />
                    <section className={styles.info} >
                        <h4>Brand: {car.make}</h4>
                        <h4>Model: {car.model}</h4>
                        <h5>Type: {car.type}</h5>
                        <hr />
                        {car._ownerId === userId && (
                            <>
                                <Link to={`/cars/edit-car/${carId}`}><button className={styles.button}>EDIT</button></Link>
                                {/* <Link to=""><button>DELETE</button></Link> */}
                                <button className={styles.button} onClick={deleteButtonClickHandler}>DELETE</button>
                            </>
                        )}
                    </section>
                </div>
                <h4>Summary:</h4>
                <p className={styles.summary}>{car.summary && replaceTextEmojis(car.summary)}</p>
            </div>
                {userId && (
                    <div className={styles.newCommentButton}>
                        <button className={styles.button} onClick={() => setIsModalOpen(true)}>New Comment</button>
                        <CommentModal carId={carId} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    </div>
                )}
            <CarComment trigger={isModalOpen === false} />
        </div>
    );
}

export default CarDetails;