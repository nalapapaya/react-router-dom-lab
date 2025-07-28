import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    //returns first mailbox that matches string in props
    (mailbox) => mailbox._id === Number(mailboxId)
  );
   if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <>
      <h2>Mailbox #{selectedBox._id}</h2>
      <h4>Details</h4>
      <p>Boxholder: {selectedBox.boxOwner}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
