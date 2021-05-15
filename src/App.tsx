import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginScreen, RegisterScreen } from "./modules/auth";
import { ConversationScreen } from "./modules/conversation";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/login' component={LoginScreen}/>
        <Route path='/register' component={RegisterScreen}/>
        <Route path='/conversation' component={ConversationScreen}/>
      </div>
    </Router>
  );
}

export default App;
