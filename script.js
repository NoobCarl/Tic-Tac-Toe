let form = document.getElementById("container-forms");
let container = document.getElementById("container");
let result = document.getElementById("result");
let playAgain = document.getElementById("play-again");
let change = document.getElementById("change");
let menu = document.getElementById("button-menu");
const player = (name, sign) => {
    return {name, sign};
};
let player1 ;
let player2;
let won = false;
let count = 0;
const boxes = document.querySelectorAll(".box");
let turnPlayer = 1;
let gameboard = (() => {
    let check = (sign) => {
        if((boxes[0].firstChild.innerHTML == sign && boxes[1].firstChild.innerHTML == sign && boxes[2].firstChild.innerHTML == sign) ||(boxes[3].firstChild.innerHTML == sign && boxes[4].firstChild.innerHTML == sign && boxes[5].firstChild.innerHTML == sign) || (boxes[6].firstChild.innerHTML == sign && boxes[7].firstChild.innerHTML == sign && boxes[8].firstChild.innerHTML == sign)){
            return true;
        }
        if((boxes[0].firstChild.innerHTML == sign && boxes[3].firstChild.innerHTML == sign && boxes[6].firstChild.innerHTML == sign) ||(boxes[1].firstChild.innerHTML == sign && boxes[4].firstChild.innerHTML == sign && boxes[7].firstChild.innerHTML == sign) || (boxes[2].firstChild.innerHTML == sign && boxes[5].firstChild.innerHTML == sign && boxes[8].firstChild.innerHTML == sign)){
            return true;
        }
        if((boxes[0].firstChild.innerHTML == sign && boxes[4].firstChild.innerHTML == sign && boxes[8].firstChild.innerHTML == sign) ||(boxes[2].firstChild.innerHTML == sign && boxes[4].firstChild.innerHTML == sign && boxes[6].firstChild.innerHTML == sign)){
            return true; 
        }
    }
    return{
        check
    };
})();

form.addEventListener('submit', function(e){
    e.preventDefault();
    player1 = player(document.getElementById("player1-name").value, document.getElementById("player1-sign").value, 0);
    player2 = player(document.getElementById("player2-name").value, document.getElementById("player2-sign").value, 0);
    console.log(player1.name + player1.sign);
    form.style.display = "none";
    container.style.display = "flex";
    resetGrid();
})
boxes.forEach((box, i) => { 
    box.addEventListener("click", function(e){
        if(box.firstChild.innerHTML != player1.sign && box.firstChild.innerHTML != player2.sign && !won){
            let sign;
            if(turnPlayer == 1) sign =  player1.sign;
            else sign = player2.sign;
            box.firstChild.innerHTML = boxes[i] = sign;
            box.firstChild.style.opacity = "1";
            won = gameboard.check(sign);
            if(!won && count != 9){
                if(turnPlayer == 1) turnPlayer = 2;
                else turnPlayer = 1;
                count++;
            }
            if(won){
                if(turnPlayer == 1) result.innerHTML = player1.name + " Won!";
                else result.innerHTML = player2.name + " Won!";
                result.style.display = "block";
                menu.style.display = "flex";
            }else if(count == 9){
                result.innerHTML = "Tie!";
                result.style.display = "block";
                menu.style.display = "flex";
            }
        }
    });
});
function resetGrid(){
    boxes.forEach((box, i) => {
        count = 0;
        won = false;
        boxes[i].firstChild.innerHTML = " ";
    });
    playAgain.parentElement.style.display = "none";
    result.style.display = "none";
}
playAgain.addEventListener('click', function(e){
    e.preventDefault();
    resetGrid();
})
change.addEventListener('click', function(e){
    e.preventDefault();
    form.style.display = "flex";
    container.style.display = "none";
    menu.style.display = "none";
})