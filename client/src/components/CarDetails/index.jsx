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

    return (
        <div className={styles.carDetails} >
            <h1>{car.make} - {car.model}</h1>
            <hr />
            <div className={styles.slot} >
                <img src={car.imageURL} alt={car.make} />
                <section className={styles.info} >
                    <h4>{car.make}</h4>
                    <h4>{car.model}</h4>
                    <h5>{car.type}</h5>
                    <h5>Added at {car._createdOn}</h5>
                    <hr />
                    <h5>{car._ownerId}</h5>
                </section>
            </div>
            <h4>Summary:</h4>
            <p>{car.summary}</p>
        </div>

    );
}

export default CarDetails;