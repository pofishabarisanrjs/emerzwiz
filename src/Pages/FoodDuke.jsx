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
import FoodDukekey from "../JSON/FoodDukekey.json"
import word from "../Images/newsletter.png"
import Smartstoreztest from "../JSON/FoodDuketest.json"
import food from "../JSON/FoodDukefood"
import { SiMongodb } from "react-icons/si";

export default function FoodDuke() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    let accord = [
        {
            question: "What makes Food Duke's food delivery software unique?",
            answer: "Food Duke offers a robust and user-friendly platform designed to simplify food delivery management. With features like real-time order tracking, multiple payment options, and restaurant integration across various locations, we provide a comprehensive solution for both businesses and customers.",
        },
        {
            question: "Is the software customizable for my brand?",
            answer: "Absolutely! Food Duke’s software allows customization of logos, themes, and other brand elements, so your business can stand out with a personalized identity while providing a seamless customer experience.",
        },
        {
            question: "What kind of support does Food Duke offer?",
            answer: "We offer complete support, including technical assistance, training, and ongoing updates. Our team is available to ensure that your software runs smoothly and any issues are resolved quickly.",
        },
        {
            question: "Can I track deliveries in real time with Food Duke?",
            answer: "Yes, our software includes GPS-based real-time tracking for both customers and drivers. This ensures transparency, allowing customers to follow their orders and drivers to navigate deliveries efficiently.",
        },
        {
            question: " What is the top food delivery app development company?",
            answer: "Food Duke is the best food delivery app development company, offering cutting-edge solutions tailored to meet the needs of restaurants, small businesses, and startups. Our platform features real-time tracking, secure payments, multi-location integration, and customizable branding, making it the ideal choice for businesses looking to streamline their delivery operation",
        },

    ]
    console.log(accord)
    return (
        <div className="bg-white">
            <HeroSection option="FoodDuke" />
            <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
                <Container className="px-lg-5 ">
                    <div className="S-section-title position-relative text-center mb-3 pb-2 wow fadeInUp">

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
                                    <div className="mt-5">
                                        <h3 className="mt-3">  Food delivery app development company
                                        </h3>
                                        <p className="text-start p-3 mt-4">
                                            At Food Duke, we empower people to order food in a simpler, faster, and more efficient way through our advanced app technology. We are one of the Best food delivery app development company in Coimbatore that offer convenience, variety, and quality applications to benefit our users. Whether for a delicious meal, takeaways, or discovering new vendors, our platform helps you find the menus, manage all your orders in real time, and benefit from fast and efficient delivery services. Some of the features we implemented on the platform are convenient for the user regarding dietary habits. Being an experienced food app development company in Coimbatore, we ensure that we have created solutions that suit the food restaurants, food chains, and delivery services. We boast of applications that are effective, secure, and developed with the user in mind.
                                        </p>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </div>

                    <div className="text-center ">
                        <h3 className="mt-5 mb-5">Key Features of our Food Delivery App Development</h3>
                        <Row className="g-4 equal-cols myweb text-start mb-5">
                            {FoodDukekey.map((service, index) => (
                                <Col
                                    sm={12}
                                    md={6}
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
                            <h3 className="text-center ">Explore Our Food Delivery Software 3 Unique Panels with Customer-Centric Features
                            </h3>

                            <Col xs={12} md={4}>
                                <p className="mycard mx-3 lh-base text-start mt-3 fdh150" >
                                    <h3 className="text-center mb-3">Customer Panel
                                    </h3>
                                    <ul>
                                        <li>
                                            <h5>Quick Login
                                            </h5>
                                            <p>Streamlined login options to ensure you can place your order without delay.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Easy Search
                                            </h5>
                                            <p>Advanced search filters and categories to help you discover the perfect meal.</p>
                                        </li>
                                        <li>
                                            <h5>Payment Options</h5>
                                            <p>Multiple payment gateways to ensure a hassle-free checkout experience.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Promo Codes
                                            </h5>
                                            <p>Find exclusive discounts and offers with user-friendly promo codes.</p>
                                        </li>
                                        <li>
                                            <h5>Re-Order
                                            </h5>
                                            <p>Quickly reorder past meals with a single tap, making dining convenient and familiar.
                                            </p>
                                        </li>
                                    </ul>

                                </p>
                            </Col>

                            <Col xs={12} md={4}>
                                <p className="mycard mx-3 lh-base text-start mt-3 fdh150" >
                                    <h3 className="text-center mb-3">Admin Panel
                                    </h3>
                                    <ul>
                                        <li>
                                            <h5>Customer Management
                                            </h5>
                                            <p>Efficient tools for managing customer profiles, preferences, and interactions.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Ads Management
                                            </h5>
                                            <p>Easily create and manage advertisements to attract and retain customers.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>Analytics & Reports
                                            </h5>
                                            <p>
                                                Access comprehensive reports and analytics to optimize operations and improve sales.</p>                                        </li>
                                        <li>
                                            <h5>Manage Restaurants
                                            </h5>
                                            <p>Seamlessly add, edit, or remove restaurant listings and menu options as needed.
                                            </p>                                        </li>
                                        <li>
                                            <h5>Manage Delivery
                                            </h5>
                                            <p>Manage delivery assignments and monitor performance to guarantee timely service.
                                            </p>                                        </li>
                                    </ul>

                                </p>
                            </Col>
                            <Col xs={12} md={4}>
                                <p className="mycard mx-3 lh-base text-start mt-3 fdh150" >
                                    <h3 className="text-center mb-3">Driver Panel
                                    </h3>
                                    <ul>
                                        <li>
                                            <h5>Real-Time Requests
                                            </h5>
                                            <p>Receive instant notifications for new delivery requests, maximizing efficiency.
                                            </p>                                        </li>
                                        <li>
                                            <h5>Profile Management
                                            </h5>
                                            <p>Update your profile information and preferences to enhance your delivery role.
                                            </p>                                        </li>
                                        <li>
                                            <h5>View Earnings
                                            </h5>
                                            <p>Easy access to earnings reports and payment details to manage your finances.
                                            </p>
                                        </li>
                                        <li>
                                            <h5>
                                                Availability Settings                                            </h5>
                                            <p>Set your availability to accept orders that fit your schedule, ensuring flexibility.
                                            </p>
                                        </li>
                                    </ul>

                                </p>
                            </Col>


                        </Row>
                    </div>
                    <Row className="d-flex align-items-stretch">
                        <h3 className="text-center mt-5 mb-3 cb">Our Food Delivery Software is Perfect for Everyone
                        </h3>
                        <p className="text-center">At Food Duke, we believe that our food delivery software is designed to cater to a diverse range of users,
                            ensuring an optimal experience for all.Here’s how our platform benefits everyone involved</p>
                        {food.map(service => (
                            <Col key={service.id} sm={12} md={6} lg={6} className="mb-3">
                                <div className="p-3 h-100">
                                    <div className="text-center border-blue p-3 sts h-100 d-flex flex-column justify-content-between">
                                        <div className="p-3">
                                            {service.icon}
                                        </div>
                                        <h6 className="cb">{service.title}</h6>
                                        <p >{service.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>

            <AccordionSection faq={accord} />
            <Container fluid="xxl" className="service-div pb-5 wow fadeInUp">
                <Container className="px-lg-5 ">

                    <div>
                        <Row>
                            <Col sm={12}
                                md={12}
                                lg={4} className="text-center">
                                <p>
                                    <SiMongodb size={40} />
                                    <h4 className="mt-3">Order Management </h4>
                                </p>
                            </Col>

                            <Col sm={12}
                                md={12}
                                lg={4} className="text-center ">
                                <SiMongodb size={40} />
                                <h4 className="mt-3">On-Time Delivery</h4>
                            </Col>

                            <Col sm={12}
                                md={12}
                                lg={4} className="text-center">
                                <SiMongodb size={40} />
                                <h4 className="mt-3">Reduced Operational Cost</h4>
                            </Col>

                            <Col sm={12}
                                md={12}
                                lg={4} className="text-center">
                                <SiMongodb size={40} />
                                <h4 className="mt-3">Professional Developers
                                </h4>
                            </Col>

                            <Col sm={12}
                                md={12}
                                lg={4} className="text-center">
                                <SiMongodb size={40} />
                                <h4 className="mt-3">Reach a Wider Audience
                                </h4>
                            </Col>

                            <Col sm={12}
                                md={12}
                                lg={4} className="text-center">
                                <SiMongodb size={40} />
                                <h4 className="mt-3">After Sales Support
                                </h4>
                            </Col>

                        </Row>
                    </div>
                    <div className="text-center ">
                        <h3 className="mt-5 mb-5">Testimonials  </h3>
                        <Row className="g-4 equal-cols myweb text-start mb-5">
                            {Smartstoreztest.map((service, index) => (
                                <Col
                                    sm={12}
                                    md={12}
                                    lg={4}
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


            <ContactPopup />

            <Newsletter />



        </div>
    );
}


