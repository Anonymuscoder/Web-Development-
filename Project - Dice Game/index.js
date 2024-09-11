function playDice(num , n){
    if(num === 1){
        document.getElementsByTagName("img")[n].setAttribute("src","./images/dice1.png");
    }
    else if(num === 2){
        document.getElementsByTagName("img")[n].setAttribute("src","./images/dice2.png");
    }
    else if(num === 3){
        document.getElementsByTagName("img")[n].setAttribute("src","./images/dice3.png");
    }
    else if(num === 4){
        document.getElementsByTagName("img")[n].setAttribute("src","./images/dice4.png");
    }
    else if(num === 5){
        document.getElementsByTagName("img")[n].setAttribute("src","./images/dice5.png");
    }
    else{
        document.getElementsByTagName("img")[n].setAttribute("src","./images/dice6.png");
    }
    }
    
    function winnerDeclare(){
        if(randomNumber1>randomNumber2){
            document.querySelector("h1").textContent="🚩 Player 1 Wins!";
        }
        else if(randomNumber1 < randomNumber2){
            document.querySelector("h1").textContent="Player 2 Wins! 🚩";
        }
        else{
            document.querySelector("h1").textContent="DRAW!";
        }
    }
    
    
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    
    playDice(randomNumber1, 0);
    playDice(randomNumber2, 1);
    winnerDeclare();
    