var correct = 0;
var incorrect = 0;

$(document).ready(function(){

 $("#correctguess").text(correct).css("color" , "blue");
 $("#incorrectguess").text(incorrect).css("color" , "red");



function firstquestion(){

$("#question1").css("color" , "black").text("Is The Sky Blue?");
$("#firstoption").text("Truth Button").on('click.first' , function(){
var right = prompt("Type YES or NO").toLowerCase();
if(right == "yes"){
  alert("Correct!");
  correct = correct + 2;
  $("#correctguess").text(correct).css("color" , "blue");
  secondquestion();
}
else if(right == "no"){
  alert("Incorrect!");
  incorrect = incorrect - 2;
  $("#incorrectguess").text(incorrect).css("color" , "red");
  secondquestion();
}
else{
alert("Enter correct value");
}
});

}




function secondquestion(){
  $("#question1").css("color" , "gray").text("Cats Sleep 16 to 18 hours a day?");
  // remove the firstquesiton click event

  $("#firstoption").off('click.first').on('click.second' ,function(){
    var right = prompt("Type TRUE or FALSE").toLowerCase();
    if(right == "true"){
      alert("Correct");
      correct++;
    $("#correctguess").text(correct).css("color" , "blue");
      thirdquestion();
    }
    else if(right == "false"){
      alert("Incorrect!");
      incorrect - 2;
      $("#incorrectguess").text(incorrect).css("color" , "red");
      thirdquestion();
    }
    else{
      alert("Enter Correct value");
    }
  });
}



function thirdquestion(){

  alert("Gold Round! If You Answer Correctly, You Will Gain +2 Or Lose -2")

$("#question1").css("color" , "gold").text("1 in 5,000 north Atlantic lobsters are born bright blue");

$("#firstoption").off('click.first').off('click.second').on('click.third' ,function(){
  var right = prompt("Type TRUE or FALSE").toLowerCase();
  if(right == "true" || right == "TRUE"){
    alert("Correct");
    correct = correct + 2
    $("#correctguess").text(correct).css("color" , "gold");
    fourthquestion();
  }
  else if(right == "false"){
    alert("Incorrect!");
    incorrect = incorrect - 2;
    $("#incorrectguess").text(incorrect).css("color" , "darkred");
    fourthquestion();
  }
  else{
    alert("Enter Correct value");
  }
});

}

function fourthquestion(){

$("#question1").css("color" , "gray").text("Coke was invented in 1982");

$("#firstoption").off('click.first').off('click.second').off('click.third').on('click.fourth' ,function(){
  var right = prompt("Type TRUE or FALSE").toLowerCase();
  if(right == "true" || right == "TRUE"){
    alert("Correct");
    correct++
    $("#correctguess").text(correct).css("color" , "blue");
  }
  else if(right == "false" || "FALSE"){
    alert("Incorrect!");
    incorrect++
    $("#incorrectguess").text(incorrect).css("color" , "red");
  }
  else{
    alert("Enter Correct value");
  }
});

}





function restart(){

$("#restart").on("click" , function(){

correct = 0;
incorrect = 0;
$("#correctguess").text(correct).css("color" , "blue");
$("#incorrectguess").text(incorrect).css("color" , "red");


})

}


firstquestion();


});
