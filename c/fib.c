#include <stdio.h>


int fib(int n) {
    if (n == 0) { 
        return 0;
    }
    if (n == 1) { 
        return 1;
    }
    return fib(n - 1) + fib(n - 2);  
}


int is_fib(int num) {
    int i = 0;
    int f = fib(i); 

    while (f < num) {
        i++;
        f = fib(i);
    }
    if (f == num) {
        return 1;  
    }
    return 0;  
}

int main() {
    int num;

    printf("type:");
    scanf("%d", &num);

    if (is_fib(num)) {
        printf("true \n", num);
    } else {
        printf("false \n", num);
    } 

    return 0;
}
