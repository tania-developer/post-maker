
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Like from './Components/Like/Like';
import Dislike from './Components/Dislike/Dislike';
import { createContext, useState } from 'react';
import UpdatePost from './Components/UpdatePost/UpdatePost';
import Dashboard from './Components/Dashboard/Dashboard';
export const UserContext = createContext();
export const LikeContext = createContext();
export const DislikeContext = createContext();


function App(props) {
  const [allPost, setAllPost] = useState([]);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  return ( 
    <UserContext.Provider value={[allPost, setAllPost]}>
     <LikeContext.Provider value={[likes, setLikes]}>
       <DislikeContext.Provider value={[dislikes, setDislikes]}>
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/dashboard">
               <Dashboard/>
            </Route>
            <Route path="/likePost">
              <Like/>
            </Route>
            <Route path="/dislike">
              <Dislike/>
            </Route>
            <Route path="/update/:id">
              <UpdatePost></UpdatePost>
            </Route>
            <Route path="/login">
              <Home />
            </Route>
        </Switch>
      </Router>
      </DislikeContext.Provider>
     </LikeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
