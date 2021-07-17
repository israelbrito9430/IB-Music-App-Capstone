import React from 'react';
import './Profle.scss';

function Profile(props) {
    return (    
      <div className="profile">
        <h3>Profile Data</h3>
        <div>
          <label htmlFor="firstname">Firstname</label>
          <input type="text" name="firstname" value={props.data.firstname} disabled />
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input type="text" name="lastname" value={props.data.lastname} disabled />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={props.data.email} disabled />
        </div>
        <div>
          <label htmlFor="username">User Name</label>
          <input type="text" name="username" value={props.data.username} disabled />
        </div>
      </div>
    )
}

export default Profile;
