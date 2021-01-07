console.log('hh')


let player1Choice = "";//choose X or 0
let player2Choice = "";//auto chosen after player 1 chooses
let totalTurns = 0;

let player1Counter = 0;
let player2Counter = 0;
let drawDecider = false;
let win = false;

let player1Wins = 0;
let player2Wins = 0;

$(document).ready(function(){
  $('#winnerbar').hide()
  $('#a1').on('click', function(){
     //gotta be in camelCase
  });
  $('#naughts').click(function(){ //click on naughts button for player selection
    if(player1Choice === "") {
      player1Choice = "0";
      player2Choice = "X";
      $("#choice").text(`Player 1 is  ${player1Choice}  and Player 2 is  ${player2Choice}` )//try and make this a h2 tag later on
    }
  })

  $('#crosses').click(function(){ //click on crosses for player selection
    if(player1Choice === "") {
      player1Choice = "X";
      player2Choice = "0";
      $("#choice").text(`Player 1 is  ${player1Choice}  and Player 2 is  ${player2Choice}` )
    }
  });
   //make an X appear and add 1 to the counter
  $('.cell').click(function(){//adds event listener to all 9 cells
    if(player1Choice === "") { //playerchoice must be chosen otherwise no click will happen
      return
    }
    const cell = $(this).attr('id')
    if ($(`#${cell}`).text()=== "" && win === false) {
      if(player1Counter === player2Counter) {
        $(`#${cell}`).text(player1Choice);
        player1Counter += 1;
        totalTurns += 1;
      } else if (player1Counter !== player2Counter) {
        $(`#${cell}`).text(player2Choice);
        player2Counter += 1;
        totalTurns += 1;
      }
      const a1 = $('#a1').text()
      const a2 = $('#a2').text()
      const a3 = $('#a3').text()
      const b1 = $('#b1').text()
      const b2 = $('#b2').text()
      const b3 = $('#b3').text()
      const c1 = $('#c1').text()
      const c2 = $('#c2').text()
      const c3 = $('#c3').text()
      if(a1 === a2 && a1 === a3 && a1 !== ""|| b1 === b2 && b1 === b3 && b1 !== "" || c1 === c2 && c1 === c3 && c1 !== "" || a1 === b1 && a1  === c1 && a1 !== ""|| a2 === b2 && a2  === c2 && a2 !== "" || a3 === b3 && a3  === c3 && a3 !== ""|| a1 === b2 && a1  === c3 && a1 !== ""|| a3 === b2 && a3  === c1 && a3 !== "" ) {
        if(player1Counter !== player2Counter) {
          win = true;
          player1Wins += 1;
          $('#player1score').text(player1Wins)
          $('#choice').text(`Player 1 '${player1Choice}' WINS`)
          $('#gameover').text(`GAMEOVER`).css("color","red")
          return;
        } else {
          win = true;
          player2Wins += 1;
          $('#player2score').text(player2Wins)
          $('#choice').text(`Player 2 '${player2Choice}' WINS`)
          $('#gameover').text(`GAMEOVER`).css("color","red")
          return;
        }
      }
      if (totalTurns === 9 && win === false) {
        $("h1").text(`TIE GAME`).css("color","red");
      };
  }
  });
  $('#reset').click(function(){
    player1Counter = 0;
    player2Counter = 0;
    player1Choice = ""
    player2Choice = ""
    $('#choice').text("")
    $('.cell').text("")
    win = false;
    $('#gameover').text()
    $("h1").text("TIC TAC TOE").css("color","black");
    totalTurns = 0

  })
});
