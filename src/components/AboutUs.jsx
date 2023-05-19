import './AboutUs.css';
import bracelet from '../assets/bracelet.jpeg';

const AboutUs = () => {
  return (
    <section className="about" id="banner">
      <p className="text-4xl font-extrabold mb-1 w-full relative pb-8 overflow-hidden md:text-[3vw] md:mb-2 text-center ">
        <span className="span">ABOUT</span> US
      </p>

      <div className="row">
        <div className="image">
          <img src={bracelet} alt="bracelet" />
        </div>

        <div className="content">
          <p className="text-4xl font-bold mb-1 w-full relative pb-8 overflow-hidden md:text-[2vw] md:mb-2 text-center ">
            what makes our accessories special?
          </p>
          <p>
            HORUX provides you satisfaction with our aesthetic and fashionable
            jewels for special occasions, as well as one can wear them everyday.
          </p>
          <p>
            Since, fashion accessories has become a trend in youth and it has
            seen tremendous change in the past one decade, Horux offers you the
            same thing at affordable price range to keep up with the today's
            trend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
