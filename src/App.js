import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <nav className="App__navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/hobbies">Hobbies</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/hobbies">
            <Hobbies />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
