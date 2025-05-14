import PageNav from '../components/PageNav';
import styles from './Product.module.css';

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img src="img-1.jpg" alt="person with dog overlooking mountain with sunset" />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            WordWise is a smart platform designed for modern travelers who want to explore the world in a more meaningful way. We combine advanced technology with the spirit of adventure to deliver an experience that is intuitive,
            informative, and enjoyable.
          </p>
          <p>
            The core feature of WordWise is its ability to track users' travel journeys across the globe. Every place visited, moment experienced, and story created can be recorded and stored in one integrated platform—building a personal
            archive of meaningful travel memories.
          </p>
          <p>We believe that every journey holds a unique story. With WordWise, you don't just travel—you leave behind a trace that can be remembered and shared.</p>
        </div>
        <video src="nature.mp4" controls></video>
        <audio src="ncs-on&on.mp3" controls></audio>
      </section>
    </main>
  );
}
