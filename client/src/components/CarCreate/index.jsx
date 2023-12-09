import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import * as carsService from '../../services/carsService'
import useForm from '../../hooks/useForm';
import createCarValidation from '../../validations/carCreateValidation';

const formValuesKeys = {
    Make: 'make',
    Model: 'model',
    Type: 'type',
    Image: 'imageURL',
    Summary: 'summary'
}


function CarCreate() {
    const navigate = useNavigate();
    const { values, onChange, onSubmit, errors } = useForm(async (values) => {
        // console.log("CarCreate Function values: ", values);
        try {
            const result = await carsService.create(values);
            // console.log(result)
            navigate('/cars/gallery');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }, {
        [formValuesKeys.Make]: '',
        [formValuesKeys.Model]: '',
        [formValuesKeys.Type]: 'F1',
        [formValuesKeys.Image]: '',
        [formValuesKeys.Summary]: ''
    }, createCarValidation)

     return (
        <section className={styles.carCreate}>
            <form id='create' onSubmit={onSubmit}>
                <div className={styles.container}>
                    <h1>Add a Silk Car</h1>
                    <label htmlFor='make'>Brand:</label>
                    <input type='text' id='make' name={formValuesKeys.Make} placeholder='Car brand' value={values[formValuesKeys.Make]} onChange={onChange} autoFocus />
                    {errors.make && <p className={styles.error} >{errors.make}</p>}

                    <label htmlFor='model'>Model:</label>
                    <input type='text' id='model' name={formValuesKeys.Model} placeholder='Car model' value={values[formValuesKeys.Model]} onChange={onChange} />
                    {errors.model && <p className={styles.error} >{errors.model}</p>}
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
                    {errors.imageURL && <p className={styles.error} >{errors.imageURL}</p>}

                    <label htmlFor='summary'>Summary:</label>
                    <textarea id='summary' name={formValuesKeys.Summary} placeholder='Dream car...' value={values[formValuesKeys.Summary]} onChange={onChange} />
                    {errors.summary && <p className={styles.error} >{errors.summary}</p>}

                    <input className={styles.submitBtn} type='submit' value='CREATE' />
                    <input className={styles.submitBtn} type='reset' value='RESET FORM' />
                </div>
            </form>
        </section>
    );
}

export default CarCreate;