import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import * as carsService from '../../services/carsService'
import useForm from '../../hooks/useForm';

const formValuesKeys = {
    Make: 'make',
    Model: 'model',
    Type: 'type',
    Image: 'imageURL',
    Summary: 'summary',
}


function CarCreate() {
    const navigate = useNavigate();
    const { values, onChange, onSubmit } = useForm(async (values) => {
        console.log("CarCreate Function values: ", values);
        try {
            const result = await carsService.create(values);
            console.log(result)
            navigate('/cars/gallery');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    },{
        [formValuesKeys.make]: '',
        [formValuesKeys.model]: '',
        [formValuesKeys.type]: '',
        [formValuesKeys.imageURL]: '',
        [formValuesKeys.summary]: ''
    })

    // const createCarSubmitHandler = async (e) => {
    //     e.preventDefault();

    //     const carData = Object.fromEntries(new FormData(e.currentTarget));
    //     try {
    //         const result = await carsService.create(carData);
    //         console.log(result)
    //         navigate('/cars/gallery');
    //     } catch (err) {
    //         // Error notification
    //         console.log(err);
    //     }
    // }

    // const editCarSubmitHandler = async (e) => {
    //     e.preventDefault()
    //     const values = Object.fromEntries(new FormData(e.currentTarget))
    //     try {

    //         navigate('/cars/gallery')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <section className={styles.carCreate}>
            <form id='create' onSubmit={onSubmit}>
                <div className={styles.container}>
                    <h1>Add a Silk Car</h1>
                    <label htmlFor='make'>Make:</label>
                    <input type='text' id='make' name={formValuesKeys.Make} placeholder='Car brand' value={values[formValuesKeys.Make]} onChange={onChange} autoFocus />

                    <label htmlFor='model'>Model:</label>
                    <input type='text' id='model' name={formValuesKeys.Model} placeholder='Car model' value={values[formValuesKeys.Model]} onChange={onChange} />

                    <label htmlFor='type'>Type:</label>
                    <select id='type' name={formValuesKeys.Type} value={values[formValuesKeys.Type]} onChange={onChange} >
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
                    <input type='text' id='picture' name={formValuesKeys.Image} placeholder='Car picture URL' value={values[formValuesKeys.Image]} onChange={onChange} />

                    <label htmlFor='summary'>Summary:</label>
                    <textarea id='summary' name={formValuesKeys.Summary} placeholder='Dream car...' value={values[formValuesKeys.Summary]} onChange={onChange} />

                    <input className={styles.submitBtn} type='submit' value='CREATE' />
                    <input className={styles.submitBtn} type='reset' value='RESET FORM' />
                </div>
            </form>
        </section>

    );
}

export default CarCreate;