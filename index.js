function startGame(){
	let players = [];
	for(let i = 0; i < 3; i++){
		let playerName = prompt("Please enter your name.");
		let player = {name: playerName, active: true, score: 0};
		players.push(player);
	}

	for(let i = 0; i < players.length; i++){
		rollTheDice(players[i]);
	}
}

function rollTheDice(player){
	alert(player.name + " roll the dice!");
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
	for(let i = 0; i < diceTotal.length; i++){
		if(diceTotal.includes(3)){
			player.score += 0;
			console.log("Current total is "  + player.score);
			diceTotal.splice(index, 1);
			alert("You rolled a 3. " + " Current total is " + player.score);
		}
		else{
			player.score += min;
			console.log("Current total is " + player.score);
			alert("Your lowest die is " + min + " Current total is " + player.score);
			diceTotal.splice(lowNumber, 1);
		}
	}

	}

startGame();