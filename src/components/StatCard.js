import React from "react";
import { Card } from "react-bootstrap";

export default function StatCard({ title, value, subtitle, icon }) {
  return (
    <Card className="p-3 shadow-sm border-0">
      <div className="d-flex justify-content-between">
        <div>
          <h6 className="fw-semibold">{title}</h6>
          <h3 className="fw-bold">{value}</h3>
          <span className="text-muted small">{subtitle}</span>
        </div>
        <div>
          <i className={`bi ${icon} fs-3 text-muted`} />
        </div>
      </div>
    </Card>
  );
}
