const initialPositions = [
    { id: "one", position: "1 TightHead Prop", type: "prop" , player: null},
    { id: "two", position: "2 Hooker", type: "hooker" , player: null},
    { id: "three", position: "3 LooseHead Prop", type: "prop" , player: null},
    { id: "four", position: "4 Lock", type: "lock", player: null},
    { id: "five", position: "5 Lock", type: "lock", player: null},
    { id: "six", position: "6 Blindside Flanker", type: "flanker", player: null},
    { id: "seven", position: "7 Openside Flanker", type: "flanker", player: null},
    { id: "eight", position: "8 8-man", type: "flanker", player: null},
    { id: "nine", position: "9 Halfback", type: "backs", player: null},
    { id: "ten", position: "10 Flyhalf", type: "backs", player: null},
    { id: "eleven", position: "11 Left Winger", type: "backs", player: null},
    { id: "twelve", position: "12 Inside Center", type: "backs", player: null},
    { id: "thirteen", position: "13 Center", type: "backs", player: null},
    { id: "fourteen", position: "14 Right Winger", type: "backs", player: null},
    { id: "fifteen", position: "15 Fullback", type: "backs", player: null}
  ]
  function reducer (state = initialPositions, action) {
    switch (action.type) {
      case 'CHANGE_POSITIONS':
        return action.positions
      default:
        return state
    }
  }
  
  export default reducer