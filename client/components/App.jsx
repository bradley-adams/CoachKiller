import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import PickTeam from './PickTeam'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Coach Killer</h1>
        <Route exact path='/' component={Home} />
        <Route path='/pickteam' component={PickTeam} />
      </div>
    </Router>
  )
}

export default App
