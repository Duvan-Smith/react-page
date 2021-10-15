import '../App.css';
import SignInSide from '../Componentes/Login/SignInSide';
import SignUp from '../Componentes/Login/SignUp';
import Home from '../Componentes/Home/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
