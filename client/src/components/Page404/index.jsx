import styles from './index.module.css';

function Page404() {
    return (
        <section className={styles.notFound}>
            <h1>404</h1>
            <h2>Page not found</h2>    
        </section>

    );
}

export default Page404;