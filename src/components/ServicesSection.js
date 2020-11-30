import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import { useScroll } from './useScroll';
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
import { scrollReveal } from '../animation';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Servcies
      variants={scrollReveal}
      animate={controls}
      ref={element}
      initial='hidden'
    >
      <Image>
        <img id='imm' src={home2} alt='home pic' />
      </Image>
      <Desc>
        <h2>
          High <span>QUALITY</span> Services
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={clock} alt='icon' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className='icon'>
              <img src={diaphragm} alt='icon' />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className='icon'>
              <img src={money} alt='icon' />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className='icon'>
              <img src={teamwork} alt='icon' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Desc>
    </Servcies>
  );
};

const Servcies = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1300px) {
    #imm {
      display: none;
    }
  }
`;

const Desc = styled(Description)`
  padding-left: 5rem;
  padding-right: 0rem;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 0.5rem;
    }
  }
`;

export default ServicesSection;
