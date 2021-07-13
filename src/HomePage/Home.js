import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Mailbox, Laptop, Person } from "react-bootstrap-icons";
import { Spring } from "react-spring/renderprops";

function Home() {
  return (
    <div className="mt-lg-3 mt-xs-0">
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div className="px-2 mb-lg-0" style={props}>
            <Row
              style={{ marginBottom: "2px" }}
              className="mt-xs-3 pt-xs-3 mt-lg-5 pt-lg-5 d-flex justify-content-center"
            >
              <Col lg={3}>
                <Card
                  style={{
                    backgroundColor: "rgb(0, 0, 0, .7)",
                    borderColor: "#000",
                    borderStyle: "solid",
                    borderWidth: "6px",
                    marginBottom: "30px",
                  }}
                  className="text-center"
                >
                  <Card.Header>
                    <Card.Title>
                      <h2>About</h2>
                    </Card.Title>

                    <Person color="pink" width="130" height="130" />
                  </Card.Header>

                  <Card.Body>
                    <p>
                      I am a highly motivated and passionate developer residing
                      in the San Diego area. To view my personal details and
                      story please select the about section below.
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
                </Card>
              </Col>

              <Col lg={3}>
                <Card
                  style={{
                    backgroundColor: "rgb(0, 0, 0, .7)",
                    borderColor: "#000",
                    borderStyle: "solid",
                    borderWidth: "6px",
                    marginBottom: "30px",
                  }}
                  className="text-center"
                >
                  <Card.Header>
                    <Card.Title>
                      <h2>Developement</h2>
                    </Card.Title>

                    <Laptop color="pink" width="130" height="130" />
                  </Card.Header>

                  <Card.Body>
                    <p>
                      To view some of the many projects I have designed and the
                      technology I utilized to complete them please select the
                      development section below.
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
                </Card>
              </Col>
              <Col lg={3}>
                <Card
                  style={{
                    backgroundColor: "rgb(0, 0, 0, .7)",
                    borderColor: "#000",
                    borderStyle: "solid",
                    borderWidth: "6px",
                    marginBottom: "30px",
                  }}
                  className="text-center"
                >
                  <Card.Header>
                    <Card.Title>
                      <h2>Contact Me</h2>
                    </Card.Title>

                    <Mailbox color="pink" width="130" height="130" />
                  </Card.Header>

                  <Card.Body>
                    <p>
                      I am eager and ready to work. I can be contacted by
                      selecting the contact section below where my github and linkedIn are also available. I look forward to
                      hearing from you!
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
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </Spring>
    </div>
  );
}

export default Home;
