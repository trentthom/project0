console.log('hi')


let playerChoice = "";




$(document).ready(function(){
  $('#a1').on('click', function(){
     //gotta be in camelCase
  });
  $('#naughts').click(function(){ //call backs/listeners
    if(playerChoice === "") {
      $("h2").after("You have chosen 0")//try and make this a h2 tag later on
      playerChoice = "0";
    }

  })
  $('#crosses').click(function(){
    $("h2").after("You have chosen X")
    playerChoice = "X"
  })

  // $("#a2").mouseenter(function(){
  //   $("#a2").css({backgroundColor:"blue"});
  // })
  // const a3Tilechange = $("#a3").mouseenter(function(){
  //   $("#a3").css({backgroundColor:"blue"});
  // })
  // $("#b1").mouseenter(function(){
  //   $("#b1").css({backgroundColor:"blue"});
  // })



});

$("#a1").click(function(){
  $("h1").hide();
});





// $("#regTitle").html("Hello World");


// var div = $("<div></div>");//create tag
// $("#box").append(div);//using .after i could insert this after the current h2


// ### Big Goals
//
// * **Build a web application from scratch**, without a starter codebase
// * Use your programming skills to **map out the game logic for a simple game like Tic Tac Toe**
// * **Separate HTML, CSS, and JavaScript files** in your application
// * Build an application **to a spec that someone else gives you**
// * **Build a dynamic game that allows two players to compete**
// * **Craft a ``readme.md`` file that explains your app** to the world
//
// ---
//
// ### Technical Requirements
//
// Your app must:
//
// * **Render a game board in the browser**
// * **Switch turns** between X and O (or whichever markers you select)
// * **Visually display which side won** if a player gets three in a row or show a draw/"cat’s game" if neither wins
// * **Include separate HTML / CSS / JavaScript files**
// * Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
// * Use **Javascript** for **DOM manipulation**
// * **Deploy your game online**, where the rest of the world can access it
// * Use **semantic markup** for HTML and CSS (adhere to best practices)
