var regbutton = document.querySelectorAll(".reg");


for (var i = 0; i < regbutton.length; i++) {
  regbutton[i].addEventListener("mouseover", function(event){
    event.target.style.color = "black";
  });
  regbutton[i].addEventListener("mouseout", function(event){
    event.target.style.color = "white";
  });
}

var clear = document.querySelector('.clear');
clear.addEventListener("mousedown", function(event){
  event.target.style.background = '#81C176';
});
clear.addEventListener('mouseup', function(event){
  event.target.style.background = '#61B34F';
});

var equals = document.querySelector('.equals');
// var displayString = displayNode.innerText.replace(" ", "");
equals.addEventListener("mousedown", function(event){
  event.target.style.background = '#81C176';
});
equals.addEventListener('mouseup', function(event){
  event.target.style.background = '#61B34F';
});
equals.addEventListener('click', function(event){
  displayNode.innerText = displayNode.innerText.replace(/ /g, "");
  displayNode.innerText = displayNode.innerText.replace(/x/g, "*");
  displayNode.innerText = displayNode.innerText.replace(/÷/g, "/");
});

var operation = document.querySelectorAll('.operation');
for (var i = 0; i < operation.length; i++) {
  operation[i].addEventListener('mousedown', function(event){
    event.target.style.color = 'white';
  });
  operation[i].addEventListener('mouseup', function(event){
    event.target.style.color = '#45683C';
});
}

var calcbutton = document.querySelectorAll('.calc-button');
var displayNode = document.querySelector('.display-number');
var displayScreen = document.querySelector('.display');
var clearButton = document.querySelector('.clear');
for (var i = 0; i < calcbutton.length; i++) {
  calcbutton[i].addEventListener('click', function(event){
    var buttonvalue = this.textContent;
    displayNode.textContent += buttonvalue;
  });
}

clearButton.addEventListener('click', function(event){
  displayNode.innerHTML = "";
});


function DoMath(){
  var result = displayNode.innerText;
  result.replace(/ /g, "");
  result.replace(/x/g, "*");
  result.replace(/÷/g, "/");
}
