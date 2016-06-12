const ui = {
		gameModeSelect: document.getElementById('gameModeSelect'),
		humanPlayerBoard: document.getElementById('humanGameBoard'),
		playerOneBoard: document.getElementById('gameBoard1'),
		playerTwoBoard: document.getElementById('gameBoard2'),
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
		}
	},

	values = {
		human: 'human',
		computer: 'computer',
		options: {
			rock: {
				name: 'rock',
				id: 1
			},
			paper: {
				name: 'paper',
				id: 2
			},
			scissors: {
				name: 'scissors',
				id: 3
			}
		}
	};

let firstPlayersChoice = '',
	secondPlayersChoice = '';

export default function initHandlers(){
	ui.gameModeSelect.onchange = setGameMode;
}

function setGameMode(){
	let gameMode = ui.gameModeSelect.options[ui.gameModeSelect.selectedIndex].value;

	startGame(gameMode);
}

function startGame(mode){
	//disable drop down here

	switch(mode){
		case values.human:
			getHumanPlayersTurn();
			break;
		case values.computer:
			setPlayerOnesTurn();

			//put delay in here

			setPlayerTwosTurn();
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
		case values.options.rock.name:
			firstPlayersChoice = values.options.rock.id;
			break;
		case values.options.paper.name:
			firstPlayersChoice = values.options.paper.id;
			break;
		case values.options.scissors.name:
			firstPlayersChoice = values.options.scissors.id;
			break;
		default:
			break;
	}

	humansChoiceMade();
}

function humansChoiceMade(){
	ui.human.optionsArea.style.display = 'none';

	//put delay here

	setPlayerTwosTurn();
}

function setPlayerOnesTurn(){
	firstPlayersChoice = getRandomChoice();
}

function setPlayerTwosTurn(){
	secondPlayersChoice = getRandomChoice();

	gamePlayed();
}

function getRandomChoice(){
	let randomNumber = Math.random() * Object.keys(values.options).length;

	return Math.ceil(randomNumber);
}

function gamePlayed(){
	console.error('This isnt right, but will stop the linting error');
	let foo = firstPlayersChoice > secondPlayersChoice;
}
