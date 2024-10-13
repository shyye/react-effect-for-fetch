import UserListItem from "./UsersListItem";

function UserList({ users }) {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
