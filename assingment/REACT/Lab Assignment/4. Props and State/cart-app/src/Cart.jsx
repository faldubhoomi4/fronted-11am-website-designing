import React from "react";

function UserCard({ name, age, location }) {
  return (
    <div
      style={{
      
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        margin: "10px auto",
        boxsizing: "border-box",
      }}
    >
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

export default UserCard;