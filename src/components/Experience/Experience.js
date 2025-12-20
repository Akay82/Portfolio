import React, { useState } from 'react';
import Particle from '../Particle';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaShieldAlt,
  FaGitAlt,
  FaReact,
  FaAngular,
  FaBootstrap,
  FaNodeJs,
  FaAndroid,
  FaJava
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiDotnet, 
  SiMysql,
  SiTwilio,
  SiRazorpay,
  SiJquery 
} from 'react-icons/si';
import './Experience.css';

function Experience() {
  const [activeKey, setActiveKey] = useState('edsy');

  const experiences = [
    {
      id: 'hidecible',
      company: 'Hidecible Office System',
      duration: '3 Months – Internship',
      role: 'Web Developer Intern',
      icon: <FaBriefcase className="experience-icon" />,
      color: '#4A90E2',
      responsibilities: [
        'Built small-scale applications and enhanced UI/UX',
        'Worked with React, HTML, CSS, and Bootstrap',
        'Used Git for version control in team environment'
      ],
      technologies: [
        { icon: <FaReact />, name: 'React', color: '#61DAFB' },
        { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
        { icon: <FaBootstrap />, name: 'Bootstrap', color: '#7952B3' }
      ]
    },
    {
      id: 'deltin',
      company: 'Deltin HealthCare Pvt Ltd',
      duration: 'Oct 2023 – Sept 2024 (Remote)',
      role: 'Web Developer',
      icon: <FaShieldAlt className="experience-icon" />,
      color: '#50E3C2',
      responsibilities: [
        'Developed responsive web applications using React.js and Bootstrap',
        'Integrated RESTful APIs for real-time healthcare data',
        'Implemented form validation and user authentication',
        'Enhanced system efficiency and reliability'
      ],
      technologies: [
        { icon: <FaReact />, name: 'React', color: '#61DAFB' },
        { icon: <FaServer />, name: 'REST APIs', color: '#FF6B6B' },
        { icon: <FaDatabase />, name: 'Data Security', color: '#4ECDC4' },
        { icon: <FaBootstrap />, name: 'Bootstrap', color: '#7952B3' }
      ]
    },
    {
      id: 'edsy',
      company: 'Edsy Tech, Ludhiana',
      duration: 'Oct 2024 – Present',
      role: 'Software Developer',
      icon: <FaCode className="experience-icon" />,
      color: '#FF6B6B',
      responsibilities: [
        'Developed web apps using React, Angular, Bootstrap, Tailwind CSS',
        'Integrated third-party services (SMTP, Twilio, Razorpay)',
        'Built scalable front-end solutions and optimized performance',
        'Contributed to backend using Node.js, .NET APIs, and MySQL',
        'Designed AI-enabled mobile apps with Android Studio (Java)'
      ],
      technologies: [
        { icon: <FaReact />, name: 'React', color: '#61DAFB' },
        { icon: <FaAngular />, name: 'Angular', color: '#DD0031' },
        { icon: <SiTailwindcss />, name: 'Tailwind', color: '#38B2AC' },
        { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
        { icon: <SiDotnet />, name: '.NET', color: '#512BD4' },
        { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
        { icon: <SiTwilio />, name: 'Twilio', color: '#F22F46' },
        { icon: <SiRazorpay />, name: 'Razorpay', color: '#0C2451' },
        { icon: <FaAndroid />, name: 'Android', color: '#3DDC84' },
        { icon: <FaJava />, name: 'Java', color: '#007396' },
          { icon: <SiJquery />, name: 'jQuery', color: '#0769AD' }
      ]
    }
  ];
  const createStyleObject = (color) => ({
    '--accent-color': color
  });

  const createTechStyleObject = (color) => ({
    '--tech-color': color
  });
  const activeExperience = experiences.find(exp => exp.id === activeKey);

  return (
    <Container fluid className="experience-section position-relative">
      <Particle />
      
      <div className="experience-wrapper">
        {/* Header Section */}
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h1 className="experience-title">
              <span className="title-highlight">Experience</span>
              <div className="title-line"></div>
            </h1>
            <p className="experience-subtitle">
              My professional journey through innovative companies and challenging projects
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Timeline/Company Selector */}
              <Col lg={4} className="mb-4 mb-lg-0">
            <div className="company-selector">
              <div className="timeline-line"></div>
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`company-card ${activeKey === exp.id ? 'active' : ''}`}
                  onClick={() => setActiveKey(exp.id)}
                  style={createStyleObject(exp.color)}
                >
                  <div className="timeline-dot"></div>
                  <div className="company-info">
                    <div className="company-header">
                      {exp.icon}
                      <div>
                        <h5 className="company-name mb-1">{exp.company}</h5>
                        <p className="company-duration mb-0">
                          <FaCalendarAlt className="me-2" />
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                    <div className="company-role">
                      <span className="role-badge">{exp.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Experience Details */}
               <Col lg={8}>
            {activeExperience && (
              <Card className="experience-detail-card">
                <Card.Body>
                  <div className="experience-header mb-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div 
                        className="company-icon-wrapper"
                        style={{ backgroundColor: `${activeExperience.color}20` }}
                      >
                        {activeExperience.icon}
                      </div>
                      <div>
                        <h2 className="experience-company mb-1">
                          {activeExperience.company}
                        </h2>
                        <p className="experience-role mb-0">
                          {activeExperience.role}
                        </p>
                      </div>
                    </div>
                    <div className="duration-display">
                      <FaCalendarAlt className="me-2" />
                      <span>{activeExperience.duration}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="responsibilities-section mb-4">
                    <h4 className="section-title">
                      <FaCode className="me-2" />
                      Key Responsibilities
                    </h4>
                    <ul className="responsibilities-list">
                      {activeExperience.responsibilities.map((responsibility, index) => (
                        <li key={index} className="responsibility-item">
                          <span className="responsibility-bullet"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="technologies-section">
                    <h4 className="section-title">
                      <FaCode className="me-2" />
                      Technologies & Tools
                    </h4>
                    <div className="technologies-grid">
                      {activeExperience.technologies.map((tech, index) => (
                        <div 
                          key={index} 
                          className="technology-item"
                          style={createTechStyleObject(tech.color)}
                        >
                          <div className="tech-icon-wrapper">
                            {tech.icon}
                          </div>
                          <span className="tech-name">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>

        {/* Stats Bar */}
        <Row className="mt-5">
          <Col md={4} className="mb-3 mb-md-0">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Companies</div>
            </div>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </Col>
          <Col md={4}>
            <div className="stat-card">
              <div className="stat-number">Full Stack</div>
              <div className="stat-label">Expertise</div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Experience;