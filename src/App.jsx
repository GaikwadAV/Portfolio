import React from 'react';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Certifications from './components/certification.jsx';


export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <About />
      <Education />
      <Certifications />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

