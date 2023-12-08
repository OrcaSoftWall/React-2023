import styles from './index.module.css';
import { useEffect, useState } from 'react';

import * as carsService from '../../services/carsService';
import Card from '../Card';

function Gallery() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll()
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page" className={styles.section}>
            <h1 className={styles.title}>Cars Gallery</h1>
            <div className={styles.gallery}>
                {cars.map((car,index) => (
                    <Card key={car._id} {...car} />
                ))}

                {cars.length === 0 && (
                    <p className={styles.empty}>No cars listed yet...</p>
                )}
            </div>
        </section>
    );
}

export default Gallery;