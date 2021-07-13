import React from "react";
import { Col, Row } from "react-bootstrap";
import { Spring } from "react-spring/renderprops";
import emailjs from 'emailjs-com';

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_taikk8b', 'template_csx1epl', e.target, "user_1rCYJZslHhU8WSTiuokFT")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  

  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <Row className="d-flex justify-content-center pt-3">
            <Col xs={8}>
              <div
                style={{
                  backgroundColor: "rgb(0, 0, 0, .7)",
                  borderColor: "#000",
                  borderStyle: "solid",
                  borderWidth: "6px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  height: "600px",
                  padding: "20px",
                }}
              >
                <h2>Contact Me:</h2>
                <a style={{color: 'green'}} href="https://www.linkedin.com/in/seanlatour/">LinkedIn</a> <a style={{color: 'green'}} href="https://github.com/SeanLaTour">Github</a>
                <p>
                  Feel free to write me an email. I try and check it as often
                  as possible so I should be able to get back to you ASAP.
                </p>
                <form className="contact-form" onSubmit={sendEmail}>
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Don't worry, I won't ever spam your email. It's our little
                      secret.
                    </small>
                  </div>
                  <div className="form-group">
                    <input
                      name="subject"
                      type="title"
                      className="form-control"
                      id="title"
                      placeholder="Title"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="name"
                      type="name"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      style={{height: "90px"}}
                      name="message"
                      type="text-area"
                      className="form-control"
                      id="textarea"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit" 
                    value="Send"
                    className="btn btn-success float-right"
                  >
                    Send
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Spring>
  );
}

export default Contact;
