import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Newsletter from "../Section/NewsletterSec";
import ContactPopup from "../Section/ContactPopup";
import HeroSection from "../Section/HeroSection";
import AccordionSection from "../Section/AccordionSection";
import { Card } from "react-bootstrap";
import whywordpress from "../JSON/Graphic.json"

export default function Graphicsdesign() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    let accord = [
        {
            question: "Why should I choose EmergeWiz for graphic design in Coimbatore?",
            answer: "EmergeWiz is known for its experienced team, client-centric approach, focus on quality and innovation, and competitive pricing.",
        },
        {
            question: "How can social media banners help my business?",
            answer: "Social media banners enhance brand visibility, increase engagement, and attract attention on various social media platforms with professionally crafted designs.",
        },
        {
            question: "Can you help with rebranding my business?",
            answer: "Yes, EmergeWiz specializes in logo and branding design, including rebranding efforts to refresh and enhance your business’s visual identity.",
        },
        {
            question: "Can EmergeWiz assist with both new designs and redesigns?",
            answer: "Yes, EmergeWiz can handle both creating new designs and redesigning existing materials to better fit your brand’s current needs.",
        },
        {
            question: "Do you offer design services for startups and small businesses?",
            answer: "Yes, EmergeWiz provides graphic design services tailored to the needs of startups and small businesses, helping them establish a professional brand presence.",
        },

    ]
    console.log(accord)
    return (
        <div className="bg-white">
            <HeroSection option="Graphics" />
            <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
                <Container className="px-lg-5 ">
                    <div className="S-section-title position-relative text-center mb-3 pb-2 wow fadeInUp">
                        <h3 className="Service-sub-title mt-5">
                            Graphic design company in Coimbatore

                        </h3>
                        <p className="mx-5 lh-base text-start mt-4">

                            EmergeWiz is one of the best Graphic design company in Coimbatore that aims to provide creatively designed and developed solutions for your brand. Our primary objectives include creating appealing and original designs that would fit the state’s and businesses’ requirements in today’s environment. Our work is well-coordinated with your business needs, which allows us to create not only beautiful but also suitable designs to help you stand out and attract customers.

                        </p>
                        <p className="mx-5 lh-base text-start mt-4">At EmergeWiz, we know that design is not just about looks, it is about making a statement and making a business thrive. This is comprehensive and client-specific, where all designs we are going to develop have to fit your brand’s requirements and objectives. We also listen to you and ask questions that help us know about your visions, obstacles, and potential to create a design that reflects your business and appeals to your target audiences.

                        </p>

                        {/* <div>
                            <Row>

                                <Col
                                    sm={12}
                                    md={12}
                                    lg={6} className="mt-5">
                                    <img src={word} alt="" className="w100" />
                                </Col>
                                <Col
                                    sm={12}
                                    md={12}
                                    lg={6} className="">
                                    <div>
                                        <h3 className="mt-5">  Our Approach to WordPress Development</h3>
                                        <p className="text-start mt-5">At EmergeWiz, our focus on WordPress development is always centered around our clients. Our process starts with a need analysis that involves identifying your business needs, your targeted audience, and your specific website requirements. From there our team of qualified developers and designers works together with you to develop a personalized solution that aligns with the company’s brand and goals.
                                        </p>
                                        <p className="text-start">We are one of the top companies specializing in WordPress development in Coimbatore offering a variety of services such as WordPress theme and plugin development, website customization, e-commerce solutions, and website optimization. Our team is capable of designing and developing a new website for your growing business from the ground up or redesigning your existing site to provide you with the best solution.
                                        </p>
                                    </div>
                                </Col>

                            </Row>
                        </div> */}

                    </div>
                    <div className="text-center ">
                        <h3 className="mt-5 mb-5">	Our Graphic Design Services in Coimbatore
                        </h3>
                        <p>We offer a wide range of graphic design services to meet various business needs</p>
                        <Row className="g-4 equal-cols myweb text-start mb-5 mt-3">
                            {whywordpress.map((service, index) => (
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
                    <div>
                        <Row>
                            <h3 className="text-center ">Why choose EmergeWiz for Graphic Designing in Coimbatore?</h3>
                            
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 gdh150" >
                                    <b>Experienced Team :</b> Our professional team of graphic designers has extensive  working experience in several fields. We aim at providing quality work that is both unique and has the best market appeal.

                                </p>
                            </Col>

                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 gdh150" >
                                    <b>Client-Centric Approach:
                                    </b>  We work closely with our clients to fully understand their business objectives and create designs that not only fit within the brand vision but also serve a specific purpose.

                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 gdh150" >
                                    <b>Focus on Quality and Innovation: </b> We make sure that all our works meet specific high standards all the time. We do not only aim at the aesthetic value of our designs, but we also ensure that they reflect today’s trends and standards in graphic design.
                                    </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 gdh150" >
                                    <b>Competitive Pricing:</b> Our company provides cheap but professional graphic design services. Our service is then well priced so that you can be assured of maximum value for the amount that you spend.

                                </p>
                            </Col>
                           
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


