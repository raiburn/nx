import Documents from "../layouts/Documents";
import Trash from "../layouts/Trash";
import NotFound from "../layouts/NotFound";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/Documents' component={Documents} />
        <Route exact path='/registrarse' component={Trash}/>
        <Route path='*' component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
