#include <stdio.h>
#include <string.h>

void reverse(char str[]) {
    int init = 0;
    int fim = strlen(str) - 1;
    char temp;

    while (init < fim) {
        temp = str[init];
        str[init] = str[fim];
        str[fim] = temp;
        init++;
        fim--;
    }
}

int main() {
    char str[] = "abaxaci";  

    printf("Sorigin: %s\n", str);

    reverse(str);
    printf("Srevert: %s\n", str);

    return 0;
}
