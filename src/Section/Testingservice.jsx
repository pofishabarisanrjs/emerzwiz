import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import services from "../JSON/TestingServices";

export default function TestingServices() {
    
    return (
        <div>
            <Container>
                <div className="text-center mt-5 "> 
                    <h3>Our Software Testing Services in Coimbatore</h3>
                    <h6 className="mt-3">
                        We offer a full suite of software testing services to help you ensure the quality and reliability of your applications.
                    </h6>
                </div>

                <Row className="d-flex align-items-stretch">
                    {services.map(service => (
                        <Col key={service.id} sm={12} md={6} lg={4} className="mb-3">
                            <div className="p-3 h-100">
                                <div className="text-center border-blue p-3 sts h-100 d-flex flex-column justify-content-between">
                                    <div className="p-3">
                                        {service.icon}
                                    </div>
                                    <h6 className="cb">{service.title}</h6>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
     
        </div>
    );
}
