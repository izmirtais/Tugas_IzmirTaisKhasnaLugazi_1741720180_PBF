import React from 'react';

import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
// import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h3>Account: {authUser.email}</h3><br/>
        <div>
        <PasswordForgetForm />
        </div>
        {/* <div>
        <PasswordChangeForm />
        </div> */}
      </div>
    )}
  </AuthUserContext.Consumer>
);



const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);

