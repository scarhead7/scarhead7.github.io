/* Snell, Dallin
** 16 JAN 2018
** Doing Stuff With C by Lee Barney write to file example (page 21)
*/


#include <stdio.h>

/** PROTOTYPES **/
void saveNumbers(int aNumber, int anotherNumber);

int main(void)
{
  int aNumber         = 0;                  // initialize variables
  int anotherNumber   = 0;

  (void)printf("Enter a number: ");         // prompt for first number
  (void)scanf("%d", &aNumber);              // retrieve first number
  (void)printf("Enter another number: ");   // prompt for second number
  (void)scanf("%d", &anotherNumber);        // retrieve second number

  saveNumbers(aNumber, anotherNumber);      // save numbers to file
}

void saveNumbers(int aNumber, int anotherNumber)
{
  FILE * userNumbersFile = fopen("user.data", "w");         // open file
  // write to file
  (void)fprintf(userNumbersFile, "%d %d", aNumber, anotherNumber);
  fclose(userNumbersFile);                                  // close file
}
