import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import LB from "./pages/lb";
import Details from "./components/Details/Details";
import ContactUs from "./components/ContactUs/index";
import KickStart from "./pages/kickstart";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/lb2223" component={LB} exact />
        <Route path="/lb/:id" component={Details} exact />
        <Route path="/contact-us" component={ContactUs} exact />
        <Route path="/kickstart-oc" component={KickStart} exact />
      </Switch>
    </Router>
  );
}

export default App;
