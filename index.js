function startGame(){
	let players = [];
	let turnCount = 1
	for(let i = 0; i < 3; i++){
		let playerName = prompt("Please enter your name.");
		let player = {name: playerName, active: true, score: 0};
		players.push(player);
	}

	for(let i = 0; i < players.length; i++){
		rollTheDice(players[i]);


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
	let diceTotal = [die1, die2, die3, die4, die5, die6];
	playTheGame(diceTotal);
}

function playTheGame(diceTotal){
	let min = Math.min.apply(null,diceTotal);
	let index = diceTotal.indexOf(3);
	let lowNumber = diceTotal.indexOf(min);
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

startGame();