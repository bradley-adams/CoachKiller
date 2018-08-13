import React from 'react'
import { Link } from 'react-router-dom'

import request from 'superagent'

class Home extends React.Component {
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
      <div class>
        <img className="homeimg" src="images/old.jpeg"/>
        <p></p>
      </div>
    )
  }
}

export default Home
