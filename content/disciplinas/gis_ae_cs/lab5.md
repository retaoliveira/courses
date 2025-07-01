---
date: "2025-05-07T00:00:00+01:00"
draft: false
menu:
  gis_ae_cs:
    parent: Labs
    weight: 10
title: Lab 5 - Criando Layouts no QGIS
toc: false
type: docs
weight: 10
---

## Objetivos da Atividade
Ao final desta atividade, os alunos serão capazes de:
- Compreender os elementos essenciais de um layout de mapa.
- Criar e personalizar um layout no QGIS.
- Adicionar e formatar elementos como título, legenda, escala e rosa dos ventos.
- Exportar o layout em formatos como PDF ou imagem.

## 1. Introdução

### O que é um Layout no QGIS?
No QGIS, um layout (ou Layout de Impressão) é uma ferramenta que permite organizar e compor mapas para apresentação ou impressão. Ele funciona como uma "prancha de design" onde você pode adicionar e ajustar elementos cartográficos, como:
- Mapa principal (a visualização dos dados geográficos).
- Título (identificação do mapa).
- Legenda (explica cores e símbolos usados).
- Escala gráfica ou numérica (indica proporção real do mapa).
- Sistema de referenciação (projeção utilizada).
- Rosa dos ventos (orientação geográfica).
- Fonte dos dados (créditos da informação).
- Textos explicativos, imagens ou gráficos (contexto adicional).

### Importância na Cartografia
O layout é essencial porque:
- Transforma dados brutos em comunicação visual
- Dados geográficos sozinhos não são intuitivos. O layout organiza essas informações de forma clara e acessível.
- Padroniza a apresentação de mapas
- Garante que todos os elementos necessários (como escala e legenda) estejam presentes, seguindo normas técnicas (ex.: ABNT para cartografia).
- Melhora a legibilidade e o impacto

### Um bom layout:   
- Evita poluição visual, destacando o que é relevante (ex.: usar cores contrastantes para enfatizar áreas de interesse).
- Facilita a tomada de decisões
- Mapas bem elaborados são usados em relatórios, planejamento urbano, gestão ambiental etc. 
- Um layout profissional transmite credibilidade.
- Prepara para impressão ou compartilhamento digital

> O QGIS permite exportar o layout em formatos como PDF, PNG ou SVG, adequados para relatórios, artigos ou apresentações.

Os elementos **obrigatórios** de um mapa são cinco: título, legenda, escala cartográfica, orientação e projeção. O título revela o tema ou conteúdo do mapa. A legenda apresenta o significado dos símbolos presentes no mapa. A escala cartográfica indica a relação entre as dimensões no mapa e as dimensões na superfície real.

### Diferença entre Mapa e Cartograma

#### **1. Mapa**  
- **Definição:** Representação geográfica **proporcional** do espaço, mantendo a forma e a escala real de elementos (como territórios, rios, estradas).  
- **Objetivo:** Mostrar a localização e distribuição espacial de fenômenos com precisão métrica.  
- **Exemplos:**  
  - Mapa político do Brasil (com fronteiras estaduais).  
  - Mapa topográfico (com curvas de nível).  
  - Mapa de ruas de uma cidade.  

#### **2. Cartograma**  
- **Definição:** Representação **distorcida geograficamente**, onde áreas ou distâncias são modificadas para refletir **variáveis quantitativas** (ex.: população, PIB, votos).  
- **Objetivo:** Destacar dados estatísticos, não a geografia física.  
- **Tipos:**  
  - **Cartograma de Área:** Tamanho das regiões é proporcional a um dado (ex.: países aumentados conforme população).  
  - **Cartograma de Distorção:** Mantém o formato original, mas estica/contrai áreas (ex.: mapa de votos por região).  
- **Exemplos:**  
  - Mapa do mundo com países redimensionados pela população.  
  - Cartograma eleitoral (onde áreas votantes são ampliadas conforme número de eleitores).  

---

### **Comparação Direta**  
| **Característica**       | **Mapa**                          | **Cartograma**                     |  
|--------------------------|-----------------------------------|------------------------------------|  
| **Precisão Geográfica**  | Mantém formas e escalas reais.    | Distorce formas para enfatizar dados. |  
| **Uso Principal**        | Navegação, localização.           | Análise estatística/comparativa.   |  
| **Elementos Visuais**    | Cores, símbolos, legendas.        | Distorção proporcional a valores.  |  
| **Exemplo Clássico**     | Mapa rodoviário.                  | Mapa da Europa com países redimensionados pelo PIB. |  

---

### **Quando Usar Cada Um?**  
- **Use um mapa** para:  
  - Encontrar rotas, planejar viagens.  
  - Mostrar características físicas (relevo, hidrografia).  
- **Use um cartograma** para:  
  - Comparar dados estatísticos entre regiões.  
  - Chamar atenção para desigualdades (ex.: renda per capita).  


## 2. Preparação do Projeto.  
- Abra o QGIS e carregue o projeto.
- Ajuste a simbologia básica (cores, rótulos) para visualização inicial.

## 3. Criando o Layout.  
### 3.1. Acessando o Gerenciador de Layouts
Menu: Projeto → Novo Layout de Impressão (ou Ctrl+P).   
Nomeie o layout (ex.: "Meu Primeiro Mapa").

### 3.2. Configurando a Página
Defina o tamanho (A4, paisagem ou retrato).   
Escolha a unidade de medida (metros, quilômetros, etc.).    
Ajuste margens e grade (opcional).   

### 3.3. Inserindo Elementos
**Mapa Principal:**.  
Clique em "Adicionar Mapa" e desenhe um retângulo na página.     
Ajuste a extensão do mapa arrastando as bordas do retângulo.   
Ajuste a extensão usando "Mover Conteúdo" e "Zoom".   

**Título:**.  
Adicionar Rótulo → Digite um título (ex.: "Mapa de Municípios").   
Formate fonte, tamanho e alinhamento.
      
**Legenda:**.   
Adicionar Legenda → Selecione as camadas a serem exibidas.   
Personalize cores e organização.   

**Escala:**.  
Adicionar Escala → Escolha entre gráfica ou numérica.  

**Rosa dos Ventos (Norte):**.  
Adicionar Imagem (se usar símbolo personalizado) ou "Adicionar Norte".

### 3.4. Ajustes Finais.  
Alinhe os elementos usando ferramentas de alinhamento e distribuição.   
Adicione caixa de texto para créditos (ex.: "Fonte: IBGE, 2023").   

## 4. Exportando o Mapa   
- Layout → Exportar como PDF/Imagem (PNG, JPEG).   
- Verifique resolução (recomendado: 300 DPI para impressão).   


> Critérios de avaliação: (i) organização do layout, (ii) presença de elementos essenciais, e (iii) clareza e estética.

