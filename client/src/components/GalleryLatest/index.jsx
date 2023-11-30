
import styles from './index.module.css';
import { useEffect, useState } from 'react';

import * as carsService from '../../services/carsService';
import Card from '../Card';

function GalleryLatest() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getLatest(3)
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page" className={styles.section}>
            <h1>NEWEST GEMS</h1>
            <div className={styles.gallery}>
                {cars.map((car,index) => (
                    <Card key={car._id} {...car} />
                ))}

                {cars.length === 0 && (
                    <h3 className="no-articles">No cars listed yet</h3>
                )}
            </div>
        </section>
    );
}

export default GalleryLatest;