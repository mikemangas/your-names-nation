import { Switch, Route } from "react-router-dom";

export default function Header() {
  return (
    <header className="App__header">
      <Switch>
        <Route path="/gender">
          <h1>What is your Gender?</h1>
        </Route>
        <Route path="/nation">
          <h1>What is your Nation?</h1>
        </Route>
        <Route path="/age">
          <h1>What is your Age?</h1>
        </Route>
        <Route path="/">
          <h1>WHO - IS - YOUR - NAME</h1>
        </Route>
      </Switch>
    </header>
  );
}
