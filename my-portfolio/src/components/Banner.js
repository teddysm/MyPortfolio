import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/Me.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 125);
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Software Engineer'];
  const period = 1400;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className='tagline'>
                    Welcome to Thanh Doan's portfolio
                  </span>
                  <h1>
                    {`I'm a`}{' '}
                    <span
                      className='txt-rotate'
                      dataPeriod='1000'
                      data-rotate='[ "Web Developer", "Software Engineer" ]'
                    >
                      <span className='wrap'>{text}</span>
                    </span>
                  </h1>
                  <p>
                    My name is Thanh Doan, I usually go by Ted. I was born in Ho
                    Chi Minh city, Vietnam. I started my tech journey at the age
                    of 5 by messing with (and breaking) all pieces of tech I
                    could get my hands on. When I got my first PC, I realized
                    that I have met my match since there were so many things I
                    could learn on the Internet. That was how I got into
                    Computer Science and Software Engineering. I like solving
                    problems, especially with code.
                  </p>
                  <AnchorLink href='#connect'>
                    <button>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </AnchorLink>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt='Header Img' />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
