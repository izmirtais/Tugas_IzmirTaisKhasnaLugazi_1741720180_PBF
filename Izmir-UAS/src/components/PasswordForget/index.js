import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import './Password.css'
 
const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);
 
const INITIAL_STATE = {
  email: '',
  error: null,
};
 
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email } = this.state;
 
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { email, error } = this.state;
 
    const isInvalid = email === '';
 
    return (
      <form  id='input-forget' onSubmit={this.onSubmit}>
        <h1>Forgot Password</h1>
        <div>
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        </div>
        <div>
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>
        </div>
        <br/>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
 
const PasswordForgetLink = () => (
  <p id='p-forget'>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);
 
export default PasswordForgetPage;
 
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
 
export { PasswordForgetForm, PasswordForgetLink };