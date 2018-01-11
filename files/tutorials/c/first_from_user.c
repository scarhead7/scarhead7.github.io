/* Snell, Dallin
** 09 JAN 2018
** Doing Stuff With C by Lee Barney first input from user example (page 19)
*/


#include <stdio.h>

/** PROTOTYPES **/
int multiply(int firstNum, int secondNum);

int main(void)
{
  int firstNum  = 0;                        // declare variables
  int product   = 0;                        // and initialize to 0
  int secondNum = 0;

  (void)printf("Enter an integer: ");       // prompt for the first int
  (void)scanf("%d", &firstNum);             // read the first int
  (void)printf("Enter another integer: ");  // prompt for the second int
  (void)scanf("%d", &secondNum);            // read the second int

  product = multiply(firstNum, secondNum);  // perform calculations

  // output results
  (void)printf("%d * %d = %d\n", firstNum, secondNum, product);

  return 0;                                 // return success
}

int multiply(int firstNum, int secondNum)
{
  return (firstNum * secondNum);
}

/*    NOTES
**
** ~ Similarly to when I put "void" before the printf function to throw away
** the return value, I do the same for the scanf function. It's not needed,
** but that was the way I was taught.
** ~ I was also taught to declare all of my variables at the top of the code--
** regardless of where I will be using them. Hence, the book declares the
** variable "product" in a different place than I do.
** ~ It was pounded into my head when I was learning programming to always,
** always, always initialize my variables to zero. Even if I was about to
** overwrite the variable anyways. When a variable is uninitialized, it has
** leftover numbers (in this case) left in memory. If I try to pull those numbers
** out without initializing the variable, I can get weird numbers and even weird
** behavior--in some cases.
** ~ Also a sidenote about whitespace (particularly the space between lines):
** I like my lines of code to be spaced out. You'll notice in the book that
** Brother Barney's main function only takes up 11 lines of code and mine takes
** up at least 19.
** ~ You also probably noticed that I like to space my code evenly. All my
** variable initializations are aligned together and all my comments are
** aligned as well. This is just for ease of reading the code later.
*/
