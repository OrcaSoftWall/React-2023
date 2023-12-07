import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as carsService from '../../services/carsService'
import createCarValidation from '../../validations/carCreateValidation';

function CarEdit() {
    const { carId } = useParams();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        make: '',
        model: '',
        type: 'F1', // Default value or could be empty
        imageURL: '',
        summary: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        carsService.getOne(carId)
            .then(carData => {
                setFormValues({
                    make: carData.make,
                    model: carData.model,
                    type: carData.type,
                    imageURL: carData.imageURL,
                    summary: carData.summary
                });
            });
    }, [carId]);

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = createCarValidation ? createCarValidation(formValues) : {};
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            try {
                await carsService.edit(carId, formValues);
                navigate(`/cars/${carId}`);
            } catch (err) {
                console.log(err);
            }
        }
    };
    
    const resetForm = () => {
        setFormValues({
            make: '',
            model: '',
            type: 'F1', 
            imageURL: '',
            summary: ''
        })
    }
        return (
            <section className={styles.carCreate}>
                <form id='edit-car' onSubmit={onSubmit}>
                    <div className={styles.container}>
                        <h1>Edit Car</h1>
                        <label htmlFor='make'>Brand:</label>
                        <input type='text' id='make' name="make" placeholder='Car brand' value={formValues.make} onChange={onChange} autoFocus />
                        {errors.make && <p className={styles.error} >{errors.make}</p>}

                        <label htmlFor='model'>Model:</label>
                        <input type='text' id='model' name="model" placeholder='Car model' value={formValues.model} onChange={onChange} />
                        {errors.model && <p className={styles.error} >{errors.model}</p>}
                        <label htmlFor='type'>Type:</label>
                        <select id='type' name="type" value={formValues.type} onChange={onChange} >
                            <option value='F1' defaultValue>F1</option>
                            <option value='Van'>Van</option>
                            <option value='SUV'>SUV</option>
                            <option value='Truck'>Truck</option>
                            <option value='Sedan'>Sedan</option>
                            <option value='Electric'>Electric</option>
                            <option value='Hatchback'>Hatchback</option>
                            <option value='Prototype'>Prototype</option>
                        </select>

                        <label htmlFor='picture'>Pcture URL:</label>
                        <input type='text' id='picture' name="imageURL" placeholder='Car picture URL' value={formValues.imageURL} onChange={onChange} />
                        {errors.imageURL && <p className={styles.error} >{errors.imageURL}</p>}

                        <label htmlFor='summary'>Summary:</label>
                        <textarea id='summary' name="summary" placeholder='Dream car...' value={formValues.summary} onChange={onChange} />
                        {errors.summary && <p className={styles.error} >{errors.summary}</p>}

                        <input className={styles.submitBtn} type='submit' value='Edit' />
                        <input className={styles.submitBtn} type='reset' onClick={resetForm} value='Reset Form' />
                    </div>
                </form>
            </section>
        );
}

export default CarEdit;