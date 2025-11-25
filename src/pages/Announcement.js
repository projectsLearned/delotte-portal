import { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";

export default function Announcement() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  // Full list of announcements with detailed modal data
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Annual Performance Reviews",
      date: "22-11-2025",
      dept: "HR Department",
      desc: "Annual performance reviews will begin next month...",
      full: `
The Annual Performance Review cycle for 2025 will begin next month. All employees are required to participate in the full review process. This year’s evaluation includes the following steps:

1. Self-Assessment  
You must complete your self-evaluation through the Employee Portal by December 2nd.  
This should include accomplishments, challenges, project outcomes, and expected goals for 2026.

2. Manager Review Meeting  
Schedule a one-on-one meeting with your manager between December 5th–20th.  
This includes discussion on performance, strengths, improvement areas, and future opportunities.

3. Goal Setting for 2026  
Finalize performance goals and development plans for the upcoming year during your manager meeting.

4. Final Submission  
Managers will submit the final evaluation in the HR portal by December 28th.  
Late submissions will affect annual planning.

Notes:  
- Employees who joined after October 2025 will follow a shortened template.  
- Probationary employees require an extended review.

For support, contact the HR Department.
`,
      read: false,
    },

    {
      id: 2,
      title: "New Security Protocols",
      date: "2023-10-10",
      dept: "IT Security",
      desc: "New cybersecurity protocols have been introduced...",
      full: `
The IT Security team has introduced updated cybersecurity protocols to strengthen protection against rising security threats. These changes take effect immediately.

Key Updates:

1. Mandatory Security Training  
All employees must complete the updated cybersecurity training within 30 days.  
This covers phishing awareness, safe browsing, email security, and device handling.

2. Multi-Factor Authentication (MFA)  
MFA is now required for all internal systems, VPN, and company email.  
Employees must register two authentication methods.

3. Updated Password Policy  
- Minimum 12 characters  
- Must include uppercase, lowercase, numbers, and symbols  
- Password expires every 60 days  

4. Device Security  
All company laptops must be upgraded to the latest OS version.  
Unauthorized USB devices are not allowed.

Non-compliance may result in restricted system access.

For support, contact IT Security.
`,
      read: false,
    },

    {
      id: 3,
      title: "Office Holiday Closure",
      date: "2023-10-10",
      dept: "Operations",
      desc: "Office will be closed for the annual holiday break...",
      full: `
The office will be closed for the annual holiday break from December 24th to January 1st.  
Regular operations will resume on January 2nd.

Details:

1. Support & Operations  
Critical support teams will be available on a limited schedule.  
Non-critical requests will be handled after reopening.

2. Payroll & Finance  
Salary will process as usual.  
Reimbursements submitted after December 20th will be cleared in January.

3. Facilities & Access  
Buildings will be locked.  
Only approved employees with access cards can enter for essential tasks.

4. Project Deliverables  
Ensure all deliverables are completed before the break.  
No deployments or reviews will take place during closure.

Have a safe and enjoyable break!
`,
      read: false,
    },

    {
      id: 4,
      title: "Employee Wellness Program",
      date: "2023-09-28",
      dept: "HR Department",
      desc: "New employee wellness program launching next month...",
      full: `
We are launching the Employee Wellness Program next month to improve physical and mental well-being.

Program Highlights:

1. Free Fitness Classes  
Yoga, aerobics, Zumba, and strength training will be available weekly.

2. Mental Health Support  
Confidential counseling sessions and webinars will be available to all employees.

3. Wellness Reward System  
Earn points by completing step challenges, health tracking, and wellness activities.

4. Nutrition & Lifestyle Coaching  
Monthly workshops on stress management, sleep routines, and nutrition.

5. Annual Wellness Checkups  
Bi-annual free health screening for all employees.

For more details, contact the HR Wellness Team.
`,
      read: false,
    },
  ]);

  // Mark as read handler
  const markAsRead = (id) => {
    setAnnouncements((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, read: true } : item
      )
    );
  };

  return (
    <Container className="mt-4">
      <h2 style={{ marginBottom: "30px", color: "#1d2d5c" }}>
        Company Announcement
      </h2>

      {announcements.map((item) => (
        <div
          key={item.id}
          style={{
            border: "2px solid #4A82F0",
            borderRadius: "10px",
            padding: "10px",
            marginBottom: "20px",
            opacity: item.read ? 0.6 : 1,
          }}
        >
          <div
            className="card p-3 shadow-sm border-0"
            style={{ borderLeft: "6px solid #4A82F0" }}
          >
            <h5 className="fw-bold">
              {item.title}{" "}
              {item.read && <span className="text-success ms-2">✔ Read</span>}
            </h5>

            <div
              className="d-flex align-items-center text-muted mb-2"
              style={{ fontSize: "14px" }}
            >
              <span className="me-3">
                <i className="bi bi-calendar-event"></i> {item.date}
              </span>
              <span className="me-2"><i className="bi bi-person"></i></span>
              <span>{item.dept}</span>
            </div>

            <p className="text-secondary" style={{ fontSize: "15px" }}>
              {item.desc}
            </p>

            <div>
              <button
                className="btn btn-light border me-2"
                disabled={item.read}
                onClick={() => markAsRead(item.id)}
              >
                {item.read ? "Read" : "Mark as Read"}
              </button>

              <button
                className="btn btn-link text-decoration-none"
                onClick={() => {
                  setSelected(item);
                  setShow(true);
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selected?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: "pre-line" }}>
          {selected?.full}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
