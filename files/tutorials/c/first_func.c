/* Snell, Dallin
** 08 JAN 2018
** Doing Stuff With C by Lee Barney first function (page 16)
*/


#include <stdio.h>

/** PROTOTYPES **/
int multiply(int firstNum, int secondNum);

int main(void)
{
  int product = multiply(3, 4);
  (void)printf("3 * 4 = %d\n", product);

  return 0;
}

int multiply(int firstNum, int secondNum)
{
  return (firstNum * secondNum);
}


/*    NOTES
**
** ~ I put "void" in the paratheses of "main"--even though it's redundant--because
** it lets whoever reads my code that I meant for nothing to be passed into
** main.
** ~ "void" is also present before the printf function because printf returns a
** value that I don't care about. This void instructs the compiler to explicitly
** throw away this value. This is also redundant. The value will be thrown away
** if I do nothing with it anyways.
** ~ My prototype section is done by some programmers and not done by others. I
** enjoy doing it because it lets me have a quick list of all the functions in
** my code and makes finding the ones I do have quicker and easier. However, the
** book--at least in the first example--does not have this prototype section. If
** you do not have the prototype section, all of your functions *must* appear
** before the main function.
** ~ Also, line 7 ("#include <stdio.h>") is not included in the book. This
** includes the standard i/o library which prevents warnings when using the
** printf function.
*/
