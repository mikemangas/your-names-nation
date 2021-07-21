import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="App__header">
      <nav className="App__navigation">
        <NavLink to="/">Logo</NavLink>
      </nav>
    </header>
  );
}
