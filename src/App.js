import React from "react";
import "./App.scss";
//import Expander from "./Expander";
//import Counter from "./Counter";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Gallery from "./Gallery";
import AmountControl from "./AmountControl";



class App extends React.Component {
  render() {
    return (
      <Router>
      
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/" class="nav-link">Home</Link>
              </li>
              <li class="nav-item active">
                <Link to="/users/" class="nav-link">users</Link >
              </li>
              <li class="nav-item active">
                <Link to="/gallery/" class="nav-link">gallery</Link>
              </li>
              <li class="nav-item active">
                <Link to="/AmountControl/" class="nav-link">AmountControl</Link>
              </li>
            </ul>
            </div>
            
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/gallery/" component={Gallery} />
          <Route path="/users/" component={Users} />
          <Route path="/AmountControl/" component={AmountControl} />
      </Router>
     
    );
  }
}

export default App;
