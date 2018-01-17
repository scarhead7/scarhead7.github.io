/* Snell, Dallin
** 16 JAN 2018
** Doing Stuff With C by Lee Barney conditional example (page 25)
*/


#include <stdio.h>

int main(void)
{
  int aNumber = 5;                // initialize variable

  if(aNumber == 0) {              // is the number 0?
    (void)printf("0 is neither even nor odd.\n");
  } else if (aNumber % 2 == 0) {  // is the number even?
    (void)printf("%d is even.\n", aNumber);
  } else {                        // if not, the number is odd
    (void)printf("%d is odd.\n", aNumber);
  }

  return 0;
}
