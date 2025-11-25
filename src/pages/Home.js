import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import StatCard from "../components/StatCard";

export default function Home() {
  return (
    <Container className="mt-4" >

      <Card className="p-4 shadow-sm border-0" >
        <h4 className="fw-bold text-primary">Welcome Back, Reji!</h4>
        <p className="text-muted">Here's what's happening at Deloitte today.</p>

        <Row className="mt-4 g-3">

          <Col md={4}>
            <StatCard
              title="Unread Announcements"
              value="2"
              subtitle="New since last login"
              icon="bi-bell"
            />
          </Col>

          <Col md={4}>
            <StatCard
              title="Pending Feedback"
              value="0"
              subtitle="Awaiting response"
              icon="bi-envelope"
            />
          </Col>

          <Col md={4}>
            <StatCard
              title="Resources"
              value="24"
              subtitle="Available to you"
              icon="bi-gear"
            />
          </Col>

        </Row>
      </Card>

      <Row className="g-4 mt-4">

        <Col md={4}>
          <Card className="p-4 shadow-sm border-0">
            <i className="bi bi-bell-fill fs-3 text-primary"></i>
            <h5 className="fw-bold mt-3">Latest Announcement</h5>
            <p className="text-muted">Stay updated with company news.</p>
            <a href="/" className="text-primary fw-semibold">View All</a>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow-sm border-0">
            <i className="bi bi-flag-fill fs-3 text-warning"></i>
            <h5 className="fw-bold mt-3">Submit Feedback</h5>
            <p className="text-muted">Share your feedback easily.</p>
            <a href="/" className="text-primary fw-semibold">Share Feedback</a>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 shadow-sm border-0">
            <i className="bi bi-people-fill fs-3 text-info"></i>
            <h5 className="fw-bold mt-3">Access Resources</h5>
            <p className="text-muted">Tools, documents & training material.</p>
            <a href="/" className="text-primary fw-semibold">Browse Resources</a>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}
