---
date: "2025-05-07T00:00:00+01:00"
draft: false
menu:
  gis_ae_cs:
    parent: Labs
    weight: 9
title: Lab 3 - Gerando os primeiros mapas temáticos (coropléticos)
toc: false
type: docs
weight: 9
---

# **Roteiro para Criação de Mapa Temático da População de Belo Horizonte (Censo 2010)**  

## **1. Teoria sobre Classificação e Categorias em GIS**  

### **1.1. Introdução**  
A classificação de dados em GIS é fundamental para a representação visual de informações espaciais. Diferentes métodos de classificação podem alterar significativamente a interpretação dos dados, especialmente em análises estatísticas espaciais.  

A escolha do método de classificação deve considerar a natureza dos dados, o público-alvo e o objetivo da análise.


### **1.2. Métodos de Classificação**  

#### **a) Intervalos Iguais (Equal Interval)**  
- **Descrição**: Divide os dados em intervalos de tamanho fixo.  
- **Vantagens**: Simples de entender e implementar.  
- **Desvantagens**: Pode criar classes vazias ou distorcer a distribuição real dos dados.  
- **Uso recomendado**: Quando os dados são uniformemente distribuídos.  


#### **b) Quantis (Quartis, Quintis, Decis)**  
- **Descrição**: Divide os dados em grupos com o mesmo número de observações.  
- **Vantagens**: Cada classe tem a mesma quantidade de elementos, útil para destacar desigualdades.  
- **Desvantagens**: Pode agrupar valores muito diferentes na mesma classe.  
- **Uso recomendado**: Análise socioeconômica (ex.: renda, densidade populacional).  

#### **c) Jenks (Natural Breaks)**  
- **Descrição**: Minimiza a variância dentro das classes e maximiza entre elas.  
- **Vantagens**: Identifica clusters naturais nos dados.  
- **Desvantagens**: Pode ser subjetivo e dependente do número de classes escolhido.  
- **Uso recomendado**: Quando se busca agrupamentos naturais (ex.: distribuição populacional).  

#### **d) Pretty Breaks**  
- **Descrição**: Cria intervalos "arredondados" e fáceis de interpretar.  
- **Vantagens**: Facilita a leitura do mapa.  
- **Desvantagens**: Pode não refletir a distribuição real dos dados.  
- **Uso recomendado**: Mapas para público geral.  

#### **e) Desvio Padrão**  
- **Descrição**: Classifica os dados com base na distância da média.  
- **Vantagens**: Útil para identificar outliers.  
- **Desvantagens**: Assume distribuição normal, o que nem sempre é verdade.  
- **Uso recomendado**: Análise de desigualdades extremas.  

### **1.3. Impacto em Análises Estatísticas Espaciais**  
- **Autocorrelação espacial**: Métodos como Jenks e Quantis podem destacar padrões locais.  
- **Comparabilidade**: Intervalos iguais facilitam comparações temporais.  
- **Viés de interpretação**: Escolha inadequada pode mascarar desigualdades.  

---  

## **2. Download do Shapefile dos Setores Censitários de BH (Censo 2010)**  

### **Fonte Confiável**: **BHMap**  
- **Link**: [https://bhmap.pbh.gov.br/v2/mapa/idebhgeo#zoom=4&lat=7796893.0925&lon=609250.9075&baselayer=base](https://www.bhmap.com.br/)  
- **Passos**:  
  1. Acesse o link acima.  
  2. Baixe o arquivo para **SETOR_CENSITARIO_2010**.  
  3. Extraia o arquivo ZIP e importe o shapefile (.shp) no seu QGIS.

### **Dados de População**  
- Os dados populacionais já estão incluídos no shapefile. Há uma estratificação dos dados por sexo e faixa etária. Escolha uma das variáveis para representar por meio de cores. 
- Caso precise de dados mais detalhados, consulte o [SIDRA - IBGE](https://sidra.ibge.gov.br/).  

---  

## **3. Processamento no QGIS (Exemplo Prático)**  

1. **Carregue o shapefile** no QGIS.  
2. **Classifique os dados** (Propriedades do Layer → Simbologia):  
   - Escolha um método (ex.: Jenks, Quantis).  
   - Defina o número de classes (5 a 7 é comum).  
3. **Aplique cores adequadas** (sequenciais para dados populacionais). [Cores](https://www.places.education/cursos/spatial/decisao_cores/) podem ser encontradas em sites como [ColorBrewer](https://colorbrewer2.org/).

4. **Adicione elementos do mapa** (legenda, escala, título).  
   - Use o menu "Layout" para criar um layout de impressão.  
   - Insira o mapa no layout.
   - Adicione elementos como título, legenda, escala e fonte.  
   - Ajuste a posição e o tamanho dos elementos conforme necessário.
      
5. **Exporte o mapa** em PDF ou imagem.  

---  

## **4. Referências**  
- **IBGE** (2023). Malhas Territoriais. Disponível em: [https://www.ibge.gov.br/](https://www.ibge.gov.br/).  
- IBGE (2010). Manual do Censo Demográfico. Disponível em: https://biblioteca.ibge.gov.br/.

- **Longley, P. A.** et al. (2015). *Geographic Information Science & Systems*. Wiley.   
- [Barcelona Field Works Center](https://geographyfieldwork.com/DataClassification.htm).  
Nota: Todas as imagens sugeridas estão disponíveis nas fontes citadas. Caso precise de arquivos prontos, recomendo buscar no Atlas Digital de BH ou gerar seus próprios mapas seguindo os tutoriais. 

# Bônus

## Manipulação de dados por meio de mapas coropléticos

[Fonte:](https://courtneyleaguetowsonportfolio.wordpress.com/2015/11/07/lab-6-choropleth-maps/) - Tradução livre

O mapeamento coroplético é um exemplo perfeito de como os dados podem ser manipulados para mostrar o que for mais vantajoso para a pessoa ou grupo que está apresentando o mapa. A simples mudança do método de classificação leva a versões completamente diferentes dos mesmos dados quando mapeados. Se você observar o mapa abaixo, criado usando o método de classificação de intervalos iguais, verá que o estado do Kentucky tem basicamente a mesma densidade populacional em todos os condados; isso é enganoso. A classificação de intervalos iguais pega os dados e os distribui uniformemente entre o número de classes especificado pelo cartógrafo; usei 5 classes para todos os mapas. Observando a classificação por Quebra Natural, ou Método de Jenks, é possível ver onde as quebras naturais ocorrem com base nos pontos baixos dos vales, conforme observado em um histograma; esse método fornece uma imagem melhor de como a densidade populacional ocorre no Kentucky, mas ainda é distorcido e não é uma boa imagem da distribuição. Com o método de classificação quantílica, você vê os dados divididos em grupos contendo quantidades iguais de densidade populacional, de modo que cada classe tenha o mesmo número de habitantes. Isso não dá uma boa representação porque as quatro primeiras classes cobrem valores de 1,7 a 9,5 e a última classe cobre valores de 9,5 a 177, o que é uma grande diferença. O mapa que eu acho que é a melhor representação é o que eu criei usando o método de classificação manual. Eu olhei para as estatísticas dos dados, juntamente com um histograma, para obter uma melhor compreensão dos dados e defini as classes com base nas informações estatísticas. Para a primeira classe, usei o menor valor como ponto de partida e defini o ponto final da classe no desvio padrão dos dados, neste caso os valores foram de 1,7 a 5,5. Minha próxima classe foi do final da primeira classe, 5,5, para o valor médio dos dados, ou 10,8. A terceira classe foi do final da segunda classe, 10,8, para o valor criado pela adição do valor mediano ao valor do desvio padrão para um total de 26,1. A quarta classe foi do final da terceira classe, 26,1, até o valor criado pela determinação do ponto médio dos dados, ou 88. A classe final concluiu os dados, indo de 88 a 177.

A classificação é muito importante na criação de mapas coropléticos. O cartógrafo precisa entender os dados para poder criar uma boa representação das informações. Usar estatísticas e histogramas é uma boa maneira de visualizar as quebras de dados e ajudar a determinar o número de classes e o método a serem usados.

![Kentuky](https://courtneyleaguetowsonportfolio.wordpress.com/wp-content/uploads/2015/11/lab6_11-1-15.jpg)

