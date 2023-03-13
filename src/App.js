import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  NavLink
} from "react-router-dom";
import React from "react";
import './App.css';

//pages
import Home from "./component/Home";
import Users from "./component/Users";
import About from "./component/About";
import Error404 from "./component/Error404";


function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active"  to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active"  to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/" exact component={Home} />

          <Route path="/about"  component={About} />
           
          <Route path="/users" component={Users} />

          <Route path="*" component={Error404} />
          
            
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
