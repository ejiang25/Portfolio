import React from "react";
import './contact.css';


const Contact = () => {
	return (
		<section id="contact">
			<div className="container">
				<div className="contact-box">
					<div className="left"></div>
					<div className="right">
						<h2 className="headings">Contact Me</h2>
						<form target="_blank" className="form" action="https://formsubmit.co/ejiang25@gmail.com" method="POST">
							<input type="text" name="name" required className="field" placeholder="Your Name" />
							<input type="email" name="email" required className="field" placeholder="Your Email" />
							<input type="text" className="field" placeholder="Phone" />
							<textarea placeholder="Message" className="field message-area"></textarea>
							<button type="submit" className="btn">Send</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact;

// https://formsubmit.co/el/kepeho