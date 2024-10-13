function UserListItem({ user }) {
  return (
    <li style={{ background: user.favouriteColour }}>
      <img src={user.profileImage} alt={`${user.firstName} ${user.lastName}`} />
      <h3>{`${user.firstName} ${user.lastName}`}</h3>
      <p>Email: {user.email}</p>
    </li>
  );
}

export default UserListItem;
