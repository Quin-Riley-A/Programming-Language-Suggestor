function formSelection(){
  let form = document.querySelector("form");
  form.addEventListener("submit", formEval);
}



function formEval(event){
  event.preventDefault();
  let form = document.querySelector("form");
  const radio1Selection1 = document.querySelector("input[name='radioQuestion1']:checked").value;
  const radio1Selection2 = document.querySelector("input[name='radioQuestion2']:checked").value;
  const radio1Selection3 = document.querySelector("input[name='radioQuestion3']:checked").value;
  const radio1Selection4 = document.querySelector("input[name='radioQuestion4']:checked").value;
  const radio1Selection5 = document.querySelector("input[name='radioQuestion5']:checked").value;
  let selectionArray = [radio1Selection1, radio1Selection2, radio1Selection3, radio1Selection4, radio1Selection5];
  let scores = [];
  answerEval(selectionArray[0]);
  answerEval(selectionArray[1]);
  answerEval(selectionArray[2]);
  answerEval(selectionArray[3]);
  answerEval(selectionArray[4]);
}

window.addEventListener("load", formSelection)