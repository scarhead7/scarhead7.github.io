/* Snell, Dallin
** 19 JAN 2018
** Doing Stuff With C by Lee Barney struct example (page 36)
*/


#include <stdio.h>

struct ClothingCustomer {
  char name[12];          // possibly just the first name because it's so small
  int age;
  double inseam;          // to account for floating points
};

/** PROTOTYPES **/
void createAndPrintCustomer(void);

int main(void)
{
  createAndPrintCustomer();

  return 0;
}

void createAndPrintCustomer(void)
{
  struct ClothingCustomer customer1;

  (void)printf("Enter customer name: ");
  (void)scanf("%s", customer1.name);

  (void)printf("Enter customer's age: ");
  (void)scanf("%d", &customer1.age);

  (void)printf("Enter customer's inseam: ");
  (void)scanf("%lf", &customer1.inseam);

  (void)printf("%s is %d years old and needs pants with an inseam of %0.0lf\n", \
    customer1.name, customer1.age, customer1.inseam);
}
