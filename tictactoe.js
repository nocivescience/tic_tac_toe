const status_display=document.querySelector('.notification');
const gameContainer=document.querySelector('.game-container');
const restart_button=document.querySelector('.restart');
let game_state=['','','','','','','','',''];
let gameActive=true;
let currentPlayer='O';
const win_message=()=>`Ganaste!`;
const draw_message=()=>`Empate!`;
const game_over_message=()=>`Game Over!`;
const winnings=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
//listener
listeners();
function listeners(){
    gameContainer.addEventListener('click',handleClickCellClick);
    restart_button.addEventListener('click',handleRestarGame);
}
function handleClickCellClick(e){
    const clickCell=e.target;
    if(clickCell.classList.contains('cell')){
        const clickedCellIndex=Array.from(clickCell.parentNode.children).indexOf(clickCell);
        if(game_state[clickedCellIndex]!==''||!gameActive){
            return false;
        }
        handleResultValidation();
    }
}
function handleResultValidation(){
    let roundWon=true;
    for(let i=0;i<winnings.length;i++){
        const winCondintion=winnings[i];
        let position1=game_state[winCondintion[0]];
        let position2=game_state[winCondintion[1]];
        let position3=game_state[winCondintion[2]];
        if(position1===''||position2===''||position3===''){
            roundWon=false;
            continue;
        }
        if(position1===position2&&position2===position3){
            roundWon=true;
            break;
        }
    }
    if(roundWon){
        handleStatusDisplay(win_message());
        gameActive=false;
        return;
    }
    let roundDraw=!game_state.includes('');
    if(roundDraw){
        handleStatusDisplay(draw_message());
        gameActive=false;
        return;
    }
    handlePlayerChange();
}
function handlePlayerChange(){
    currentPlayer=currentPlayer==='X'?'O':'X';
    handleStatusDisplay(`Turno de ${currentPlayer}`);
}
function handleStatusDisplay(message){
    status_display.innerText=message;
}
function main(){
    handleStatusDisplay(`Turno de ${currentPlayer}`);
    listeners();
}
function handleRestarGame(){
    gameActive=true;
    currentPlayer='X';
    restartGameState();
    handleStatusDisplay(`Turno de ${currentPlayer}`);
    document.querySelectorAll('.cell').forEach(cell=>{
        cell.innerText='';
    })
}
function restartGameState(){
    let i=game_state.length;
    while(i--){
        game_state[i]='';
    }
}