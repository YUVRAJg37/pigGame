'use strict';

const player0EL = document.querySelector(".player--0")
const player1EL = document.querySelector(".player--1")
const score0EL = document.querySelector("#score--0")
const score1EL = document.querySelector("#score--1")
const current0EL = document.querySelector("#current--0")
const current1EL = document.querySelector("#current--1")
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

let isPlaying = true;
let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const begin = function ()
{
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    diceEl.classList.add('hidden');
    isPlaying = true;
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
}

begin();

const changePlayer = function ()
{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}



btnRoll.addEventListener('click', function ()
{
    if (isPlaying === true)
    {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${ dice }.png`
    
        if (dice !== 1)
        {
            currentScore += dice;
            document.getElementById(`current--${ activePlayer }`).textContent = currentScore
        }
        else
        {
            changePlayer();
        }
    }
})

btnHold.addEventListener('click', function ()
{
    if (isPlaying === true)
    {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${ activePlayer }`).textContent = score[activePlayer];

        if (score[activePlayer] >= 100)
        {
            isPlaying = false;
            document.querySelector(`.player--${ activePlayer }`).classList.add('player--winner');
            document.querySelector(`.player--${ activePlayer }`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        }
        else
        {
            changePlayer();
        }
    }

})

btnNew.addEventListener('click', function ()
{

    document.querySelector(`.player--${ activePlayer }`).classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
    
    begin();
})