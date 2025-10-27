---
title: "Gitlab"
category: "tech"
type: "note"
tags:
  - tech-watch
  - tools
  - gitlab
pubDate: 2025-10-21
description: ""
heroImageLight: "/images/tech/technology-watch/technology-watch-light.png"
heroImageDark: "/images/tech/technology-watch/technology-watch-dark.png"
draft: true
---

# 🦊 Gitlab

---

## 🔧 Introduction 

GitLab est une plateforme complète de **gestion de projets et de développement logiciel**. Elle centralise le versionnage de code, la gestion des issues, la collaboration d'équipe et l'intégration continue/déploiement continu (CI/CD).

Grâce à ses fonctionnalités intégrées — dépôts Git, pipelines automatisés, tableaux de suivi de tâches et outils de revue de code — GitLab permet aux équipes de gérer l'ensemble du cycle de vie d'un projet logiciel **au sein d'un seul outil**, favorisant la productivité, la traçabilité et la qualité du code.

---

## 🔑 Fonctionnalités clés

- **Gestion de code** : dépôts Git, branches, tags, merge requests, résolution de conflits 
- **Collaboration & suivi** : issues, sous-tâches, boards Kanban, assignation, wiki 
- **CI/CD** : pipelines automatisés, tests, déploiements, GitLab Runners 
- **Sécurité & conformité** : permissions, scans SAST/DAST, audit et traçabilité 
- **DevOps & intégrations** : Docker, Kubernetes, intégrations externes (Slack, Jira…) 
- **Analyse & reporting** : dashboards, statistiques de code, suivi de productivité

---

## ⚙️ Exemple de pipeline GitLab

Cette pipeline illustre un flux typique de développement avec GitLab CI/CD, incluant préparation de l'environnement, collaboration, versioning et publication.

### Stages principaux

**1. Pre-run / cache-warmup** : Prépare l'environnement et précharge le cache des dépendances pour accélérer les jobs suivants.
  - *S'exécute sur la branche principale ou pour les Merge Requests si yarn.lock change.*

**2. Comment** : Poste automatiquement un commentaire dans la Merge Request avec les changements détectés par Changesets.
  - *S'exécute uniquement pour les pipelines MR.*

**3. Release** :  Versionne et publie les packages via Changesets sur la branche principale.
  - *Build des packages et configuration de NPM avant publication.*

**4. Test / Build / Deploy** : Définis dans des fichiers inclus (tests.yml, build-and-push.yml, argocd.yml).
  - *Exécutent les tests, construisent les images et déploient l'application sur l'environnement cible.*