import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    setUsers((users) => [...users, user]);
  };
  return (
    <div>
      <UserForm addUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
