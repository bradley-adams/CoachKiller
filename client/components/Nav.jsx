import React from 'react'
import { Link } from 'react-router-dom'

import request from 'superagent'

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      players: []
    }
  }

  componentDidMount() {
    request.get('/players')
      .then(res => {
        this.setState({
          players: res.body.players
        })
      })
  }

  render() {
    return (
      <div>
        <h1><Link className="homeTitle" to="/">Coach Killer</Link></h1>
        <Link to={`/meettheplayers`}>
          <button className="pick-button">Meet the players here</button>
        </Link>
        <Link to={`/pickteam`}>
          <button className="pick-button">Pick your team here</button>
        </Link>
      </div>
    )
  }
}

export default Nav
