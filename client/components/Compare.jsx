import React from 'react'

import request from 'superagent'

import { connect } from 'react-redux'
import { changePositionAction } from '../actions/positions';

class Compare extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      spots: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      players: [],
      score: 0,
      positions: props.positions || [],
      // positions: [{player:"Anton Sales"}, 
      // {player:"Codie Taylor"}, 
      // {player:"Owen Franks"}, 
      // {player:"Samuel Whitelock"}, 
      // {player:"Scott Barrett"}, 
      // {player:"Shannon Frizell"}, 
      // {player:"Ardie Savea"}, 
      // {player:"Luke Whitelock"}, 
      // {player:"Aaron Smith"},
      // {player:"Damian McKenzie"}, 
      // {player:"Rieko Ioane"}, 
      // {player:"Sonny Bill Williams"}, 
      // {player:"Jack Goodhue"}, 
      // {player:"Waisake Naholo"}, 
      // {player:"Bradley Adams"}],

      coach: [{ player: "Joe Moody" },
      { player: "Codie Taylor" },
      { player: "Owen Franks" },
      { player: "Samuel Whitelock" },
      { player: "Scott Barrett" },
      { player: "Shannon Frizell" },
      { player: "Ardie Savea" },
      { player: "Luke Whitelock" },
      { player: "Aaron Smith" },
      { player: "Damian McKenzie" },
      { player: "Rieko Ioane" },
      { player: "Sonny Bill Williams" },
      { player: "Jack Goodhue" },
      { player: "Waisake Naholo" },
      { player: "Ben Smith" }]
    }

    this.createScore = this.createScore.bind(this)
    // this.isMatch = this.isMatch.bind(this)

  }

  componentDidMount() {
    this.createScore()
  }

  // isMatch(position, i) {
  //   console.log(this.state.coach[i].player)
  //   if (position.player.name !== this.state.coach[i].player)
  //     return "<--False-->"
  // }

  createScore() {
    const score = this.state.positions.reduce((total, selectedPlayer, i) => {
      return (selectedPlayer.player.name == this.state.coach[i].player)
        ? total + 1
        : total
    }, 0)

    this.setState({
      score
    })
  }

  // componentWillReceiveProps(newProps){
  //   console.log("hi")
  //   this.setState({positions:newProps.positions})
  // }

  render() {
    console.log(this.state.positions)
    console.log(this.state.positions[0].id)
    return (
      <div>

        <div>
          <h1>Coach Killer</h1>
          <h3 className="teamScore">Team Score: {this.state.score}</h3>
        </div>

        <div className="compareteam">
          {this.state.spots.map((spot, i) => {
            return <div key={spot} className="playercompare">

              <p className="coachplayercompare">{this.state.coach[i].player}</p>

              {this.state.coach[i].player == this.state.positions[i].player.name
                ? <p className="compareresult">Correct</p>
                : <p>Wrong</p>}

              <p className="selectedplayercompare">{this.state.positions[i].player.name}</p>

            </div>
          })}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    positions: state.positions
  }
}
export default connect(mapStateToProps)(Compare) 