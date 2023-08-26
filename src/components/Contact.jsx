import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    emailjs
      .sendForm(
        'service_khjf0xh',
        'template_5eku928',
        form.current,
        'H3V4IrTWzFS8de1GP'
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText('Send');
          if (result.text === 'OK') {
            setStatus({ success: true, message: 'Message sent successfully' });
          } else {
            setStatus({
              success: false,
              message: 'Something went wrong, please try again later.',
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt='Contact Us'
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Get In Touch</h2>
                  {/* onSubmit={handleSubmit} */}
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='text'
                          value={formDetails.name}
                          name='user_name'
                          placeholder='Your Name'
                          onChange={(e) => onFormUpdate('name', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='email'
                          value={formDetails.email}
                          name='user_email'
                          placeholder='Email Address'
                          onChange={(e) =>
                            onFormUpdate('email', e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='tel'
                          value={formDetails.phone}
                          name='user_phone'
                          placeholder='Phone No.'
                          onChange={(e) =>
                            onFormUpdate('phone', e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className='px-1'>
                        <textarea
                          rows='6'
                          value={formDetails.message}
                          name='message'
                          placeholder='Message'
                          onChange={(e) =>
                            onFormUpdate('message', e.target.value)
                          }
                        ></textarea>
                        {status.message && (
                          <p
                            className={
                              status.success === false ? 'danger' : 'success'
                            }
                          >
                            {status.message}
                          </p>
                        )}
                        <button type='submit'>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
