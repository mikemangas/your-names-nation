import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Age from "./pages/Age";
import Nation from "./pages/Nation";
import Gender from "./pages/Gender";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <nav className="App__navigation">
          <p>Logo</p>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/gender">
            <Gender />
          </Route>
          <Route path="/nation">
            <Nation />
          </Route>
          <Route path="/age">
            <Age />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <footer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/age">Age</NavLink>
        <NavLink to="/nation">Nation</NavLink>
        <NavLink to="/gender">Gender</NavLink>
      </footer>
    </div>
  );
}

export default App;
