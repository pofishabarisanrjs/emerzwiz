
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"

export default function Disclaimer() {
    return (
        <div>
            <div>
                <Row>
                    <h3 className="text-center  "> Disclaimer
                    </h3>
                    <h3 className="text-center mt-5 "> Disclaimer
                    </h3>
                    <Col xs={12} md={12}>
                        <p className="mycard mx-3 lh-base text-start mt-3 " >
                            <p>1,By accessing and using this site, you acknowledge that you are doing so at your own risk. EmergeWiz, along with its subsidiaries and affiliates, cannot guarantee that your experience will be free of interruptions or errors. This means that there may be times when the site is down or not working correctly.
                            </p>
                            <p>2,We do not promise that you will get specific results from using this site. Additionally, we cannot guarantee that the information you find here (including product descriptions and offers) is always accurate, complete, or reliable. You should verify any important information before making decisions based on it.
                            </p>
                            <p>3,The site and all its content, including any statements or information, are made available to you as they are, without any changes or enhancements. This means we provide everything "as is" and "as available," without making any promises about how well it will work for you.
                            </p>
                            <p>4,EmergeWiz disclaims all types of guarantees or promises about how the site works or the information and services you can access. This includes any claims regarding ownership, whether our services will not infringe on the rights of others, and whether the products are fit for a particular purpose. Basically, we want you to understand that we are not responsible for any issues that may arise from using the site or its content.
                            </p>
                            <p>
                                <b>Contact Us
                                </b><p>For any questions about this Disclaimer, please reach out to us at: 
    <a href="/contact.html">contact@emergewiz.com</a>.
</p>


                            </p>
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}