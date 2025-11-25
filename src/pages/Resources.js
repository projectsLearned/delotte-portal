import { Container, Row, Col } from "react-bootstrap";

export default function Resources() {
  const resources = [
    {
      icon: "bi-shield-lock",
      title: "Security Guidelines",
      desc: "Company policies and best practices for information security",
      linkText: "Access Document",
    },
    {
      icon: "bi-heart-pulse",
      title: "Wellness Program",
      desc: "Health and wellness resources for employees and their families",
      linkText: "Learn More",
    },
    {
      icon: "bi-people",
      title: "Team Collaboration",
      desc: "Tools and guidelines for effective team communication",
      linkText: "View Resources",
    },
    {
      icon: "bi-award",
      title: "Professional Development",
      desc: "Training programs and career advancement opportunities",
      linkText: "Explore Options",
    },
    {
      icon: "bi-calendar-check",
      title: "Time Off Policies",
      desc: "Vacation, sick leave, and other time off guidelines",
      linkText: "Read Policies",
    },
    {
      icon: "bi-file-earmark-text",
      title: "Document Templates",
      desc: "Standard templates for reports, presentations, and communications",
      linkText: "Download Templates",
    },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4" style={{ color: "#1d2d5c" }}>
        Employee Resources
      </h2>

      <Row>
        {resources.map((item, index) => (
          <Col md={4} className="mb-4" key={index}>
            <div
              className="p-3 shadow-sm bg-white"
              style={{
                borderRadius: "10px",
                border: "1px solid #e1e1e1",
                cursor: "pointer",
              }}
            >
              <i className={`bi ${item.icon} fs-3 mb-3`}></i>

              <h5 className="fw-bold">{item.title}</h5>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                {item.desc}
              </p>

              <button className="btn btn-link p-0" style={{ color: "#4A0EF0" }}>
                {item.linkText}
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
