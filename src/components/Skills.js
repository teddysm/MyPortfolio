import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';
import mern from '../assets/img/MERN.png';
import sern from '../assets/img/SERN stack.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2> Skills </h2>
              <p>
                Javascript | HTML | CSS | SQL | RESTful API | MVC | Responsive
                Web Design | Version Control | Python | Java |
              </p>
              <p>
                Detail Oriented | Organized | Adaptability | Agile |
                Communication | Leadership |
              </p>
              <CardGroup className='skill-stack'>
                <Card bg='info'>
                  <Card.Img variant='top' src={mern} />
                  <Card.Body>
                    <Card.Title>MERN Stack</Card.Title>
                  </Card.Body>
                </Card>
                <Card bg='info'>
                  <Card.Img variant='top' src={sern} />
                  <Card.Body>
                    <Card.Title>SERN Stack</Card.Title>
                  </Card.Body>
                </Card>
              </CardGroup>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >
                <div className='item'>
                  <img src={meter1} alt='Image' />
                  <h5>Web Development</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Image' />
                  <h5>Creativity</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Image' />
                  <h5>Problem solving</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='Image' />
                  <h5>Teamwork</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='Image' />
                  <h5>Analysis</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='Image' />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} />
    </section>
  );
};
