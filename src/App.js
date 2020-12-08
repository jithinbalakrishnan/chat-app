
import React, { useState } from 'react';
import ChatRoom from './ChatRoom/ChatRoom';
import Profile from './Profile/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(props) {

  const [userData, setUserData] = useState({});

  const handleUserData = (data) => {
    setUserData(data);
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          {userData.authenticated &&
              <Route exact path="/chat-room" render= {() => <ChatRoom  userData = {userData}/>} />
           }
           <Route exact path="/profile" render= {() => <Profile  handleUserData = {handleUserData}/> } />
           <Route  path="/" render= {() => <Profile  handleUserData = {handleUserData}/> } />
        </Switch>
      </Router>  
    </div>
  );
};

export default App;
