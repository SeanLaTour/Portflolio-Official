import React from "react";
import { Button, Row, Col, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "rgb(0, 0, 0, .7)",
        borderBottomStyle: "solid",
        borderBottomWidth: "6px",
        borderBottomColor: "#000",
        marginBottom: "30px"
      }}
    >
      <Row className="d-flex justify-content-sm-center flex-sm-column flex-lg-row">
        <Col
          className="d-flex justify-content-lg-start justify-content-sm-center"
          xs={8}
        >
          <h1
            style={{  whiteSpace: "nowrap" }}
            className="d-block col-lg-4 ml-lg-2 mt-lg-2"
          >
            Sean La Tourette
          </h1>
        </Col>
        <Col>
          <nav className="d-flex flex-row justify-content-end mr-4">
            <ul className="d-flex flex-row">
              <ButtonToolbar className="mt-3">
                <ButtonGroup className="mr-2">
                  <Button variant="success">
                    <Link
                      style={{ color: "#cacaca", textDecoration: "none" }}
                      to="/"
                    >
                      Home
                    </Link>
                  </Button>
                  <Button variant="success">
                    <Link
                      style={{ color: "#cacaca", textDecoration: "none" }}
                      to="/about"
                    >
                      About
                    </Link>
                  </Button>
                  <Button variant="success">
                    <Link
                      style={{ color: "#cacaca", textDecoration: "none" }}
                      to="/development"
                    >
                      Apps
                    </Link>
                  </Button>
                  <Button variant="success">
                    <Link
                      style={{ color: "#cacaca", textDecoration: "none" }}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </ul>
          </nav>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
