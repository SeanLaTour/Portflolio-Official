import React, { useState } from "react";
import selfOne from "./selfOne.jpg";
import { Image, Col, Row } from "react-bootstrap";
import { Spring } from "react-spring/renderprops";

function About() {
  const [skillIndex, setSkillIndex] = useState("HTML5");

  const skills = {
    HTML5: [
      "Tags",
      "Elements",
      "Semantic Code",
      "Links",
      "Paths",
      "Containers",
      "Images",
      "Video Players",
    ],
    CSS3: [
      "Selectors",
      "Properties",
      "Values",
      "Declarations",
      "Hex/ RGB Color Codes",
      "Animations",
      "Fonts",
      "Flex-Box",
      "Bootstrap",
    ],
    JavaScript: [
      "Variables",
      "Strings",
      "Scope",
      "Parameters",
      "Errors",
      "Loops",
      "Decision Structures",
      "Built-in Functions",
      "Higher-Order Functions",
    ],
    React: [
      "JSX",
      "Components and Props",
      "Importing and Exporting",
      "Conditional Rendering",
      "Lists and Tables",
      "Styling",
      "State Managment",
      "Asynchronous State",
      "Arrays and Objects as State",
      "Forms and Input Fields",
      "React Hooks",
      "AbortController",
      "React Router (Swtich, Route, Link)",
      "Route Parameters",
      "Nested Routes",
      "Modifying History",
    ],
    Node: [
      "Express.js",
      "Knex.js",
      "Node Package Manager",
      "Project Configuration",
      "Routes",
      "Application Middleware",
      "Query and Route Parameters",
      "Error Handling",
      "RESTful API",
    ],
    PostgreSQL: [
      "Creating and Deleting Databases",
      "DBeaver",
      "Database Architecture",
      "Creating and Vewing Tables",
      "Inserting Data",
      "Querying Data",
      "Updating and Deleting Data",
      "Database Relationships",
      "Relating Tables Through Keys",
      "Joining Tables",
    ],
    Async: [
      "Creating Promises",
      "Resolving Promises",
      "Postman",
      "Headers",
      "JavaScript Requests",
      "Promise Chaining",
      "Resolve and Reject",
      "Async and Await",
    ],
    DSA: [
      "Recursion",
      "Sorting Algorithms",
      "Sets and Maps",
      "Linked Lists",
      "Stack and Queues",
      "Trees",
      "Implementation and Runtimes",
    ],
  };

  const list = skills[skillIndex].map((skill, index) => {
    return (
      <li style={{ listStyle: "none" }} key={index}>
        {skill}
      </li>
    );
  });

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
                className="about-A"
                style={{
                  backgroundColor: "rgb(0, 0, 0, .7)",
                  borderColor: "#000",
                  borderStyle: "solid",
                  borderWidth: "6px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Image className="about-image-A" src={selfOne} alt="Sean" />
                <div className="p-4">
                  <h2>About Me</h2>
                  <p>
                    I am a software developer living in San Diego, CA. When I am
                    not coding websites, games and apps I'm playing my guitar or
                    my bass. I first became interested in web development when I
                    came up with the idea to make a website for my band.
                    Throughout the challenge of creating the band's website I
                    realized how exciting it could be to watch my ideas come to
                    life on the web. It was then I started taking steps towards
                    a career in full-stack development. I always loved working
                    with my band-mates and after talking to a few friends in the
                    web development industry I discovered that it wasn't much
                    different than playing music! I suppose you could now say
                    that I'm searching for my own band of programmers to create
                    some sweet applications with. I want to provide people with
                    smoothly styled front-end web-pages with the power of a nine
                    piece metal band in the back-end! Every page I design will
                    be a symphony of elegance and utility.
                  </p>
                </div>
              </div>
              <div
                className="about-B"
                style={{
                  backgroundColor: "rgb(0, 0, 0, .7)",
                  borderColor: "#000",
                  borderStyle: "solid",
                  borderWidth: "6px",
                  marginBottom: "60px",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="p-4">
                  <form className="formSelect">
                    <label style={{marginRight: '10px'}}>Below lists specific concepts I have learned about:</label>
                    <select
                      onChange={(e) => setSkillIndex(e.target.value)}
                      className="form-select"
                    >
                      <option value="HTML5">HTML5</option>
                      <option value="CSS3">CSS3</option>
                      <option value="JavaScript">JavaScript ES6</option>
                      <option value="React">React 16</option>
                      <option value="Node">Node.js</option>
                      <option value="PostgreSQL">PostgreSQL</option>
                      <option value="Async">Asynchronous Code</option>
                      <option value="DSA">Data Structures and Algorithms</option>
                    </select>
                  </form>
                  <div>
                    <ul>{list}</ul>
                  </div>
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
