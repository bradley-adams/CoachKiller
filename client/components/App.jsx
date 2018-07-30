import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import PickTeam from './PickTeam'
import Compare from './Compare'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/pickteam' component={PickTeam} />
        <Route path='/compare' component={Compare} />
      </div>
    </Router>
  )
}

export default App