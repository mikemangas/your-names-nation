import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="Footer">
      <NavLink to="/">Age</NavLink>
      <NavLink to="/nation">Nation</NavLink>
      <NavLink to="/gender">Gender</NavLink>
    </footer>
  );
}
