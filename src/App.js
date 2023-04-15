import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList(prevUsersList => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), username: username, age: age },
      ];
    });
  };

  const removeUserHandler = userId => {
    setUsersList(prevState => {
      return prevState.filter(user => user.id !== userId);
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onRemoveUser={removeUserHandler} />
    </div>
  );
};

export default App;
