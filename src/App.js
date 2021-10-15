import './App.css';
import SignInSide from './Componentes/Login/SignInSide';
import SignUp from './Componentes/Login/SignUp';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
