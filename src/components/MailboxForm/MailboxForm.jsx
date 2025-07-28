import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // stop default submit
    addBox({ boxOwner, boxSize });
    navigate("/mailboxes");
  };
  return (
    <div className="container">
        
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder:</label>
        <input
          id="boxOwner"
          type="text"
          placeholder="Boxholder name"
          value={boxOwner}
          onChange={(event) => setBoxOwner(event.target.value)}
        ></input>
        <label htmlFor="size">Select a box size:</label>
        <select
          id="boxSize"
          value={boxSize}
          onChange={(event) => setBoxSize(event.target.value)}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
<button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MailboxForm;
