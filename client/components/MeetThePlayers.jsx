import React from 'react'

import request from 'superagent'

class MeetThePlayers extends React.Component {
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
        <h1>Meet The Players:</h1>
        <div>
          <div className="grid-container">
            {this.state.players.map(players => {
              return <div key={players.name}>
                <div className="grid-item">
                  <p>{players.name}</p>
                  <p>{players.team}</p>
                  <img className="homePagePics" src={players.profile_pic} />
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default MeetThePlayers