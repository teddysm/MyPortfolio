import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/Me.png';
import { ArrowRightCircle, FileEarmarkArrowDown } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 80);
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Software Engineer', 'UX/UI Designer'];
  const period = 1600;

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
      <Container fluid='md'>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__backInLeft' : ''
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
                    Chi Minh City, Vietnam. I started my tech journey at the age
                    of 5 by messing with (and breaking) all pieces of tech I
                    could get my hands on. When I got my first PC, I realized
                    that I have met my match since there were so many things I
                    could learn on the Internet. That was how I got into
                    Computer Science and Software Engineering. I like solving
                    problems, especially with code.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <AnchorLink
                    href='#connect'
                    style={{ textDecoration: 'none' }}
                  >
                    <button
                      className={
                        isVisible
                          ? 'animate__animated animate__swing animate__delay-0.5s animate__repeat-2'
                          : ''
                      }
                    >
                      Let’s Connect <ArrowRightCircle size={30} />
                    </button>
                  </AnchorLink>
                  <a
                    href='https://drive.google.com/file/d/19f5deEavjpFI3pux7OPFaB_b3GtUgUCy/view?usp=sharing'
                    rel='noreferrer'
                    target='_blank'
                    style={{ textDecoration: 'none' }}
                  >
                    <button
                      className={
                        isVisible
                          ? 'animate__animated animate__bounce animate__delay-0.5s animate__repeat-2'
                          : ''
                      }
                    >
                      My Resume <FileEarmarkArrowDown size={30} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomInDown' : ''
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
