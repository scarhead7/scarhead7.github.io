/* Snell, Dallin
** 12 JAN 2018
** demonstrates arguments passed in from the CLI
*/


#include <stdio.h>

#define CLV 3        // the number of variables I will pass in via the CLI

int main(int argc, char **argv)
{
  (void)printf("Number of arguments passed in: %d\n", argc);

  (void)printf("Arguments:\n");
  for(int lcv = 0; lcv < CLV; ++lcv)
  {
    (void)printf("\t%s\n", argv[lcv]);
  }

  return 0;
}
