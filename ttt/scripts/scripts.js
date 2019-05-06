/* Snell, Dallin
** 03 MAY 2019
*/


/* based on the proper turn, the correct mark is placed
** parameter "current" is the current cell clicked
*/
function whoseturn(current)
{
  /* get the current turn element */
  var turn = $("#turn");

  if(turn.text() == "X")
  {
    if(!current.text())
    {
      /* change the turn */
      turn.text("O");
      /* place the player's mark */
      current.text("X");
    } else {
      duplicatePiece();
    } // end of inner conditional
  } else {
    if(!current.text())
    {
      /* change the turn */
      turn.text("X");
      /* place the player's mark */
      current.text("O");
    } else {
      duplicatePiece();
    } // end of inner conditional
  } // end of outer conditional

  /* see if either player has won */
  checkwinner();
} // end of whosturn()

/* checks if someone won the game
*/
function checkwinner()
{
  /* gets the current X/O's on the board */
  var board = [ $("#cellone").text(),
                $("#celltwo").text(),
                $("#cellthree").text(),
                $("#cellfour").text(),
                $("#cellfive").text(),
                $("#cellsix").text(),
                $("#cellseven").text(),
                $("#celleight").text(),
                $("#cellnine").text() ];

  /* check if X won */
  if(board[0] == "X" && board[1] == "X" && board[2] == "X")
    playerWon("X");
  if(board[0] == "X" && board[4] == "X" && board[8] == "X")
    playerWon("X");
  if(board[0] == "X" && board[3] == "X" && board[6] == "X")
    playerWon("X");
  if(board[1] == "X" && board[4] == "X" && board[7] == "X")
    playerWon("X");
  if(board[2] == "X" && board[4] == "X" && board[6] == "X")
    playerWon("X");
  if(board[2] == "X" && board[5] == "X" && board[8] == "X")
    playerWon("X");
  if(board[3] == "X" && board[4] == "X" && board[5] == "X")
    playerWon("X");
  if(board[6] == "X" && board[7] == "X" && board[8] == "X")
    playerWon("X");

  /* check if O won */
  if(board[0] == "O" && board[1] == "O" && board[2] == "O")
    playerWon("O");
  if(board[0] == "O" && board[4] == "O" && board[8] == "O")
    playerWon("O");
  if(board[0] == "O" && board[3] == "O" && board[6] == "O")
    playerWon("O");
  if(board[1] == "O" && board[4] == "O" && board[7] == "O")
    playerWon("O");
  if(board[2] == "O" && board[4] == "O" && board[6] == "O")
    playerWon("O");
  if(board[2] == "O" && board[5] == "O" && board[8] == "O")
    playerWon("O");
  if(board[3] == "O" && board[4] == "O" && board[5] == "O")
    playerWon("O");
  if(board[6] == "O" && board[7] == "O" && board[8] == "O")
    playerWon("O");

  /* check if the board is full and it's a draw, only if someone hasn't won the game */
  if($("#winner").text())
    if( board[0] && board[1] && board[2] &&
        board[3] && board[4] && board[5] && 
        board[6] && board[7] && board[8]  )
      draw();
} // end of checkcells()

/* https://stackoverflow.com/questions/20672490/how-to-know-whether-modal-boxes-alert-prompt-confirm-have-been-disabled-i
** sends a message to the user while also checking if dialogs are disabled
*/
function sendMessage(message)
{
  var open_time = new Date();
  var result = alert(message);
  var close_time = new Date();

  if (close_time - open_time < 10)
  {
    // dialogs are disabled; let the user know
    $("#usermessages").text("Dialog boxes disabled. Please reload page.");
    $("#usermessages").css("background-color", "red");
  } // end of conditional
} // end of sendMessage()

/* displays message to user if a duplicate piece is attempted
** removes the message after 5 seconds
*/
function duplicatePiece()
{
  $("#usermessages").text("Player has already played here!");
  $("#usermessages").css("background-color", "red");
  setTimeout(clearMessages, 5000);
} // end of duplicatePiece()

/* displays a message if the player won
*/
function playerWon(player)
{
  $("#usermessages").text("Player " + player + " won!");
  $("#usermessages").css("background-color", "green");
  $("#winner").text(player);
} // end of playerWon()

/* displays a message to the user about a draw
*/
function draw()
{
  $("#usermessages").text("It's a draw!");
  $("#usermessages").css("background-color", "yellow");
  $("html").css("background-color", "yellow");
} // end of draw()

/* confirms if the user wants to resign the game
*/
function resign()
{
  // confirm with the user
  if(confirm("Are you sure you want to resign the game?"))
    // determine whose turn it is and who actually won
    if($("#turn").text() == "X")
    {
      sendMessage("Player X resigned the game Player O won!.");
      playerWon("O");
    } else {
      sendMessage("Player O resigned the game Player X won!.");
      playerWon("X");
    } // end of inner conditional
} // end of resign()

/* confirms if the user wants to restart the game
*/
function restart()
{
  if(confirm("Are you sure you want to restart the game?"))
    location.reload();
} // end of restart()

/* this will clear the message in the lower-right of the screen
*/
function clearMessages()
{
  $("#usermessages").text("");
  $("#usermessages").css("background-color", "");
} // end of clearMessages()

/* this will save the current tic-tac-toe game
*/
function saveGame()
{
  // stubbed
  sendMessage("saveGame() stubbed.");
} // end of saveGame()

/* this will load a previously saved tic-tac-toe game
*/
function loadGame()
{
  // stubbed
  sendMessage("loadGame() stubbed.");
} // end of loadGame()
