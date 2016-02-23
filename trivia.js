$(document).ready(function(){

var correct = 0;
var incorrect = 0;


function firstquestion(){
$("#question1").css("color" , "gray").text("Is The Sky Blue?");
$("#firstoption").text("Truth Button").on('click.first' , function(){
var right = prompt("Type YES or NO");
if(right == "yes" || right == "YES"){
  alert("Correct!");
  correct++;
  console.log(correct);
  secondquestion();
}
else if(right == "no" || right == "NO"){
  alert("Incorrect!");
  incorrect++;
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
    var right = prompt("Type TRUE or FALSE");
    if(right == "true" || right == "TRUE"){
      alert("Correct");
      thirdquestion();
    }
    else if(right == "false"){
      alert("Incorrect!");
      thirdquestion();
    }
    else{
      alert("Enter Correct value");
    }
  });
}



function thirdquestion(){

$("#question1").css("color" , "gray").text("1 in 5,000 north Atlantic lobsters are born bright blue");

$("#firstoption").off('click.first').off('click.second').on('click.third' ,function(){
  var right = prompt("Type TRUE or FALSE");
  if(right == "true" || right == "TRUE"){
    alert("Correct");
    fourthquestion();
  }
  else if(right == "false" || "FALSE"){
    alert("Incorrect!");
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
  var right = prompt("Type TRUE or FALSE");
  if(right == "true" || right == "TRUE"){
    alert("Correct");
  }
  else if(right == "false" || "FALSE"){
    alert("Incorrect!");
  }
  else{
    alert("Enter Correct value");
  }
});

}

// while(incorrect == 2){
//
//   alert("Game Over");
// }


firstquestion();






});
