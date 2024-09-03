import React from 'react';
import { Container, Row, Col, Card, Nav, Navbar, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

const Dashboard: React.FC = () => {
    return (
        <div>
 
        <Sidebar>
            
        </Sidebar>
            {/* Main Content */}
            <Container fluid>
            
                {/* Navbar */}
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                </Navbar>
            
                <Row>
                    {/* Sidebar */}

                    {/* Main Content Area */}
                    <Col md={10} className="p-4">
                        <h1 className="mb-4">Welcome to Your Dashboard</h1>

                        <Row>
                            <Col md={4}>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Card.Title>Card Title 1</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Card.Title>Card Title 2</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Card.Title>Card Title 3</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Dashboard;
