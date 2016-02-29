$(document).ready(function() {

  // NHO: feel like we can wrap lines 4-12 in its own function called something like `loadGame` or `setInitialGameState`
  // so we could avoid re-using the same code, same as with the code in the `restart` function.
  $("#firstoption").text("Answer");
  $("#correctguess").css("color", "blue");
  $("#incorrectguess").css("color", "red");
  $("#question1").css("color", "blue");

  var correct = 0;
  var incorrect = 0;
  $("#correctguess").text(correct);
  $("#incorrectguess").text(incorrect);

  function firstquestion() {

    $("#question1").text("Is The Sky Blue?"); // NHO: How could we combine all these questions into a data collection that we could then iterate over to populate our questions?
    $("#firstoption").on('click.first', function() {
      var right = prompt("Type yes or no").toLowerCase(); // NHO: Nice job accounting for case sensitivity!
      if (right == "yes") {
        alert("Correct!");
        correct++;
        $("#correctguess").text(correct);
        secondquestion();
      } else if (right == "no") {
        alert("Incorrect!");
        incorrect++;
        $("#incorrectguess").text(incorrect);
        secondquestion();
      }
      // NHO: what if a user enters in input other than we account for in our checks?
    });
  }

  function secondquestion() {
    // NHO: how could we DRY up these functions to avoid repeating the same lines of code?
    $("#question1").text("Cats Sleep 16 to 18 hours a day?");
    $("#firstoption").off('click.first').on('click.second', function() {
      var right = prompt("Type yes or no").toLowerCase(); // NHO: instead of prompts, how might we manipulate the DOM to display the input box dynamically?
      if (right == "yes") {
        alert("Correct");
        correct++;
        $("#correctguess").text(correct);
        thirdquestion();
      } else if (right == "no") {
        alert("Incorrect!");
        incorrect++;
        $("#incorrectguess").text(incorrect)
        thirdquestion();
      }
    });
  }

  function thirdquestion() {
    alert("Bonus Round! Earn +2 Points");
    $("#question1").text("1 in 5,000 north Atlantic lobsters are born bright blue").css('color', 'gold');
    $("#firstoption").off('click.first').off('click.second').on('click.third', function() {
      var right = prompt("Type yes or no").toLowerCase();
      if (right == "yes") {
        alert("Correct");
        correct = correct + 2;
        $("#correctguess").text(correct);
        fourthquestion();
      }
      if (correct > 2) {
        alert("You Win! Game Over");
        restart();
      } else if (right == "no") {
        alert("Incorrect!");
        incorrect = incorrect + 2;
        $("#incorrectguess").text(incorrect);
        fourthquestion();
      }
      if (incorrect > 2) {
        alert("You Lose! Game Over");
        restart();
      }
    });
  }

  function fourthquestion() {
    $("#question1").text("Coke was invented in 1982").css('color', 'blue');
    $("#firstoption").off('click.first').off('click.second').off('click.third').on('click.fourth', function() {
      var right = prompt("Type yes 4 or no").toLowerCase();
      if (right == "yes") {
        alert("incorrect");
        incorrect++
        $("#incorrectguess").text(incorrect);
      }
      if (incorrect > 2) {
        alert("You Lose! Game Over");
        restart();
      } else if (right == "no") {
        alert("Correct!");
        correct++
        $("#correctguess").text(correct);
      }
      if (correct > 2) {
        alert("You Win! Game Over");
        restart();
      }
    });
  }

  function restart() {
    // NHO: is this code being used currently?
    correct = 0;
    incorrect = 0;
    $("#correctguess").text(correct).css("color", "blue");
    $("#incorrectguess").text(incorrect).css("color", "red");
    $("#firstoption").off('click.fourth')
    firstquestion();
  }

  $("#restart").click(function() {
    // seems like we are re-using a lot of similar code, could we just pass in the function `restart` to this click handler?
    correct = 0;
    incorrect = 0;
    $("#correctguess").text(correct).css("color", "blue");
    $("#incorrectguess").text(incorrect).css("color", "red");
    $("#question1").css("color", "blue");
    $("#firstoption").off('click.second').off('click.third').off('click.fourth');
    firstquestion();
  })

  firstquestion();
})

// NHO: Overall, great job on creating a working game in under a week, and with jQuery to boot!
// From our converstations, I know you have plans to refactor, and I think we've identified some places to DRY up your code.

// Things to focus on in the future:
// avoid global variables where possible
// use input and output with functions to avoid accessing variables outside local scope
// code indentation
// Object Oriented approach
