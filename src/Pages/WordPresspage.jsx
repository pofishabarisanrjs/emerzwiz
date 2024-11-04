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
import whywordpress from "../JSON/Wordpress.json"
import word from "../Images/newsletter.png"

export default function WordPresspage() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    let accord = [
        {
            question: "Why should I choose EmergeWiz for WordPress development?",
            answer: "Choosing EmergeWiz means partnering with a team dedicated to delivering high-quality, cost-effective WordPress solutions. We focus on your unique needs, ensuring a strong online presence that drives growth and success.",
        },
        {
            question: "How do I get a quote for my WordPress project?",
            answer: "Simply reach out to us via our website or give our office a call. We'll review your specific requirements and offer a detailed estimate tailored to your needs.",
        },
        {
            question: "What is included in your WordPress development package?",
            answer: "Our WordPress development package includes ongoing support, SEO optimization, responsive design, plugin integration, and custom theme design. We can also tailor packages to suit specific client requirements.",
        },
        {
            question: "What types of post-development support do you provide for websites?",
            answer: "We offer ongoing support and maintenance services to ensure your WordPress website continues to run smoothly. This includes updates, security checks, and any other assistance you might need post-launch.",
        },

    ]
    console.log(accord)
    return (
        <div className="bg-white">
            <HeroSection option="WordPress" />
            <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
                <Container className="px-lg-5 ">
                    <div className="S-section-title position-relative text-center mb-3 pb-2 wow fadeInUp">
                        <h3 className="Service-sub-title mt-5">
                            WordPress development company in Coimbatore
                        </h3>
                        <p className="mx-5 lh-base text-start mt-4">
                            In today's digital world, maintaining a solid online presence is critical for any business striving to thrive and expand.
                            Being one of the best WordPress development company in Coimbatore, EmergeWiz is committed to helping businesses build their
                            online presence through unique and effective WordPress solutions. Our specialization is in specifying the needs of each of the
                            clients and in designing aesthetically appealing, interactive websites with great functionality that would help businesses grow.

                        </p>


                        <div>
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
                        </div>

                    </div>
                    <div className="text-center ">
                        <h3 className="mt-5 mb-5">Why Choose EmergeWiz for WordPress development services in coimbatore?
                        </h3>
                        <Row className="g-4 equal-cols myweb text-start mb-5">
                            {whywordpress.map((service, index) => (
                                <Col
                                    sm={12}
                                    md={12}
                                    lg={6}
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
                            <h3 className="text-center ">What We Do Best on the WordPress:</h3>
                            <p className="mt-5 mb-5">As one of the best WordPress development company in Coimbatore, our services at EmergeWiz
                                focus on bringing out the best possible solutions on the WordPress CMS. Our services cover many aspects of WordPress
                                development, thus we guarantee that you will be offered the best solution. Here’s what we do best:
                            </p>
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 wph150" >
                                    <b>Custom Themes Development and Creation:</b>Our custom WordPress designs are created to completely capture the
                                    essence of your business. At Recommend WordPress development company in Coimbatore, we concentrate on our custom themes, giving a
                                    visual appeal and user-friendly performance in touch with your business arena.

                                </p>
                            </Col>
                            
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 wph150" >
                                  <b>Advanced Plugin Integration
                                  </b> We improve your WordPress site by configuring and adding Plugins that improve the 
                                        functionalities of the site. Our team understands if you have complex requirements or 
                                        just a set of specific features you want to be incorporated into your site, making sure that
                                         the plugins required are integrated into the project.

                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 wph150" >
                                    <b>Responsive Web Design:</b>Every site we develop is mobile-friendly, ensuring it delivers a 
                                    consistent and optimized appearance across various devices. Whether you are browsing the internet 
                                    on your laptop, tablet, or smartphone, our developed site will be responsive to all your devices.
                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 wph150" >
                                    <b>E-Commerce Solutions:</b>It involves creating secure and reliable e-shops on the WordPress platform,
                                     with tools for product management, payment systems integration, easy navigation, etc. All our solutions 
                                     enable you to manage your online store along with growing it appropriately.

                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 wph150" >
                                    <b>Content Management and Optimization:</b>How do we make it easy for you to manage your site’s content?
                                     Well, you need not worry about the hassle that comes with updating and restructuring your content. 
                                     This way, our approach guarantees you the freshness and new look on your website with very little effort.

                                </p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className="mycard mx-3 lh-base text-start mt-3 wph150" >
                                    <b>Support and Maintenance:</b>Creating a website is one thing though starting it up is different.
                                     Here at EmergeWiz- a WordPress development company in Coimbatore, we assist you in managing your website
                                      by updating, protecting, and optimizing it in every manner possible. A dedicated team of support is available at all times to help with any problems or changes so that users can concentrate on their core business.

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


