import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypers from 'prop-types';

const Users = ( { users, loading } ) => {
  if (loading) {
     return <Spinner/>
  } else {
    return (
      <div style={userStyle}>
        {
          users.map( user => (
            <UserItem key={user.id} login={user.login} avatar_url={user.avatar_url} html_url={user.html_url}/>
          ))
        }

      </div>
    )
  }
}

Users.propTypers = {
  users: PropTypers.array.isRequired,
  loading: PropTypers.bool.isRequired
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users
