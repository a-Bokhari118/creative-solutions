import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      ref={element}
      initial='hidden'
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How do is start?'>
          <div className='answer'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              tenetur quas maxime sed reiciendis fuga iusto voluptas quisquam
              praesentium? Quasi, beatae molestiae.
            </p>
          </div>
        </Toggle>
        <Toggle title='Daily Schedule?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Toggle>
        <Toggle title='Payment Method'>
          <div className='answer'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              totam iste incidunt. lsgdr lores srsf gjdf.
            </p>
          </div>
        </Toggle>
        <Toggle title='What product do you Offer?'>
          <div className='answer'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit inventore odit rem hic quam dolore!.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  @media (max-width: 1300px) {
    margin-top: 0rem;
  }
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1.8rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
