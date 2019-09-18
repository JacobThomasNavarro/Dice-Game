function startGame(){
	let players = [];
	for(let i = 0; i < 3; i++){
		let playerName = prompt("Please enter your name.");
		let player = {name: playerName, active: true, score: 0};
		players.push(player);
	}

	for(let i = 0; i < players.length; i++){
		for(let j = 0; j < 6; j++){
		let diceTotal = rollTheDice(players[i]);
		playTheGame(diceTotal, players[i]);
	}
}
}

function rollDie(numberOfSides){
	return Math.floor(Math.random() * numberOfSides) +1;
}	

function rollTheDice(player){
	alert(player.name + " roll the dice!");
	let die1 = rollDie(4);
	let die2 = rollDie(6);
	let die3 = rollDie(8);
	let die4 = rollDie(10);
	let die5 = rollDie(12);
	let die6 = rollDie(20);
	return diceTotal = [die1, die2, die3, die4, die5, die6];
	
}

function playTheGame(diceTotal, player){
	let min = Math.min.apply(null,diceTotal);
	let index = diceTotal.indexOf(3);
	let lowNumber = diceTotal.indexOf(min);
		if(diceTotal.includes(3)){
			console.log("Current total is "  + player.score);
			alert("You rolled a 3. " + " Current total is " + player.score);
		}
		else{
			player.score += min;
			console.log("Current total is " + player.score);
			alert("Your lowest die is " + min + " Current total is " + player.score);
		}
	}

function endTheGame(){
		if(players[0].score < players[1].score && players[2].score){
			console.log(players[0] + " wins with a score of " + players[0].score);
			alert(players[0] + " wins with a score of " + players[0].score);
		}
		else if(players[1].score < players[0].score && players[2].score){
			console.log(players[1] + " wins with a score of " + players[1].score);
			alert(players[1] + " wins with a score of " + players[1].score);
		}
		else{
			console.log(players[2] + " wins with a score of " + players[2].score);
			alert(players[2] + " wins with a score of " + players[2].score);
		}
	}


startGame();