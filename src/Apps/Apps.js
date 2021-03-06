import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Spring } from "react-spring/renderprops";
import flashItGIF from "./flash-It-GIF.gif";
import pomodoroGIF from "./pomodoroGIF.gif";
import firstProfileGIF from "./firstProfileGIF.gif";
import reservationGIF from "./reservation.gif";
import mirrorGIF from "./mirror.gif";
import slugs from "./slugs.jpg";

function Apps() {
  const [name, setName] = useState("");
  const [img, setImg] = useState(slugs);
  const [description, setDescription] = useState("");

  const appInfoArray = [
    {
      name: "Flashcard App",
      description: `The Flashcard-App "Flash-It" demonstrates my abilities with React and working with asynchronous code.
            It required React, JavaScript, HTML, CSS, JSX, Bootstrap, JSON and more to build this application and all
            code was written, styled and organized on my own.`,
      img: flashItGIF,
    },
    {
      name: "Pomodoro Timer",
      description: `The Pomodoro Timer app utilizes React and Bootstrap to create a study timer that alerts
      a user when they should break or focus.
            It required React, JavaScript, HTML, CSS, JSX, Bootstrap, JSON and more to build this application and all
            code was written, styled and organized on my own.`,
      img: pomodoroGIF,
    },
    {
      name: "Portfolio Webpage",
      description: `My origional profile was written using raw HTML5 and CSS3 and operates on JavaScript connected to the DOM. 
      It's important to know the foundations of web development and this project illustrates my understanding and application of foundational concepts.`,
      img: firstProfileGIF,
    },
    {
      name: "Periodic Tables",
      description:
        "The restaurant reservation app 'Periodic Tables' is a full-stack project utilizing React, Bootstrap, Node, Knex and PostreSQL. It illustrates my proficiency with the full developement cycle and how the front and back-end apps interact with one another.",
      img: reservationGIF,
    },
    {
      name: "Magic Mirror",
      description:
        "The Magic Mirror is a full-stack project I designed for personal use inside my home. It makes use of React, Bootstarp, Node, Knex and PostgreSQL in order to display information that is important to me and my locaton, ranging from the weather and sunset to my personal schedule which is updated via a mobile platform.",
      img: mirrorGIF,
    },
  ];

  function handleButton(id) {
    setName((name) => (name = appInfoArray[id].name));
    setImg(appInfoArray[id].img);
    setDescription(appInfoArray[id].description);
  }

  return (
    <div className="m-5">
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <Row className="App-row">
              <Col xs={1}></Col>
              <Col className="mt-4" xs={3}>
                <div
                  className="selector"
                  style={{
                    backgroundColor: "rgb(0, 0, 0, .7)",
                    borderColor: "#000",
                    borderStyle: "solid",
                    borderWidth: "6px",
                  }}
                >
                  <Button
                    className="p-3 m-3"
                    variant="success"
                    onClick={() => handleButton(3)}
                  >
                    Periodic Tables
                  </Button>
                  <Button
                    className="p-3 m-3"
                    variant="success"
                    onClick={() => handleButton(0)}
                  >
                    Flashcard App
                  </Button>
                  <Button
                    className="p-3 m-3"
                    variant="success"
                    onClick={() => handleButton(4)}
                  >
                    Magic Mirror
                  </Button>
                  <Button
                    className="p-3 m-3"
                    variant="success"
                    onClick={() => handleButton(1)}
                  >
                    Pomodoro Timer
                  </Button>
                  <Button
                    className="p-3 m-3"
                    variant="success"
                    onClick={() => handleButton(2)}
                  >
                    First Profile
                  </Button>
                </div>
              </Col>

              <Col xs={8}>
                <div
                  className="display"
                  style={{
                    backgroundColor: "rgb(0, 0, 0, .7)",
                    borderColor: "#000",
                    borderStyle: "solid",
                    borderWidth: "6px",
                  }}
                >
                  <div className="d-flex justify-content-around flex-column p-5">
                    <h2>{name}</h2>
                    <img
                      className="display-image"
                      style={{
                        height: "100%",
                        width: "100%",
                        borderColor: "#000",
                        borderStyle: "solid",
                        borderWidth: "6px",
                      }}
                      src={img}
                      alt="App"
                    />
                    <p>{description}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Spring>
    </div>
  );
}

export default Apps;
