import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adarsh Priyadarshi </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I am currently employed as a Technical Support at Quickinsure.
            <br />
            I have completed Bachelor of Engineering in ENTC at SITS
            Pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Adarsh Priyadarshi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
