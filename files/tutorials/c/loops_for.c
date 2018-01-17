/* Snell, Dallin
** 16 JAN 2018
** Doing Stuff With C by Lee Barney for loop example (pages 30-31)
*/


#include <stdio.h>

#define SIZE 5

int main(void)
{
  int numbers[SIZE] = { 1, 2, 3, 4, 5 };        // initialize variable array

  for(int lcv = 0; lcv < SIZE; ++lcv) {
    (void)printf("%d ", numbers[lcv]);          // prints all numbers in array
  }
  (void)printf("\n");                           // newline at end of array

  return 0;
}
