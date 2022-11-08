import React from "react";
import blackjack from '../../../../resources/images/blackjack.jpg';
import burgershop from '../../../../resources/images/burgershop.jpeg';
import quickdraw from '../../../../resources/images/quickdraw.png';
import './projects.css';


const Projects = () => {
	return (
		<section id="projects">
			<h2 className="headings">Projects</h2>
			<div className="project-container">
				<div className="project-card">
					<img className="project-image" id="quickdraw" src={quickdraw} alt="Quick, Draw! Project" />
					<h3>Quick, Draw!</h3>
					<p className="subtext">Game that challenges players to draw a picture of an object or idea and then tries to guess what the drawing represents. Created with two others and used GitHub Flow. Made using JavaFX</p>
					<div className="project-viewhere">
						<hr />
						<p className="subtext"> <a className="project-link" href="https://gitfront.io/r/ejiang25/iETAcLurLBQA/QuickDraw/">View here</a></p>
					</div>
				</div>
				<div className="project-card">
					<img className="project-image" id="blackjack" src={blackjack} alt="Blackjack Project" />
					<h3>Blackjack</h3>
					<p className="subtext">A CLI that implements OOP principles like abstraction,
						polymorphism, encapsulation, and inheritance
						to create the decision-making logic for the Bot
						and Dealer AI. Made using Java
					</p>
					<div className="project-viewhere">
						<hr />
						<p className="subtext"> <a className="project-link" href="https://gitfront.io/r/ejiang25/YqMawB4ks7Kh/Blackjack/">View here</a></p>
					</div>
				</div>
				<div className="project-card">
					<img className="project-image" id="burgershop" src={burgershop} alt="Burgershop Project" />
					<h3>Burgershop</h3>
					<p className="subtext"> A CLI simulating an ordering system for a burger shop
						which involves using OOP concepts such as
						inheritance, polymorphism, and encapsulation to
						implement the logic. Made using Java</p>
					<div className="project-viewhere">
						<hr />
						<p className="subtext"> <a className="project-link" href="https://gitfront.io/r/ejiang25/6SyeN69GERFX/Burgershop/">View here</a></p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects;