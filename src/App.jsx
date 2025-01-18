// src/App.jsx
import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import {Route,Routes} from "react-router";
import {useState} from "react";

const App = () => {

const [mailBoxes, setMailboxes] = useState([]);

  return (

<>
<NavBar />
<Routes>
<Route path="/" element={<main><h1>Post Office</h1></main>} />
<Route path="/new-mailbox" element={<MailboxForm />} />
{/* <Route path="/mailboxes" element={<MailboxList />} />
<Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} /> */}
</Routes>




</>
  )
};

export default App;
