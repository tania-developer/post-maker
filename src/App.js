
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  return (
    
      
      <Router>
        <Header></Header>
        <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/orders">
              <Home />
            </Route>
            <Route path="/admin">
              <Home />
            </Route>
            <Route path="/checkout">
              <Home />
            </Route>
            <Route path="/login">
              <Home />
            </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
