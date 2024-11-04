import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
export default function Refund() {
    return (
        <div>
            <div>
                <Row>
                    <h3 className="text-center  "> Refund Policy
                    </h3>


                    <h3 className="text-center mt-5 "> Refund Policy
                    </h3>
                    <p className="text-center">At EmergeWiz, we have a strict refund policy for our downloadable software. Please read this policy carefully to understand your responsibilities as a customer.</p>
                    <Col xs={12} md={12}>
                        <p className="mycard mx-3 lh-base text-start mt-3 " >
                            <b>No Refunds : </b>
                            <p>
                                Generally, we do not provide refunds after a purchase is completed. Once the product is delivered, the sale is final. In rare cases, a refund may be possible, depending on the product.
                            </p>
                            <p>    <b>Before You Buy :
                            </b>
                                <p>
                                    Please check the product demo before making a purchase. You will receive exactly what is shown in the demo.
                                </p>
                            </p>
                            <p><b>Exceptional Cases for Refunds

                            </b>
                                <p><b>General Rule :</b>
                                    <p>  Refunds are not available once the product is sold.
                                        Refunds are not available once the product is sold.
                                    </p>
                                </p>
                                <p>
                                    <b>Technical Issues :</b>
                                    <p> Refunds are not given for problems caused by your server or hosting.

                                    </p>
                                </p>
                                <p>
                                    <b>Customizations :</b>

                                    <p> If you request additional changes to the product, these will be treated as a new project, and no refunds will be issued for custom work.
                                    </p>
                                </p>
                                <p><b>Third-Party Compatibility :</b>

                                    <p>  We are not responsible for any incompatibility with third-party software (like plugins or extensions) unless explicitly stated in the product     </p>

                                </p>
                            </p>
                        </p>
                    </Col>
                </Row>
            </div>

        </div>
    )
}