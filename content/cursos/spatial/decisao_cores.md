---
date: "2025-04-02T00:00:00+01:00"
draft: false
menu:
  spatial:
    parent: Dicas
    weight: 9
title: Decisão de qual paleta de cores utilizar
toc: false
type: docs
weight: 9
---

# **Escolha de Esquemas de Cores em Mapas Temáticos**  

A seleção adequada de cores é fundamental para a eficácia da comunicação cartográfica. Diferentes esquemas de cores transmitem diferentes tipos de informação e devem ser escolhidos com base na natureza dos dados e no objetivo do mapa.  

---

## **1. Cores Sequenciais**  
**Quando usar:**  
- Para representar **dados quantitativos ordenados** (ex.: população, elevação, densidade)  
- Quando os valores variam de **baixo para alto** sem um ponto médio crítico  

**Características:**  
- Utiliza uma única cor em gradiente (ex.: claro → escuro) ou uma sequência de cores harmoniosas (ex.: amarelo → laranja → vermelho)  
- Ideal para mostrar **intensidade** ou **magnitude**  


---

## **2. Cores Divergentes**  
**Quando usar:**  
- Para dados que **desviam de um valor central** (ex.: variação percentual, anomalias climáticas)  
- Quando há **um ponto neutro ou crítico** (ex.: média zero, valor de referência)  

**Características:**  
- Combina duas cores contrastantes (ex.: azul → branco → vermelho) com um ponto médio neutro  
- Destaca **desvios positivos e negativos** em relação à média  


---

## **3. Cores Qualitativas**  
**Quando usar:**  
- Para **dados categóricos sem ordem** (ex.: tipos de solo, regiões administrativas)  
- Quando as classes **não têm relação quantitativa** entre si  

**Características:**  
- Cores distintas e altamente contrastantes (ex.: vermelho, azul, verde, amarelo)  
- Evitar gradientes, pois podem sugerir hierarquia inexistente  


---

## **4. Cores Bivariadas**  
**Quando usar:**  
- Para representar **duas variáveis quantitativas simultaneamente** (ex.: renda × educação)  
- Quando a relação entre duas métricas é importante  

**Características:**  
- Combina dois esquemas de cores (geralmente sequenciais) em uma matriz  
- Requer legenda complexa e cuidado para não sobrecarregar o mapa  


---

## **5. Regras Gerais para Escolha de Cores**  
1. **Considere daltônicos**: Evite vermelho/verde puros; use [ColorBrewer](https://colorbrewer2.org/) para paletas acessíveis.  
2. **Mantenha a consistência**: Use o mesmo esquema para mapas comparativos.  
3. **Evite sobrecarga**: Limite a 7-8 classes para evitar confusão.  
4. **Contexto cultural**: Em mapas de risco, vermelho = perigo é quase universal.  

---

**Referências:**  
- **ColorBrewer 2.0** (2024): [Ferramenta online para paletas cartográficas](https://colorbrewer2.org/)  
- **Slocum, T.A.** (2005). *Thematic Cartography and Visualization*. Prentice Hall.  
- **IBGE** (2010). *Normas de Representação Cartográfica*. Disponível em: [https://biblioteca.ibge.gov.br/](https://biblioteca.ibge.gov.br/)    
- [PennState](https://www.e-education.psu.edu/geog486/node/881)

