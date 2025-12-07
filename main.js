import { initGame, playRound } from "./game_logic/game.js";



let init_game  = initGame()
let player1 = init_game.player_1
let AI  = init_game.player_2
while(player1.hand.length != 0 || AI.hand.length != 0){
    playRound(player1,AI)
}
if (player1.won_pile.length > AI.won_pile.length){
    console.log(`player: ${player1.name} won!\n`);
}
else if (AI.won_pile.length >player1.won_pile.length){
    console.log(`player; ${AI.name} won!\n`);
}
else{
    console.log(`the won pile of 2 players equal`);
}
