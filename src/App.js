import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ReadScreen from "./screens/ReadScreen";
import SettingsScreen from "./screens/SettingsScreen";
import WriteScreen from "./screens/WriteScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    // <div>
    //   <LoginScreen />
    // </div>
    <Router>
      <div>
        <Switch>
          <Route exact path='/login'>
            <LoginScreen />
          </Route>
          <Route exact path='/signup'>
            <SignUpScreen />
          </Route>
          <Route exact path='/read'>
            <ReadScreen />
          </Route>
          <Route exact path='/write'>
            <WriteScreen />
          </Route>
          <Route exact path='/profile'>
            <ProfileScreen />
          </Route>
          <Route exact path='/settings'>
            <SettingsScreen />
          </Route>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
