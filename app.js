// JS Mini Project

let gameSeq = [];
let userSeq = [];
let btns = ['red','yellow','green','purple'];
let started = false;
let level = 0;
let highestScore = 0;
let h2 = document.querySelector('h2');
document.addEventListener('keypress',function(){
    if(started==false){
        console.log('game is started');
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add('gameFlash');
    setTimeout(function(){
        btn.classList.remove('gameFlash');
    },250);
}
function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    //console.log(randIdx);
    //console.log(randColor);
    //console.log(randBtn);
    gameSeq.push(randColor);
    gameFlash(randBtn);
    //console.log(gameSeq);
}
function checkAns(idx){
    
    if(userSeq[idx] == gameSeq[idx] ){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score is ${level-1}<br> Press any key to start again.`;
        highestScore = Math.max(highestScore, level);
        console.log(`Highest score: ${highestScore}`);
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        },250);
        reset();
    }
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',function(){
        let btn = this;
        userFlash(btn);
        userColor=this.getAttribute('id');
        userSeq.push(userColor);
        checkAns(userSeq.length-1);
    });
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}