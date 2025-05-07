---
date: "2025-04-02T00:00:00+01:00"
draft: false
menu:
  gis_ae_cs:
    parent: Introdução à disciplina
    weight: 9
title: Decisão de qual software usar
toc: false
type: docs
weight: 9
---

Esta atividade tem como objetivo explorar o R e o QGIS para manipulação de dados espaciais. Para isso, vamos utilizar o banco de dados espaciais de limites de bairros em Belo Horizonte e a localização de atividades econômicas formais, disponíveis no [BHMAP](https://bhmap.pbh.gov.br/v2/mapa/idebhgeo#zoom=4&lat=7796893.0925&lon=609250.9075&baselayer=base).

---

# Algumas informações gerais:

## R e RStudio

O `R` é a linguagem que utilizaremos. O `RStudio` é um ambiente de desenvolvimento integrado (IDE) para R. Ele inclui um console, editor de sintaxe que suporta a execução de código, bem como ferramentas para plotagem, depuração e gerenciamento de ambiente de trabalho.

A estrutura do `R` fundamenta-se em uma grande variedade de ferramentas quantitativas, organizadas por meio de **objetos**, **funções** e **packages**. A instalação base do `R` já contempla uma série de funções e packages. Packages adicionais podem ser instalados quando for necessário ou interessante. Para instalação de packages, utiliza-se a função `install.packages()`.

A priori, instale os seguintes pacotes no seu computador:

```{r}
install.packages(c("rmarkdown", "knitr", "dsbox", "tidyverse", "coronavirus", "lubridate", "glue", "scales", "ggrepel", "DT", "flexdashboard", "blogdown", "bookdown", "pagedown", "xaringan", "xaringanthemer", "janitor", "jsonlite", "kableExtra", "leaflet", "officedown", "openxlsx", "readr", "readxl", "devtools", "remotes", "swirl", "stringr", "tmap", "tmapstool", "rvest", "viridis", "installr", "distill", "rticles", "data.table", "ggplot2", "hrbrthemes", "plotly", "learnr", "prettydoc", "corrplot", "tufte", "ggpubr", "sf", "htmlwidgets"))
```

Ao longo do curso chamaremos as bibliotecas para que possamos implementar as funções.

Em caso de dúvidas, assista o seguinte video: 

<iframe width="1197" height="645" src="https://www.youtube.com/embed/dOasm9dKjKE?list=PLqDTVtdD-5aPagWJB6_0IaKN3IpIGhFU1" title="HelloR! Breve introdução de funções, pacotes e objetos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Os objetos `sf` podem armazenar informações adicionais sobre os **sistemas de referência de coordenadas** (CRS). O valor padrão é NA (Não Disponível), como pode ser verificado com st_crs():

```{r}
st_crs(world)
```

[EPSG](https://epsg.io/) simplifica a exploração de sistemas de referência de coordenadas utilizados em todo o mundo para a criação de mapas e geodados e para a identificação da geo-posição. É uma ferramenta prática para qualquer pessoa interessada em cartografia e elaboração de mapas digitais, que precisa conhecer os valores exatos de latitude e longitude para coordenadas numéricas em diferentes sistemas de referência espacial. 

Quando um sistema de referência de coordenadas (CRS) está faltando ou o CRS errado está configurado, a função `st_set_crs()` pode ser usada:

```{r}
new_vector = st_set_crs(new_vector, "EPSG:4326") # set CRS
```

---

# Atividades

Esta atividade deverá ser realizada no dia **02/04/25**. São propostos os seguintes exercícios:

1. Instale os aplicativos R e RStudio, nessa ordem, conforme diretrizes do [link](https://www.places.education/cursos/intro_r/install/) 

2. Faça a instalação do aplicativo QGIS. O download do instalador pode ser obtido no [link](https://qgis.org/download/)

3. Abra o QGIS e o RStudio e verifique se estão funcionando corretamente. Explore o ambiente do RStudio e do QGIS.

4. Leia os tópicos Dados espaciais e QGIS na [página](https://www.places.education/cursos/spatial/localizacao/#dados-espaciais) com cuidado e entenda o que é a estrutura de arquivos denominada `shapefile`.  

5. Faça o download dos shapefiles referente aos bairros BH e atividades econômicas formais no site [BHMAP](https://bhmap.pbh.gov.br/v2/mapa/idebhgeo?#zoom=4&lat=7796893.0925&lon=609250.9075&baselayer=base)

6. Abra o QGIS e carregue os shapefiles referentes aos bairros BH e atividades econômicas formais.

7. Carregue os shapefiles no RStudio utilizando o pacote `sf` e explore as respectivas funções do pacote para manipulação de dados espaciais. 

```{r}
shapefile <- st_read('caminho do arquivo')
```

Informações sobre este procedimento estão disponíveis no [link](https://www.places.education/cursos/spatial/geodata/). Mas não se apresse. Utilize apenas a função `st_read()` para carregar os shapefiles.  

```{r}
vignette(package = "sf") # see which vignettes are available
vignette("sf1")          # an introduction to the package
```

8. Agora gere o seu primeiro mapa de representação dos dados espaciais no QGIS e no RStudio. 

No QGIS é bem direto. Basta clicar no botão `Add Vector Layer` e selecionar o shapefile que deseja visualizar.

No RStudio você pode utilizar a função `plot()` para visualizar os dados. 

```{r}
plot(dados)
```

---

# Hora de pensar

a. O que quer dizer a representação gerada por você?

b. Quais as diferenças entre a representação no QGIS e no RStudio?

b. Qual a diferença entre dados espaciais e dados não-espaciais? 

c. Qual a diferença entre dados vetoriais e raster? 

d. Quais os cuidados necessários para representação geográfica em diferentes sistemas de projeção geográfica?

e. Quais os tipos de geometria de dados vetoriais são representados por meio do pacote `sf`?

f. Qual o EPGS para estudos em BH que precisem de um sistema de projeção de coordenadas? 
