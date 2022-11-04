import React from "react";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";


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