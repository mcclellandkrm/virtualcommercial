import styles from './Hero.module.css';


const Hero = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.bgVideoWrapper}>
      <video className={styles.bgVideo} autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80" alt="Background" />
      </video>
    </div>
    <div className={styles.content}>
      <h1>Modern Virtual Commercial Solutions</h1>
      <p>Engage your audience with immersive, interactive, and visually stunning experiences for your business.</p>
    </div>
  </section>
);

export default Hero;
