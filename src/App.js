import React from 'react'
import { BrowserRouter as Router, Switch, 
  Route, Routes,  Redirect,} from "react-router-dom";
import About from './frontend/About'
import Groups from './frontend/Groups';
import Landing from './frontend/Landing'

export const App = () => {
  return (
    <div classname="bg-amber-100">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/revyen" element={<About/>}/>
          <Route exact path="/grupper" element={<Groups/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
