import Header from "./components/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Services from "./components/services/services";
import Skills from "./components/skills/skills";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Header}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </Router>
  );
}

export default App;
