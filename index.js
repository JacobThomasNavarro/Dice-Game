// let players = [];

// function StarGame(){
// 	for (let i = 0; i < 4; i++){
// 		let player = {Name: "player" + i, playerCounter: 0};
// 		players.push(player);
// 	}
// }

let player1Counter = 0;
let player2Counter = 0;
let player3Counter = 0;

function rollTheDice(){
	alert("Player 1 roll the dice!");
	let die1 = Math.floor(Math.random() * 4) +1;
	let die2 = Math.floor(Math.random() * 6) +1;
	let die3 = Math.floor(Math.random() * 8) +1;
	let die4 = Math.floor(Math.random() * 10) +1;
	let die5 = Math.floor(Math.random() * 12) +1;
	let die6 = Math.floor(Math.random() * 20) +1;
	let diceTotal = [die1, die2, die3, die4, die5, die6];
	var min = Math.min.apply(null,diceTotal);
	let threeCounter = 0;
	alert("You rolled " + diceTotal);
	for(i = 0; i < diceTotal.length; i++){
		if(diceTotal.includes(3)){
			threeCounter++;
			player1Counter += 0;
			console.log("Player 1 total is "  + player1Counter);
		}
		else{
			player1Counter = player1Counter + min;
			console.log("Player 1 total is " + player1Counter);
		}
	rollTheDice();

	}		
}
	


rollTheDice();