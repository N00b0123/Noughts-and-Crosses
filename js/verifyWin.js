export function CheckWin(){

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
}

// horizontal start
function Check123(b1, b2, b3){
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length >0){

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == "x" && b2Child == "x" && b3Child == "x"){
            console.log("pimba no x 123")
        } 
        else if(b1Child == "o" && b2Child == "o" && b3Child == "o"){
            console.log("pimba no O 123")
        }
    }
}

function Check456(b4, b5, b6){
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length >0){

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
            console.log("pimba no x 456")
        } 
        else if(b4Child == "o" && b5Child == "o" && b6Child == "o"){
            console.log("pimba no O 456")
        }
    }
}

function Check789(b7, b8, b9){
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length >0){

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
            console.log("pimba no x 789")
        } 
        else if(b7Child == "o" && b8Child == "o" && b9Child == "o"){
            console.log("pimba no O 789")
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
            console.log("pimba no x 147")
        } 
        else if(b1Child == "o" && b4Child == "o" && b7Child == "o"){
            console.log("pimba no O 147")
        }
    }
}

function Check258(b2, b5, b8){
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length >0){

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;


        if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
            console.log("pimba no x 258")
        } 
        else if(b2Child == "o" && b5Child == "o" && b8Child == "o"){
            console.log("pimba no O 258")
        }
    }
}

function Check369(b3, b6, b9){
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length >0){

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;


        if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
            console.log("pimba no x 369")
        } 
        else if(b3Child == "o" && b6Child == "o" && b9Child == "o"){
            console.log("pimba no O 369")
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
            console.log("pimba no x 159")
        } 
        else if(b1Child == "o" && b5Child == "o" && b9Child == "o"){
            console.log("pimba no O 159")
        }
    }
}

function Check357(b3, b5, b7){
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length >0){

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;


        if(b3Child == "x" && b5Child == "x" && b7Child == "x"){
            console.log("pimba no x 357")
        } 
        else if(b3Child == "o" && b5Child == "o" && b7Child == "o"){
            console.log("pimba no O 357")
        }
    }
}

//end diagonal
