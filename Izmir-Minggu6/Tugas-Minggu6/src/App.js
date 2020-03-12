import React from 'react';
// import logo from './logo.svg';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="background"/>
        <AuthButton/>

        <ul>
          <li>
            <Link to="/beranda">Beranda</Link>
          </li>
          <li>
            <Link to="/produk">Produk</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/beranda">
            <BerandaPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <PrivateRoute path="/produk">
            <ProtectedPage/>
          </PrivateRoute>
          <PrivateRoute path="/private">
            <ProtectedPage/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Selamat Datang! lanjutkan dengan login terlebih dahulu{ " " }
      <button
      onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>Silahkan login terlebih dahulu. </p>
  );
}

function PrivateRoute({children, ...rest}) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function BerandaPage(){
  return (
    <div>
      <br/>
      <h1 align="center">Makanan Sehat Kita</h1>
      <p align="center">Mulailah dari menjaga pola makan sehat, hidup aman! Terimakasih telah mengunjungi website sehat kami!</p>
    </div>
  );
}

function ProtectedPage(){
  return (
    <div>
      <br/>
      <h1 align="center">Produk</h1><br/>
      <p align="center"> Ini adalah makanan yang dianjurkan dalam menjaga pola hidup sehat.</p>
      <div><br/><br/>
    </div>
    </div>
  );
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let {from} = location.state || { from: { pathname: "/"} };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}


export default App;
