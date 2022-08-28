//UI Logic
function formSelection() {
  let form = document.querySelector("form");
  form.addEventListener("submit", formEval);
}

//Business Logic
function answerEval(answerValue) {
//  console.log("enter function");
//  console.log(answerValue);
  switch (answerValue) {
    case 1:
//      console.log("1");
      return [1.15, 0, 0, 0];
    case 2:
//      console.log("2");
      return [0, 1.1, 0, 0];
    case 3:
//      console.log("3");
      return [0, 0, 1.05, 0];
    case 4:
//      console.log("4");
      return [0, 0, 0, 1];
  }
  //will take values from form array and return respective affinity score for each language
  //languages will be arbitrarily weighted for how intuitive or easy I've found their syntax
}

//Business Logic
function scoreTally(startScore, answerArray) {
  for (let i = 0; i<5; i++){
    for (let n = 0; n<4; n++){
      startScore[n] = parseFloat(startScore.at(n)) + parseFloat(answerEval(answerArray.at(i)).at(n));
      console.log("typeof scores.at(n): " + typeof startScore.at(n) + " space " + parseFloat(startScore.at(n)));
      console.log("scores n: " + startScore.at(n));
      console.log(startScore);
    }
    console.log("Here is scores: ");
    console.log(startScore);
  }
  return startScore;
}

  //Business Logic
  function results(tally) {
    let max = Math.max(tally[0], tally[1], tally[2], tally[3]);
    switch (tally.indexOf(max)) {
      case 0:
        console.log("Results 1");
        break;
      case 1:
        console.log("Results 2");
        break;
      case 2:
        console.log("Results 3");
        break;
      case 4:
        console.log("Results 4");
        break;
      }
  }

//UI Logic
function formEval(event) {
  event.preventDefault();
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