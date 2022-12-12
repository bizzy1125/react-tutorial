function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'bizzy',
      email: 'bizzy@gmail.com'
    },
    {
      id: 2,
      username: 'admin',
      email: 'admin@example.com'
    },
    {
      id: 3,
      username: 'tester',
      email: 'tester@example.com'
    }
  ];
  return (
    <div>
      {users.map(user => (
        // user 객체에 참조할 만한 index가 있을 때
        <User user={user} key={user.id}/>
        // user 객체에 참조할 만한 index가 없을 때
        // <User user={user} key={index} />
      ))}
    </div>
  );
}

export default UserList;