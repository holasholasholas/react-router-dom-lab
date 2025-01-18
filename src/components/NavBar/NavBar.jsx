import {  Link } from 'react-router';

const NavBar = () => {
    return (
      <nav>
        <ul className="NavBar">
            <Link to='/'>Home</Link>
            <Link to='/mailboxes'> Mailboxes</Link>
            <Link to= '/new-mailbox'> New Mailbox</Link>
        </ul>
      </nav>
    );
  };

  export default NavBar;
