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
	};

let firstPlayersChoice = '';

export default function initHandlers(){
	ui.gameModeSelect.onchange = setGameMode;
}

function setGameMode(){
	let gameMode = ui.gameModeSelect.options[ui.gameModeSelect.selectedIndex].value;

	startGame(gameMode);
}

function startGame(mode){
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

	//disable drop down here
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
		case values.rock.name:
			firstPlayersChoice = values.rock.id;
			break;
		case values.paper.name:
			firstPlayersChoice = values.paper.id;
			break;
		case values.scissors.name:
			firstPlayersChoice = values.scissors.id;
			break;
		default:
			break;
	}

	console.log(firstPlayersChoice);

	humansChoiceMade();
}

function humansChoiceMade(){
	ui.human.optionsArea.style.display = 'none';

	//put delay here

	setPlayerTwosTurn();
}

function setPlayerOnesTurn(){}

function setPlayerTwosTurn(){}

