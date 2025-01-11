#include <stdio.h>

void task1() {
    int indice = 13;
    int soma = 0;

    for (int k = 0; k <= indice; k++) {
        int incremented_k = k + 1;
        soma += incremented_k;
    }

    printf("Soma: %d\n", soma);
}

int main() {
    task1();
    return 0;
}
