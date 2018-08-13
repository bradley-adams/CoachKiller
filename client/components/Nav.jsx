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
      <div className="navbox">
        <h1><Link className="homeTitle" to="/">Coach Killer</Link></h1>
        <div className="buttonbox">
          <Link to={`/meettheplayers`}>
            <button className="navbutton">Meet the players here</button>
          </Link>
          <Link to={`/pickteam`}>
            <button className="navbutton">Pick your team here</button>
          </Link>
        </div>
        <img className="navlogo" src="images/ablogo.png"/>
      </div>
    )
  }
}

export default Nav
