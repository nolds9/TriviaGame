var correct = 0;
var incorrect = 0;

$(document).ready(function(){

 $("#correctguess").css("color" , "blue");
 $("#incorrectguess").css("color" , "red");



function firstquestion(){

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
