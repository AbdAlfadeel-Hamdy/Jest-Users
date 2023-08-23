import { useState } from "react";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const submitFormHandler = (e) => {
    e.preventDefault();
    addUser({ name, email });
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
