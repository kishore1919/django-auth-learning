import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Landing/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
