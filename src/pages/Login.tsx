import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../service/AuthService';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('');
        try {
            const response = await AuthService.login({ email, password });
            if (response.data !== 'Invalid credentials') {
                localStorage.setItem('token', response.data);
                navigate('/dashboard');
            } else {
                setMessage('Credenciais inválidas. Verifique seu nome de usuário e senha.');
            }
        } catch (error) {
            setMessage('Erro ao tentar efetuar login. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Row className="w-100">
                    <Col md={6} className="d-flex justify-content-center">
                        <Card className="mb-3 text-white bg-dark" style={{ width: '100%', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                            <Card.Body className="flex-grow-1">
                                <Card.Title className="text-center">Login</Card.Title>

                                {message && <div className="alert alert-danger m-auto">{message}</div>}

                                <Form onSubmit={handleLogin}>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            placeholder="Email"
                                            autoComplete="email"
                                            type="email"
                                            className="form-control"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formPassword" className="mt-3">
                                        <Form.Label>Senha</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Senha"
                                            autoComplete="current-password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>
                                    
                                    <Card.Footer className="text-center">
                                        <Button variant="primary" type="submit" className="w-50 mb-2">
                                            Login
                                        </Button>
                                    </Card.Footer>        
                            </Form>
                            </Card.Body>
                           
                        </Card>
                    </Col>

                    <Col md={6} className="d-flex justify-content-center">
                        <Card className="mb-3 text-white bg-dark" style={{ width: '100%', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                            <Card.Body className="flex-grow-1">
                                <Card.Title className="text-center">Register</Card.Title>
                                <div className="d-flex justify-content-center">
                                    <Card.Text>Crie sua conta agora mesmo</Card.Text>
                                </div>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Link to="/register">
                                    <Button variant="success" className="w-100 mb-2">
                                        Register
                                    </Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;
