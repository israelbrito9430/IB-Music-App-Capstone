
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage"
import UserPage from "./pages/UserPage/UserPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import MusicPage from "./pages/MusicPage/MusicPage"
import LoginPage from "./pages/LoginPage/LoginPage"


 function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/music" component={MusicPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/user" component={UserPage} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;