function rollTheDice(){
	alert("Player 1 roll the dice!");
	let die1 = Math.floor( Math.random() * 4 ) +1;
	let die2 = Math.floor( Math.random() * 6 ) +1;
	let die3 = Math.floor( Math.random() * 8 ) +1;
	let die4 = Math.floor( Math.random() * 10 ) +1;
	let die5 = Math.floor( Math.random() * 12 ) +1;
	let die6 = Math.floor( Math.random() * 20 ) +1;
	let diceTotal = [die1, die2, die3, die4, die5, die6];
	let player1Counter = 0;
	let player2Counter = 0;
	let player3Counter = 0;
	alert('You rolled ' + diceTotal);
}

rollTheDice()