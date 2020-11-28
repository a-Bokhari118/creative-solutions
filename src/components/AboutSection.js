import home1 from '../img/home1.png';
const AboutSection = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>We work to make</h2>
          </div>
          <div className='hide'>
            <h2>
              your <span>DREAMS</span>
            </h2>
          </div>
          <div className='hide'>
            <h2>come true</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography for any idean you have,
          we have professionals with amazing skills
        </p>
        <button>Start Your Dream</button>
      </div>
      <div className='image'>
        <img src={home1} alt='CAMARA photo' />
      </div>
    </div>
  );
};

export default AboutSection;
