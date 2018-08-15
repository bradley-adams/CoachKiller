import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import PickTeam from './PickTeam'
import Compare from './Compare'
import MeetThePlayers from './MeetThePlayers'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Home} />
        <Route exact path='/meettheplayers' component={MeetThePlayers} />
        <Route exact path='/pickteam' component={PickTeam} />
        <Route exact path='/compare' component={Compare} />
      </div>
    </Router>
  )
}

export default App