import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from "./components/Navbar/index.js";
import About from "./pages/About/index.js";
import Projects from "./pages/Projects/index.js";
import Experience from "./pages/Experience/index.js";
import Education from "./pages/Education/index.js";
import Skills from "./pages/Skills/index.js";
import Contact from "./pages/Contact/index.js";
import Footer from "./components/Footer/index.js";




function App() {

  return (
    <Router>
        <Container className="p-0" fluid={true}>
          <Navbar />
            <Route exact path="/" component={About}   />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
        
        </Container>
        <Footer />
    </Router>
  );
}

export default App;