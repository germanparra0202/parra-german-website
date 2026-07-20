import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        {/* Navigation Bar */}
        <Navbar />

        {/* Portfolio Content Sections */}
        <main>
          {/* Hero Landing */}
          <Hero />
          
          {/* About Bio Profile */}
          <About />
          
          {/* Skill Tag Category grids */}
          <Skills />
          
          {/* Timeline Experience */}
          <Experience />
          
          {/* Responsive dynamic projects grid */}
          <Projects />
          
          {/* Credentials and education courses */}
          <Education />
          
          {/* Toggleable awards/certifications slider component */}
          <Certifications />
          
          {/* Recommendations carousel Slider */}
          <Testimonials />
          
          {/* Form + Social links page */}
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
