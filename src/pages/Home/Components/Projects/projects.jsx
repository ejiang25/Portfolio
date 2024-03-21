import React from "react";
import blackjack from "../../../../resources/images/blackjack.jpg";
import quickdraw from "../../../../resources/images/quickdraw.png";
import solemates from "../../../../resources/images/solemates.png";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="headings">Projects</h2>
      <div className="project-container">
        <div className="project-card">
          <img
            className="project-image"
            id="quickdraw"
            src={quickdraw}
            alt="Quick, Draw! Project"
          />
          <h3>Quick, Draw!</h3>
          <p className="subtext">
            Game that challenges players to draw a picture of an object or idea
            and then tries to guess what the drawing represents. Created with
            two others and used GitHub Flow. Made using JavaFX
          </p>
          <div className="project-viewhere">
            <hr />
            <a
              className="project-link"
              href="https://gitfront.io/r/ejiang25/iETAcLurLBQA/QuickDraw/"
            >
              View here
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            className="project-image"
            id="blackjack"
            src={blackjack}
            alt="Blackjack Project"
          />
          <h3>Blackjack</h3>
          <p className="subtext">
            A CLI that implements OOP principles like abstraction, polymorphism,
            encapsulation, and inheritance to create the decision-making logic
            for the Bot and Dealer AI. Made using Java
          </p>
          <div className="project-viewhere">
            <hr />
            <a
              className="project-link"
              href="https://gitfront.io/r/ejiang25/YqMawB4ks7Kh/Blackjack/"
            >
              View here
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            className="project-image"
            id="solemates"
            src={solemates}
            alt="solemates"
          />
          <h3>SoleMates</h3>
          <p className="subtext">
            Developed an android app called SoleMates that sells shoes. Implemented features such as product listing,
            detailed product views, cart functionality, and user authentication
          </p>
          <div className="project-viewhere">
            <hr />
            <a
              className="project-link"
              href="https://gitfront.io/r/ejiang25/7kzbTeAyV7J9/SoleMates/"
            >
              View here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
