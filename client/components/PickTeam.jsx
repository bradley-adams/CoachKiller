import React from 'react'

import request from 'superagent'

import {connect} from 'react-redux'
import { changePositionAction } from '../actions/positions';

class PickTeam extends React.Component{
  constructor (props){
    super(props)

    this.state = {
      players: [],
      positions: [
        { id: "one", position: "1 TightHead Prop", type: "prop"},
        { id: "two", position: "2 Hooker", type: "hooker"},
        { id: "three", position: "3 LooseHead Prop", type: "prop"},
        { id: "four", position: "4 Lock", type: "lock"},
        { id: "five", position: "5 Lock", type: "lock"},
        { id: "six", position: "6 Blindside Flanker", type: "flanker"},
        { id: "seven", position: "7 Openside Flanker", type: "flanker"},
        { id: "eight", position: "8 8-man", type: "flanker"},
        { id: "nine", position: "9 Halfback", type: "backs"},
        { id: "ten", position: "10 Flyhalf", type: "backs"},
        { id: "eleven", position: "11 Left Winger", type: "backs"},
        { id: "twelve", position: "12 Inside Center", type: "backs"},
        { id: "thirteen", position: "13 Center", type: "backs"},
        { id: "fourteen", position: "14 Right Winger", type: "backs"},
        { id: "fifteen", position: "15 Fullback", type: "backs"}
    ]
  }

  this.onSubmit=this.onSubmit.bind(this)

}


componentDidMount(){
  request.get('/players')
  .then(res => {
    this.setState({
      players: res.body.players
    })
  })
}

selectPlayer(playerId, position) {
  const {positions, players} = this.state
  const selectedPos = positions.find(pos => pos.id == position.id)
  const player = players.find(player => player.id == playerId)
  if (selectedPos) selectedPos.player = player
  this.setState({positions})
}

onSubmit(e){
  e.preventDefault()
  let notFinished = false
  this.state.positions.forEach((pos) => {
    if (!pos.player) notFinished = true
  })
    if (notFinished){
    alert("Not all positions filled!") 
    return 
  }
  this.props.dispatch(changePositionAction(this.state.positions))
  this.props.history.push("/compare")
}

  render() {
    const { positions } = this.state
    return (
      <React.Fragment>
        <h1>Coach Killer</h1>
        <form className="teambox">
          {positions.map((pos) => {
            return (<div key={pos.position} className={`${pos.id} allPlayerPos`}>
              <label className="posLabel" >{pos.position}</label>
              <br />
              <img className="blank" src={pos.player ? pos.player.profile_pic : 'Images/blank.png'} alt="Smiley face" />
              <select name={pos.type} onChange={(e) => this.selectPlayer(e.target.value, pos)}>
                <option value="null"></option>
                {this.state.players.filter(player => player.position == pos.type).map((player, i) => {
                  return <option id={player.id} key={player.id} value={player.id}>{player.name}</option>
                })
                }
              </select>
            </div>)
          })}
          <input onClick={this.onSubmit} className="submit" type="submit" value="Submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default connect()(PickTeam)
