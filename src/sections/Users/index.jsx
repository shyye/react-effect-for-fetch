import { useEffect, useState } from "react";
import UserList from "./components/UsersList"

function UsersSection() {
  const [users, setUsers] = useState([])

  const getData = async () => {
    const res = await fetch('https://boolean-uk-api-server.fly.dev/shyye/contact');
    const data = await res.json();
    setUsers(data);
  }

  // Load data
  useEffect(() => {
    getData()
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UserList users={users}/>
      </div>
    </section>
  )
}

export default UsersSection
