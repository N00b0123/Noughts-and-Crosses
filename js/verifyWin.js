import { RestartGame } from "./main.js";

let xWin = 0;
let oWin = 0;
let draw = 0;

let blueAudio = [];
let redAudio = [];
let drawAudio = "audio/draw.mp3"
let randomNumber = 0;

SetAudio();

let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");

export function CheckWin(boxes){

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //horizontal
    Check123(b1, b2, b3);
    Check456(b4, b5, b6);
    Check789(b7, b8, b9);

    //vertical
    Check147(b1, b4, b7);
    Check258(b2, b5, b8);
    Check369(b3, b6, b9);

    //diagonal
    Check159(b1, b5, b9);
    Check357(b3, b5, b7);

    //draw
    CheckDraw(boxes);
}

// horizontal start
function Check123(b1, b2, b3){
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length >0){

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == "x" && b2Child == "x" && b3Child == "x"){
            xWin = 1;
            VerifyWinner(xWin, oWin, draw);
            xWin = 0;
        } 
        else if(b1Child == "o" && b2Child == "o" && b3Child == "o"){
            oWin = 1;
            VerifyWinner(xWin, oWin, draw);
            oWin = 0;
        }
    }
}

function Check456(b4, b5, b6){
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length >0){

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
            xWin = 1;
            VerifyWinner(xWin, oWin, draw);
            xWin = 0;
        } 
        else if(b4Child == "o" && b5Child == "o" && b6Child == "o"){
            oWin = 1;
            VerifyWinner(xWin, oWin, draw);
            oWin = 0;
        }
    }
}

function Check789(b7, b8, b9){
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length >0){

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
            xWin = 1;
            VerifyWinner(xWin, oWin, draw);
            xWin = 0;
        } 
        else if(b7Child == "o" && b8Child == "o" && b9Child == "o"){
            oWin = 1;
            VerifyWinner(xWin, oWin, draw);
            oWin = 0;
        }
    }
}

//horizontal end
//vertical start
function Check147(b1, b4, b7){
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length >0){

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;


        if(b1Child == "x" && b4Child == "x" && b7Child == "x"){
            xWin = 1;
            VerifyWinner(xWin, oWin, draw);
            xWin = 0;
        } 
        else if(b1Child == "o" && b4Child == "o" && b7Child == "o"){
            oWin = 1;
            VerifyWinner(xWin, oWin, draw);
            oWin = 0;
        }
    }
}

function Check258(b2, b5, b8){
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length >0){

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;


        if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
            xWin = 1;
            VerifyWinner(xWin, oWin, draw);
            xWin = 0;
        } 
        else if(b2Child == "o" && b5Child == "o" && b8Child == "o"){
            oWin = 1;
            VerifyWinner(xWin, oWin, draw);
            oWin = 0;
        }
    }
}

function Check369(b3, b6, b9){
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length >0){

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;


        if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
            xWin = 1;
            VerifyWinner(xWin, oWin, draw);
            xWin = 0;
        } 
        else if(b3Child == "o" && b6Child == "o" && b9Child == "o"){
            oWin = 1;
            VerifyWinner(xWin, oWin, draw);
            oWin = 0;
        }
    }
}
//end vertical
//start diagonal

function Check159(b1, b5, b9){
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length >0){

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;


        if(b1Child == "x" && b5Child == "x" && b9Child == "x"){
            xWin = 1;
            VerifyWinner(xWin, oWin, draw);
            xWin = 0;
        } 
        else if(b1Child == "o" && b5Child == "o" && b9Child == "o"){
            oWin = 1;
            VerifyWinner(xWin, oWin, draw);
            oWin = 0;
        }
    }
}

function Check357(b3, b5, b7){
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length >0){

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;


        if(b3Child == "x" && b5Child == "x" && b7Child == "x"){
            xWin = 1;
            VerifyWinner(xWin, oWin, draw);
            xWin = 0;
        } 
        else if(b3Child == "o" && b5Child == "o" && b7Child == "o"){
            oWin = 1;
            VerifyWinner(xWin, oWin, draw);
            oWin = 0;
        }
    }
}

//end diagonal

function CheckDraw(boxes){
    let counter =0;
    for(let i =0; i<boxes.length; i++){
        if(boxes[i].childNodes[0] !== undefined){
            counter++;
        }
    }
    if(xWin == 0 && oWin == 0 && counter == 9){
        draw = 1;
        VerifyWinner(xWin, oWin, draw);
        draw = 0;
    }
}

function VerifyWinner(xWin, oWin, draw){

    RandomSound();
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let winnerMsg = '';

    if(xWin == 1){
        scoreboardX.textContent = parseInt(scoreboardX.textContent)+1;
        winnerMsg = "Red Wins";
        let audio = new Audio(redAudio[randomNumber]);
        audio.play();
    }

    else if(oWin == 1){
        scoreboardO.textContent = parseInt(scoreboardO.textContent)+1;
        winnerMsg = "Blue Wins";
        let audio = new Audio(blueAudio[randomNumber]);
        audio.play();
    }

    else if(draw == 1){
        winnerMsg = "Draw";
        let audio = new Audio(drawAudio);
        audio.play();
    }

    messageText.innerHTML = winnerMsg;
    messageContainer.classList.remove("hide");

    //restart game

    setTimeout(function(){
        messageContainer.classList.add("hide");
    },3000);

    RestartGame();
}

function RandomSound(){
    randomNumber = Math.random() * (4 - 1) + 1;
    randomNumber = parseInt(randomNumber);
    randomNumber--;
}

function SetAudio(){
    blueAudio.push("audio/blu1.mp3", "audio/blu2.mp3", "audio/blu3.mp3", "audio/blu4.mp3");
    redAudio.push("audio/red1.mp3", "audio/red2.mp3", "audio/red3.mp3", "audio/red4.mp3");
}