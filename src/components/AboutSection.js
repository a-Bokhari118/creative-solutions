import home1 from '../img/home1.png';

import { About, Description, Image, Hide } from '../styles';
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>DREAMS</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography for any idean you have,
          we have professionals with amazing skills
        </p>
        <button>Start Your Dream</button>
      </Description>
      <Image>
        <img src={home1} alt='camera' />
      </Image>
    </About>
  );
};

//styled-component

export default AboutSection;
