// src/App.jsx
import NavBar from "./components/NavBar/NavBar";
import {Route,Routes} from "react-router";

const App = () => {
  return (

<>
<NavBar />
<h1>Mailbox List</h1>

<ul>
  <li>Mailbox 1</li>
  <li>Mailbox 2</li>
  <li>Mailbox 3</li>
</ul>


</>
  )
};

export default App;
