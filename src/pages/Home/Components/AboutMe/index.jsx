import React from "react";
import '../../../../index.css';
import headshot from '../../../../resources/images/pfp.png';


const AboutMe = () => {
	return (
		<section class="sub-section" id="about-me">
			<div class="information">
				<h2 className="headings">About Me</h2>
				<div class="headshot-container">
					<img class="headshot" src={headshot} alt="Eric's headshot" />
				</div>
				<p>Hello! My name is Eric Jiang and I am a Part II Software Engineering student at The University of
					Auckland.
				</p>
				<br />
				<p class="background-info">I've been passionate and curious about technology since a kid, always playing
					around with computers and
					always wanting
					to know how everything worked behind the scenes. After taking an introductory paper for
					programming in my first
					year of uni, I discovered a passion for software engineering. My interest
					in software
					development had sparked, and since then, I have always been eager to pursue a career in technology and
					software
					development. I loved seeing my lines of code come to life and be able to complete a task which is why I
					decided to
					pursue a career in software engineering to further this new-found passion.</p>
			</div>

		</section>
	)
}

export default AboutMe;