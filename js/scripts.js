function formSelection(){
  let form = document.querySelector("form");
  form.addEventListener("submit", func_NAME);
}

function func_NAME(event){
  event.preventDefault();
  
}

window.addEventListener("load", formSelection)