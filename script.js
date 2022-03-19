'use strict';
// {
//     'singleQuote': true,
//         'arrowParens': "avoid"
// }
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!'
// console.log(document.querySelector('.message').textContent);
// console.log( document.querySelector('.guess').value=23);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// const number = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// document.querySelector('.number').textContent = number
// document.querySelector('.check').addEventListener('click', function () {
// console.log(document.querySelector('.guess').value)
// document.querySelector('.message').textContent = '🎉 Correct Number!'
//     const guess = Number(document.querySelector('.guess').value)
//     console.log(guess, typeof guess);

//     if (!guess) {
//         document.querySelector('.message').textContent = '🚫 No number!';
//     } else if (guess === secretNumber) {
//         document.querySelector('.message').textContent = '🎉 Correct Number!';
//     } else if (guess > secretNumber) {
//         document.querySelector('.message').textContent = '📈 Too high!';
//         score--;
//         document.querySelector('.message').textContent = score;
//     } else if (guess < secretNumber) {
//         document.querySelector('.message').textContent = '📉 Too low!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
    // displayMessage('⛔ No number!')
}
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    // const guess = Number(document.querySelector('.guess').value)
    const guess = +document.querySelector('.guess').value
    console.log(guess, typeof guess);

    // // Когда нет ввода
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number!';
        // Когда догадка неверна
        displayMessage('⛔ No number')
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!')
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //When guess is too high

    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game!'
            displayMessage('💥 You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    }
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!'
    //         score--; document.querySelector('.score').textContent = 0;
    //     }

    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score--; document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!'
    //         score--; document.querySelector('.score').textContent = 0;

    //     }
    // }
})
document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    highscore = 0;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = ' Start guessing...';
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highscore;
    guess = Number(document.querySelector('.guess').value = ' ')

});
function func1() {
    let b = false;

    if (b) return console.log('b true');

    console.log('b false');
}

