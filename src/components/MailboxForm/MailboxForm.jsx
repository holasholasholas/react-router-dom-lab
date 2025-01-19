// MailboxForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router";

const MailboxForm = ({ addMailBox }) => {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    _id: 1,
    boxSize: "Small",
    boxOwner: "Alex",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addMailBox(formInput);
    setFormInput({
      _id: formInput._id + 1,
      boxSize: "Small",
      boxOwner: "",
    });
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormInput({ ...formInput, [target.name]: target.value });
  };

  return (
    <>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a boxholder:</label>
        <input
          type="text"
          name="boxOwner"
          placeholder="Boxholder Name"
          value={formInput.boxOwner}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Box Size:</label>
        <select
          name="boxSize"
          value={formInput.boxSize}
          onChange={handleChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
