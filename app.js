let gameSeq = [];
let userSeq = [];
let btns = ["red","green","yellow","blue"];


let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let higestScore = 0;


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game starded");
        started = true;
    }
    levelUp();
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },242);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },242);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randBtn = btns[randIdx];
    let colourBtn = document.querySelector(`.${randBtn}`);
    gameSeq.push(randBtn);
    console.log(gameSeq);
    btnFlash(colourBtn);
}


function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        highest();
        h2.innerHTML = `Game over! <strong>Your total level was ${level}</strong><br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },180);
        reset();
    }
}


function btnPress(){
    let btn = this
    // console.log(this);
    userFlash(btn);
    userColour = btn.getAttribute("id");
    userSeq.push(userColour);
    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


function highest(){
    if(level>higestScore){
        higestScore = level;
        
    }
    h3.innerText = `Highest score is ${higestScore}`;
}
