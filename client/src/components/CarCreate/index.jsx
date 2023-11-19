import styles from './index.module.css';

const createCarSubmitHandler = (e) => {
    e.preventDefault();

    const carData = Object.fromEntries(new FormData(e.currentTarget));
    console.log(carData);
}


function CarCreate() {
    return (
        <section className={styles.carCreate}>
            <form id='create' onSubmit={createCarSubmitHandler}>
                <div className={styles.container}>
                    <h1>Add a Silk Car</h1>
                    <label htmlFor='make'>Make:</label>
                    <input type='text' id='make' name='make' placeholder='Car brand' />

                    <label htmlFor='model'>Model:</label>
                    <input type='text' id='model' name='model' placeholder='Car model' />

                    <label htmlFor='type'>Type:</label>
                    <select id='type' name='type'>
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
                    <input type='text' id='picture' name='imageURL' placeholder='Car picture URL' />

                    <label htmlFor='summary'>Summary:</label>
                    <textarea id='summary' name='summary' placeholder='Dream car...' />

                    <input className={styles.submitBtn} type='submit' value='CREATE' />
                    <input className={styles.submitBtn} type='reset' value='RESET FORM' />
                </div>
            </form>
        </section>

    );
}

export default CarCreate;