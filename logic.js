const choice = document.querySelectorAll(".choice");

const rock= ["lezard", "scissor"];
const paper= ["rock", "spock"];
const scissor= ["lezard", "paper"];
const lizard= ["paper", "spock"];
const spock= ["rock", "scissor"];
const possibilityList = ['rock', 'paper', 'scissor','lezard','spock'];

const scoreME = document.querySelector("h2#score_cptME");
const scoreIA = document.querySelector("h2#score_cptIA");
let cptScoreME = 0;
let cptScoreIA = 0;
const displayText = document.querySelector('.displayText');
const msgText = document.querySelector('.displayText > h2');
const btnText = document.querySelector("#btnMessage");

const sectionGame = document.querySelector(".Section_game");
let reset = false;

const btnRules = document.getElementById('btnRules');
const ModalRules = document.getElementById('myModal');
const myModalContent = document.querySelector('.modalContent');


 

Array.from(choice).forEach(function(element){

    // Upgrade logic for next time: 

    // const allWinners = {
    //     scissors: {paper: 'cuts', lizard: 'decapitates'},
    //     paper: {rock: 'covers', spock: 'disproves'},
    //     rock: {lizard: 'crushes', scissors: 'crushes'},
    //     lizard: {spock: 'poisons', paper: 'eats'},
    //     spock: {scissors: 'smashes', rock: 'vaporizes'},
    //   };
    // if (AIchoice in _SHAPES[MEchoice]) {
    //     msgText = 'Player Wins: ';
    //     msgText += (MEchoice + ' ' + _SHAPES[MEchoice][AIchoice] +
    //         ' ' + AIchoice + '.');




    element.addEventListener("click", ()=>{

        let rand = possibilityList[Math.floor(Math.random() * possibilityList.length)];
        let myChoice;

        switch(element.id){
            case ("rock"):
                myChoice  = rock;
                break;
            case ("paper"):
                myChoice = paper;
                break;
            case ("scissor"):
                myChoice = scissor;
                break;
            case ("lizard"):
                myChoice = lizard;
                break;
            case ("spock"):
                myChoice = spock;
                break;
        }

        if (element.id === rand){
            Game(element.id, rand, null)
        }
        else{
            Game(myChoice, rand, element.id);
        }

    });

});

function Game(meChoice, iaChoice, clickedElement){

    if (meChoice === iaChoice) {
        msgText.innerHTML = "Exaco !";
    }
    else{
        if (meChoice.includes(iaChoice)){
            cptScoreME += 1;
            scoreME.innerHTML = cptScoreME;
            msgText.innerHTML = `<strong>you win:</strong><h6>${clickedElement} beat ${iaChoice}`; 
            }
        else {
            cptScoreIA += 1;
            scoreIA.innerHTML = cptScoreIA; 
            msgText.innerHTML = `<strong>you loose:</strong><h6>${iaChoice} beat ${clickedElement}</h3> ` ;
        }
    }

    sectionGame.classList.add("disabledDiv");

    if (cptScoreME >= 5 || cptScoreIA >= 5)
    {
        btnText.innerHTML = "play again";
        reset = true;
    }
    else{
        btnText.innerHTML = "contiue"
    }
    displayText.style.visibility = "visible";

    btnText.addEventListener("click", ()=>{
        ResetGame(reset);
    });
}

function ResetGame(param){
 
    if (param){
                scoreME.innerHTML = 0;
                scoreIA.innerHTML = 0;
                cptScoreME = 0;
                cptScoreIA = 0;
    }
    
    reset = false;
    displayText.style.visibility = "hidden"; 
    sectionGame.classList.remove("disabledDiv");
}


btnRules.addEventListener('click',()=>{
    ModalRules.style.display = "block";
});
 

window.onclick = function(event) {
    if (event.target == myModalContent || event.target == ModalRules) {
        ModalRules.style.display = "none";
    }
  } 