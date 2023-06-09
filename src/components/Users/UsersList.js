import React from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = props => {
  return (
    <Card className={classes.users}>
      <div>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <div key={user.id}>
              {user.username} ({user.age} years old)
              <Button
                className={classes.delete}
                onClick={() => props.onRemoveUser(user.id)}
              >
                Delete
              </Button>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </Card>
  );
};

export default UsersList;
