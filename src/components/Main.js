import { Switch, Route } from "react-router-dom";
import Gender from "../pages/Gender";
import Nation from "../pages/Nation";
import Age from "../pages/Age";

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
        <Route path="/">
          <Age />
        </Route>
      </Switch>
    </main>
  );
}
