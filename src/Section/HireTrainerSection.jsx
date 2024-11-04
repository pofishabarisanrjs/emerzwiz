
import { Row, Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/About.css';


function HireTrainerSection() {

    return (
        <Container fluid="xxl" className="hire-div py-5 my-5 wow fadeInUp">
            <Container className='px-lg-5 F-innerDiv'>
                <div className='S-section-title position-relative text-center mb-2 pb-2 wow fadeInUp'>
                    <h2 className='Service-sub-title text-white'>Hire Trainer</h2>
                    <p className='text-white mt-5 p-lh text-start'>
                        EmergeWiz's seasoned trainers offer expertise in full-stack development, Python, Java, and digital marketing. With over 10 years of experience, our professionals are available for corporate projects and educational initiatives like seminars, webinars, and workshops. Empower your workforce or students with our comprehensive skill sets. Additionally, our skilled developers deliver cost-effective, cross-platform solutions, utilizing the latest technology for optimal results.
                    </p>
                </div>

                <Row className='gx-5'>
                    <Col xs={12} lg={6} className=' '>
                        <div className="hire-item hire-bg-image">
                            <div>
                                <h4 className='prof text-center text-md-start my-3'>For college </h4>
                                <p className='prof p-lh '>
                                    EmergeWiz's skilled trainers offer seminars, webinars, and workshops on Full Stack Development, Python, Java, empowering students with industry-relevant knowledge.
                                </p>

                            </div>
                            <div class="row ms-lg-5 mt-5">
                            <Link to="/Forcollege" style={{ textDecoration: 'none', color: 'inherit' }}><button class="mybtn">
                                    <span class="text"> Get a Quote </span>
                                    <span class="circle">
                                        <span class="arrow">
                                        </span>
                                    </span>
                                </button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className=' '>
                        <div className="hire-item hire-bg-image">
                            <div>
                                <h4 className='prof text-center text-md-start my-3'>For Corporates</h4>
                                <p className='prof p-lh'>
                                    Our developers provide cost-effective, cross-platform solutions, utilizing the latest technology to deliver optimal results for corporate projects.
                                </p>
                            </div>
                            <div class="row ms-lg-5 mt-5">
                            <Link to="/ForCorporate " style={{ textDecoration: 'none', color: 'inherit' }}> <button class="mybtn">
                                    <span class="text"> Get a Quote </span>
                                    <span class="circle">
                                        <span class="arrow">
                                        </span>
                                    </span>
                                </button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default HireTrainerSection;
