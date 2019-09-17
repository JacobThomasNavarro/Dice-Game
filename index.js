// let players = [];

// function StarGame(){
// 	for (let i = 0; i < 4; i++){
// 		let player = {Name: "player" + i, playerCounter: 0};
// 		players.push(player);
// 	}
// }

let player1Name = prompt("Player 1 enter your name.");
let player2Name = prompt("Player 2 enter your name.");
let player3Name = prompt("Player 3 enter your name.");

let player1Counter = 0;
let player2Counter = 0;
let player3Counter = 0;

function rollTheDice(){
	alert(player1Name + " roll the dice!");
	let die1 = Math.floor(Math.random() * 4) +1;
	let die2 = Math.floor(Math.random() * 6) +1;
	let die3 = Math.floor(Math.random() * 8) +1;
	let die4 = Math.floor(Math.random() * 10) +1;
	let die5 = Math.floor(Math.random() * 12) +1;
	let die6 = Math.floor(Math.random() * 20) +1;
	let diceTotal = [die1, die2, die3, die4, die5, die6];
	let min = Math.min.apply(null,diceTotal);
	let index = diceTotal.indexOf(3);
	let lowNumber = diceTotal.indexOf(min);
	for(i = 0; i < diceTotal.length; i++){
		if(diceTotal.includes(3)){
			player1Counter += 0;
			console.log("Current total is "  + player1Counter);
			diceTotal.splice(index, 1);
			alert("You rolled a 3. " + " Current total is " + player1Counter);
		}
		else{
			player1Counter = player1Counter + min;
			console.log("Current total is " + player1Counter);
			alert("Your lowest die is " + min + " Current total is " + player1Counter);
			diceTotal.splice(lowNumber, 1);
		}
	rollTheDice();

	}		
}


rollTheDice();