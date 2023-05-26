var secretNumber = Math.floor(Math.random() * 100) + 1;
    var previousGuess;
    var previousDifference;
    // var btn = getElementById('btn');

    function checkGuess() {
      var guess = parseInt(document.getElementById('guess').value);
      var response = document.getElementById('respond');

if (!previousGuess) {
        previousGuess = guess;
        previousDifference = Math.abs(guess - secretNumber);
        response.innerText = 'Guess higher or lower.';
      } else {
        var currentDifference = Math.abs(guess - secretNumber);
        if (currentDifference < previousDifference) {
          response.innerText = 'Getting hotter.';
          if (guess < secretNumber) {
            response.innerText += ' Guess higher.';
          } else if (guess > secretNumber) {
            response.innerText += ' Guess lower.';
          }
        } else if (currentDifference > previousDifference) {
          response.innerText = 'Getting colder.';
          if (guess < secretNumber) {
            response.innerText += ' Guess higher.';
          } else if (guess > secretNumber) {
            response.innerText += ' Guess lower.';
          }
        } else {
          response.innerText = 'No change in temperature.';
        }

        previousGuess = guess;
        previousDifference = currentDifference;
      }
    }
    btn.addEventListener('click', checkGuess);