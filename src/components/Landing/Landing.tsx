import classes from "./Landing.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";

const Landing = () => {
  return (
    <div className={classes.Landing} id="Home">
      <Container>
          <Row className="flex-lg-row flex-column text-center justify-content-center align-items-center">
            <Col className="col-lg-1 col-12" />
            <Col>
              <Image className="col-lg-10 col-12" src={"../../data/img/LandingName.png"} fluid />
            </Col>
            <Col className="col-lg-1 col-12" />
          </Row>
      </Container>
    </div>
  );
};

export default Landing;