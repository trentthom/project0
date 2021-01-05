

const makeMove = function(cellId, boardStatus, currentSymbol) {
  console.log(`cellid:`,cellId)
  if(cellId === "a1") {
    if(boardStatus[0][0] !== null) {
      return false;
    }
    boardStatus[0][0] = currentSymbol;//modify board
  } else if(cellId === "a2") {
    if(boardStatus[0][1] !== null) {
      return false;
    }
    boardStatus[0][1] = currentSymbol;//modify board
  } else if(cellId === "a3") {
    if(boardStatus[0][2] !== null) {
      return false;
    }
    boardStatus[0][2] = currentSymbol;//modify board
  } else if(cellId === "b1") {
    console.log(`hello`, boardStatus[1][0])
    if(boardStatus[1][0] !== null) {
      return false;
    }
    boardStatus[1][0] = currentSymbol;//modify board
  } else if(cellId === "b2") {
    if(boardStatus[1][1] !== null) {
      return false;
    }
    boardStatus[1][1] = currentSymbol;//modify board
  } else if(cellId === "b3") {
    if(boardStatus[1][2] !== null) {
      return false;
    }
    boardStatus[1][2] = currentSymbol;//modify board
  } else if(cellId === "c1") {
    if(boardStatus[2][0] !== null) {
      return false;
    }
    boardStatus[2][0] = currentSymbol;//modify board
  } else if(cellId === "c2") {
    if(boardStatus[2][1] !== null) {
      return false;
    }
    boardStatus[2][1] = currentSymbol;//modify board
  } else if(cellId === "c3") {
    if(boardStatus[2][2] !== null) {
      return false;
    }
    boardStatus[2][2] = currentSymbol;//modify board
  }
  return true //made move is true it DID make a move.
};

let player1Choice = "";
let player2Choice = "";
let totalTurns = 0;

let player1Counter = 0;
let player2Counter = 0;

let boardStatus = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];



$(document).ready(function(){
  $('#winnerbar').hide()
  $('#a1').on('click', function(){
     //gotta be in camelCase
  });
  $('#naughts').click(function(){ //click on naughts button for player selection
    if(player1Choice === "") {
      player1Choice = "0";
      player2Choice = "X";
      $("h2").after(`Player 1 is 0 and Player 2 is ${player2Choice}` )//try and make this a h2 tag later on
    }
  })

  $('#crosses').click(function(){ //click on crosses for player selection
    if(player1Choice === "") {
      player1Choice = "X";
      player2Choice = "0";
      $("h2").after(`Player 1 is X and Player 2 is ${player2Choice}` )
    }
  });
   //make an X appear and add 1 to the counter
  $('.cell').click(function(){ //adds event listener to all 9 cells
    const cellId = $(this).attr('id')//guillaume added this const
    let currentSymbol;
    if(player1Counter === player2Counter) { //$(`#${cell}`).text(player1Choice); //this line is like grabbing the individual cell that is clicked
      currentSymbol = player1Choice
    } else {
      currentSymbol = player2Choice;
    }
    const madeMove = makeMove(cellId, boardStatus, currentSymbol);
    if(madeMove === false) {
      return
    }
    $(`#${cellId}`).text(currentSymbol);
    if(player1Counter === player2Counter) { //$(`#${cell}`).text(player1Choice); //this line is like grabbing the individual cell that is clicked
      player1Counter += 1;
      totalTurns += 1;
    } else if (player1Counter !== player2Counter) {
      player2Counter += 1;
      totalTurns += 1;//put total turns in here - more logical
    }
    // if($('#a1').text()=== player1Choice && $('#a2').text()=== player1Choice && $('#a3').text()=== player1Choice || $('#a1').text()=== player2Choice && $('#a2').text()=== player2Choice && $('#a3').text()=== player2Choice) {
    //   $('#winnerbar').show();
    // } else if ($('#b1').text()=== player1Choice && $('#b2').text()=== player1Choice && $('#b3').text()=== player1Choice || $('#b1').text()=== player2Choice && $('#b2').text()=== player2Choice && $('#b3').text()=== player2Choice) {
    //   $('#winnerbar').show();
    // } else if ($('c1').text()=== player1Choice && $('#c2').text()=== player1Choice && $('c3').text()=== player1Choice || $('c1').text()=== player2Choice && $('#c2').text()=== player2Choice && $('c3').text()=== player2Choice) {
    //   $('#winnerbar').show();
    // }

    if (totalTurns === 9) {
      $("h2").after(`GAMEOVER`);
    };
      // console.log(`player1 count:`,player1Counter)
      // console.log(`totalcount:`, totalTurns)
      // console.log(`player2 count:`,player2Counter)

    //if statement to tell between player1 and player2
  });
//reset board game
  $('#reset').click(function(){
    location.reload();
  })
});


//find a way to change the turn between X and 0.
//






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
