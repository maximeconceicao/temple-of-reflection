---
title: "Magic Link"
category: "tech"
type: "book"
tags:
  - tech-watch
  - auth
  - magic-link
pubDate: 2025-09-22
description: ""
heroImageLight: "/images/tech/technology-watch/technology-watch-light.png"
heroImageDark: "/images/tech/technology-watch/technology-watch-dark.png"
draft: true
---

# 🪄 Magic Link

> Source : [Appvizer](https://www.appvizer.fr/magazine/services-informatiques/securite-informatique/magic-link)

---

## 1 - Principes et intérêts

### 🔗 Qu'est-ce qu'un Magic Link ?

- **Définition** : Méthode d'authentification sans mot de passe ("passwordless")
- **Fonctionnement** : L'utilisateur entre son identifiant, reçoit un lien par e-mail ou SMS, et se connecte en un clic
- **Sécurité** : Chaque session nécessite un lien unique

### ⚙️ Comparaison : Magic Link vs OTP

- **Magic Link** : Connexion automatique via un lien cliquable

- **OTP (One-Time Password)** : Code temporaire saisi manuellement

### ✅ Avantages du Magic Link

1. **Expérience utilisateur améliorée** : Connexion rapide sans mot de passe
2. **Sécurité renforcée** : Réduit les risques liés aux mots de passe
3. **Support technique allégé** : Moins de demandes liées aux mots de passe oubliés
4. **Moins de fatigue liée aux mots de passe** : Simplifie la gestion des accès

### ⚠️ Limites à considérer

- **Dépendance à l'e-mail ou SMS** : Nécessite un accès constant
- **Délai d'attente** : Peut être perçu comme un inconvénient
- **Pas idéal pour les connexions fréquentes** : Peut être moins pratique

### 🛠️ Outils recommandés

- Firebase Authentication
- Auth0
- Magic.link
- Okta
- Amazon Cognito

### 📌 En résumé

Le Magic Link offre une méthode d'authentification moderne, alliant simplicité pour l'utilisateur et sécurité pour l'entreprise. Il est particulièrement adapté aux applications nécessitant une connexion ponctuelle ou occasionnelle.

## 2 - Exemple d'implémentation

### 1️⃣ Préparer l'environnement

- **Choisir un fournisseur d'authentification** :
    - Ex. Firebase Authentication, Auth0, Magic.link

- **Installer les dépendances** :

    - Pour Node.js : `npm install firebase` ou SDK du fournisseur choisi

- **Configurer l'application** :
    - Créer un projet sur la plateforme d'authentification
    - Définir l'URL de redirection après connexion

---

### 2️⃣ Créer le formulaire de connexion

- **Champ requis** : e-mail de l'utilisateur
- **Bouton d'action** : « Envoyer le lien de connexion »
- **Validation** : vérifier que l'e-mail est valide

---

### 3️⃣ Générer le Magic Link côté serveur

- **Étape clé** : appeler l'API du fournisseur pour créer le lien unique

- **Paramètres typiques** :
    - e-mail de l'utilisateur
    - URL de redirection (après clic)
    - Durée de validité du lien

- **Exemple (pseudo-code Firebase)** :
```js
sendSignInLinkToEmail(auth, email, actionCodeSettings)
```

---

### 4️⃣ Envoyer le lien à l'utilisateur

- **Méthode** : e-mail (ou SMS)
- **Contenu** : lien cliquable + instructions simples
- **Sécurité** : lien unique et expirant rapidement

---

### 5️⃣ Vérifier le lien côté client

- **Lorsqu'il est cliqué** :
    - Extraire les paramètres du lien
    - Valider le token côté client ou serveur

- **Connexion automatique** : créer la session utilisateur si le lien est valide

--- 

### 6️⃣ Gérer la session

- **Stockage** : token dans un cookie sécurisé ou stockage local
- **Expiration** : définir un temps de session limité
- **Déconnexion** : supprimer le token pour sécuriser l'accès

---

## ✅ Points clés à retenir

- **Sécurité** : chaque lien est unique et temporaire 
- **Simplicité** : pas de mot de passe à retenir 
- **UX fluide** : connexion en 1 clic 
- **Bonne pratique** : toujours rediriger vers une page sécurisée après le clic