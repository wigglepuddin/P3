import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/navbar';
import Home from './Home';
import About from './About.js';
import Education from './Education';
import Contact from './Contact';

function App() {
    return (
        <div>
            <Router>
                <React.Fragment>
                    <Navbar />
                </React.Fragment>

                <Container className="mt-5">
                    <Row>
                        <Col md={12}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/home" />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/education" element={<Education />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default App;
