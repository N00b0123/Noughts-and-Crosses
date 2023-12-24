import { CheckWin } from "./verifyWin.js";

let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

let player1 = 0;
let player2 = 0;

for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){

        let el = CheckPlayer(player1, player2);

        if(this.childNodes.length == 0){

            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            if(player1 == player2){
                player1++;
            } else{
                player2++;
            }

            CheckWin(boxes);
        }
    });
}

function CheckPlayer(player1, player2){

    let el;
    if(player1 == player2){
        el = x;
    } else{
        el = o;
    }
    
    return el;
}

