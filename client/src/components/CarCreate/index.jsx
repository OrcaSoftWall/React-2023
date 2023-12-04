import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import * as carsService from '../../services/carsService'
import useForm from '../../hooks/useForm';




function CarCreate() {
    const navigate = useNavigate();
    const {formValues,onChangeHandler} = useForm({
        make:'',
        model: '',
        type: '',
        imageURL: '',
        summary: ''
    })

    const createCarSubmitHandler = async (e) => {
        e.preventDefault();

        const carData = Object.fromEntries(new FormData(e.currentTarget));
        try {
            const result = await carsService.create(carData);
            console.log(result)
            navigate('/cars/gallery');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

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
            <form id='create' onSubmit={createCarSubmitHandler}>
                <div className={styles.container}>
                    <h1>Add a Silk Car</h1>
                    <label htmlFor='make'>Make:</label>
                    <input type='text' id='make' name='make' placeholder='Car brand' value={formValues} onChange={onChangeHandler} />

                    <label htmlFor='model'>Model:</label>
                    <input type='text' id='model' name='model' placeholder='Car model' value={formValues} onChange={onChangeHandler} />

                    <label htmlFor='type'>Type:</label>
                    <select id='type' name='type' value={formValues} onChange={onChangeHandler} >
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
                    <input type='text' id='picture' name='imageURL' placeholder='Car picture URL' value={formValues} onChange={onChangeHandler} />

                    <label htmlFor='summary'>Summary:</label>
                    <textarea id='summary' name='summary' placeholder='Dream car...' value={formValues} onChange={onChangeHandler} />

                    <input className={styles.submitBtn} type='submit' value='CREATE' />
                    <input className={styles.submitBtn} type='reset' value='RESET FORM' />
                </div>
            </form>
        </section>

    );
}

export default CarCreate;