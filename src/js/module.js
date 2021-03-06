const ui = {
		gameModeSelect: document.getElementById('gameModeSelect'),
		resetGame: document.getElementById('resetGame'),
		human: {
			gameArea: document.getElementById('humanGameBoard'),
			optionsArea: document.getElementById('humanOptions'),
			choiceDisplayArea: document.getElementById('humanChoice'),
			options: {
				rock: document.getElementById('rock'),
				paper: document.getElementById('paper'),
				scissors: document.getElementById('scissors')
			}
		},
		playerOne: {
			gameArea: document.getElementById('gameBoard1'),
			choiceDisplayArea: document.getElementById('playerOneChoice')
		},
		playerTwo: {
			gameArea: document.getElementById('gameBoard2'),
			choiceDisplayArea: document.getElementById('playerTwoChoice')
		},
		winner: {
			human: document.getElementById('humanWon'),
			playerOne: document.getElementById('playerOneWon'),
			playerTwo: document.getElementById('playerTwoWon'),
			none: document.getElementById('draw')
		}
	},

	values = {
		human: 'human',
		computer: 'computer',
		options: {
			rock: {
				name: 'Rock',
				id: 1
			},
			paper: {
				name: 'Paper',
				id: 2
			},
			scissors: {
				name: 'Scissors',
				id: 3
			}
		}
	};

let humanPlaying = false,
	firstPlayersChoice = '',
	secondPlayersChoice = '';

export default function initHandlers(){
	ui.gameModeSelect.onchange = setGameMode;
	ui.resetGame.onclick = resetGame;
}

function resetGame(){
	humanPlaying = false;
	firstPlayersChoice = '';
	secondPlayersChoice = '';

	ui.human.gameArea.style.display = 'none';
	ui.human.optionsArea.style.display = 'block';

	ui.playerOne.gameArea.style.display = 'none';
	ui.playerTwo.gameArea.style.display = 'none';

	ui.human.choiceDisplayArea.innerHTML = '';
	ui.playerOne.choiceDisplayArea.innerHTML = '';
	ui.playerTwo.choiceDisplayArea.innerHTML = '';

	ui.winner.human.style.display = 'none';
	ui.winner.playerOne.style.display = 'none';
	ui.winner.playerTwo.style.display = 'none';
	ui.winner.none.style.display = 'none';

	ui.gameModeSelect.value = '';
	ui.gameModeSelect.removeAttribute('disabled');
}

function setGameMode(){
	let gameMode = ui.gameModeSelect.options[ui.gameModeSelect.selectedIndex].value;

	startGame(gameMode);
}

function startGame(mode){
	ui.gameModeSelect.disabled = 'disabled';

	switch(mode){
		case values.human:
			humanPlaying = true;
			getHumanPlayersTurn();
			break;
		case values.computer:
			setPlayerOnesTurn();
			setTimeout(setPlayerTwosTurn, 1000);
			break;
		default:
			break;
	}
}

function getHumanPlayersTurn(){
	initHumanEventHandlers();
	showHumanGameArea();
}

function showHumanGameArea(){
	ui.human.gameArea.style.display = 'block';
}

function initHumanEventHandlers(){
	ui.human.options.rock.onclick = setHumanSelection;
	ui.human.options.paper.onclick = setHumanSelection;
	ui.human.options.scissors.onclick = setHumanSelection;
}

function setHumanSelection(e){
	switch(e.target.id){
		case values.options.rock.name.toLowerCase():
			firstPlayersChoice = values.options.rock.id;
			ui.human.choiceDisplayArea.innerHTML = values.options.rock.name;
			break;
		case values.options.paper.name.toLowerCase():
			firstPlayersChoice = values.options.paper.id;
			ui.human.choiceDisplayArea.innerHTML = values.options.paper.name;
			break;
		case values.options.scissors.name.toLowerCase():
			firstPlayersChoice = values.options.scissors.id;
			ui.human.choiceDisplayArea.innerHTML = values.options.scissors.name;
			break;
		default:
			break;
	}

	humansChoiceMade();
}

function humansChoiceMade(){
	ui.human.optionsArea.style.display = 'none';

	setPlayerTwosTurn();
}

function setPlayerOnesTurn(){
	firstPlayersChoice = getRandomChoice();

	switch(firstPlayersChoice){
		case values.options.rock.id:
			ui.playerOne.choiceDisplayArea.innerHTML = values.options.rock.name;
			break;
		case values.options.paper.id:
			ui.playerOne.choiceDisplayArea.innerHTML = values.options.paper.name;
			break;
		case values.options.scissors.id:
			ui.playerOne.choiceDisplayArea.innerHTML = values.options.scissors.name;
			break;
		default:
			break;
	}

	ui.playerOne.gameArea.style.display = 'block';
}

function setPlayerTwosTurn(){
	secondPlayersChoice = getRandomChoice();

	switch(secondPlayersChoice){
		case values.options.rock.id:
			ui.playerTwo.choiceDisplayArea.innerHTML = values.options.rock.name;
			break;
		case values.options.paper.id:
			ui.playerTwo.choiceDisplayArea.innerHTML = values.options.paper.name;
			break;
		case values.options.scissors.id:
			ui.playerTwo.choiceDisplayArea.innerHTML = values.options.scissors.name;
			break;
		default:
			break;
	}

	ui.playerTwo.gameArea.style.display = 'block';

	gamePlayed();
}

function getRandomChoice(){
	let randomNumber = Math.random() * Object.keys(values.options).length;

	return Math.ceil(randomNumber);
}

function gamePlayed(){
	let playerOneWon = false,
		playerTwoWon = false;

	switch(firstPlayersChoice){
		case values.options.rock.id:
			switch(secondPlayersChoice){
				case values.options.rock.id:
					break;
				case values.options.paper.id:
					playerTwoWon = true;
					break;
				case values.options.scissors.id:
					playerOneWon = true;
					break;
			}
			break;
		case values.options.paper.id:
			switch(secondPlayersChoice){
				case values.options.rock.id:
					playerOneWon = true;
					break;
				case values.options.paper.id:
					break;
				case values.options.scissors.id:
					playerTwoWon = true;
					break;
			}
			break;
		case values.options.scissors.id:
			switch(secondPlayersChoice){
				case values.options.rock.id:
					playerTwoWon = true;
					break;
				case values.options.paper.id:
					playerOneWon = true;
					break;
				case values.options.scissors.id:
					break;
			}
			break;
		default:
			break;
	}

	displayWinner(playerOneWon, playerTwoWon);
}

function displayWinner(playerOneWon, playerTwoWon){
	if(playerOneWon){
		if(humanPlaying){
			ui.winner.human.style.display = 'block';
		} else {
			ui.winner.playerOne.style.display = 'block';
		}
	} else if (playerTwoWon) {
		ui.winner.playerTwo.style.display = 'block';
	} else {
		ui.winner.none.style.display = 'block';
	}
}
