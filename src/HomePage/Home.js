import React from "react";
import { Button, Card, Row, Col, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Mailbox, Laptop, Person } from "react-bootstrap-icons";
import { Spring } from "react-spring/renderprops";

function Home() {
  return (
    <div className="mt-lg-3 mt-xs-0">
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div className="px-2 mb-lg-0" style={props}>
            <Row className="" style={{marginBottom: "2px"}} className="mt-xs-3 pt-xs-3 mt-lg-5 pt-lg-5 d-flex justify-content-center">
              <Col lg={3}>
                <Accordion>
                  <Card
                    style={{
                      backgroundColor: "rgb(0, 0, 0, .7)",
                      borderColor: "#000",
                      borderStyle: "solid",
                      borderWidth: "6px",
                      marginBottom: "30px"
                    }}
                    className="text-center"
                  >
                    <Card.Header>
                      <Card.Title>
                        <h2>The Person</h2>
                      </Card.Title>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <Person color="pink" width="130" height="130" />
                      </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>
                          Were you wondering what I am like as a person? Well
                          you've come to the right place! Visit the about me
                          section here to find out more about who I am.
                        </p>
                        <Button variant="success">
                          <Link
                            to="/about"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            About
                          </Link>
                        </Button>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>

              <Col lg={3}>
                <Accordion>
                  <Card
                    style={{
                      backgroundColor: "rgb(0, 0, 0, .7)",
                      borderColor: "#000",
                      borderStyle: "solid",
                      borderWidth: "6px",
                      marginBottom: "30px"
                    }}
                    className="text-center"
                  >
                    <Card.Header>
                      <Card.Title>
                        <h2>The Developer</h2>
                      </Card.Title>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <Laptop color="pink" width="130" height="130" />
                      </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>
                          Maybe you wanted to check out some of the other apps
                          I've designed and developed? Take a look here at all
                          the work I've done with Javascript, HTML, CSS and
                          more.
                        </p>
                        <Button variant="success">
                          <Link
                            to="/development"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Developement
                          </Link>
                        </Button>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
              <Col lg={3}>
                <Accordion>
                  <Card
                    style={{
                      backgroundColor: "rgb(0, 0, 0, .7)",
                      borderColor: "#000",
                      borderStyle: "solid",
                      borderWidth: "6px",
                      marginBottom: "30px"
                    }}
                    className="text-center"
                  >
                    <Card.Header>
                      <Card.Title>
                        <h2>Contact Me</h2>
                      </Card.Title>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <Mailbox color="pink" width="130" height="130" />
                      </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>
                          Like my work? Click here to contact me! I can't wait
                          to hear about what business I'll be able to assist you
                          with! You'll be able to email me and view my LinkedIn
                          and Github!
                        </p>
                        <Button variant="success">
                          <Link
                            to="/contact"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Contact
                          </Link>
                        </Button>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            </Row>
          </div>
        )}
      </Spring>
    </div>
  );
}

export default Home;
