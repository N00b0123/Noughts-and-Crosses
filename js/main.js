import { CheckWin, CheckGameState } from "./verifyWin.js";

let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let gameContainer = document.querySelector("#container");
let copyMessage = document.querySelector("#copy");

let secondPlayer;

let player1 = 0;
let player2 = 0;
let gameState = 0;

StartGameButton();
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener("click", function(){
    
        let el = CheckPlayer(player1, player2);
        gameState = CheckGameState();
        if(gameState == 0){
            if(this.childNodes.length == 0){

                let cloneEl = el.cloneNode(true);
                this.appendChild(cloneEl);
            
                if(player1 == player2){
                    player1++;
                    CheckWin(boxes);
                    if(secondPlayer == "ai-player"){
                        DumbAi();
                        player2++;
                        
                    } else{
                        player2++;
                    }        
                    CheckWin(boxes);
                }
            }
        }
    });
}

function StartGameButton(){
    for(let i = 0; i< buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            secondPlayer = this.getAttribute("id");

            for(let j = 0; j< buttons.length; j++){
                buttons[j].style.display = "none";
            }

            setTimeout(function(){
                gameContainer.classList.remove("hide");
                copyMessage.classList.remove("hide");
            }, 500);

        });
    }
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

export function RestartGame(){
    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll(".box div");
    for(let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

function DumbAi(){
    let cloneO = o.cloneNode(true);
    let counter = 0;
    let filled = 0;

    for(let i =0; i<boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5);

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        } else{
            filled++
        }
    }
    if(counter == 0 && filled < 9){
        DumbAi();
    }
}