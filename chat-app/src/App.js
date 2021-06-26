import React from "react"
import Join from "./components/join"
import Chat from "./components/chat"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';

const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/message" component={Chat} />
          <Route path="/" component={Join} />
        </Switch>
      </Router>
    </>
  )

}

export default App;
