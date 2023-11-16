import styles from './index.module.css';

function CarCreate() {
    return (
        <section className={styles.cardCreate}>
            <form id='create'>
                <div className={styles.container}>
                    <h1>Add a Silk Car</h1>
                    <label htmlFor='car-make'>Make:</label>
                    <input type='text' id='make' placeholder='Car brand' />

                    <label htmlFor='car-model'>Model:</label>
                    <input type='text' id='model' placeholder='Car model' />

                    <label htmlFor='car-type'>Type:</label>
                    <select id='make'>
                        <option value='F1' selected>F1</option>
                        <option value='Prototype'>Prototype</option>
                        <option value='Electric'>Electric</option>
                        <option value='Sedan'>Sedan</option>
                        <option value='Van'>Van</option>
                        <option value='SUV'>SUV</option>
                        <option value='Truck'>Truck</option>
                        <option value='Hatchback'>Hatchback</option>
                    </select>

                    <label htmlFor='picture'>Pcture URL:</label>
                    <input type='text' id='picture' placeholder='Car picture URL' />

                    <label htmlFor='Summary'>Summary:</label>
                    <input type='textarea' id='summary' placeholder='Dream car...' />

                    <input className={styles.submitBtn} type='submit' value='Create car' />
                </div>
            </form>
        </section>

    );
}

export default CarCreate;