const UserList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default UserList;
