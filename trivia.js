

$(document).ready(function(){

<<<<<<< HEAD
 $("#firstoption").text("True");
 $("#secondoption").text("False");
 $("#correctguess").css("color" , "blue");
 $("#incorrectguess").css("color" , "red");
 $("#question1").css("color" , "blue");
=======
 $("#correctguess").css("color" , "blue");
 $("#incorrectguess").css("color" , "red");
>>>>>>> 89dfc8ecfd8943a141e548d91f183b91c9a317fa

 var correct = 0;
 var incorrect = 0;
 $("#correctguess").text(correct);
 $("#incorrectguess").text(incorrect);


function firstquestion(){

<<<<<<< HEAD
$("#question1").text("Is The Sky Blue?");
$("#firstoption").on('click.first' , function(){
  alert("Correct!");
  correct++;
  $("#correctguess").text(correct);
  secondquestion();
})
$("#secondoption").on('click.first' , function(){
  alert("Incorrect!");
  incorrect++;
  $("#incorrectguess").text(incorrect);
  secondquestion();
})
}

function secondquestion(){

$("#question1").text("Cats Sleep 16 to 18 hours a day?");
$("#firstoption").off('click.first').on('click.second' , function(){
  alert("Correct!");
  correct++;
  $("#correctguess").text(correct);
  thirdquestion();
})
$("#secondoption").off('click.first').on('click.second' , function(){
  alert("Incorrect!");
  incorrect++;
  $("#incorrectguess").text(incorrect);
  thirdquestion();
})
}

function thirdquestion(){

$("#question1").text("1 in 5,000 north Atlantic lobsters are born bright blue");
$("#firstoption").off('click.first').off('click.second').on('click.third' , function(){
  alert("Correct!");
  correct++;
  $("#correctguess").text(correct);

  fouthquestion();
})
$("#secondoption").off('click.first').off('click.second').on('click.third' , function(){
  alert("Incorrect!");
  incorrect++;
  $("#incorrectguess").text(incorrect);

  fouthquestion();
})
if(correct >= 2){
  restart();
}
if(incorrect >= 2){
  restart();
}
}

function fouthquestion(){

$("#question1").text("Hi?");
$("#firstoption").on('click.first' , function(){
  alert("Correct!");
  correct++;
  $("#correctguess").text(correct);
  secondquestion();
})
$("#secondoption").on('click.first' , function(){
  alert("Incorrect!");
  incorrect++;
  $("#incorrectguess").text(incorrect);
  secondquestion();
})
}



function restart(){

correct = 0;
incorrect = 0;
$("#correctguess").text(correct).css("color" , "blue");
$("#incorrectguess").text(incorrect).css("color" , "red");
$("#question1").text("Is The Sky Blue?");


}

firstquestion();

})

//
// restart();
// endgame();
=======
// $("#question1").css("color" , "black").text("Christopher Discovered America In 1492");
// $("#firstoption").text("True").on('click.first' , function(){
//   correct +=  2;

// // secondquestion();
// //
// // });
// //
// // $("#secondoption").text("False").on('click.first' , function(){
// //   incorrect -= 2;
// secondquestion();
// });
//
// console.log('This');

  var answer;

  $("#firstoption").click(function(){
    answer = 'true';
    console.log('True');
  })

  $("#secondoption").click(function(){
    answer = 'false';
    console.log('False');
  })

  if(answer == 'true'){
    correct += 2;
    $("#correctguess").text(correct);
  }
  if(answer == 'false'){
    incorrect -= 2;
    $("#correctguess").text(incorrect);
  }
  //
  // secondquestion();
}
})

// function secondquestion(){
//
// $("#question1").css("color" , "black").text("Cats Sleep 16 to 18 hours a day?");
// $("#firstoption").off('click.first').on('click.second' , function(){
//   correct += 1;
//   $("#correctguess").text(correct).css("color" , "gold");
//
//
// });
// $("#secondoption").off('click.first').on('click.second' , function(){
//   incorrect -= 1;
//   $("#incorrectguess").text(incorrect).css("color" , "gold");
//
//
// })
// }
// }

// function restart() {
// $("#restart").click(function(){
//
// correct = 0;
// incorrect = 0;
//
// $("#correctguess").text(correct).css("color" , "blue");
// $("#incorrectguess").text(incorrect).css("color" , "red");
//
// firstquestion();
//
// })
//
// }

// firstquestion();



//});
>>>>>>> 89dfc8ecfd8943a141e548d91f183b91c9a317fa
