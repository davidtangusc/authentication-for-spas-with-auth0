import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Navigation />

        <div className="mt-3">
          <Switch>
            <ProtectedRoute path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
