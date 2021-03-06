---
title: "Pacote Xaringan para apresentações"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2020-12-30T17:28:42-03:00
lastmod: 2020-12-30T17:28:42-03:00
featured: false
draft: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false


projects: []
---


```{r setup, include=FALSE}
knitr::opts_chunk$set(warning = FALSE, message = FALSE, echo = FALSE)
library(tidyverse)
library(knitr)
library(kableExtra)
library(fontawesome)
```


## Slides {#slides}

[Download slide .Rmd](../../../slides/xaringan.Rmd)

```{r}
slides <- tribble(~link, ~description, 
                      "../../../slides/xaringan.html#1", "Full slide deck",
                      "../../../slides/xaringan.html#outline", "Outline", 
                      "../../../slides/xaringan.html#start-here", "Start Here")

slides %>% 
  mutate(emoji_id = c(emo::ji("picture"), 
                      emo::ji("heavy_check_mark"), 
                      emo::ji("round_pushpin"))) %>%
  mutate(slide = cell_spec(glue::glue('{emoji_id} {description}'), 
                           "html", 
                           link = link)
         ) %>% 
  select("Key Slides" = slide) %>% 
  kable("html", escape = FALSE) %>%
  kable_styling(bootstrap_options = c("hover", "condensed")) 
```


## Activities {#activity}


```{r}
activities <- tribble(~link, ~description, ~time,
                      "../../../slides/xaringan.html#yourturn1", "Season some slides with remark.js salt", "10:00 minutes",
                      "../../../slides/xaringan.html#yourturn2", "Fatten up your slides with some R code chunks (+ knitr butter)", "05:00 minutes",
                      "../../../slides/xaringan.html#yourturn3", "Add some acid to your slides with images", "08:00 minutes",
                      "../../../slides/xaringan.html#yourturn4", "Raise the heat on your slides by changing themes", "03:00 minutes",
                      "../../../slides/xaringan.html#yourturn5", "Serve your slides by publishing them online", "05:00 minutes")

activities %>% 
  mutate(activity = cell_spec(glue::glue('{emo::ji("heavy_plus_sign")} Your turn #{
                                          stringr::str_sub(
                                                            htmltools::htmlEscape(link, attribute = TRUE),
                                          start = -1)}: {description}'), 
                           "html", 
                           link = link),
         time = glue::glue('{emo::ji("clock")} {time}')
         ) %>%
  select(Activity = activity, Time = time) %>% 
  kable("html", escape = FALSE) %>%
  kable_styling(bootstrap_options = c("hover", "condensed")) 
```




