import React from 'react'
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import { BrowserRouter as Router, Route} from "react-router-dom"

import "../css/App.css"



function App() {
  return (
    <Router>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </Router>
  )
}

export default App;
