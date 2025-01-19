// src/App.jsx
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import {Route,Routes} from "react-router";
import {useState} from "react";

const App = () => {

const [mailBoxes, setMailboxes] = useState([]);

const addMailBox = (newMailbox) => {
  setMailboxes([...mailBoxes, newMailbox]);
};

  return (

<>
<NavBar />
<Routes>
<Route path="/" element={<main><h1>Post Office</h1></main>} />
<Route path="/new-mailbox" element={<MailboxForm addMailBox={addMailBox} />} />
<Route path="/mailboxes" element={<MailboxList mailbox={mailBoxes} />} />
</Routes>




</>
  )
};

export default App;