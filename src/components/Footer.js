import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/Portfolio Logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} sm={6}>
            <img src={logo} alt='Logo' />
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon mt-5'>
              <a target='_blank' href='https://github.com/teddysm'>
                <img src={navIcon1} alt='Icon' />
              </a>
              <a target='_blank' href='https://www.linkedin.com/in/thanhtdoan'>
                <img src={navIcon2} alt='Icon' />
              </a>
              <a target='_blank' href='https://www.instagram.com/eyitsteddey/'>
                <img src={navIcon3} alt='Icon' />
              </a>
            </div>
            <p>
              Made by Thanh Doan with love. Copyright 2023. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
