let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count=0;

let turn0 = true;
const winPattern =
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
    ];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("buttonclick");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        
        box.disabled = true;
        let isWinner=checkWinner();
        count++;
        if(count===9 && !isWinner)
        {
            gameDraw();
        }
    })
})

const gameDraw=() =>
{
    disableBoxes();
    msg.innerText="Game is a draw";
    msgContainer.classList.remove("hide");
}


const checkWinner = () => {

    for (let pattern of winPattern) {
        let positionVal1 = boxes[pattern[0]].innerText;
        let positionVal2 = boxes[pattern[1]].innerText;
        let positionVal3 = boxes[pattern[2]].innerText;

        if (positionVal1 != '' && positionVal2 != '' && positionVal3 != '') {
            if (positionVal1 == positionVal2 && positionVal2 == positionVal3) {
                showWinner(positionVal1)
                return true;

            }

        }

    }

}

const showWinner = (winnerr) => {

    msg.innerText = `Congratulations Winner is ${winnerr}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText=" ";
    }
}

const resetGame=()=>
{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;

}


newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);