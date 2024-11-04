import React, { useEffect, useState, useMemo } from "react";
import "../CSS/Hero.css";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import hero from "../Images/banner-image.png";
import { Container, Row, Col } from "react-bootstrap";

function HeroSection(props) {
  const mydata = useMemo(() => [
    {
      title: "web",
      header: "Transform Your Vision into Digital Reality",
      para: "With the Leading Web Design and Development Company in Coimbatore. Let us help you make your dreams a reality with a website that not only meets but exceeds your expectations.",
    },
    {
      title: "mobile",
      header: "Innovative Design Meets Expert Development",
      para: "EmergeWiz is a leading mobile application development company, creating innovative iOS and Android applications that boost brand presence and drive business growth.",
    },
    {
      title: "Graphics",
      header: "Designs That Define Your Brand.",
      para: "EmergeWiz delivers innovative graphic design solutions that elevate brands and captivate audiences with stunning visuals",
    },
    {
      title: "testing",
      header: "Delivering Quality and Reliability through Expert Software Testing",
      para: "We offer a wide variety of testing services to meet the performance, functional, and security requirements of your software applications, ensuring your product quality.",
    },
    {
      title: "WordPress",
      header: "Transforming Ideas into WordPress Excellence",
      para: "At EmergeWiz, we specialize in delivering exceptional WordPress development services in Coimbatore. Our team delivers unique, high-quality websites that are designed to meet your specific business needs, ensuring a standout online presence and optimal performance.",
    },
    {
      title: "Digitalmarketing",
      header: "Elevate Your Online Presence with Expert Digital Marketing",
      para: "EmergeWiz is a leading digital marketing company in Coimbatore, dedicated to driving business growth through innovative and result-oriented strategies",
    },
    {
      title: "about",
      header: "Transforming Ideas into Extraordinary Digital Solutions",
      para: "End-to-end software development, from innovative application creation to strategic digital marketing, driving your business forward.",
    },
    {
      title: "CORPORATE",
      header: "Enhance Your Institution with Expert Corporate Training",
      para: "EmergeWiz offers top corporate training, dedicated to empowering students with the skills and knowledge needed to excel in the professional world. Our comprehensive training programs are designed to bridge the gap between academic learning and industry requirements, ensuring students are job-ready and competitive.",
    },
    {
      title: "college",
      header: "Empower Your College with Expert Corporate Training",
      para: "EmergeWiz provides exceptional corporate training for colleges, focused on equipping students with the essential skills and knowledge to succeed in their professional careers. Our extensive training programs are crafted to connect academic education with industry demands, ensuring that students are prepared and competitive in the job market.",
    },
    {
      title: "Smartstorez",
      header: "Empowering Businesses with Comprehensive E-commerce Software",
      para: "The ideal solution for businesses looking for an E-commerce app development company in Coimbatore to streamline operations and grow with ease.",
    },
    {
      title: "FoodDuke",
      header: "Boost Customer Satisfaction with On-Demand Food Delivery Software",
      para: "Your go-to food delivery app development company in Coimbatore offering a seamless dining experience with diverse restaurant listings, real-time order tracking, secure payments, and fast deliveries.",
    },
    {
      title: "hero",
      header: "Elevate your business global visibility with EmergeWiz",
      para: "Our expert team ensures your brand stands out in the digital world, driving growth and engagement through innovative solutions tailored to your needs. Shaping the Future through Innovative Development. Our exceptional development expertise transforms possibilities into realities, crafting Excellence solutions that redefine industries and propel progress to new heights.",
    },
  ], []);

  const [data, setData] = useState(mydata);
  
  useEffect(() => {
    const selected = mydata.filter((item) => item.title === props.option);
    setData(selected.length > 0 ? selected : mydata); // Fallback to mydata if no match found
  }, [props.option, mydata]);

  return (
    <Container fluid="xxl" className="Hero_div py-5 mb-5">
      <Container className="mt-2 pt-4 hero-header">
        <Row className="g-5 py-5">
          <Col className="text-col text-center text-lg-start">
            <h1 className="hero-heading mb-4 zoomIn animated">
              {data[0].header}
            </h1>
            <div className="hero-sub zoomIn animated">
              {data[0].para.split("\n").map((i, key) => {
                return (
                  <p
                    className="p-lh"
                    key={key}
                  >
                    {i}
                  </p>
                );
              })}
            </div>
            <Link to="/contact">
              <Button
                className="Quote-Button py-sm-3 px-sm-5 slideInLeft animated"
                variant="outline-light"
              >
                Free Quote
              </Button>{" "}
            </Link>
            <Link to="/contact">
              <Button
                className="Contact-Button py-sm-3 px-sm-5 slideInRight animated"
                variant="outline-light"
              >
                Contact Us
              </Button>{" "}
            </Link>
          </Col>
          <Col className="img-col text-center text-lg-start">
            <img src={hero} alt="" className="Hero-img img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HeroSection;
