import { useState } from "react";

export default function Feedback() {
  const [topic, setTopic] = useState("");
  const [details, setDetails] = useState("");
  const [option, setOption] = useState("self");

  const feedbackList = [
    {
      id: 1,
      title: "Workplace Environment",
      date: "22-11-2025",
      desc: "The new office layout is great, but the meeting rooms are noisy."
    },
    {
      id: 2,
      title: "Technology Resources",
      date: "22-11-2025",
      desc: "Requesting more monitors for the design team."
    }
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        
        {/* LEFT FORM */}
        <div className="col-md-6 mb-4">
          <h3>Submit Feedback</h3>
          <div className="card p-4 shadow-sm">

            <h5>Share Your Thoughts</h5>
            <p className="text-muted">
              We value your input to improve our workplace
            </p>

            {/* TOPIC */}
            <label className="mt-2 fw-bold">Feedback Topics</label>
            <input 
              className="form-control"
              placeholder="What is your feedback about?"
              value={topic}
              onChange={(e)=>setTopic(e.target.value)}
            />

            {/* DETAILS */}
            <label className="mt-3 fw-bold">Detailed Feedback</label>
            <textarea
              className="form-control"
              rows={4}
              placeholder="Please provide detailed information..."
              value={details}
              onChange={(e)=>setDetails(e.target.value)}
            ></textarea>

            {/* RADIO OPTIONS */}
            <label className="mt-3 fw-bold">Submission Options</label>

            <div className="form-check">
              <input 
                className="form-check-input"
                type="radio"
                name="submitOption"
                checked={option === "self"}
                onChange={()=>setOption("self")}
              />
              <label className="form-check-label">Submit as myself</label>
            </div>

            <div className="form-check">
              <input 
                className="form-check-input"
                type="radio"
                name="submitOption"
                checked={option === "anonymous"}
                onChange={()=>setOption("anonymous")}
              />
              <label className="form-check-label">
                Submit anonymously
              </label>
            </div>

            <button className="btn btn-primary mt-4 w-100">
              Submit Feedback
            </button>
          </div>
        </div>

        {/* RIGHT LIST */}
        <div className="col-md-6 mb-4">
          <h3>Your Feedback</h3>

          {feedbackList.map((item) => (
            <div className="card p-3 mb-3 shadow-sm" key={item.id}>
              <h5 className="fw-bold">{item.title}</h5>
              <small className="text-muted">📅 {item.date}</small>
              <p className="mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
