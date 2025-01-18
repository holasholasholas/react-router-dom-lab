import {  Link } from 'react-router';

const NavBar = () => {
    return (
      <nav>
        <ul className="NavBar">
            <Link to='/'>Home</Link>
            <Link to='/mailboxes'> MailboxList</Link>
            <Link to= 'new-mailbox'> Mailbox</Link>
        </ul>
      </nav>
    );
  };

  export default NavBar;
