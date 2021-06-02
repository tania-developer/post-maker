
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import CreatePost from './Components/CreatePost/CreatePost';
import Like from './Components/Like/Like';


function App() {
  return (
    
      
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <CreatePost/>
            </Route>
            <Route path="/likePost">
              <Like></Like>
            </Route>
            <Route path="/dislike">
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
