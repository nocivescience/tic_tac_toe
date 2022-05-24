const status=document.getElementById('notification');
const gameContainer=document.querySelector('.game-container');
const game_state=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let gameActive=true;
//listener
listeners();
function listeners(){
    gameContainer.addEventListener('click',handleClickCellClick);
}
function handleClickCellClick(e){
    const clickCell=e.target;
    if(clickCell.classList.contains('cell')){
        const clickedCellIndex=Array.from(clickCell.parentNode.children).indexOf(clickCell);
        if(game_state[clickedCellIndex]!==''||!gameActive){
            return false;
        }
    }
}