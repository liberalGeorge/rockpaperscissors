const ui = {
		gameModeSelect: document.getElementById('gameModeSelect'),
		humanPlayerBoard: document.getElementById('humanGameBoard'),
		playerOneBoard: document.getElementById('gameBoard1'),
		playerTwoBoard: document.getElementById('gameBoard2'),
		humanBoardOptions: document.getElementById('humanOptions')
	},
	values = {
		human: 'human',
		computer: 'computer'
	};

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
			break;
		default:
			break;
	}

	//put delay in here

	setPlayerTwosTurn();
}

function getHumanPlayersTurn(){

}

function setPlayerOnesTurn(){}

function setPlayerTwosTurn(){}

