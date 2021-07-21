import "./App.css";
import { NavLink } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <nav className="App__navigation">
          <NavLink to="/">Logo</NavLink>
        </nav>
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
