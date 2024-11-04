import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Newsletter from "../Section/NewsletterSec";
import ContactPopup from "../Section/ContactPopup";
import HeroSection from "../Section/HeroSection";
import AccordionSection from "../Section/AccordionSection";
import Testingservices from "../Section/Testingservice";
import { Card } from "react-bootstrap";
import softewaretesting from "../JSON/Testing.json"



function ServicePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  let accord = [
    {
      question: "What types of software testing services does EmergeWiz offer?",
      answer: "EmergeWiz provides functional testing, performance testing, security testing, automation testing, usability testing, and compatibility testing.",
    },
    {
      question: "How does EmergeWiz’s software testing process work?",
      answer: "The process includes requirement analysis, test planning, test design, test execution, defect management, and test reporting.",
    },
    {
      question: "What types of tools and techniques does EmergeWiz use for testing?",
      answer: "EmergeWiz employs up-to-date testing equipment and practical methods to address challenges and ensure high-quality results.",
    },
    {
      question: "Can EmergeWiz assist with testing software that is already in production?",
      answer: "Yes, EmergeWiz can provide testing services for software already in production to identify and resolve issues and ensure continued performance.",
    },

  ]
  console.log(accord)
  return (
    <div className="bg-white">
      <HeroSection option="testing" />
      <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
        <Container className="px-lg-5 ">
          <div className="S-section-title position-relative text-center mb-3 pb-2 wow fadeInUp">
            <h2 className="Service-sub-title mt-5">
              Software Testing Company in Coimbatore
            </h2>
            <p className="mx-5 lh-base text-start mt-4">
              At EmergeWiz, we recognize the crucial role of software testing in the development process.
              At our software testing company in Coimbatore, we ensure you receive a comprehensive testing
              service that is tailored to your individual business goals and technology needs. After the development
              of the application, our team of professional testers reviews the application using sophisticated methods
              and tools to find bugs, compatibility, and usability problems to make your application as perfect as possible.
            </p>
            <p className="mx-5 lh-base text-start">
              At our company, we consider practical software testing to identify user difficulties and optimally
              use the software in various scenarios. Our focus on the client and the quality, lets us achieve the highest
              results which will help to reach the goals of your business and impress you.
            </p>
            <Testingservices />

            <h2 className="Service-sub-title mt-5">
              Our Software Testing Process
            </h2>

            <Row>
              <Col xs={12} md={6}>
                <p className="mycard mx-3 lh-base text-start mt-3 h150" >
                  <b>Requirement Analysis:</b>We begin the process by considering the goals of the project, as informed by the client.
                  It also helps us provide you with a detailed and comprehensive strategy for testing and development.
                </p>
              </Col>
              <Col xs={12} md={6}>
                <p className="mycard mx-3 lh-base text-start mt-3 h150" >
                  <b>Test Planning: </b> It also helps in constructing a test plan that covers the aspects of testing scope,
                  strategy, resources, and time frame for an effective testing process.

                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <p className="mycard mx-3 lh-base text-start mt-3 h150" >
                  <b>Test Design:</b> Our team creates clear test cases and scripts according to the specific characteristics of your software.
                  This step involves the definition of test scenarios and test data preparation.
                </p>
              </Col>
              <Col xs={12} md={6}>
                <p className="mycard mx-3 lh-base text-start mt-3 h150" >
                  <b>Test Execution: </b>
                  We perform the test cases and scripts on the software and document any defects or any problems faced while testing.

                </p>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xs={12} md={6}>
                <p className="mycard mx-3 lh-base text-start mt-3 h150" >
                  <b>Defect Management:</b>  We analyze and prioritize the defects identified, collaborating with your development team to ensure timely resolution and retesting of fixed issues.

                </p>
              </Col>
              <Col xs={12} md={6} >
                <p className="mycard mx-3 lh-base text-start mt-3 h150" >
                  <b>Test Reporting:  </b>
                  We prepare elaborate test reports that cover the testing effort and the activities undertaken, the results and the defects observed during testing, as well as our suggestions for better performance.

                </p>
              </Col>
            </Row>
          </div>
          <div className="text-center ">
            <h3 className="mt-3 mb-5">Why Choose EmergeWiz for Software Testing?
            </h3>
            <Row className="g-4 equal-cols myweb text-start mb-5">
              {softewaretesting.map((service, index) => (
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  key={index}
                  className={`animated wow zoomIn SEO-Optimization`}
                  data-wow-delay={service.delay}
                >
                  <Card className="service-item h-100">
                    <Card.Body className="card-body">
                      <Card.Title className="mb-3">{service.title}</Card.Title>
                      <Card.Text>{service.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>


        </Container>
      </Container>

      <AccordionSection faq={accord} />
      <ContactPopup />

      <Newsletter />



    </div>
  );
}

export default ServicePage;
