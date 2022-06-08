let player = {
  name: "Evil guy",
  number: 218, 
  height: "5'10",
  gamesPlayed: [1, 2, 3, 5, 6, 7, 8, 9, 10],
  play(){
    console.log("Little kid music")
  }
}

console.log(player.height)
console.log(player.gamesPlayed[3])
console.log(player["height"])

player.play()