import React, { useState } from 'react';
import { Offcanvas, Nav, Button } from 'react-bootstrap';
import { FaHome, FaBars, FaBoxes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [show, setShow] = useState(true);

  const toggleSidebar = () => setShow(!show);

  return (
    <>
      <Offcanvas show={show} onHide={toggleSidebar} backdrop={false} className="sidebar bg-dark" style={{ width: '250px', color: '#fff' }}>
        <Offcanvas.Header className="d-flex justify-content-between align-items-center">
          <Offcanvas.Title className="d-flex align-items-center">
            KLS Games
          </Offcanvas.Title>
          <Button variant="outline-light" onClick={toggleSidebar} className="align-items-left">
            X
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="#home" className="d-flex align-items-center text-light custom-navlink">
              <FaHome className="me-2" /> Dashboard
            </Nav.Link>
            <Nav.Link href="#about" className="d-flex align-items-center text-light custom-navlink">
             
              <Link to="/product"> 
            <FaBoxes className="me-2" /> Produtos
            </Link>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {!show && (
        <Button variant="outline-dark" onClick={toggleSidebar} className="open-sidebar-btn">
          <FaBars />
        </Button>
      )}
    </>
  );
};

export default Sidebar;
