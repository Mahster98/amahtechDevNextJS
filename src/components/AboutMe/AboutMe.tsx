
import classes from "./AboutMe.module.css";
import AboutMeContent from "../../../public/data/content/AboutMeContent";

//import resume from "@/data/content/Alexander_Mah_Resume.pdf";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

const AboutMe = () => {
    return (
    <Container>
      <Col className="text-center justify-content-center align-items-center">
        <Row className="text-center justify-content-center align-items-center flex-column-reverse flex-lg-row my-3">
          <Col className="col-lg-6 col-10 justify-content-center my-1">
            
              <div className="h5 text-left">
                <p className={classes.bio}>
                {AboutMeContent[0].bio}
                </p>
              </div>
           
          </Col>
          <Col className="col-lg-6 col-10 justify-content-center align-items-center my-3">
            <Row>
              <Col className="col-2"></Col>
             
                <Image src="../data/img/profPic1.jpg" alt="Alex Mah" fluid />

              <Col className="col-2"></Col>
            </Row>
          </Col>
        </Row>
        <Row className="col-12 justify-content-center align-items-center">
        
            <p className="h2">
              <b>Want to know more?</b>
            </p>

        </Row>
        <Row className="col-12 justify-content-center align-items-center my-3">
      
            <Row className="col-12 justify-content-between align-items-center">
              <Col className="col-4">
                <Row>
                  <Col className="col-2"></Col>
                  <a
                    className="col-12 col-lg-8"
                    href={AboutMeContent[0].linkedin}
                  >
                    <Image src="../data/img/linkedin-logo-icon-3.jpg" alt="Link" fluid />
                  </a>
                  <Col className="col-2"></Col>
                </Row>
              </Col>
              <Col className="col-4">
                <Row>
                  <Col className="col-lg-2"></Col>
                  <a
                    className="col-12 col-lg-8"
                    href={AboutMeContent[0].github}
                  >
                    <Image src="../data/img/Github-Mark.jpg" alt="Link" fluid />
                  </a>
                  <Col className="col-2"></Col>
                </Row>
              </Col>
              <Col className="col-4">
                <Row>
                  <Col className="col-2"></Col>
                  {/* <a className="col-12 col-lg-8" href={resume} download> */}
                    <Button variant="primary" size="lg" >
                      Resume
                    </Button>
                  {/* </a> */}
                  <Col className="col-2"></Col>
                </Row>
              </Col>
            </Row>

        </Row>
      </Col>
    </Container>
    )
}

export default AboutMe;