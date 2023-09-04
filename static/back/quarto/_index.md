---
title: "Introdução ao R"
draft: no
date: '2021-05-15T00:00:00Z'
menu:
  quarto:
    name: Organização do curso
    weight: 10
lastmod: '2022-08-12T00:00:00Z'
toc: yes
type: docs
weight: 10
---

## Proposta pedagógica

A intenção desta disciplina é fazer com que o aprendizado seja mais dinâmico e ocorra de forma simultânea, fazendo com que o aluno tenha as bases teóricas e teste-as ao mesmo tempo.

A proposta pedagógica para desenvolvimento deste curso fundamenta-se no conceito de `Aprendizagem Baseada em Projetos`. É proposto um `projeto integrador` para apreensão do conhecimento.

## Ementa da disciplina

- Olá Quarto!   
- Estrutura e tipos de documentos.    
- Renderização e autoria.    
- Cabeçalho YAML.    
- Código.    
- Links, figuras, tabelas de dados e formatação.    
- Zotero e referências.    
- Publicação de relatórios e documentos técnicos e científicos para colaboração.   

## Objetivos de aprendizagem

Esta disciplina tem por objetivo formar estudantes aptos a:   

- Utilizar as funções e a parametrização básica para produzir documentos   
- Criar e editar documentos como apresentações, artigos, blogs e websites   
- Utilizar o Rstudio + Quarto para gerar instrumentos de comunicação e representação de dados em colaboração   


## Planejamento de encontros síncronos

Os encontros síncronos acontecerão nas **terças-feiras**, de **08:15 às 12:00h**.

| **Data**           | **Descrição da Atividade**   
---------------------|---------------------------
11/10|Instalação do Quarto CLI em diferentes sistemas operacionais. Olá Quarto – apresentação geral de funcionalidades e tipos de documentos.|
18/10|Autoria de documentos, YAML e formatos.|
25/10|Code chunks, Markdown, renderização.|
01/11|Links, figuras, layout, tabelas, notas em destaque e referência cruzada.|
08/11|Zotero, citações e lista de referências. Publicação de documentos.|


| **Data**           | **Descrição da Atividade**   
---------------------|---------------------------
| 16/08| Unidade 1: Comunicação por meio do R: ambientação no R, RStudio e Rpubs; Hello R; RMarkdown. **Lab1**|

| 23/08| **Atividade 1**. Projeto integrador - definição do problema de pesquisa **PI**


| 30/08| Unidade 2: Visualização de dados no R; estrutura de dados no R; tipos de dados, importação de base de dados, criação de objeto (vetores, matrizes, data frames), operadores aritméticos, de comparação e lógicos; visualização de informações gerenciais e científicas. **Lab2**|

| 06/09| **Atividade 2**| 

| 13/09| Unidade 3: Manipulação e transformação de dados no R: funções para manipulação e tratamento de dados. Estatística descritiva e mineração de dados. **Lab3**| 

| 20/09| Projeto integrador: base de dados| 

| 27/09| Unidade 4: Argumentos lógicos; ifelse, which, igual, maior, menor que, join; subconjuntos com argumentos lógicos|

| 04/10| Apresentação do projeto integrador| 

| **Total de Horas** | 30 horas    |

## Proposta de avaliação da aprendizagem

A aprendizagem na disciplina será avaliada por meio da consolidação de atividades alinhadas com os objetivos de aprendizagem (projetos incrementais) e por meio da elaboração de um projeto transversal aos objetivos (projeto integrador).

| Pontos | Entrega | Atividade                                                                                                                                                                                                                                                    |
|--------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 10 |  Lab 1 – Introdução do R e IDE RStudio. RMarkdown. 
| 10 |  Lab 2 – Tipos de dados e objetos no R. Visualização de dados – base ggplot2
| 10 |  Lab 3 – Importação e introdução ao tratamento de dados no R. Tratamento de dados - dplyr. Junção de múltiplos dataframes
| 10 |  Lab 4 – Argumentos lógicos - ifelse, which, igual, maior, menor que, join; subconjuntos com argumentos lógicos
| 5 |  Atividade 1 
| 5 |  Atividade 2 
| 5 |  Atividade 3 
| 5 |  Atividade 4 
| 40 |  Projeto Integrador
| TOTAL: |         | 100 pontos

## Requisitos básicos e expectativas iniciais

