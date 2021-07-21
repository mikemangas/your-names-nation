import { Switch, Route } from "react-router-dom";
import Gender from "../pages/Gender";
import Nation from "../pages/Nation";
import Age from "../pages/Age";
import home from "../pages/Home";
import Home from "../pages/Home";

// import Home from "./pages/Home";
// import Age from "./pages/Age";
// import Nation from "./pages/Nation";
// import Gender from "./pages/Gender";

export default function Main() {
  return (
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
  );
}
