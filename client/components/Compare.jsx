import React from 'react'

import request from 'superagent'

import {connect} from 'react-redux'
import { changePositionAction } from '../actions/positions';

class Compare extends React.Component{
  constructor (props){
    super(props)

    this.state = {
      players: [],
      score: 0,
      positions: props.positions || [],
      // positions: [{player:"Joe Moody"}, 
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
      // {player:"Ben Smith"}],
      
      coach: [{player:"Joe Moody"}, 
      {player:"Codie Taylor"}, 
      {player:"Owen Franks"}, 
      {player:"Samuel Whitelock"}, 
      {player:"Scott Barrett"}, 
      {player:"Shannon Frizell"}, 
      {player:"Ardie Savea"}, 
      {player:"Luke Whitelock"}, 
      {player:"Aaron Smith"},
      {player:"Damian McKenzie"}, 
      {player:"Rieko Ioane"}, 
      {player:"Sonny Bill Williams"}, 
      {player:"Jack Goodhue"}, 
      {player:"Waisake Naholo"}, 
      {player:"Ben Smith"}]
  }

  this.createScore=this.createScore.bind(this)
  this.isMatch=this.isMatch.bind(this)

  }

  componentDidMount() {
    this.createScore()
  }

  isMatch(position, i){
    console.log(this.state.coach[i].player)
    if (position.player.name !== this.state.coach[i].player)
    return "<--False-->"
    else return
  }

  createScore(){
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

render(){
  console.log(this.state.positions)
  return (
    <div>
      <h1>Coach Killer</h1>
      <h3 className="teamScore">Team Score: {this.state.score}</h3>
      <div className="allTeamHeadings">
        <h3 className="coachTeamHeading">Coaches Team</h3>
        <h3 className="myTeamHeading">Your Team</h3>
      </div>
      
      <div className="allPlayers">

        <div className="allCoachPlayers">
          {this.state.coach.map((coach) =>
            <div className="coachPlayers" key={coach.player}>{coach.player}</div>
          )}
        </div>

        <div className="trueFalse">
          {this.state.positions.map((position, i) =>
            <div className="matchedPlayers" key={position.player.id}> {this.isMatch(position, i)}</div>
          )}
        </div>

        <div className="allSelectedPlayers">
          {this.state.positions.map((position, i) =>
            <div className="selectedPlayers" key={position.player.id}>{position.player.name} </div>
          )}
        </div>

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