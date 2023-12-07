import styles from './index.module.css';
import { Link } from "react-router-dom";
import replaceTextEmojis from '../../validations/emojis'
import emptyImg from '../../images/404.jpg'
import { useState } from 'react';

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
    const [pic, setPic] = useState(imageURL)

    return (
        <div className={styles.card}>
            <Link to={`/cars/${_id}`} className={styles.detailsButton}>
                <div className={styles.info}>
                    <h4>{make}</h4>
                    <h6>Model: {model}</h6>
                    <h6>Type: {type}</h6>
                    <img src={pic} alt={`${make} - ${model}`} onError={() => setPic(emptyImg)} />
                    <p>{summary && replaceTextEmojis(summary)}</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;