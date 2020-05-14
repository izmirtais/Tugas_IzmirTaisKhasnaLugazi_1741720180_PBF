import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import ArtikelPage from '../Artikel';
import PenggunaPage from '../Pengguna';
import ProfilPage from '../Profil';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <ul>
    <div>
      <Navigation />

      <hr />
      
      <Route exact path={ROUTES.LANDING} component={LandingPage} /> 
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ARTIKEL} component={ArtikelPage} />
      <Route exact path={ROUTES.PENGGUNA} component={PenggunaPage} />
      <Route exact path={ROUTES.PROFIL} component={ProfilPage} />
    </div>
    </ul>
  </Router>
);

export default withAuthentication(App);
