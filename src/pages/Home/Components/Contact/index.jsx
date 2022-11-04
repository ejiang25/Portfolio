import React from "react";
import '../../../../index.css';


const Contact = () => {
	return (
		<section id="contact">
			<div className="container">
				<div className="contact-box">
					<div className="left"></div>
					<div className="right">
						<h2 className="contact-us headings">Contact Me</h2>
						<input type="text" className="field" placeholder="Your Name" />
						<input type="text" className="field" placeholder="Your Email" />
						<input type="text" className="field" placeholder="Phone" />
						<textarea placeholder="Message" className="field"></textarea>
						<button className="btn">Send</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact;