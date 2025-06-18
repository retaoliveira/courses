---
date: "2025-05-07T00:00:00+01:00"
draft: false
menu:
  gis_ae_cs:
    parent: Labs
    weight: 10
title: Lab 4 - Operações espaciais
toc: false
type: docs
weight: 10
---

# Principais Operações Espaciais no QGIS

## 1. Buffer (Zona de Influência)
Cria uma área de influência ao redor de um objeto espacial (ponto, linha ou polígono) com uma distância especificada.

### Como fazer no QGIS:
Vá para "Vetorial" > "Geoprocessamento" > "Buffer".

Selecione a camada de entrada.

Defina a distância do buffer (em metros ou outra unidade).

Escolha o local de saída e execute.

## 2. Interseção
Identifica áreas onde duas ou mais camadas se sobrepõem, gerando uma nova camada apenas com as regiões comuns.

### Como fazer no QGIS:
Acesse "Vetorial" > "Geoprocessamento" > "Interseção".

Selecione as camadas de entrada.

Defina a camada de saída e execute.

## 3. Diferença
Remove áreas de uma camada que coincidem com outra, mantendo apenas o que não se sobrepõe.

### Como fazer no QGIS:
Vá para "Vetorial" > "Geoprocessamento" > "Diferença".

Selecione a camada base e a camada de subtração.

Salve o resultado e execute.

## 4. Dissolver (União)
Agrupa feições adjacentes ou com atributos em comum em um único polígono.

### Como fazer no QGIS:
Acesse "Vetorial" > "Geoprocessamento" > "Dissolver".

Escolha a camada e o campo para agrupamento (opcional).

Execute e salve o resultado.

## 5. Cortar (Clip)
Extrai apenas as feições de uma camada que estão dentro dos limites de outra.

### Como fazer no QGIS:
Vá para "Vetorial" > "Geoprocessamento" > "Cortar".

Selecione a camada de entrada e a camada de recorte (máscara).

Defina a saída e execute.

## 6. União (Merge)
Combina múltiplas camadas em uma única, sem sobreposição lógica (apenas junção).

### Como fazer no QGIS:
Vá para "Vetorial" > "Ferramentas de Gerenciamento de Dados" > "Mesclar Camadas Vetoriais".

Selecione as camadas a serem unidas.

Defina o formato de saída e execute.

## 7. Centroides
Calcula o ponto central de polígonos.

### Como fazer no QGIS:
Acesse "Vetorial" > "Geometria" > "Centroides".

Selecione a camada de polígonos.

Salve a camada de pontos resultante.

## 8. Distância Mais Próxima (Nearest Neighbor)
Identifica a feição mais próxima entre duas camadas.

### Como fazer no QGIS:
Use a Calculadora de Campos ou o plugin "Distance to Nearest Hub".

Configure as camadas de origem e destino.

Execute para gerar distâncias ou linhas de conexão.

## 9. Extrair por Localização (Select by Location)
Seleciona feições com base em relações espaciais (dentro de, tocam, intersectam, etc.).

### Como fazer no QGIS:
Vá para "Vetorial" > "Ferramentas de Pesquisa" > "Selecionar por Localização".

Defina a camada alvo e a camada de referência.

Escolha a relação espacial (ex.: "contém", "intersecta").

Aplique a seleção.

## 10. Rede Viária (Roteamento e Análise de Redes)
Realiza cálculos de rotas e distâncias em redes (estradas, rios, etc.).

### Como fazer no QGIS:
Use o plugin "QGIS Network Analysis Tool" (QNEAT3).

Carregue a camada de rede viária.

Defina pontos de origem e destino.

Calcule rotas ou matrizes de distância.

## Conclusão
O QGIS oferece diversas operações espaciais essenciais para análise geográfica. Essas ferramentas permitem desde cálculos simples (como buffers e interseções) até análises avançadas (como redes e estatísticas espaciais). Dominar essas funcionalidades é fundamental para trabalhos em geoprocessamento, planejamento territorial e estudos ambientais.