Os participantes não precisam apresentar conhecimento prévio de computação, pacotes estatísticos ou manejo de conjuntos de dados. Se você é daquelas pessoas que, como eu há muito pouco tempo atrás, arrepia ao ver `códigos` na sua frente e tem certeza que nasceu sem a capacidade desenvolver quaisquer análises que envolvam `linha de comando`, você está no lugar certo! Fique tranquilo pois a proposta é que todos consigam acompanhar a disciplina e diferentes competências e inteligências são muito bem vindas! Vamos desconstruir essa ideia de que analistas, gestores e engenheiros não são formados para usar linguagem computacional.

Não quero que você se torne um desenvolvedor com este curso. Ele tem como proposta a ampliação das possibilidades de análise de sistemas organizacionais e suporte ao processo decisório. O `R` é uma linguagem acessível a todos.

A avaliação priorizará o esforço e a criatividade apresentados em detrimento da finalização das propostas e projetos. Ou seja, para encorajar todos os estudantes, códigos com erros, mas bem elaborados, são um ótimo produto a ser entregue ao longo da disciplina, como forma de encorajar estudantes iniciantes.

## Recursos necessários

Computador com Sistema Operacional à escolha do estudante para desenvolver as atividades. Os softwares a serem instalados são:

- R (Windows) - <https://cran.r-project.org/bin/windows/base/>
- RStudio (Windows) - <https://rstudio.com/products/rstudio/download/>
- Quarto CLI (Windows) - 
- Git - <https://git-scm.com/downloads>

Os alunos deverão ter uma conta gratuita na plataforma `github.com`. Recomendamos também que se cadastrem no [Quarto Pub](https://quartopub.com/)

A turma virtual do SIGAA será utilizada para postagens de conteúdos e outras comunicações.

## Bibliografia recomendada sobre análise de dados aplicada a processos decisórios

- ALLAIRE, J., TEAGUE, C., SCHEIDEGGER, C., XIE, Y., & DERVIEUX, C. Quarto (Version 0.3) [Computer software]. Disponível em https://doi.org/10.5281/zenodo.5960048 (www.quarto.org). Acesso em 10 ago. 2022.   
- HORTON, Nicholas J.; KLEINMAN, Ken. Using R and RStudio for data management, statistical analysis, and graphics. Second edition. Boca Raton: CRC Press, Taylor & Francis Group, 2015.   
- PARADIS, Emanuel. R for Beginners. Disponível em: https://www.nceas.ucsb.edu/files/ scicomp/ Dloads/RProgramming/BestFirstRTutorial.pdf . Acesso em: 12/11/2019.     
- TEETOR, Paul. R cookbook: Proven recipes for data analysis, statistics, and graphics. Sebastopol: O'Reilly Media, Inc., 2011.   



## Material adicional

[R Project](https://www.r-project.org/)   
[Reproductible research](https://cran.r-project.org/web/views/ReproducibleResearch.html)

## Comunicação

Toda comunicação individual com a docente deverá acontecer por meio do email institucional do docente, deve conter no campo "assunto" o texto `<R-PPGA>` e deve ser assinada com seu nome completo. Por favor, utilize o email institucional para comunicação com o docente: [renataoliveira@cefetmg.br](mailto:renataoliveira@cefetmg.br)


## Políticas institucionais e da disciplina

Os estudantes e professores têm a responsabilidade de manter um ambiente de aprendizagem adequado e motivante. Aqueles que não aderirem a tais padrões de comportamento podem estar sujeitos ao regime disciplinar da instituição. A cortesia profissional e a sensibilidade são especialmente importantes no que diz respeito a indivíduos e discussões que lidam com diferenças de raça, cor, cultura, religião, credo, política, status de veterano, orientação sexual, gênero, identidade e expressão de gênero, idade, deficiência e nacionalidades. As listas de classes são fornecidas ao instrutor com o nome legal do aluno. Terei prazer em honrar seu pedido de dirigir-se a você por um nome alternativo ou pronome de gênero. Por favor, me informe essa preferência no início do semestre para que eu possa fazer as mudanças apropriadas em seus registros.

Não serão tolerados atos de discriminação ou assédio contra ou por qualquer funcionário ou estudante.

Honestidade acadêmica é um princípio fundamental desta disciplina. Desonestidade acadêmica configura-se por: cópias literais de textos ou ideias sem citação de fonte, fabricações e falsificações de qualquer natureza, plágio, mentira, suborno, comportamento ameaçador ou cumplicidade com desonestidade acadêmica em qualquer nível. Os estudantes que forem considerados em violação da política de integridade acadêmica estarão sujeitos tanto a sanções acadêmicas do membro docente quanto a sanções não acadêmicas. Se você tiver alguma dúvida sobre citações adequadas, configuração de plágio, etc., por favor, não hesite em perguntar!
