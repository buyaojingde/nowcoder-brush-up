#include<stdio.h>
#include<math.h>

int main()
{
    long num = 0;
    int i;

    while (scanf("%ld", &num) != EOF) {
        int maxi = sqrt(num);
        for (i = 2; i <= maxi; i++) {
            while (!(num % i)) {
                num /= i;
                printf("%d ", i);
            }
        }
        if (num != 1) {
            printf("%d ", num);
        }

        printf("\n");
    }
    return 0;
}