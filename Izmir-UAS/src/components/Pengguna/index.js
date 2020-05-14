import React, { Component } from 'react';

import './index.css';
 
import { withFirebase } from '../Firebase';
 
class PenggunaPage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      users: [],
    };
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }
 
  componentDidMount() {
    this.setState({ loading: true });
 
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
 
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));
 
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }
 
  render() {
    const { users, loading } = this.state;
 
    return (
      <div>
        <h1>Pengguna Aktif</h1>
 
        {loading && <div>Loading ...</div>}
 
        <UserList users={users} />
      </div>
    );
  }
}
 
const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span id='span'>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <div>
        <span id='span'>
          <strong>Username:</strong> {user.username}
        </span>
        </div>
      </li>
    ))}
  </ul>
);
 
export default withFirebase(PenggunaPage);