import Project1 from '../assets/img/Project1.png';
import Project2 from '../assets/img/Project2.png';
import Project3 from '../assets/img/Project3.png';
import Project4 from '../assets/img/Project4.png';
import Project5 from '../assets/img/Project5.png';
import Project6 from '../assets/img/Project6.png';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Projects = () => {
  const projects = [
    {
      title: 'Appointme.',
      description: 'CRM for freelancer/businesses',
      imgUrl: Project1,
      github: 'https://github.com/EFP18/AppointMe',
      deploy: 'https://appointme-deploy-73ae09842608.herokuapp.com/'
    },
    {
      title: 'Code Trove.',
      description: 'Code snippets storage for coders',
      imgUrl: Project2,
      github: 'https://github.com/EFP18/Code-Trove',
      deploy: 'https://code-trove.herokuapp.com/'
    },
    {
      title: 'U8Yet?',
      description: 'A mashup between Yelp and Google Maps',
      imgUrl: Project3,
      github: 'https://github.com/teddysm/U8Yet',
      deploy: 'https://teddysm.github.io/U8Yet/'
    },
  ];
  const projects2 = [
    {
      title: 'Weather Dashboard',
      description: 'Weather forecast dashboard',
      imgUrl: Project4,
      github: 'https://github.com/teddysm/WeatherDashboard',
      deploy: 'https://teddysm.github.io/WeatherDashboard/'
    },
    {
      title: 'Nerd Quiz',
      description: 'A quiz for nerds',
      imgUrl: Project5,
      github: 'https://github.com/teddysm/NerdQuiz',
      deploy: 'https://teddysm.github.io/NerdQuiz/'
    },
    {
      title: 'NoteTaker',
      description: 'A simple note taker app',
      imgUrl: Project6,
      github: 'https://github.com/teddysm/NoteTaker',
      deploy: 'https://nameless-brushlands-85998.herokuapp.com/'
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first' >
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                        <Row>
                        <div className='proj-dropdown'>
                            {projects.map((project, index) => {
                              return (
                                <DropdownButton size='lg' id="dropdown-basic-button" title="Check it out">
                                  <Dropdown.Item target='_blank' href={project.deploy}>Deployed Site</Dropdown.Item>
                                  <Dropdown.Divider />
                                  <Dropdown.Item target='_blank' href={project.github}>Github Repo</Dropdown.Item>
                                </DropdownButton>
                              )})}   
                        </div>                        
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                        <Row>
                        <div className='proj-dropdown'>
                            {projects2.map((project, index) => {
                              return (
                                <DropdownButton size='lg' id="dropdown-basic-button" title="Check it out">
                                  <Dropdown.Item target='_blank' href={project.deploy}>Deployed Site</Dropdown.Item>
                                  <Dropdown.Divider />
                                  <Dropdown.Item target='_blank' href={project.github}>Github Repo</Dropdown.Item>
                                </DropdownButton>
                              )})}   
                        </div>                        
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
