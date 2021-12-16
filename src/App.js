import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import UpdateUser from "./pages/UpdateUser";
import About from "./pages/About";
import UserInfo from "./pages/UserInfo";
import Header from './component/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import Welcome from './pages/Welcome';
import Logout from "./pages/Logout";
import NotFound from './pages/NotFound';
  
function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer/>
       <Header/>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Welcome" component={Welcome} />
          <Route exact path="/Logout" component={Logout} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/UpdateUser" component={UpdateUser} />          
          <Route exact path="/UpdateUser/:id" component={UpdateUser} />
          <Route exact path="/about" component={About} />
          <Route exact path="/UserInfo/:id" component={UserInfo} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
