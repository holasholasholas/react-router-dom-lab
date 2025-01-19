const MailboxList = ({ mailbox = [] }) => {
    return (
      <>
        <h2>MailBoxes</h2>
        <div id='mailboxes'>
          {mailbox.map((item) => (
            <div className="mailbox" key={item.id}>
              <ul>
                <li>{item.id}</li>
              </ul>
              <p>Box Owner: {item.boxOwner}</p>
              <p>Box Size: {item.boxSize}</p>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default MailboxList;