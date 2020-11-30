import home1 from '../img/home1.png';

import { About, Description, Image, Hide } from '../styles';

import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>DREAMS</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography for any idean you have,
          we have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Start Your Dream</motion.button>
      </Description>
      <Image>
        <motion.img src={home1} alt='camera' variants={photoAnim} />
      </Image>
      <Wave />
    </About>
  );
};

//styled-component

export default AboutSection;
