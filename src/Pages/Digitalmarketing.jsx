

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
import whydigital from "../JSON/whydigital.json"
import word from "../Images/newsletter.png"

export default function Digitalmarketing() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    let accord = [
        {
            question: "What services does EmergeWiz offer?",
            answer: "EmergeWiz offers a range of digital marketing services including Search Engine Optimization (SEO), Pay-Per-Click (PPC) Advertising, Social Media Marketing, Content Marketing, Email Marketing, and WhatsApp Marketing.",
        },
        {
            question: "Do you offer ongoing support for digital marketing campaigns?",
            answer: "Yes, EmergeWiz provides ongoing support and optimization to ensure your campaigns remain effective and achieve the best possible results",
        },
        {
            question: "What is the process for working with EmergeWiz?",
            answer: "Our process involves research and strategy development, execution and optimization of campaigns, and ongoing analysis and reporting to ensure your digital marketing efforts are effective and delivering results.",
        },
        {
            question: "What makes EmergeWiz different from other digital marketing agencies?",
            answer: "EmergeWiz stands out with its client-centric approach, experienced team, data-driven strategies, and transparent reporting, ensuring customized solutions and measurable results.",
        },
        {
            question: "Why is digital marketing important for my business?",
            answer: "Digital marketing helps businesses increase their online visibility, attract potential customers, generate leads, and ultimately drive sales and conversions. It allows you to reach a larger audience more effectively than traditional marketing methods.",
        },

    ]
    console.log(accord)
    return (
        <div className="bg-white">
            <HeroSection option="Digitalmarketing" />
            <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
                <Container className="px-lg-5 ">
                 
                    <div>
                        <Row>
                            <h3 className="mt-5 text-center">  Digital marketing company in Coimbatore</h3>

                            <Col
                                sm={12}
                                md={12}
                                lg={6} className="mt-5">
                                <img src={word} alt="" className="w100" />
                            </Col>
                            <Col
                                sm={12}
                                md={12}
                                lg={6} className="mt-5">
                                <div>
                                    <p className="text-start mt-5">EmergeWiz has realized how quickly the environment changes
                                        and how critical it is to be competitive all the time. Being a top digital marketing company in
                                        Coimbatore, our attention is on developing solutions that correspond to your business objectives.
                                        Today, our team of digital marketing specialists uses advanced software and platforms to make your
                                        brand visible on the internet.
                                    </p>
                                    <p className="text-start">While many may think that digital marketing is all about just exposing people to your website,
                                        we know that it is all about leading to a conversion. This is why our strategy is client-based, analytical, and outcome-oriented,
                                        at the same time. For those who need brand promotion,
                                        lead generation, or need to increase their interaction with customers, EmergeWiz offers professional services.
                                    </p>
                                </div>
                            </Col>

                        </Row>
                    </div>

                    <div>
                        <Row>
                            <h3 className="text-center mt-5">Our Digital Marketing Services in Coimbatore</h3>
                            <p className="mt-3 mb-3 text-center">As a leading Digital Marketing Company in Coimbatore, we offer the following services
                            </p>
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 wph150" >
                                    <b>Search Engine Optimization (SEO): </b> Our SEO packages will help boost your website ranking and make
                                    you get organic traffic. It is the right place for optimizing your website through keyword research,
                                    on and off page optimization as well as content marketing.


                                </p>
                            </Col>

                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 wph150" >
                                    <b>Pay-Per-Click (PPC) Advertising:
                                    </b>  Maximize your ROI with our specific PPC campaigns.
                                    Our team designs and runs ads in Google Ads and social networks,
                                    and your ads will appear when and where they should.
                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 wph150" >
                                    <b>Social Media Marketing:</b>Establish yourself or your business with our expert social
                                    media marketing solutions. We offer interesting articles and posts, account administration and
                                    promoted posts and advertisements to attract more consumers and enhance the client’s popularity.

                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 wph150" >
                                    <b>Content Marketing: </b>Create engaging and high-value content in a way to convince the audience.
                                    The services we offer in content marketing include blogging services, infographic services, video
                                    services and so on with the aim of educating, entertaining and leading the target consumers to make
                                    purchases.


                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 wph150" >
                                    <b>Email Marketing: </b>Enhance customer interactions by using email marketing messages for closely
                                    targeted goals. Our solutions incorporate a number of email marketing plans, as a way of converting
                                    them into customers, selling your products and services or to retain customers.
                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 wph150" >
                                    <b>WhatsApp Marketing:</b>Over the years WhatsApp has proved to be an effective communication tool,
                                    so you can rely on it to reach your audience directly. WhatsApp is one of the platforms that enable
                                    you to send your customers messages and promotions and keep them updated, boosting their patronage.
                                    Custom and accountable advertising and marketing campaigns that will help you to reach your goal are
                                    our speciality.
                                </p>
                            </Col>
                            <p className="text-center mt-3">
                                <button className="br20px p-3">Choose our Digital Marketing Company in Coimbatore to take your business to the next level and get outstanding
                                    outcomes online. Together, it is time to achieve more and develop specific and creative approaches for your
                                    business! </button></p>
                        </Row>
                    </div>


                    <div className="text-center mt-5">
                        <h3>Our Digital Marketing Process</h3>

                        <Row>
                            <Col  sm={12}
                                md={12}
                                lg={6}>
                                <Col className=""><div className="p-3">
                                    <h4 className="cb ">Research and Strategy Development</h4>
                                    <p>We start by understanding the business and audience as well as the business and industry on which you will be operating. It helps to develop an individualized working approach to the digital marketing strategy that corresponds to your objectives.
                                    </p></div></Col>
                                <Col className="">  <div className="p-3">
                                    <h4 className="cb mt-3 mb-3">Execution and Optimization</h4>
                                    <p> Here our team of professionals put it into practice using any best practices and tools. Campaigns are constantly being tripped and adjusted to keep them fresh and make them get the most bang for the buck</p>
                                </div></Col>
                                <Col className=""> <div className="p-3">
                                    <h4 className="cb mt-3 mb-3">Analysis and Reporting</h4>
                                    <p>KPIs are provided in the form of daily, weekly, monthly, annually and our unique analytical approach is applied to assess the effectiveness of planning in achieving stated goals and objectives.
                                    </p>
                                </div></Col>
                            </Col>
                            <Col  sm={12}
                                md={12}
                                lg={6}><img src={word} alt="" className="mt-5 w100" /></Col>

                        </Row>

                    </div>
                    <div className="text-center ">
                        <h3 className="mt-5 mb-5">Why EmergeWiz for Digital Marketing Service in Coimbatore?
                        </h3>
                        <Row className="g-4 equal-cols myweb text-start mb-5">
                            {whydigital.map((service, index) => (
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


