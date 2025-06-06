---
title: "Atividade 5"
draft: no
date: '2021-10-15T00:00:00+01:00'
menu:
  r_pos_2022:
    parent: Unidade 5
    weight: 13
toc: yes
type: docs
weight: 13
---

## Esta atividade deverá ser realizada até dia **22/11**. São propostas as seguintes atividades:

1. Instale o pacote `cepespR`

```{r}
devtools::install_github("Cepesp-Fgv/cepesp-r")
```

2. Baixe o arquivo .Rmd e o .csvb e abra no RStudio. 

[Arquivo .Rmd](https://cefetmgbr-my.sharepoint.com/:u:/g/personal/renataoliveira_cefetmg_br/ETG7uY5TF9ZHlNv70InRlLwBtCYguNA9Sw-QtdIX0qSLwA?e=wTD4jf)

3. Resolva as questões.

4. Gere um tipo de documento .Rmd de sua preferência. 

5. Envie por email (renataoliveira@gmail.com ou renataoliveira@cefetmg.br) o arquivo .Rmd e o arquivo gerado.


**Agradecimento: Leo Barone pelo maravilhoso tutorial!**

# Botando o computador para trabalhar

Se há um tutorial sobre lógica de programação, é este. Os tópicos deste tutorial são os mais importantes para que possamos escrever algoritmos e botar o computador para fazer o que sabe de melhor: repetir instruções e tarefas. Veremos, em primeiro lugar, operadores relacionais e lógicos e, a seguir, cláusulas condicionais, loops e funções.

## Operadores relacionais

Uma das especialidades do computador é verificar se proposições simples são verdadeiras ou falsas. __Operadores relacionais__ servem para verificar se objetos são iguais, diferentes, maiores ou menores. São seis operadores relacionais e a tabela abaixo apresenta os seus símbolos.

| Operador       | Símbolo |
  | -------------- |:-------:| 
  | Igual          | ==      |
  | Diferente      | !=      |
  | Maior          | >       |
  | Maior ou igual | >=      |
  | Menor          | <       |
  | Menor ou igual | <=      |
  
 Não discutiremos todas as regras de comparação de objetos, mas passaremos por um conjunto grande de exemplos a partir do qual elas podem ser inferidas.

Vamos começar com alguns exemplos simples:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
42 == 41
42 != 41
(2 + 2) == (3 + 1)
(2 + 2) != (3 + 1)
5 > 3
5 < 3
42 > 42
42 < 41
42 >= 42
42 <= 41
```

Antes de avançar, tenha certeza que entendeu os exemplos acima.

Operadores relacionais também vale para textos:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
"texto" == "texto"
"texto" == "texTo"
"texto" != "texto"
```

Note no segundo exemplo que o R é "case sensitive", ou seja, diferencia maiúsculas de minúsculas ao comparar textos.

Textos também podem ser ordenados (lexicograficamente, isto é, alfabeticamente):

```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
"a" > "b"
"a" < "b"
"A" < "b"
"A" > "a"
```

Inclusive palavras inteiras e sentenças:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
"cachorro" < "cachorro quente"
"churrasco de gato" > "cachorro quente"
```

E valores lógicos? Veja se entende o que acontece nos exemplos abaixo:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
TRUE == 1
FALSE == 0
TRUE > FALSE
```

Podemos comparar valores armazenados em variáveis da mesma maneira que fizemos nos exemplos até aqui:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
x <- 5
y <- 10
x > y
```

## Operadores relacionais e vetores

É possível comparar um vetor com um valor. Neste caso, cada elemento do vetor é comparado individualmente ao valor e o resultado é um vetor lógico de tamanho igual ao vetor comparado.

```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
votos16 <- c(1030, 551, 992, 345, 203, 2037)
votos16 >= 1000
```

Vamos usar o vetor "votos16", que contém votos de candidatos fictícios em 2016, com os votos dos mesmo candidatos em 2012:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
votos12 <- c(890, 354, 950, 400, 50, 3416)
votos16 > votos12
```

Veja que, na comparação entre dois vetores, os elementos são comparados par a par de acordo com a sua posição no vetor. O vetor lógico resultante tem o mesmo tamanho dos vetores comparados.

## Operadores Lógicos (Booleanos)

É perfeitamente possível combinar proposições com os __operadores lógicos__ "e", "ou" e "não":
  
  | Operador | Símbolo |
  | -------- |:-------:| 
  | E        | &       |
  | Ou       | \|      |
  | Não      | !       |
  
Por exemplo, se queremos verificar todos os candidatos que obtiveram acima de 500 (exclusive) __E__ abaixo de 1500 (inclusive) votos, fazemos:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
votos16 > 500 & votos16 <= 1500
```

Veja a tabela de possibilidades de combinação de duas proposições com a conjunção "e":
  
  | Proposição 1 | Proposição 2 | Combinação | 
  | ------------ | ------------ | ---------- |
  | TRUE         | TRUE         | TRUE       |  
  | TRUE         | FALSE        | FALSE      |
  | FALSE        | TRUE         | FALSE      |
  | FALSE        | FALSE        | FALSE      |
  
Se o valor atende às duas condições, então o resultado é TRUE. Se ao menos uma proposição é falsa, sob a conjunção "e", então a combinação das proposições também é.

Com o operador "Ou", a combinação de proposições é verdadeira se pelo menos uma delas for verdadeira.

```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
votos16 < 500 | votos12 > 1500
```

Veja a tabela de possibilidades de combinação de duas proposições com a conjunção "ou":
  
  | Proposição 1 | Proposição 2 | Combinação | 
  | ------------ | ------------ | ---------- |
  | TRUE         | TRUE         | TRUE       |  
  | TRUE         | FALSE        | TRUE       |
  | FALSE        | TRUE         | TRUE       |
  | FALSE        | FALSE        | FALSE      |
  
Finalmente, o operador lógico "não" tem a função de reverter um proposição:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
!TRUE
!(5 > 3)
!(votos16 > 500 & votos16 <= 1500)
```

Lembre-se que, quando trabalhamos com vetores lógicos, podemos tratá-los como se fossem zeros e uns, tal qual no exemplo:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
sum(votos16 > votos12)
```

## Cláusulas condicionais

Um dos usos mais importantes dos operadores relacionais e lógicos é na construção de __cláusulas condicionais__, "if", "else" e "else if". Elas são fundamentais para a construção de funções e algoritmos. Veja um uso simples do condicional _if_, para o cálculo do valor absoluto de uma variável:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
# exemplo com x negativo
x <- -23

if (x < 0){
  x <- -x
}

print(x)

# exemplo com x positivo
x <- 23

if (x < 0){
  x <- -x
}

print(x)

```

A condição que o _if_ deve atender vem entre parênteses. A instrução a ser atendida caso a cláusula seja verdadeira vem dentro das chaves. Aliás, é boa prática (na maioria dos casos) abrir as chaves em uma linha, escrever as instruções em outra, e fechar as chaves na linha seguinte ao final das instruções, como no exemplo. Também é boa prática "identar", ou seja, desalinhar as instruções do restante do código. Falaremos sobre "estilo" em algum momento do curso. Por enquanto, apenas observe e não se assuste. Diferentemente de outras linguagens, R não requer identação para funcionar.

Vamos supor que um candidato teve determinada quantia de votos. Ele precisava de 700 para ser eleito. Vamos criar uma nova variável, "status", que receberá valor "eleito" se "votos" for maior que 700. Supondo que o candidato recebeu 800 votos, fazemos:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
votos <- 800

if (votos > 700){
  status <- "eleito"
}

print(status)

```

Mas e se quisermos dar o valor "nao eleito" a "status" caso ele não tenha recebido mais de 700 votos? Usamos _else_ para indicar o que fazer em todos os casos em que a condição em _if_ não foi atendida.

```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
if (votos > 700){
  status <- "eleito"
} else {
  status <- "nao eleito"
}

print(status)
```

Por fim, vamos imaginar um regra mais complexa. Se o total de "votos" do candidato for maior que 1200, então ele está eleito. Se a votação tiver ficado entre 700 (exclusive) e 1200 (inclusive), ele recebe "status" igual a "suplente". Com 700 votos ou menos, o "status" é não eleito.

Veja como traduzir a regra acima em código usando _if_, _else if_ e _else_.

```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
if (votos > 1200){
  status <- "eleito"
} else if (votos > 700  & votos <= 1200){
  status <- "suplente"
} else {
  status <- "nao eleito"
}

print(status)
```

Outro exemplos simples do uso de condicionais, agora com uma variável de textos

```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
partido <- "PMDB"

if (partido == "PMDB" | partido == "PSD" | partido == "DEM") {
  print("governo")
} else {
  print("oposição")
}
```

É possível complicar bastante o uso dos condicionais "aninhando" uma cláusula dentro da outra e criando "labirintos" de condições. Fazer isso, porém, é mais uma questão de lógica do que de uso da linguagem. Não há variações relevantes do uso em relação aos exemplos simples apresentados acima. Se você consegue fazer os condicionais em papel e caneta e se os exemplos anteriores tiverem ficado claros, então consegue fazê-los em R.

## Exercício

- Anote quantos cafés você tomou cada dia esta semana. Guarde o valor na variavel 'cafe'.
- Represente com condicionais a regra: se você tomou 3 ou mais, imprima "Hummm, café!". Se você tomou menos de 3, imprima "zzzzzz". 

## Repetindo tarefas - while loop

Uma das vantagens dos computadores em relação aos seres humanos é a capacidade de repetir tarefas a um custo baixo. Vamos ver um exemplo simples: con  tar até 42. Usaremos como recurso um _while_ loop, ou seja, daremos um estado inicial, uma condição e uma instrução para o computador e pediremos para ele repetir a instrução __enquanto__ a condição for atendida.

Em nosso caso, a instrução será: imprima o número "atual" (você já entenderá isso), armazenado na variável "contador", e some mais um. A condição será: enquanto a variável "contador" for menor ou igual a 42. Se vamos começar a contar a partir do 1, nosso estado inicial será igualar o "contador" a 1. Veja como fica o código:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
contador <- 1

while (contador <= 42) {
  print(contador)
  contador <- contador + 1
}

print(contador)

```

Traduzindo para o português: "enquanto o contador for menor ou igual a 42, imprima e some um". A estrutura de um _while_ loop é sempre: "enquanto" (condição), "faça" (instrução).

Veja que precisamos planejar muito bem o _while_ loop. Se, por exemplo, esquecermos de pensar como a condição inicial será alterada a cada __iteração__ (sem o "n" mesmo, pois é diferente de "interação"), corremos o risco de criar um "loop infinito". O critério de parada (condição entre parênteses) deve ser atendido em algum ponto do programa para que ele seja interrompido.

Vamos complicar. Seguiremos contando até 42, mas todas as vezes em que o número for par (ou seja, múltiplo de 2), deixaremos de imprimir o número. Como fazer isso? Com _if_.

Dica: para saber se um número é divisível por outro, basta usar o resto da divisão (consulte o tutorial anterior %%) e checar se é igual a zero.

```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
contador <- 1

while (contador <= 42) {
  if ((contador %% 2) != 0){
    print(contador)
  }
  contador <- contador + 1
}

print(contador)
```

Veja que temos agora um código "aninhado", pois colocamos um condicional dentro de um loop. Novamente, combinar estruturas de código é mais um problema de lógica do que de linguagem e, se você consegue fazer no papel, consegue traduzir para o R.

## Repetindo tarefas - for loop

E se em vez de repetir uma tarefa até atingir uma condição já soubermos quantas vezes queremos repetí-la? Neste caso, podemos usar o _for_ loop. O loop não será mais do tipo "enquanto x faça y" mas "para todo i 'em' a até b". Veja como o exemplo de contar até 42 ficaria com _for_ loop:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
for (i in 1:42){
  print(i)
}
```

Neste caso, lemos "para cada i 'em' 1 até 42, faça". O que o _for_ loop faz é variar o i a cada iteração de acordo com a sequência estabelecida. Outro exemplo, agora na ordem reversa:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
for (i in 10:-10){
  print(i)
}
```

Agora com a condição de não imprimir os pares:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
for (i in 1:42){
  if((i %% 2) != 0){
    print(i)
  }
}
```

_for_ loops não precisam ser apenas com números. Na verdade, você pode colocar após o "in" qualquer vetor. Por exemplo, um vetor das regiões brasileiras (ou UFs, se você tiver paciência de escrever todas):
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
vetor_regioes <- c("norte", "nordeste", "sudeste","sul", "centro-oeste")

for (regiao in vetor_regioes){
  print(regiao)
}
```

Se você já trabalhou com dados eleitorais brasileiros, você certamente teve de abrir diversos arquivos semelhantes, cada um contendo informações de um estado brasileiro. Ou ainda, se você já obteve informações na internet talvez tenha precisado "passar" por diversas páginas semelhantes. Loops resolvem problemas desse tipo: eles repetem procedimentos variando apenas um índice. Aprender a usar loops economiza um tempo enorme, pois conseguimos automatizar tarefas ou, pelo menos, escrever um código mais curto para aplicar o mesmo comando inúmeras vezes.

Vamos parar por aqui com _loops_ e voltaremos a eles para fazermos exercícios.

## Escrevendo funções

Ao longo dos três tutorais que fizemos usamos diversas funções e já estamos acostumados com elas. Vamos agora aprender a construir funções simples. Vamos do exemplo à aplicação. E nosso exemplo será, novamente, um conversor de farenheit para celsius:
  
```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
conversor <- function(farenheit){
  celsius <- ((farenheit - 32) / 9) * 5
  return(celsius)
}

conversor(212)
conversor(32)
```

Temos vários elementos no "construtor" de funções. Em primeiro lugar, criamos a função como criamos um objeto. Quer dizer, escolhemos um nome para ela e atribuímos a função criada a esse nome.

Para criar uma função, usamos _function_. Basicamente, o "construtor" tem duas partes: os argumentos da função, que inserimos no parênteses após _function_; e o corpo da função em chaves, que utiliza os argumentos para realizar uma tarefa e retorna um resultado, indicado pela função _return_.

## Exercício

Crie uma função chamada "quadrado" que recebe um número "x" e retorna o quadrado de x.

## Reposta

```{r eval=FALSE, message=FALSE, warning=FALSE, include=TRUE}
quadrado <- function(x){
  resultado <- x * x
  return(resultado)
}

quadrado(4)
quadrado(17)
```

## Exercício

- Crie uma função que recebe um valor em reais e retorna o valor em dólares (use a cotação do dia e coloque como nota no script)
- Crie uma função que recebe um valor em reais e uma cotação do dólar e retorna o valor em dólares (ou seja, que contém 2 parâmetros).


### Dica de Leitura

Uma boa leitura para acompanhar esta parte do curso são as partes II e III do livro _Hands-on Programming With R_, de Garret Grolemund.

