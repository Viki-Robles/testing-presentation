import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch('/rest/users')
      .then((response) => response.json())
      .then((getUsers) => {
        setUsers(getUsers);
        setLoad(true)
      })
  }, [])

    return (
      <div className="App">
        <h1>Users</h1>
        <div className="container">
          {
            users.map(({ name, age, country }) => ( 
              <p key={name.id}>
                  {name} ({age}), from {country}
              </p>
          ))
            
          }
        </div>
      </div>
  );
        

}

export default App;
