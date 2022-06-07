/*Add your JavaScript here*/

var gryCount = 0; // store Gryffindor score
var slyCount = 0; // store Slytherin score
var huffCount = 0; // store Hufflepuff score
var ravenCount = 0; // store Ravenclaw score

var questionCount = 0; // store the number of question answered

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var restartButton = document.getElementById("restart");
var result = document.getElementById("result");


// click listeners 
q1a1.addEventListener("click",updateSly);
q1a2.addEventListener("click",updateGryf);
q1a3.addEventListener("click",updateRaven);
q1a4.addEventListener("click",updateHuff);

q2a1.addEventListener("click",updateSly);
q2a2.addEventListener("click",updateHuff);
q2a3.addEventListener("click",updateGryf);
q2a4.addEventListener("click",updateRaven);

q3a1.addEventListener("click",updateGryf);
q3a2.addEventListener("click",updateRaven);
q3a3.addEventListener("click",updateSly);
q3a4.addEventListener("click",updateHuff);

q4a1.addEventListener("click",updateHuff);
q4a2.addEventListener("click",updateSly);
q4a3.addEventListener("click",updateGryf);
q4a4.addEventListener("click",updateRaven);

q5a1.addEventListener("click",updateRaven);
q5a2.addEventListener("click",updateHuff);
q5a3.addEventListener("click",updateSly);
q5a4.addEventListener("click",updateGryf);

restartButton.addEventListener("click", restartQuiz);

// define functions
function reply_click(){
  for (let j = 0; j < 6; j++){
    if((event.srcElement.id).includes("q" + j)){
      for (let i = 1; i < 5; i++){
       document.getElementById("q" + j + "a" + i).disabled = true; 
      }   
    } 
  }
}

function updateGryf(){
  gryCount++;
  questionCount++;
  console.log("gryff: " + gryCount);
  if(questionCount == 5){
    console.log("The quiz is done!");
    showResult();
  }
  reply_click();

}

function updateRaven(){
  ravenCount++;
  questionCount++;
  console.log("raven: " + ravenCount);
  if(questionCount == 5){
    console.log("The quiz is done!");
    showResult();
  }  
  reply_click();
}

function updateHuff(){
  huffCount++;
  questionCount++;
  console.log("huff: " + huffCount);
  if(questionCount == 5){
    console.log("The quiz is done!");
    showResult();
  }
  reply_click();
}

function updateSly(){
  slyCount++;
  questionCount++;
  console.log("sly: " + slyCount);
  if(questionCount == 5){
    console.log("The quiz is done!");
    showResult();
  }
  reply_click();
}

function showResult(){
  resultButton.addEventListener("click",displayResult);
}

function displayResult(){
  if(gryCount >=3){
    result.innerHTML = "You are a GRYFFINDOR!";
  }
  else if (ravenCount >=3){
    result.innerHTML = "You are a RAVENCLAW!";
  } 
  else if (huffCount >=3){
    result.innerHTML = "You are a HUFFLEPUFF!";
  }
  else if(slyCount >=3){
    result.innerHTML = "You are a SLYTHERIN!";
  }
  else if(gryCount ==2){
    if(slyCount==2){
      result.innerHTML = "You are half GRYFFINDOR, half SLYTHERIN!";
    }
    else if (huffCount==2){
      result.innerHTML = "You are half GRYFFINDOR, half HUFFLEPUFF!";
    }
    else if(ravenCount==2){
      result.innerHTML = "You are half GRYFFINDOR, half RAVENCLAW!";
    }
    else result.innerHTML = "You are a GRYFFINDOR!";
  }
  else if(slyCount == 2){
    if(huffCount==2){
      result.innerHTML = "You are half SLYTHERIN, half HUFFLEPUFF!";
    }
    else if(ravenCount==2){
      result.innerHTML = "You are half SLYTHERIN, half RAVENCLAW!";
    }
    else result.innerHTML = "You are a SLYTHERIN!";
  }
  else if(ravenCount == 2){
    if(huffCount==2){
      result.innerHTML = "You are half RAVENCLAW, half HUFFLEPUFF!";
    }
    else result.innerHTML = "You are a RAVECLAW!";
  }
  else result.innerHTML = "You are a HUFFLEPUFF!";
}

function restartQuiz() {
  gryCount = 0;
  slyCount = 0;
  huffCount = 0;
  ravenCount = 0;
  questionCount = 0;
  result.innerHTML = "You are a..."
  for (let j = 1; j < 6; j++){
      for (let i = 1; i < 5; i++){
        document.getElementById("q" + j + "a" + i).disabled = false; 
    } 
  }
}

