// src/App.jsx
import NavBar from "./components/NavBar/NavBar";
import {Route,Routes} from "react-router";
import {useState} from "react";

const App = () => {

const [mailBoxes, setMailboxes] = useState([]);

  return (

<>
<NavBar />
<h1>Mailbox List</h1>
<Routes>
<Route path="/" element={<main><h1>Post Office</h1></main>} />
{/* <Route path="/mailboxes" element={<MailboxList />} />
<Route path="/new-mailbox" element={<MailboxForm />} />
<Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} /> */}
</Routes>

<ul>
  <li>Mailbox 1</li>
  <li>Mailbox 2</li>
  <li>Mailbox 3</li>
</ul>


</>
  )
};

export default App;
