---
title: "React Router v7"
category: "tech"
type: "note"
tags:
  - tech-watch
  - i18n
  - internationalization
pubDate: 2025-10-29
description: ""
heroImageLight: "/images/tech/technology-watch/technology-watch-light.png"
heroImageDark: "/images/tech/technology-watch/technology-watch-dark.png"
draft: true
---

# 🛣️ React Router v7

> Documentation : [https://reactrouter.com/](https://reactrouter.com/)

---

## 🎯 Philosophie générale

- « User-obsessed, standards-focused, multi-strategy router you can deploy anywhere. »

- Trois axes clefs :

  1. Support **SPA + SSR + SSG + futur React Server Components** : un routeur pour tous les scénarios. 

  2. Meilleure **sécurité de typage** et intégration TypeScript, pour éviter les erreurs runtime. 

  3. Une migration « sans casse majeure » depuis v6 : appel à simplifier l'upgrade. 

---

## 🧭 Grands principes

| Principe                                                         | Description                                                                                               | Pourquoi c'est important                                                      |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Routes déclaratives et imbriquées**                            | On définit des routes hiérarchiques, avec layout, enfants, index routes.                                  | Meilleure organisation, code plus clair, séparation des préoccupations.       |
| **Chargement de données au niveau des routes (loader / action)** | Chaque route peut définir ses loaders/actions pour pré-charger ou muter des données.                      | Permet de centraliser la logique de données, simplifier les composants UI.    |
| **Chargement paresseux & découpage de code (lazy‐loading)**      | Routes/components chargés à la demande.                                                                   | Optimisation perf : réduction du bundle initial.                              |
| **Interopérabilité SSR/SSG/Streaming**                           | Le router fonctionne dans des contextes serveur, streaming, pré-rendu.                                    | Utile pour SEO, performance, applications « universelles ».                   |
| **Typage renforcé (params, loader data, actions)**               | Meilleure intégration TypeScript, vérification des params etc.                                            | Moins d'erreurs, meilleure DX pour devs TS.                                   |
| **Mode « librairie » vs « framework »**                          | On peut l'utiliser comme simple routeur dans une SPA, ou activer les « features framework » pour SSR/SSG. | Flexibilité selon le niveau d'application : simple SPA ou stack full-fledged. |

---

## 🔍 Particularités à noter

- Migration v6 → v7 : annoncée comme non-breaking pour la majorité des usages. 

- Le routeur vient se « rapprocher » de Remix : certains articles parlent de « merge » ou convergence. 

- Attention : selon les retours, la documentation est encore en maturation (notamment les cas complets SSR/SSG) 

---

## ✅ Pour un dev Full-Stack JS/TS : bonnes pratiques

- Utilise **nested routes** dès que tu as des layouts partagés (ex : dashboard/common header).

- Place les loaders/actions dans les définitions de route — tu dissocies UI ↔ logique de données.

- Va vers un typage fort : exploite les définitions TS pour `params`, `loader`/`action` retour.

- Adopte le lazy loading pour les gros modules/sections peu utilisées.

- Si ton application a besoin de SSR ou SSG (SEO, performance), active les fonctionnalités « framework mode ».

- Avant migration, fais un commit, mets à jour vers la dernière v7-x, active les flags futurs, testes en staging.

---

## 🧩 Schéma visuel d'un flux typique

```javascript
BrowserRouter / Router (client)  
 └─ Routes 
     ├─ Route path="/" element={<Layout /> } loader={…}
     │     ├─ IndexRoute element={<Home />} 
     │     ├─ Route path="dashboard" element={<Dashboard />} loader={…}
     │     │     └─ Route path="settings" element={<Settings />} action={…}
     │     └─ Route path="login" element={<Login />} action={…}
```