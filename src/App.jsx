import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";

// src/App.jsx

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const addBox = (newMailboxData) => {
    const newMailbox = {
      _id: mailboxes.length + 1, //for increment
      ...newMailboxData, //for boxOwner & boxSize
    };
    setMailboxes((prevState) => [...prevState, newMailbox]);
  };
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />
      </Routes>
    </div>
  );
};

export default App;
