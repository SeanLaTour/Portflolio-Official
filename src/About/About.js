import React from "react";
import selfOne from "./selfOne.jpg";
import selfTwo from "./selfTwo.jpg";
import { Image, Col, Row } from "react-bootstrap";
import { Spring } from "react-spring/renderprops";

// NEED TO IMPLEMENT MOBILE VERSION
function About() {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "50px",
            }}
          >
            <Col xs={10}>
              <div
                style={{
                  backgroundColor: "rgb(0, 0, 0, .4)",
                  borderColor: "#000",
                  borderStyle: "solid",
                  borderWidth: "6px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Image
                  width="200px"
                  style={{
                    borderRightStyle: "solid",
                    borderColor: "#000",
                    borderWidth: "6px",
                  }}
                  src={selfTwo}
                  alt="Sean"
                />
                <div className="p-4">
                  <h2>About Me</h2>
                  <p>
                    I am Sean La Tourette! I provide well crafted websites fueled by HTML, CSS and
                    JavaScript. I am fluent with React, VS Code, Git and GitHub,
                    advanced functions, error-handling, promises, asynchronous
                    code, Bootstrap, responsive layouts, the DOM and much, much
                    more! My degree is in Computer and Information Sciences and
                    I am certified in several different programming languages. I
                    have experience with Python, Java, Visual Basic, Excel,
                    Microsoft Office, Ableton and various video and photo
                    editing programs. I create web-pages for bands, artists,
                    entrepreneurs, small businesses and retailers. Contact me! I
                    would love to build your custom, dream of a website!
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "rgb(0, 0, 0, .4)",
                  borderColor: "#000",
                  borderStyle: "solid",
                  borderWidth: "6px",
                  marginBottom: "60px",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row-reverse",
                }}
              >
                <Image
                  width="200px"
                  style={{
                    borderLeftStyle: "solid",
                    borderColor: "#000",
                    borderWidth: "6px",
                  }}
                  src={selfOne}
                  alt="Sean"
                />
                <div className="p-4">
                  <h2>My Story</h2>
                  <p>
                    I am a software developer living in
                    San Diego, CA. When I am not coding websites, games and apps
                    I'm playing my guitar or my bass. I first became interested
                    in web development when I came up with the idea to make a
                    website for my band. Throughout the challenge of creating
                    the band's website I realized how exciting it could be to
                    watch my ideas come to life on the web. It was then I
                    started taking steps towards a career in full-stack
                    development. I always loved working with my band-mates and
                    after talking to a few friends in the web development
                    industry I discovered that it wasn't much different than
                    playing music! I suppose you could now say that I'm
                    searching for my own band of programmers to create some
                    sweet applications with. I want to provide people with
                    smoothly styled front-end web-pages with the power of a nine
                    piece metal band in the back-end! Every page I design will
                    be a symphony of elegance and utility.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Spring>
  );
}

export default About;
