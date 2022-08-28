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
  for (let i = 0; i<5; i++){
    let choice = answerEval(selectionArray[i]) 
    console.log(choice);
    console.log("here is parsed int");
    console.log(answerEval(selectionArray[i])[0]);
    console.log(typeof answerEval(selectionArray[i])[0]);
    for (let n = 0; n<4; n++){
      console.log("typeof scores[n]: " + typeof parseFloat(scores[n]) + " space " + parseFloat(scores[n]));
      scores[n] = scores[n] + parseFloat(answerEval(selectionArray[i])[n])
      console.log("scores n: " + scores[n])
    }
    console.log(parseFloat(answerEval(selectionArray[i])));
    scores += parseInt(answerEval(selectionArray[i]));
    console.log("Here is scores: ")
    console.log(scores);
  }
  console.log(typeof scores[0]);
  console.log(scores[0]);
  answerEval(selectionArray[1]);
  answerEval(selectionArray[2]);
  answerEval(selectionArray[3]);
  answerEval(selectionArray[4]);
}

window.addEventListener("load", formSelection)