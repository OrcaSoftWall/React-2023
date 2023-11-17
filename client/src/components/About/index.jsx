import styles from './index.module.css';

function About() {
    return (
        <section className={styles.about}>
            <div className={styles.aboutSection}>
                <h1>Welcome to Silk Cars</h1>
                <p>The ultimate online destination for sports car enthusiasts! Born from a high-octane passion for the world's most exhilarating automobiles, our platform is more than just a website—it's a vibrant community where speed, elegance, and engineering marvels come alive.</p>

                <h2>Our Mission</h2>
                <p>At Silk Cars, we celebrate the artistry and innovation behind sports cars. From classic models that wrote the first chapters of automotive history to the latest hypercars pushing the boundaries of technology, our mission is to create a diverse and inclusive space for all sports car admirers. Whether you're an owner, an enthusiast, or simply a dreamer, our platform is your stage.</p>

                <h2>What We Offer</h2>
                <p><strong>Gallery of Dreams:</strong> Explore a diverse collection of sports car images uploaded by members from around the globe. Each car comes with its unique story and specifications, shared by fellow enthusiasts.</p>
                <p><strong>Community Driven:</strong> Our platform thrives on user participation. Share photos of your favorite sports cars, tell their stories, and engage with other members. Whether it's a rare vintage model or the latest supercar, your contribution is what drives us forward.</p>
                <p><strong>Encyclopedia of Speed:</strong> Delve into our ever-growing repository of sports car knowledge. From detailed specifications to history and trivia, enrich your understanding of these incredible machines.</p>
                <p><strong>Events and Meetups:</strong> Stay informed about local and international sports car events. Organize or join meetups and experience the thrill of these machines in person.</p>

                <h2>Join the Ride</h2>
                <p>Silk Cars is more than just viewing and sharing pictures—it's about experiencing the sheer joy and thrill that sports cars bring into our lives. We're a community that thrives on the shared passion of our members.</p>
                <p>Whether you're here to admire the engineering marvels, share your prized possession, or learn more about the world of sports cars, <strong>Silk Cars</strong> is where your passion meets the pavement.</p>
                <p><strong>Join us today</strong> and be a part of this exhilarating journey!</p>
            </div>
        </section>
    );
}

export default About;