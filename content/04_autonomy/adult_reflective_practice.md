---
id: adult_reflective_practice
title: "Epistemic Integration in Complex Arenas: Real Work and Reflective Practice"
ontogeny: 6.5
tags:
  - pyragogy
  - pyragogy/practice
aliases:
  - adult_book
type: practice
praxis_index: 8
autonomy_index: 7.5
phase: autonomy
status: operational
description: ""
relations:
  - target: "[[collaborative_thinking]]"
    type: requires
  - target: "[[ai_over_reliance]]"
    type: contradicts
---
## 1. Definizione
La Reflective Practice per gli adulti è l'integrazione strutturale della frizione cognitiva in ambienti professionali reali, progettata per rallentare l'accettazione automatica degli output AI in contesti ad alta pressione temporale.

## 2. Uso
Si attiva nella produzione di deliverable professionali critici (es. architetture software, piani strategici, valutazioni cliniche) in cui si utilizzano agenti AI per accelerare lo sviluppo o generare prime bozze.

## 3. Ruolo Umano
Mantiene l'autonomia matura: definisce i criteri di accettazione *prima* della generazione, inquadra il contesto specifico del dominio, valida l'output e si assume l'esclusiva responsabilità legale, etica e tecnica del risultato finale.

## 4. Ruolo AI
Funziona da acceleratore di produzione e controllore diagnostico (Diagnostic Checker). Opera strettamente all'interno dei confini e dei vincoli stabiliti dal professionista, fornendo sintesi o variazioni ad alta velocità.

## 5. Frizione
Impone un "checkpoint di responsabilità" esplicito nel workflow. Il professionista non può approvare o implementare il codice/testo generato senza prima averlo convalidato contro i parametri stabiliti in partenza.

## 6. Rischio
L'assenza di questa pratica nei team porta al [[cognitive_debt]] e all'[[automation_bias]]: i professionisti si fidano ciecamente degli output, perdendo nel tempo la padronanza dei sistemi complessi che gestiscono.

## 7. Marker Osservabili
Il professionista documenta (nei commit di Git o nelle note di rilascio) i criteri precisi in base ai quali l'output dell'AI è stato validato, evidenziando quali porzioni sono state respinte o modificate per aderire al contesto umano.