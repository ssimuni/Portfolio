import React from 'react'
import HeroSection from './hero-section'
import About from './about/About'
import Skills from './skills'
import Projects from './Projects/Projects'
import Education from './Education/Education'
import Contact from './Contact/Contact'

const Portfolio = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    )
}

export default Portfolio