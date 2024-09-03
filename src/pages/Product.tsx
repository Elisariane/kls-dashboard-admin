import React from 'react';
import { Container, Row, Col, Card, Nav, Navbar, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';


const Product: React.FC = () => {
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
                        <h1 className="mb-4">Produtos - KLS Games </h1>

                    

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Product;
