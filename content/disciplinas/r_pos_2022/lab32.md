---
title: "Lab 3.2"
draft: false
date: '2021-10-15T00:00:00+01:00'
menu:
  r_pos_2022:
    parent: Unidade 3
    weight: 8
toc: yes
type: docs
weight: 8
---

A **Unidade 3** é estruturada considerando os seguintes tópicos:
- Manipulação e transformação de dados no R: funções para manipulação e tratamento de dados. 
- Estatística descritiva e mineração de dados

## **Diretrizes gerais:**

1. Baixe o arquivo .Rmd e abra no RStudio. 

[Arquivo .Rmd](https://cefetmgbr-my.sharepoint.com/:u:/g/personal/renataoliveira_cefetmg_br/EeohRlLO7OtCtKdHO72GS2oBc8B1LBdlZuoRt02jIw2LLg?e=dUCXFm)

[Dados_1](https://cefetmgbr-my.sharepoint.com/:u:/g/personal/renataoliveira_cefetmg_br/EfDYw1DoMxxEvN0KwwO1lAkB3HM7kD0PyPkOVt7xZuYDeg?e=0MRodN)

[Dados_2](https://cefetmgbr-my.sharepoint.com/:u:/g/personal/renataoliveira_cefetmg_br/EeQ31dgeE5tEmJx0jd8-GOIB7LcbgxELZicMQ2NH4sNbLw?e=9ZC7CL)

2. Siga as diretrizes da atividade. 

3. Rode o arquivo .Rmd por meio do ícone `knitr` 

<hr></hr>

## **Manipulação de dados**

### Exercício 1.
Carregue os dados no seu ambiente. 

```{r load-data, message = FALSE}

dados1 <- read_csv("")
dados2 <- read_csv("")
```


### Exercício 2.

Responda as seguintes perguntas:

- Qual país historicamente ganhou mais medalhas nas olimpíadas de verão? Quantas foram? E qual a representação das mulheres nessa quantidade? 

- Demonstre o ranking de medalhas por país por ano olímpico separando os dados em olimpíadas de verão e de inverno. 

- Considere as olimpíadas de verão: para o país com o maior número de medalhas, demonstre o número de medalhas conquistadas por mulheres e o número de medalhas conquistadas por homens (considere as medalhas totais, levando em conta os atletas (medalhas) em esportes coletivos). 

- Qual país ganhou mais medalhas no volei masculino? Qual país ganhou mais medalhas no volei feminino?

