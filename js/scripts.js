//UI Logic
//Listens for form submission
function formSelection() {
  let form = document.querySelector("form");
  form.addEventListener("submit", formEval);
}
//UI Logic
function hidePreviousResults() {
  document.querySelector("div#python").setAttribute('class', 'hidden');
  document.querySelector("div#cPlusPlus").setAttribute('class', 'hidden');
  document.querySelector("div#javascript").setAttribute('class', 'hidden');
  document.querySelector("div#ruby").setAttribute('class', 'hidden');
}

//Business Logic
//Parses each radio option to the score it will add to total
function answerEval(answerValue) {
  switch (answerValue) {
    case 1:
      return [1.15, 0, 0, 0];
    case 2:
      return [0, 1.1, 0, 0];
    case 3:
      return [0, 0, 1.05, 0];
    case 4:
      return [0, 0, 0, 1];
    default:
      return "error";
  }
  //will take values from form array and return respective affinity score for each language
  //languages will be arbitrarily weighted for how intuitive or easy I've found their syntax
}

//Business Logic
//Iterates through question responses and totals scores for each language
function scoreTally(startScore, answerArray) {
  for (let i = 0; i<5; i++){
    for (let n = 0; n<4; n++){
      if (answerEval(answerArray.at(i)).at(n) === "error") {
        window.alert("The survey has encountered an error, please send your current quiz inputs to the developer for further analysis. \nThank you for your patience!");
      } else{
      startScore[n] = parseFloat(startScore.at(n)) + parseFloat(answerEval(answerArray.at(i)).at(n));
      }
    }
  }
  return startScore;
}

//Business Logic
function results(tally) {
  let max = Math.max(tally[0], tally[1], tally[2], tally[3]);
  switch (tally.indexOf(max)) {
    case 0:
      console.log("Results 1");
      document.querySelector("div#python").removeAttribute("class");
      break;
    case 1:
      console.log("Results 2");
      document.querySelector("div#cPlusPlus").removeAttribute("class");
      break;
    case 2:
      console.log("Results 3");
      document.querySelector("div#javascript").removeAttribute("class");
      break;
    case 3:
      console.log("Results 4");
      document.querySelector("div#ruby").removeAttribute("class");
      break;
    default:
      console.log("An error with the program has been encountered, please send notes on your form results to the developer");
  }
}

//UI Logic
function formEval(event) {
  event.preventDefault();
  hidePreviousResults();
  let form = document.querySelector("form");
  const radioSelection1 = parseInt((document.querySelector("input[name='radioQuestion1']:checked").value).charAt(8));
  const radioSelection2 = parseInt((document.querySelector("input[name='radioQuestion2']:checked").value).charAt(8));
  const radioSelection3 = parseInt((document.querySelector("input[name='radioQuestion3']:checked").value).charAt(8));
  const radioSelection4 = parseInt((document.querySelector("input[name='radioQuestion4']:checked").value).charAt(8));
  const radioSelection5 = parseInt((document.querySelector("input[name='radioQuestion5']:checked").value).charAt(8));
  let selectionArray = [radioSelection1, radioSelection2, radioSelection3, radioSelection4, radioSelection5];
  let scores = [0.0, 0.0, 0.0, 0.0];
  scores = scoreTally(scores, selectionArray);
  console.log (typeof scores[0]);
  console.log("final scores: " + scores);
  results(scores);
}

window.addEventListener("load", formSelection)