import './AboutUs.css';
import bracelet from '../assets/bracelet.jpeg';
import { styles } from '../styles';

const AboutUs = () => {
  return (
    <section className="about" id="banner">
      <p className="text-4xl font-extrabold mb-1 w-full relative pb-14 overflow-hidden md:text-[3vw] md:mb-2 text-center ">
        <span className="span">ABOUT</span> US
      </p>

      <div className="row">
        <div className="image">
          <img src={bracelet} alt="bracelet" />
        </div>

        <div className="content">
          <p className="text-4xl font-bold mb-1 w-full relative pb-8 overflow-hidden  md:text-[2.5vw] md:leading-[40px] md:mb-2 text-center ">
            what makes our accessories special?
          </p>
          <p className={styles.heroSubText}>
            Horux was born out of a desire to break free from the confines of
            traditional gender norms in the world of fashion. We believe that
            jewelry should be accessible to all, irrespective of gender or
            societal expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
