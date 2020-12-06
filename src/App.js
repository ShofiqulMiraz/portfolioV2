import Header from "./components/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Header}></Route>
      </Switch>
    </Router>
  );
}

export default App;
