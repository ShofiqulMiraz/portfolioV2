import Header from "./components/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Header}></Route>
      </Switch>
    </Router>
  );
}

export default App;
