import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Albums from "../Albums/Albums";
import { apiResponse } from "../../utils/apiResponse";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiResponse("https://jsonplaceholder.typicode.com/users", setUsers);
  }, []);

  return (
    <div className="wrapper">
      <div className="users">
        <h2>Список користувачів</h2>

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              id_{user.id} {user.name}
              <Link to={`/users/${user.id}/albums`}>
                <br></br>
                <button>Альбоми користувача</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Routes>
        <Route path="/users/:userId/albums" element={<Albums />}></Route>
      </Routes>
    </div>
  );
}
export default Users;
