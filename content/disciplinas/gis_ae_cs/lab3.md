---
date: "2025-05-07T00:00:00+01:00"
draft: false
menu:
  gis_ae_cs:
    parent: Labs
    weight: 9
title: Lab 3 - Geocodificação com QGIS
toc: false
type: docs
weight: 9
---

# 1. Introdução Teórica (20 min)

## Conceitos-chave:   

✅ Geocodificação: Processo de transformar endereços (texto) em coordenadas geográficas (latitude/longitude).   
✅ MMQGIS: Plugin do QGIS que facilita a geocodificação usando serviços como Google Maps, Nominatim (OpenStreetMap) e outros.   
✅ Aplicações: Mapeamento de clientes, logística, análise espacial, etc.

### Materiais necessários:
Computador com QGIS instalado (versão 3.x recomendada).

Arquivo CSV com endereços (cidades_sudeste_100.csv gerado anteriormente).

Conexão com a internet (para geocodificação online).

# 2. Configuração Inicial (15 min)

### Passo a passo:
1. Abra o QGIS e crie um novo projeto.

2. Instale o plugin MMQGIS (se não estiver instalado): Complementos → Gerenciar e Instalar Complementos → Busque por "MMQGIS" → Instale.

3. Carregue o arquivo CSV no QGIS: Camada → Adicionar Camada → Adicionar Camada de Texto Delimitado.

4. Selecione o arquivo cidades_sudeste_100.csv.

5. Defina "endereco" como campo de endereço e "cidade" como campo auxiliar.

#  3. Geocodificação Prática (40 min)
### Usando o MMQGIS para geocodificar:

1. Acesse a ferramenta de geocodificação: MMQGIS → Geocode → Geocode CSV with Google / OpenStreetMap.

2. Configure os parâmetros:   
- Arquivo de entrada: Selecione o CSV carregado.   
- Campo do endereço: endereco.   
- Campos opcionais: cidade (para melhorar a precisão).

3. Serviço de geocodificação:
- Google Maps (requer chave API, opcional).   
- Nominatim (OpenStreetMap) (gratuito, mas com limites).

4. Saída: Salve como Geocodificado.shp.

5. Execute e visualize os resultados:

- Os pontos serão plotados no mapa conforme os endereços.   
- Verifique se há endereços não encontrados (problemas comuns: erros de digitação, cidades ausentes).

# 4. Pós-Processamento e Análise (30 min)
### Atividades para os alunos:

🔹 Verificação de dados:

- Quantos endereços foram geocodificados com sucesso?   
- Quais endereços falharam? Como corrigir?

🔹 Estilização dos pontos:

- Classifique os pontos por cidade (cores diferentes).

🔹 Exportação do mapa:

- Salve o projeto e exporte um layout em PDF.

# 5. Discussão e Aplicações (15 min)
### Tópicos para debate:

- Quais são os limites da geocodificação gratuita (ex.: Nominatim tem taxa de requisições limitada)?
- Como melhorar a qualidade dos dados de entrada?
- Quais outras ferramentas de geocodificação existem (ex.: Google API, HERE Maps)?

# 6. Referências e Materiais Adicionais

📌 [Documentação do MMQGIS](https://plugins.qgis.org/plugins/mmqgis/).  
📌 [Nominatim (OpenStreetMap Geocoding)](https://nominatim.openstreetmap.org/).  
📌 [Tutorial QGIS + Geocodificação.](Tutorial QGIS + Geocodificação)  



