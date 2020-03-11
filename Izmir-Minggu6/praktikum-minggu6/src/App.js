import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
  // useParams,
  // useRouteMatch
} from "react-router-dom";

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton/>

        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
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
      Welcome!{ " " }
      <button
      onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>You are not logged in. </p>
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

function PublicPage(){
  return <h3>Public</h3>;
}

function ProtectedPage(){
  return <h3>Private</h3>;
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
      <p>You mus log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

// function Dashboard(){
//   return(
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
