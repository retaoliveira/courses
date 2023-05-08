---
date: "2021-12-05T00:00:00+01:00"
draft: false
menu:
  sdss:
    parent: Unidade 3
    weight: 11
title: Atividade 3.1
toc: false
type: docs
weight: 11
---

## A **Unidade 7** é estruturada considerando os seguintes tópicos:

- Funções de manipulação de dados espaciais e operações espaciais
- Pacotes no R para tratamento da informação espacial


## Esta atividade deverá ser realizada até dia **20/01**. São propostas as seguintes atividades:

### 1. Explore o conteúdo no [link](https://www.places.education/cursos/spatial/operacoes-espaciais/) e faça o download do projeto no [link](https://cefetmgbr-my.sharepoint.com/:u:/g/personal/renataoliveira_cefetmg_br/EaVImhYLPpdPlsVyrbuWvP4Bx1KtolDq_Jv5KZE2DYixoA?e=B2imaS)

### 2. Chame os pacotes:

```{r}
library(sf)      # vector data package
library(dplyr)   # tidyverse package for data frame manipulation
library(spData)  # spatial data package
library(tmap)
library(tidyverse)
```

### Faça as seguintes atividades

a. Abra e inspecione os shapefiles referentes aos estados, municípios brasileiros, aeródromos e ferrovias. 

```{r}

brasil <- st_read("shapes/brasil/BR_UF_2020/BR_UF_2020.shp")

mun <- st_read("shapes/brasil/BR_Municipios_2020/BR_Municipios_2020.shp")

ferro <- st_read("shapes/ferro/Ferrovias/Ferrovias.shp")

aero <- st_read("shapes/aero/Aerodromos.shp")


plot(brasil)
plot(mun)
plot(ferro)
plot(aero)

```


b. Verifique os sistemas de representação geográfica e faça as transformações que sejam necessárias para realização de operações espaciais. 

```{r}
st_crs(brasil) == st_crs(ferro)
st_crs(brasil) == st_crs(aero) 
st_crs(brasil) == st_crs(mun)

```


c. Crie um arquivo espacial com a feição do estado de Minas Gerais a partir do arquivo `brasil`.

```{r}
mg_state <- brasil %>% 
   filter(NM_UF == "Minas Gerais")

plot(mg_state)
   
```
d. Crie um novo objeto espacial denominado `fca` a partir do objeto `ferro` (SIGLA_COIN == FCA)

```{r}
fca <- ferro %>% 
   filter(SIGLA_COIN == "FCA")
plot(fca)
```

d. Crie um buffer de 15 metros a partir dos trechos ferroviários da FCA.

```{r}
buffer_15 <- st_buffer(fca, dist = 15)
plot(buffer_15)
```

e. Selecione, de maneira espacial, os aeródromos que estão localizados em Minas Gerais. 

```{r}
aero_mg <- st_intersection(aero, mg_state)

plot(aero_mg)
```


f. Selecione, de maneira espacial, os municípios do estado de Minas Gerais.

```{r}
tm_shape(brasil) +
   tm_borders() +
tm_shape(mg_state) +
   tm_fill("red")

mg_mun <- st_intersection(mun, mg_state)

```

g. Faça dois mapas: (i) contendo o estado de minas, os municípios, e traçado da ferrovia; (ii) estado de minas, municípios e aeródromos. Melhore a estética dos mapas. 

```{r}
tm_shape(brasil) +
   tm_borders() +
tm_shape(mg_mun) +
   tm_borders() +
tm_shape(fca) +
   tm_lines()
```

