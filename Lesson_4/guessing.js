function submitData() {
  // retrieve form data -- min and max
  let min = Number(guessForm.min.value);
  let max = Number(guessForm.max.value);
  //console.log(min);
  //console.log(max);
  //console.log(typeof min);
  if (min == "" || max == "") {
    let value = "Both fields should be entered";
    let color = "red";
    updateDOM(value, color);
    return false;
  }
  if (min > max) {
    let value = "Min is biggerr than max";
    let color = "red";
    updateDOM(value, color);
    return false;
  }

  numberGuessGame(min, max);
  return false;
}

function updateDOM(value, color) {
  document.getElementById("output").innerHTML = value;
  document.getElementById("output").style.color = color;
}

function numberGuessGame(min, max) {
  let num = Math.ceil(randomNumber(min, max));
  //console.log("between " + min + " and " + max);
  console.log("the number is " + num);
  let message = "a number between  " + min + " and " + max;
  let guess;
  let count = 1;
  do {
    guess = parseInt(prompt(message));
    if (guess < num) {
      message = " too low ";
      guess = parseInt(prompt(message));
      count = count + 1;
    }
    if (guess > num) {
      message = " too high ";
      guess = parseInt(prompt(message));
      count = count + 1;
    }
    if (isNaN(guess)) {
      break;
    }
  } while (guess !== num);
  if (guess == num) {
    updateDOM(
      "Congratulation!!  " +
        guess +
        " is correct, it took you " +
        count +
        "times",
      "green"
    );
  }
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
