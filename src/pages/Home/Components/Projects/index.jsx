import React from "react";
import '../../../../index.css';
import projectOne from '../../../../resources/images/projectone.png';


const Projects = () => {
	return (
		<section class="sub-section-alt" id="projects">
			<h2>Projects</h2>
			<div class="project-container">
				<div class="project-card">
					<img class="project-image" src={projectOne} alt="Project one" />
					<h3>Quick, Draw!</h3>
					<p class="subtext"> This is my project and
						some text about it. I enjoyed making this project</p>
					<hr />
					<p class="subtext"> <a class="project-link" href="https://github.com/ejiang25/">View here</a></p>
				</div>
				<div class="project-card">
					<img class="project-image" src={projectOne} alt="Project one " />
					<h3>Quick, Draw!</h3>
					<p class="subtext"> This is my project and
						some text about it. I enjoyed making this project</p>
					<hr />
					<p class="subtext"> <a class="project-link" href="https://github.com/ejiang25/">View here</a></p>
				</div>
				<div class="project-card">
					<img class="project-image" src={projectOne} alt="Project one " />
					<h3>Quick, Draw!</h3>
					<p class="subtext"> This is my project and
						some text about it. I enjoyed making this project</p>
					<hr />
					<p class="subtext"> <a class="project-link" href="https://github.com/ejiang25/">View here</a></p>
				</div>
			</div>
		</section>
	)
}

export default Projects;