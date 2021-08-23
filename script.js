'use strict';

const score0EL = document.querySelector("#score--0")
const score1EL = document.querySelector("#score--1")
const current0EL = document.querySelector("#current--0")
const current1EL = document.querySelector("#current--1")
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
let currentScore = 0;


score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function ()
{
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${ dice }.png`
    
    if (dice !== 1)
    {
        currentScore += dice;
        current0EL.textContent = currentScore;
    }
    else
    {
        
    }

})