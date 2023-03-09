---
date: "2022-03-28T00:00:00+01:00"
draft: false
menu:
  dados_ppga:
    parent: Labs
    weight: 10
title: Lab 1.1
toc: false
type: docs
weight: 10
---

## A **Unidade 1** é estruturada considerando os seguintes tópicos:
- Instalação do R e do RStudio
- Como instalar o Git
- Criando uma conta no Github
- Instalar e carregar pacotes no R
- Instalar pacotes no R a partir do Github
- E aí, R? Entendendo o ambiente de trabalho
- Primeiros documentos no R - RMarkdown

## Diretrizes gerais:

1. Atualizar versões do R e do RStudio.

2. Baixe o arquivo .Rmd e abra no RStudio. 

[Arquivo](https://cefetmgbr-my.sharepoint.com/:t:/g/personal/renataoliveira_cefetmg_br/EZU9xzdlhX1Oi9ug12gdYE4B6VovNSxQtMMrHXJGslDFgA?e=2yi5Nl)

3. Instale os pacotes: 
  - `"tidyverse"`
  - `"tinytex"`
  - `"knitr"`
  - `"flexdashboard"`
  - `"xaringan"`
  - `"xaringanthemer"`
  - `"xaringanExtra"` - devtools::install_github("gadenbuie/xaringanExtra")
  - `"bookdown"`
  - `"blogdown"`
  
4. Chame as bibliotecas dos pacotes instalados
  - `library("tidyverse")`
  - `library("tinytex")`
  - `library("knitr")`
  - `library("flexdashboard")`
  - `library("xaringan")`
  - `library("xaringanthemer")`
  - `library("xaringanExtra")`
  - `library("bookdown")`
  - `library("blogdown")`

5. Corrija os problemas de códigos nos respectivos `chunks`. 

6. Rode o arquivo .Rmd por meio do ícone `knitr` 

> Dica: As barras que delimitam o endereçamento do arquivo no seu computador, quando exibidas no explorer do Windows, são invertidas (\). O R trabalha com barras normais (/) para endereçamento. 

## Exercício:

Carregue o *data frame* *mtcars*

```{r}
data(mtcars)
```

## Encontre o erro em todos os códigos abaixo, corrija-os e rode o script:

Q1)

```{r}
Head(mtcars)
```

Q2)

```{r}
str(Mtcars)
```

Q3)

```{r}
dim[mtcars]
```

Q4)

```{r}
nomes(mtcars)
```

Q5)

```{r}
head(mtcars, x = 10)
```

Q6)

```{r}
v1 <- ("pato", "cachorro", "minhoca", "lagarto")
```

Q7)

```{r}
v2 <- c("1", "2", "3", "4")
v1 + 42
```

Q8)

```{r}
v1 <- c("pato", "cachorro", "minhoca", "lagarto"
```

Q9)

```{r}
v3 <- c(33 31 40 25 27 40)
```

Q10)

```{r}
v1 <- c(pato, cachorro, minhoca, lagarto)
```

Q11)

```{r}
v1 <- c("pato" "cachorro" "minhoca" "lagarto")
```

Q12)

```{r}
v3 <- C(33, 31, 40, 25, 27, 40)
```

Q13)

```{r}
v1 <- c("pato", "cachorro"", "minhoca", "lagarto")
v3 <- c(33, 31, 40, 25, 27, 40)
myData <- data.frame(v1, v3)
```

Q14)

```{r}
v1 <- c("pato", "cachorro"", "minhoca", "lagarto")
v4 <- c(33, 31, 40, 25)
myData <- data.frame(v1 = animal, v4 = idade)
```

Q15)

```{r}
ls
```

Q16)

```{r}
v1 <- c("pato", "cachorro", "minhoca", "lagarto")
sum(v1)
```
