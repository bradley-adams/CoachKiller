import React from 'react'

import request from 'superagent'

class PickTeam extends React.Component{
  constructor (props){
    super(props)

this.state = {
  players: []
  }
}

render(){
  return (
    <div className="teambox">
      <form>
        <label className="looseheadProp">1 Loosehead Prop</label>
        <select name="1-Loosehead-Prop">
          <option value="Jeffery Toomaga-Allen">Jeffery Toomaga-Allen</option>
          <option value="Joe Moody">Joe Moody</option>
          <option value="Ofa Tuungafasi">Ofa Tuungafasi</option>
        </select>
        <label className="hooker">2 Hooker</label>
        <select name="2-Hooker">
          <option value="Codie Taylor">Codie Taylor</option>
          <option value="Nathan Harris">Nathan Harris</option>
          <option value="Ricky Riccitelli">Ricky Riccitelli</option>
        </select>
        <label className="tightheadProp">3 TightHead Prop</label>
        <select name="3-TightHead-Prop">
          <option value="Jeffery Toomaga-Allen">Jeffery Toomaga-Allen</option>
          <option value="Joe Moody">Joe Moody</option>
          <option value="Ofa Tuungafasi">Ofa Tuungafasi</option>
        </select>
        <br></br>
        <label className="lock4">4 Lock</label>
        <select name="4-Lock">
          <option value="Codie Taylor">Codie Taylor</option>
          <option value="Nathan Harris">Nathan Harris</option>
          <option value="Ricky Riccitelli">Ricky Riccitelli</option>
        </select>
        <label className="lock4">5 Lock</label>
        <select name="5-Lock">
          <option value="Jeffery Toomaga-Allen">Jeffery Toomaga-Allen</option>
          <option value="Joe Moody">Joe Moody</option>
          <option value="Ofa Tuungafasi">Ofa Tuungafasi</option>
        </select>
        <br></br>
        <label className="blindside">6 Blindside</label>
        <select name="6-Blindside">
          <option value="Codie Taylor">Codie Taylor</option>
          <option value="Nathan Harris">Nathan Harris</option>
          <option value="Ricky Riccitelli">Ricky Riccitelli</option>
        </select>
        <label className="openside">7 Openside</label>
        <select name="7-Openside">
          <option value="Jeffery Toomaga-Allen">Jeffery Toomaga-Allen</option>
          <option value="Joe Moody">Joe Moody</option>
          <option value="Ofa Tuungafasi">Ofa Tuungafasi</option>
        </select>
        <label className="eight">8 Eight</label>
        <select name="8-Eight">
          <option value="Codie Taylor">Codie Taylor</option>
          <option value="Nathan Harris">Nathan Harris</option>
          <option value="Ricky Riccitelli">Ricky Riccitelli</option>
        </select>
        <br></br>
        <label className="halfback">9 Halfback</label>
        <select name="9-Halfback">
          <option value="Jeffery Toomaga-Allen">Jeffery Toomaga-Allen</option>
          <option value="Joe Moody">Joe Moody</option>
          <option value="Ofa Tuungafasi">Ofa Tuungafasi</option>
        </select>
        <label className="flyhalf">10 Flyhalf</label>
        <select name="10-Flyhalf">
          <option value="Codie Taylor">Codie Taylor</option>
          <option value="Nathan Harris">Nathan Harris</option>
          <option value="Ricky Riccitelli">Ricky Riccitelli</option>
        </select>
        <label className="insideCenter">12 Inside Center</label>
        <select name="12-Internside-Center">
          <option value="Codie Taylor">Codie Taylor</option>
          <option value="Nathan Harris">Nathan Harris</option>
          <option value="Ricky Riccitelli">Ricky Riccitelli</option>
        </select>
        <label className="center">13 Center</label>
        <select name="13-Center">
          <option value="Codie Taylor">Codie Taylor</option>
          <option value="Nathan Harris">Nathan Harris</option>
          <option value="Ricky Riccitelli">Ricky Riccitelli</option>
        </select>
        <br></br>
        <label className="winger11">11 Winger</label>
        <select name="11-Winger">
          <option value="Jeffery Toomaga-Allen">Jeffery Toomaga-Allen</option>
          <option value="Joe Moody">Joe Moody</option>
          <option value="Ofa Tuungafasi">Ofa Tuungafasi</option>
        </select>
        <label className="winger14">14 Winger</label>
        <select name="14-Winger">
          <option value="Jeffery Toomaga-Allen">Jeffery Toomaga-Allen</option>
          <option value="Joe Moody">Joe Moody</option>
          <option value="Ofa Tuungafasi">Ofa Tuungafasi</option>
        </select>
        <label className="fullback">15 Fullback</label>
        <select name="15-Fullback">
          <option value="Codie Taylor">Codie Taylor</option>
          <option value="Nathan Harris">Nathan Harris</option>
          <option value="Ricky Riccitelli">Ricky Riccitelli</option>
        </select>
        <br></br>
      </form>
    </div>
  )
}
}

export default PickTeam
