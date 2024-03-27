let player = "x"

function play(td) {
  if(td.innerText != "") return
  td.innerText = player
  player = player == "x" ? "o" : "x"
}