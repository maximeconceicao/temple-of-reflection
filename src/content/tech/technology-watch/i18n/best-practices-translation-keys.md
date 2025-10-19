---
title: "Bonnes pratiques - clé de traduction"
category: "tech"
type: "book"
tags:
  - tech-watch
  - i18n
  - internationalization
pubDate: 2025-09-22
description: ""
heroImageLight: "/images/tech/technology-watch/technology-watch-light.png"
heroImageDark: "/images/tech/technology-watch/technology-watch-dark.png"
draft: true
---

# 🗝️ 11 Bonnes pratiques : nommer et organiser les clés de traduction

> Source : [Lokalize](https://lokalise.com/blog/translation-keys-naming-and-organizing/)

---

## 1 - 💡 Développer un schéma de nommage cohérent

**Pourquoi c'est important :**

- Garde les clés organisées
- Évite l'incohérence entre les membres de l'équipe
- Facilite la localisation

---

### Décisions importantes

#### 1. Convention de nommage

- Choisir entre `CamelCase` ou `snake_case`
- Rester **consistent** pour éviter les confusions

#### 2. Gestion des clés similaires

- **Préfixes/Postfixes** : ajouter le contexte
  - Exemple : `login_button`, `signup_button`
- **Namespaces** : regrouper par catégorie ou module métier
  - Exemple : `forms.buttons.login`

#### 3. Gestion des doublons

- Décider dès le départ comment traiter les clés identiques
- Les doublons peuvent créer des conflits ou erreurs de traduction

#### 4. Noms descriptifs

- Simples et significatifs
- Éviter : `btn1`, `msg` (trop vague)

---

### Exemples de bonnes pratiques

| Module métier | Clé de traduction             | Description           |
| ------------- | ----------------------------- | --------------------- |
| forms         | `forms.buttons.login_button`  | Bouton de connexion   |
| forms         | `forms.buttons.signup_button` | Bouton d'inscription  |
| errors        | `errors.email_invalid`        | Erreur email invalide |

✅ Clés **claires, descriptives et logiquement regroupées** pour éviter la confusion et faciliter la maintenance.

---

## 2 - 📝 Donner des noms significatifs aux clés

**Pourquoi c'est important :**

- Clarifie le rôle des clés pour **développeurs et traducteurs**
- Évite la confusion et facilite la maintenance

---

### Bonnes pratiques pour des noms significatifs

#### 1. Noms descriptifs

- La clé doit **décrire clairement sa fonction**, comme pour une variable dans le code
- Exemple **bon** : `welcoming_message`, `choose_locale`
- Exemple **mauvais** : `heading`, `dropdown` (trop vague)

#### 2. Éviter les noms trop spécifiques

- Ne pas lier la clé à la valeur exacte de la traduction
- La clé doit décrire **le rôle ou le contexte**, pas le texte précis

#### 3. Ne pas utiliser la valeur de traduction comme clé

- Éviter : `Confirm` pour un bouton "Confirm"
- Si le texte change, il faudrait modifier la clé partout → source d'erreurs
- Exception : systèmes comme **Gettext** où le texte sert de "message ID"

#### 4. Cohérence entre développeurs

- Définir des **règles de nommage claires** pour l'équipe
- Outils collaboratifs comme **Lokalise** peuvent aider à gérer et commenter les clés

---

### Exemples

| Type    | Clé de traduction   | Pourquoi c'est bon/mauvais                    |
| ------- | ------------------- | --------------------------------------------- |
| Bon     | `welcoming_message` | Descriptif, clair, indique la fonction        |
| Bon     | `choose_locale`     | Décrit l'action attendue                      |
| Mauvais | `heading`           | Trop vague, manque de contexte                |
| Mauvais | `dropdown`          | Trop générique                                |
| Mauvais | `Confirm`           | Clé liée à la valeur, fragile si texte change |

---

## 3 - 📂 Grouper les clés dans des espaces de noms

**Pourquoi c'est important :**

- Améliore l'organisation des fichiers de traduction
- Facilite la gestion des clés à mesure que l'application grandit
- Évite les conflits de noms entre sections similaires

---

### Avantages des namespaces

#### 1. Éviter les conflits de noms

- Même terme utilisé dans différentes sections (ex : `save`)
- Sans namespace : besoin de préfixes (`profile_save`, `order_save`)
- Avec namespace : séparation claire (`order.save`, `profile.save`)

#### 2. Améliorer l'organisation

- Structure logique et hiérarchique des clés
- Réduit le risque de perdre des clés dans de longues listes
- Rend la localisation plus gérable à grande échelle

---

### Exemple de structure JSON avec namespaces

```json
{
  "order": {
    "checkout": "Proceed to checkout",
    "continue_shopping": "Return to the store and continue shopping",
    "discard": "Remove all items from the cart and discard the order",
    "save": "Save the order as draft"
  },
  "profile": {
    "save": "Save profile changes",
    "undo": "Undo all recent profile changes",
    "edit_password": "Edit your password"
  },
  "forms": {
    "buttons": {
      "login_button": "Log In",
      "signup_button": "Sign Up",
      "submit_button": "Submit"
    },
    "labels": {
      "email_address_label": "Email Address",
      "shipping_address_label": "Shipping Address",
      "password_label": "Password"
    }
  },
  "errors": {
    "email_invalid": "Please enter a valid email address",
    "password_required": "Password is required"
  }
}
```

- Les clés sont regroupées en namespaces : `order`, `profile`, `forms`, `errors`

- Permet une organisation **logique et évolutive**

### Conseils pratiques

- **Limiter la profondeur** : 2-3 niveaux maximum pour éviter la complexité
- **Maintenir la cohérence** : définir une structure uniforme pour tous les modules/pages

---

## 4 - 🌐 Utiliser un espace de noms global

**Pourquoi c'est important :**

- Certaines clés sont utilisées partout : boutons, actions de formulaire, labels de navigation
- Un namespace global **réduit les duplications**, maintient la cohérence et garde les fichiers de traduction propres

---

### Avantages du namespace global

#### 1. Cohérence dans l'UI

- Les éléments partagés restent uniformes : boutons, labels, actions
- Exemple : `global.ok` → tous les boutons "Okay" ont la même traduction

#### 2. Gestion simplifiée

- Mettre à jour une clé globale modifie toutes les occurrences
- Exemple : `global.cancel` → "Cancel" partout dans l'application

#### 3. Fichiers de traduction plus propres

- Regroupe les termes fréquents pour éviter les doublons et le désordre

---

### Exemple de namespace global

```json
{
  "global": {
    "ok": "Okay",
    "cancel": "Cancel",
    "next": "Next",
    "previous": "Previous"
  }
}
```

- Permet la cohérence sur toutes les pages et composants
- Évite de créer des clés séparées pour des éléments communs

### Conseils pratiques

- **Ne pas surcharger le namespace global** : inclure uniquement les éléments fréquents et partagés
- **Contexte spécifique** : si une traduction doit être différente selon le contexte, créer une clé dédiée
- Exemples :
  - `global.ok` → boutons standard
  - Pour un contexte particulier, utiliser `profile.confirm` ou `order.agree`

---

## 5 - 🚫 Éviter la duplication des clés

**Pourquoi c'est important :**

- Moins de clés, moins de travail pour les traducteurs
- Facilite la gestion et la maintenance des traductions
- Rend les fichiers de traduction plus clairs et organisés

---

### Comment consolider les clés dupliquées

#### 1. Identification manuelle

- Rechercher et remplacer les clés dupliquées par une clé unique si elles ont le même sens

#### 2. Utilisation d'outils automatisés

- Certains outils de localisation détectent et suppriment automatiquement les doublons
- **Namespace global** : permet de réutiliser des clés partagées pour éviter les duplications
- **Translation memory** : mémorise et propose les traductions précédentes pour assurer cohérence et gain de temps

---

### Attention aux "god keys"

- Éviter d'utiliser une seule clé pour tous les contextes
- Exemple : `confirm` utilisé partout peut poser problème si un contexte particulier nécessite "OK" → créer `registration_confirm`

---

### Importance du contexte

- Une même clé peut avoir un sens différent selon la page ou l'élément UI
- Exemple : `save` sur la page de paramètres vs `save` dans le panier → créer des clés séparées pour conserver la nuance

---

### Conseils pratiques

- **Outils** : utiliser des fonctionnalités comme le **duplicate finder** de Lokalise pour détecter et résoudre les doublons
- **Ne pas** sur-utiliser les clés globales lorsque le sens ou le ton peut varier selon le contexte
- **Consolider** les clés seulement lorsqu'elles partagent le même sens ou contexte

---

### 6 - ✂️ Éviter la concaténation des traductions

**Pourquoi c'est important :**

- La concaténation peut créer des **problèmes de localisation** et des phrases incorrectes dans certaines langues
- Chaque langue a un ordre de mots différent, donc combiner des clés peut produire des traductions grammaticalement incorrectes

---

### Problèmes de la concaténation

- **Ordre des mots variable selon les langues**
  - Exemple :
    - Anglais : `"Agree and proceed"`
    - Russe : concaténer `"соглашаюсь"` + `"продолжить"` → `"соглашаюсь и продолжить"` (incorrect grammaticalement)

---

### Meilleure approche

#### 1. Créer des clés uniques

- Pour chaque texte unique, créer une nouvelle clé, même si cela semble répétitif
- Assure des traductions **contextuellement correctes** et naturelles dans toutes les langues

#### 2. Réutiliser les traductions via outils

- Certains outils comme **Lokalise** permettent de **lier des clés de traduction**
- Permet de réutiliser les traductions existantes sans concaténer
- Si le contexte diffère, le lien peut être supprimé et une nouvelle clé créée

---

### Conseils pratiques

- Créer une **clé distincte** pour chaque texte unique afin de garantir une traduction précise
- Utiliser des **outils TMS** qui permettent de lier ou réutiliser les traductions sans concaténation
- Ne pas **concaténer plusieurs clés** pour former une nouvelle chaîne
- Toujours **vérifier le contexte et l'ordre des mots** selon la langue cible pour éviter des erreurs grammaticales

---

## 7 - 🧹 Supprimer les clés de traduction inutilisées

**Pourquoi c'est important :**

- Évite l'**encombrement** des fichiers de traduction
- Réduit la **confusion** pour les développeurs et traducteurs
- Améliore **l'efficacité** et la maintenabilité des fichiers de traduction

---

### Comment gérer les clés inutilisées

#### 1. Audits manuels

- Vérifier régulièrement les fichiers de traduction
- Supprimer les clés orphelines qui ne sont plus utilisées

#### 2. Outils et automatisation

- Utiliser des scripts ou fonctionnalités des outils de localisation pour détecter et supprimer automatiquement les clés inutilisées
- Particulièrement utile pour les grandes applications avec de nombreux fichiers de traduction

---

### Conseils pratiques

- Planifier des **audits réguliers** pour identifier et supprimer les clés inutilisées
- Mettre en place des **scripts ou outils automatisés** pour simplifier le nettoyage
- Tenir les fichiers de traduction **propres et organisés** pour faciliter la maintenance et la lisibilité

---

## 8 - 📁 Placer les traductions dans des fichiers et dossiers séparés

**Pourquoi c'est important :**

- Gérer toutes les traductions dans un seul fichier devient rapidement **illisible et ingérable**
- Organiser par fichiers et dossiers rend la **localisation plus simple** et **scalable**

---

### Comment gérer les traductions efficacement

#### 1. Séparer par langue

- Chaque langue dans son propre fichier pour plus de clarté
- Exemples :
  - `en.json` → anglais
  - `fr.json` → français
  - `de.json` → allemand

#### 2. Organiser par dossier

- Placer les fichiers de chaque langue dans un dossier dédié
- Exemples :
  - `/translation/en/`
  - `/translation/fr/`
  - `/translation/de/`

#### 3. Diviser par scope / fonctionnalité

- Pour les grandes applications, diviser les fichiers selon les sections ou fonctionnalités
- Exemples :

  - `blog_en.json` → traductions liées au blog
  - `forum_fr.json` → traductions du forum
  - `static_pages_de.json` → pages statiques

- Cette organisation réduit la complexité et facilite l'ajout de nouvelles langues ou fonctionnalités

---

### Conseils pratiques

- Utiliser des plateformes comme **Lokalise** pour assigner les clés à différents fichiers et exporter selon la langue et la structure souhaitée
- Filtrer et tagger les clés dans l'outil peut réduire le besoin de séparer physiquement les fichiers
- Maintenir une structure simple mais évolutive pour ne pas compliquer la maintenance

---

## 9 - 🖋️ Documenter les clés pour développeurs et traducteurs

**Pourquoi c'est important :**

- Fournir le **contexte** des clés évite confusion et erreurs
- Essentiel dans les projets avec plusieurs développeurs et traducteurs
- Important lorsque les noms de clés ne sont pas explicites ou dépendent du contexte (UI, parcours utilisateur, etc.)

---

### Pourquoi la documentation compte

- **Clarté** : aide les développeurs et traducteurs à comprendre le rôle de chaque clé
- **Précision** : le contexte permet des traductions plus exactes et adaptées, réduisant les erreurs

---

### Comment documenter les clés de traduction

#### 1. Utiliser des commentaires ou descriptions

- Formats comme les fichiers **PO** permettent d'ajouter des commentaires pour donner du contexte
- Exemple :

```po
# Ce message apparaît sur le bouton de connexion
msgid "login_button"
msgstr "Log In"

# Contexte : message d'erreur lorsque le mot de passe est incorrect
msgid "invalid_password"
msgstr "The password you entered is incorrect."

# Traducteurs : utilisé pour les pop-ups de confirmation
msgid "confirm_action"
msgstr "Confirm"
```

#### 2. Screenshots et contextes visuels

- Certains TMS comme Lokalise permettent d'ajouter des descriptions, commentaires et captures d'écran

- Les captures d'écran aident les traducteurs à comprendre l'utilisation dans l'UI

#### Conseils pratiques

- Documenter toutes les clés complexes ou peu explicites

- Fournir un contexte clair pour guider les traducteurs

- Ne pas supposer que le nom de la clé suffit à comprendre son usage, surtout pour les traducteurs non techniques

---

## 10 - 🔄 Réexaminer et refactoriser régulièrement

**Pourquoi c'est important :**

- Les clés de traduction peuvent devenir **obsolètes, redondantes ou inutiles** au fil de l'évolution de l'application
- Maintenir un système de localisation **propre et scalable**

---

### Pourquoi les revues régulières sont essentielles

- **Prévenir l'encombrement** : supprimer les clés inutilisées ou obsolètes
- **Assurer la cohérence** : identifier les incohérences, simplifier les namespaces, consolider les clés similaires
- **Améliorer l'expérience des traducteurs** : un jeu de clés bien structuré facilite la navigation et réduit les erreurs

---

### Comment effectuer des revues régulières

#### 1. Audit

- Vérifier périodiquement les fichiers de traduction
- Identifier les clés obsolètes ou inutiles

#### 2. Refactorisation

- Simplifier et restructurer les fichiers de traduction
- Consolider les clés similaires
- Éliminer les redondances

#### 3. Maintien de la cohérence

- S'assurer que les noms de clés restent cohérents avec l'état actuel de l'application
- Adapter les clés aux nouvelles fonctionnalités

---

### Conseils pratiques

- Programmer des **revues régulières** pour détecter et supprimer les clés obsolètes
- Refactorer la structure des traductions pour **simplifier les namespaces et consolider les clés**
- Maintenir des noms de clés **clairs, cohérents et pertinents** avec les fonctionnalités actuelles de l'application

---

## 11 - 👨🏻‍🔧 Ne pas concaténer ou générer dynamiquement les clés de traduction

**Pourquoi c'est important :**

- Construire dynamiquement des clés de traduction dans le code (par exemple `"page_" + pageName + "_title"`) est une **mauvaise pratique**.
- Elle rend la maintenance difficile, empêche les outils de localisation d'identifier les clés statiquement, et complique la détection des clés manquantes ou inutilisées.

---

### Exemple de mauvaise pratique

```js
// ❌ Mauvais exemple : clé générée dynamiquement
t(`dashboard.${user.role}_title`);
```

### Meilleure pratique

```js
const title =
  user.role === "admin"
    ? t("dashboard.admin_title")
    : t("dashboard.user_title");
```

### Conseils pratiques

- Évitez toute **génération dynamique** de clés via concaténation (${}) ou conditions dans la chaîne.
- Préférez des clés explicites et clairement définies dans le code source.
- Utilisez des **structures conditionnelles** (if / switch) plutôt que de construire des clés à la volée.

## Conclusion : Conseils pratiques pour une localisation efficace

- **Adopter des conventions de nommage claires** pour toutes vos clés
- **Organiser les traductions** par namespaces, modules métier et fichiers/dossiers
- **Gérer régulièrement vos clés** : supprimer les obsolètes, refactorer les structures et consolider les doublons
- **Documenter le contexte** pour les traducteurs afin d'assurer des traductions précises et cohérentes
- **Utiliser des outils TMS** pour centraliser, filtrer et gérer vos traductions de manière collaborative

En suivant ces principes, vous pourrez **simplifier la gestion des traductions**, **accélérer le workflow** et **faire évoluer votre application** de manière scalable.
