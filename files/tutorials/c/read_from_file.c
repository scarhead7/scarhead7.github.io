/* Snell, Dallin
** 16 JAN 2018
** Doing Stuff With C by Lee Barney read from file example (page 22)
*/


#include <stdio.h>

/** PROTOTYPES **/
void readNumbers(int aNumberP, int anotherNumberP);

int main(void)
{
  int aNumber         = 0;                  // initialize variables
  int anotherNumber   = 0;

  readNumbers(&aNumber, &anotherNumber);      // reads numbers from file

  (void)printf("%d * %d = %d\n", aNumber, anotherNumber, aNumber*anotherNumber);

  return 0;
}

void readNumbers(int aNumberP, int anotherNumberP)
{
  FILE * userNumbersFile = fopen("user.data", "r");         // open file
  // read from file
  (void)fscanf(userNumbersFile, "%d %d", aNumberP, anotherNumberP);
  fclose(userNumbersFile);                                  // close file
}
