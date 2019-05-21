/* Snell, Dallin
** 20 MAY 2019
*/


/* https://stackoverflow.com/questions/7947789/jquery-ui-accordion-start-collapsed */
$(function() {
  $(".accordion").accordion({
    active: false,
    collapsible: true
  });
});

function fullBlock(paramFull)
{
  var paramClass = $(paramFull).attr("class");

  $(paramFull).attr("src", "./images/" + paramClass + "/full.png");
  $(paramFull).attr("alt", paramClass + " full semester deadlines");
} // end of firstBlock()

function firstBlock(paramFirst)
{
  var paramClass = $(paramFirst).attr("class");

  $(paramFirst).attr("src", "./images/" + paramClass + "/first.png");
  $(paramFirst).attr("alt", paramClass + " semester first block deadlines");
} // end of firstBlock()

function secondBlock(paramSecond)
{
  var paramClass = $(paramSecond).attr("class");

  $(paramSecond).attr("src", "./images/" + paramClass + "/second.png");
  $(paramSecond).attr("alt", paramClass + " semester second block deadlines");
} // end of secondBlock()
