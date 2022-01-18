#include <stdio.h>
#include <math.h>

void zsyz(int num)
{
    int maxi = sqrt(num);
    for (int i = 2; i <= maxi; i++)
    {
        while (!(num % i))
        {
            num /= i;
            printf("%d ", i);
        }
    }
    if (num != 1)
    {
        printf("%d ", num);
    }

    printf("\n");
}
int main()
{
    long num = 0;
    int i;

    while (scanf("%ld", &num) != EOF)
    {
        zsyz(num);
    }
    // zsyz(180);
    return 0;
}