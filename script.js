const boxes = document.querySelectorAll(".box");
let turnPlayer = 1;
const player = (name, sign) => {
    return {name, sign};
};
let gameboard = (() => {
    let check = (sign) => {
        if((boxes[0].innerHTML == sign && boxes[1].innerHTML == sign && boxes[2].innerHTML == sign) ||(boxes[3].innerHTML == sign && boxes[4].innerHTML == sign && boxes[5].innerHTML == sign) || (boxes[6].innerHTML == sign && boxes[7].innerHTML == sign && boxes[8].innerHTML == sign)){
            return true;
        }
        if((boxes[0].innerHTML == sign && boxes[3].innerHTML == sign && boxes[6].innerHTML == sign) ||(boxes[1].innerHTML == sign && boxes[4].innerHTML == sign && boxes[7].innerHTML == sign) || (boxes[2].innerHTML == sign && boxes[5].innerHTML == sign && boxes[8].innerHTML == sign)){
            return true;
        }
        if((boxes[0].innerHTML == sign && boxes[4].innerHTML == sign && boxes[8].innerHTML == sign) ||(boxes[2].innerHTML == sign && boxes[4].innerHTML == sign && boxes[7].innerHTML == sign)){
            return true; 
        }
    }
    return{
        check
    };
})();

let player1 = player('Carl', 'X');
let player2 = player('Sean', 'O');
let won = false;

boxes.forEach((box, i) => { 
    box.addEventListener("click", function(e){
        if(box.innerHTML != player1.sign && box.innerHTML != player2.sign && !won){
            let sign;
            if(turnPlayer == 1) sign =  player1.sign;
            else sign = player2.sign;

            box.innerHTML = boxes[i] = sign;
            won = gameboard.check(sign);
            if(!won){
                if(turnPlayer == 1) turnPlayer = 2;
                else turnPlayer = 1;
            }else{
                console.log("hei");
            }
        }
    });
});