import React from "react";
import '../../../../index.css';
import projectOne from '../../../../resources/images/projectone.png';


const Projects = () => {
	return (
		<section className="sub-section-alt" id="projects">
			<h2 className="headings">Projects</h2>
			<div className="project-container">
				<div className="project-card">
					<img className="project-image" src={projectOne} alt="Project one" />
					<h3>Quick, Draw!</h3>
					<p className="subtext"> This is my project and
						some text about it. I enjoyed making this project</p>
					<hr />
					<p className="subtext"> <a className="project-link" href="https://github.com/ejiang25/">View here</a></p>
				</div>
				<div className="project-card">
					<img className="project-image" src={projectOne} alt="Project one " />
					<h3>Quick, Draw!</h3>
					<p className="subtext"> This is my project and
						some text about it. I enjoyed making this project</p>
					<hr />
					<p className="subtext"> <a className="project-link" href="https://github.com/ejiang25/">View here</a></p>
				</div>
				<div className="project-card">
					<img className="project-image" src={projectOne} alt="Project one " />
					<h3>Quick, Draw!</h3>
					<p className="subtext"> This is my project and
						some text about it. I enjoyed making this project</p>
					<hr />
					<p className="subtext"> <a className="project-link" href="https://github.com/ejiang25/">View here</a></p>
				</div>
			</div>
		</section>
	)
}

export default Projects;