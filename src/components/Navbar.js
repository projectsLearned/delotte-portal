import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function AppNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand className="fw-bold">
          <span className="bg-primary text-white px-3 py-2 rounded me-2">
            D
          </span>
          Deloitte <br />
          <small className="text-muted">Employee Portal</small>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto gap-4">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/announcement">Announcement</Nav.Link>
            <Nav.Link href="/feedback">Feedback</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>

            <Nav.Link>
              <i className="bi bi-bell"></i>
            </Nav.Link>
            <Nav.Link>
              <img
                src="/assets/avatar.png"
                alt="avatar"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              {/* <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#ddd",
                  borderRadius: "50%",
                }}
              ></div> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
