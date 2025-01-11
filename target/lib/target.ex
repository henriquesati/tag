defmodule Target do
  def task1 do
    indice = 13

    # Calcula a soma com incremento de 1 no `k`
    soma = Enum.reduce(1..indice, 0, fn k, acc ->
      k = k + 1       # Incrementa 1 no valor de k
      acc + k         # Soma o valor atualizado de k ao acumulador
    end)

    # Imprime o resultado
    IO.puts(soma)
  end
end

# Executa a função ao carregar o módulo
Target.task1()
