/* Snell, Dallin
** 16 JAN 2018
** Doing Stuff With C by Lee Barney while loop example (pages 32)
*/


#include <stdio.h>

int main(void)
{
  int number = 0;                           // initialize variable

  while(number != 42) {
    (void)printf("Type 42: ");              // prints prompt
    (void)scanf("%d", &number);             // receives users number
  }

  return 0;
}
