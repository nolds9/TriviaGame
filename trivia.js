

$(document).ready(function(){

 $("#firstoption").text("Click Here");
 $("#correctguess").css("color" , "blue");
 $("#incorrectguess").css("color" , "darkred");
 $("#question1").css("color" , "blue");

 var correct = 0;
 var incorrect = 0;
 $("#correctguess").text(correct);
 $("#incorrectguess").text(incorrect);


function firstquestion(){

$("#question1").text("Is The Sky Blue?");
$("#firstoption").on('click.first' , function(){
var right = prompt("Type yes or no").toLowerCase();
if(right == "yes"){
  alert("Correct!");
  correct++;
  $("#correctguess").text(correct);
  secondquestion();
}
else if(right == "no"){
  alert("Incorrect!");
  incorrect++;
  $("#incorrectguess").text(incorrect);
  secondquestion();
}
});
}




function secondquestion(){

  $("#question1").text("Cats Sleep 16 to 18 hours a day?");
  $("#firstoption").off('click.first').on('click.second' ,function(){
    var right = prompt("Type yes or no").toLowerCase();
    if(right == "yes"){
      alert("Correct");
      correct++;
    $("#correctguess").text(correct);
      thirdquestion();
    }
    else if(right == "no"){
      alert("Incorrect!");
      incorrect++;
      $("#incorrectguess").text(incorrect)
      thirdquestion();
    }
  });
}



function thirdquestion(){

$("#question1").text("1 in 5,000 north Atlantic lobsters are born bright blue");

$("#firstoption").off('click.first').off('click.second').on('click.third' ,function(){
  var right = prompt("Type yes or no").toLowerCase();
  if(right == "yes"){
    alert("Correct");
    correct = correct + 2;
    $("#correctguess").text(correct);
    fourthquestion();
  }
  if(correct > 2){
    alert("You Win! Game Over");
    restart();
  }
  else if(right == "no"){
    alert("Incorrect!");
    incorrect = incorrect + 2;
    $("#incorrectguess").text(incorrect);
    fourthquestion();
  }
  if(incorrect > 2){
    alert("You Lose! Game Over");
    restart();
  }
});

}

function fourthquestion(){

$("#question1").text("Coke was invented in 1982");

$("#firstoption").off('click.first').off('click.second').off('click.third').on('click.fourth' ,function(){
  var right = prompt("Type yes or no").toLowerCase();
  if(right == "yes"){
    alert("Correct");
    correct++
    $("#correctguess").text(correct);
  }
  if(correct > 2){
    alert("You Win! Game Over");
    restart();
  }

  else if(right == "no"){
    alert("Incorrect!");
    incorrect++
    $("#incorrectguess").text(incorrect);
    }
    if(incorrect > 2){
      alert("You Lose! Game Over");
      restart();
  }
});

}

// function endgame(){
// if(correct > 1){
//   alert("Game Over");
// }
// else{
//   firstquestion();
// }
// }
//
// endgame()


function restart(){

correct = 0;
incorrect = 0;
$("#correctguess").text(correct).css("color" , "blue");
$("#incorrectguess").text(incorrect).css("color" , "red");
firstquestion();


}
firstquestion();
})

//
// restart();
// endgame();
