import React from 'react'
import {Link} from 'react-router-dom'

import request from 'superagent'

class Home extends React.Component{
  constructor (props){
    super(props)

this.state = {
  players: []
  }
}

componentDidMount(){
  request.get('/players')
  .then(res => {
    this.setState({
      players: res.body.players
    })
  })
}

render(){
    return (
      <div>
        <Link to={`/pickteam`}>
          <button className="pick-button">Pick your team here</button>
        </Link>
        <div className="grid-container">
          {this.state.players.map(players =>{
            return <div key={players.name}>
          <div className="grid-item">
            <p>{players.name}</p>
            <p>{players.team}</p>
            <img src={players.profile_pic}/>
          </div>
          </div>
          })}
        </div>
      </div>
    )
  }
}

export default Home
