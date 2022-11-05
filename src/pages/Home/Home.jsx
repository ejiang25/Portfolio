import React from "react";
import '../../global.css';
import AboutMe from "./Components/AboutMe/aboutme";
import Contact from "./Components/Contact/contact";
import Hero from "./Components/Hero/hero";
import Projects from "./Components/Projects/projects";



const Home = () => {
	return (
		<>
			<Hero />
			<AboutMe />
			<Projects />
			<Contact />
		</>
	)
}

export default Home;