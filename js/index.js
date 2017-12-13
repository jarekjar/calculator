var currentVal = 0;
var operator;
$(document).ready(function(){
  $(".number").on("click", numToField);
  $(".clear").on("click", clearField);
  $(".operator").on("click", opToField);
  $(".eval").on("click", parse);
});

function numToField() {
  if ($('.input').val() === "0"){
    $('.input').val($(this).val());
  }
  $('.input').val($('.input').val() + $(this).text());
}

function clearField(){
  $('.input').val("0");
  $("#curr").text("-");
  $("#op").text("-");
  operator = "";
  currentVal = 0;
}

function opToField(){
  if (currentVal === 0){
  currentVal = $('.input').val();
  } else {
    currentVal = calculate(currentVal, operator, $('.input').val());
  }
  operator = $(this).text();
  var operatortxt = operatorText(operator);
  $("#curr").text(currentVal);
  $("#op").text(operatortxt);
  $('.input').val("0");
}

function parse(){
  currentVal = parseInt(currentVal);
  var newVal = parseInt($('.input').val());
  currentVal = calculate(currentVal, operator, newVal);
  printAnswer(currentVal);
};

function calculate(curr, op, newVal){
  if (!curr) {
    return newVal;
  }
  if (op === "+"){
    return curr + newVal
  } else if (op === "-") {
    return curr - newVal
  } else if (op === "x") {
    return curr * newVal
  } else {
    return curr / newVal
  }
}

function operatorText(op){
  if (op === "-"){
    return "minus";
  } else if (op === "+"){
    return "plus";
  } else if (op === "x"){
    return "times";
  } else if (op === "÷") {
    return "divided by";
  }
}

function printAnswer (answer) {
  //Number((answer).toFixed(4));
  $('.input').val(answer);
  $("#curr").text("-");
  $("#op").text("answer");
  operator = "";
  currentVal = 0;
}