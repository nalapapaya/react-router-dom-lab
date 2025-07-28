import React from "react";
import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      {mailboxes.map((mailbox) => (
        <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
          <h3 className="mail-box">Mailbox {mailbox._id}</h3>
        </Link>
      ))}
    </>
  );
};

export default MailboxList;
