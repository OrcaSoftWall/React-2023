import styles from './index.module.css';
import { Link } from "react-router-dom";

function Card({
    _id,
    make,
    model,
    type,
    summary,
    imageURL,
    _createdOn,
    _ownerId,
}) {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <h4>{make}</h4>
                <h6>Model: {model}</h6>
                <h6>Type: {type}</h6>
                <img src={imageURL} alt={imageURL}/>
                <p>{summary}</p>
                <Link to={`/cars/${_id}`} className={styles.detailsButton}>Details</Link>
            </div>
        </div>
    );
}

export default Card;