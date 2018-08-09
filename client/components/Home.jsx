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
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home
