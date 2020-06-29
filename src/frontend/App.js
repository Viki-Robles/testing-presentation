import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/rest/users")
      .then((response) => response.json())
      .then(getUsers => {
        setUsers(getUsers);
      })
  });

  return (
    <>
      <h1>Users</h1>
      <div className="container">
        {
          users.map(({ name, age, country }) => <p key={name}>
            Name: {name},
            Age: {age},
            Country: {country}
          </p>
          )
        }
      </div>
    </>
  );
}

export default App;


















