function TableView({ users }) {
  function handleClick(evt) {
    var userId = evt.currentTarget
      .closest("[data-userid]")
      .getAttribute("data-userid");
    // do something with `userId`
  }
  return (
    <table>
      {users.map((user) => (
        <tr key={user.id} data-userid={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button onClick={handleClick}>Edit</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
