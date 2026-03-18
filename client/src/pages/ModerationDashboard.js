import React from "react";

function ModerationDashboard() {
  const contributions = [
    { id: 1, name: "New Shelter", status: "Pending" },
    { id: 2, name: "Medical Camp", status: "Pending" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contribution Moderation Dashboard</h2>
      <ul>
        {contributions.map((item) => (
          <li key={item.id}>
            {item.name} - {item.status}
            <button style={{ marginLeft: "10px" }}>Approve</button>
            <button style={{ marginLeft: "5px" }}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModerationDashboard;
