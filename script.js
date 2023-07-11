var numberToFind = -1; // Assigning -1 as an initial value
var attempts = 0;

function refresh() {
    // Generate a new random number between 0 and 100 (inclusive)
    attempts =0;
    numberToFind = Math.floor(Math.random() * 101);
    console.log(numberToFind);
}

function verifyNumber() {
    var betElement = document.getElementById('bet');

    if (!betElement || !betElement.value) {
        alert('❌ Aposta inválida');
        return;
    }

    var bet = parseInt(betElement.value);

    if (bet > 100 || bet < 0 || isNaN(bet)) {
        alert('❌ Aposta inválida');
        return;
    }

    attempts++;

    if (bet > numberToFind) {
        alert('🚨 O número é MENOR');
    } else if (bet < numberToFind) {
        alert('🚨 O número é MAIOR');
    } else {
        alert('✔️PARABÉNS, você acertou em ' + attempts + ' tentativas!');
        refresh(); // Start a new game after the user guesses the correct number
        attempts = 0; // Reset the attempts counter
    }
}

refresh(); // Generate the initial random number

