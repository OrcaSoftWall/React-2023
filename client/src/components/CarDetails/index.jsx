import styles from './index.module.css';
import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import * as carsService from '../../services/carsService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
// import reducer from './commentReducer';
import useForm from '../../hooks/useForm';
// import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

function CarDetails() {
    const { email, userId } = useContext(AuthContext);
    const [car, setCar] = useState({});
    // const [comments, dispatch] = useReducer(reducer, []);
    const { carId } = useParams();

    useEffect(() => {
        carsService.getOne(carId)
            .then(setCar);

        // commentService.getAll(carId)
        //     .then((result) => {
        //         dispatch({
        //             type: 'GET_ALL_COMMENTS',
        //             payload: result,
        //         });
        //     });
    }, [carId]);

    const date = new Date(car._createdOn);

    return (
        <div className={styles.carDetails} >
            <h1>{car.make} - {car.model}</h1>
            <hr />
            <div className={styles.container}>
                <div className={styles.slot} >
                    <img src={car.imageURL} alt={car.make} />
                    <section className={styles.info} >
                        <h4>{car.make}</h4>
                        <h4>{car.model}</h4>
                        <h5>{car.type}</h5>
                        <h6>Added at {`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}</h6>
                        <hr />
                        {car._ownerId === userId && (
                            <>
                                <Link to="">EDIT </Link>
                                <Link to=""> DELETE</Link>
                            </>
                        )}
                    </section>
                </div>
                <h4>Summary:</h4>
                <p>{car.summary}</p>
            </div>

        </div>

    );
}

export default CarDetails;