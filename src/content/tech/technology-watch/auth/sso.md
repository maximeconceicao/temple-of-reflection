---
title: "SSO"
category: "tech"
type: "book"
tags:
  - tech-watch
  - auth
  - sso
pubDate: 2025-09-22
description: ""
heroImageLight: "/images/tech/technology-watch/technology-watch-light.png"
heroImageDark: "/images/tech/technology-watch/technology-watch-dark.png"
draft: true
---

# 🪙 JSON Web Token (JWT)

> Source : [JWT - the only explanation you need to know](https://arielweinberger.medium.com/json-web-token-jwt-the-only-explanation-youll-ever-need-cf53f0822f50)
---

## 🧩 1. Définition

- **JWT (JSON Web Token)** : format de **jeton compact**, **signé**, permettant d'échanger de l'information de manière **sécurisée entre deux parties** (client ↔ serveur).
- Il est souvent utilisé pour :
    - 🔐 Authentification stateless (sans session serveur)
    - ⚙️ Autorisation d'accès (API, microservices)
    - 📦 Transmission d'informations vérifiables

---

## 🧱 2. Structure du JWT

Un JWT est composé de 3 parties séparées par des points (.) :
```bash
xxxxx.yyyyy.zzzzz
```

| Partie        | Contenu                        | Encodage    | Exemple                                          |
| ------------- | ------------------------------ | ----------- | ------------------------------------------------ |
| **Header**    | Métadonnées (type, algorithme) | Base64URL   | `{"alg": "HS256", "typ": "JWT"}`                 |
| **Payload**   | Données (claims)               | Base64URL   | `{"sub": "123", "name": "Alice", "admin": true}` |
| **Signature** | Vérification d'intégrité       | HMAC ou RSA | `HMACSHA256(header + "." + payload, secret)`     |

---

## 💬 3. Les "Claims" (contenu du payload)
### 📋 Types de claims :

- **Registered claims (standards)**
    - `iss` : émetteur (issuer)
    - `sub` : sujet (subject)
    - `aud` : audience (destinataires)
    - `exp` : expiration
    - `iat` : date d'émission
    - `nbf` : non valable avant
- **Public claims** : définis par convention (ex. `email`, `role`, `scope`)
- **Private claims** : spécifiques à votre application

---

## 🔒 4. Signature & Vérification

- La **signature** garantit :
    - l'intégrité du message (non modifié)
    - l'authenticité de l'émetteur

### 🔐 Algorithmes courants :
  
| Type            | Exemple          | Description                                        |
| --------------- | ---------------- | -------------------------------------------------- |
| **Symétrique**  | `HS256`          | Même clé pour signer et vérifier                   |
| **Asymétrique** | `RS256`, `ES256` | Clé privée pour signer, clé publique pour vérifier |

### ⚠️ Bonnes pratiques pour la clé de signature

- Ne jamais inclure la clé dans le frontend ou dans le code source public.
- Stocker les clés dans un **gestionnaire de secrets** ou **variables d'environnement** du serveur.
- Restreindre les permissions d'accès aux clés uniquement aux services qui en ont besoin.
- Rotation régulière des clés pour réduire l'impact d'une fuite.

---

## 🔁 5. Cycle de vie d'un JWT

1. 🧍‍♂️ L'utilisateur s'authentifie (login) 
2. 🔧 Le serveur génère un JWT et le signe
3. 📤 Le client stocke le JWT (cookie `HttpOnly`)
4. 📩 À chaque requête → le client envoie le JWT (souvent dans `Authorization: Bearer <token>`)
5. 🔎 Le serveur vérifie la signature et la validité (expiration, audience…)
6. ✅ Accès autorisé si tout est conforme

---
## ⚖️ 6. Authentification vs Autorisation

### 🔑 Authentification (Authentication)

> Qui es-tu ?

- Processus qui permet de **vérifier l'identité** d'un utilisateur.
- Exemple : un utilisateur saisit son **email + mot de passe** → le serveur confirme qu'il existe et génère un **JWT d'accès**.
- Le résultat : un **token d'accès (Access Token)** signé, qui prouve que l'utilisateur est bien celui qu'il prétend être.

### 🛂 Autorisation (Authorization)

> Que peux-tu faire ?

- Processus qui détermine **quelles ressources ou actions** l'utilisateur peut accéder ou exécuter.

- Le serveur lit les **claims du JWT** (ex. `role: admin`, `scope: read:users`) pour décider s'il accorde l'accès.

- Exemple :

    - `GET /admin/dashboard` → nécessite le rôle `admin`
    - Le serveur vérifie le claim du token avant de répondre

👉 En résumé :

| Étape              | Concept                 | Exemple                     |
| ------------------ | ----------------------- | --------------------------- |
| 🧾 Authentification | Vérifie l'identité      | Login → génération d'un JWT |
| 🔐 Autorisation     | Vérifie les permissions | Lecture des claims du JWT   |

--- 

## 🔄 7. Le Refresh Token

### 🧭 Objectif

Les **Access Tokens (JWT)** ont une **durée de vie courte** (ex. 15 min à 1 h) pour limiter les risques en cas de vol.
Le **Refresh Token**, lui, sert à **obtenir un nouveau JWT** sans redemander les identifiants à l'utilisateur.

### ⚙️ Fonctionnement typique

1. 🔐 L'utilisateur s'authentifie → le serveur émet :
    - un **Access Token (JWT)** → durée courte
    - un **Refresh Token** → durée plus longue

2. ⏳ Quand le JWT expire :
    - Le client envoie le **Refresh Token** à un endpoint (ex. `/auth/refresh`)
    - Le serveur vérifie sa validité et **émet un nouveau JWT**

3. 🔁 Le cycle continue sans nouvelle connexion manuelle


### 🧱 Bonnes pratiques

| Pratique                  | Description                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 🔒 **Stockage frontend**   | Le refresh token doit être dans un cookie `HttpOnly`, jamais dans `localStorage`                                         |
| 🔒 **Stockage backend**    | Stocker dans une **base de données sécurisée** ou un **gestionnaire de secrets**, lié à l'utilisateur et aux permissions |
| ⏰ **Durée limitée**       | Expiration plus longue que le JWT, mais pas infinie (ex. 7-30 jours)                                                     |
| 🔁 **Rotation de token**   | À chaque utilisation, émettre un nouveau refresh token et invalider l'ancien                                             |
| 🗑️ **Révocation possible** | Conserver une liste (DB) des refresh tokens valides pour pouvoir les révoquer                                            |
| 🧩 **Séparer les rôles**   | Le refresh token ne donne **aucun accès direct** à une ressource API                                                     |

---

## ⚠️ 8. Bonnes pratiques de sécurité

### ✅ À faire :

- Utiliser des **algorithmes sûrs** (`HS256`, `RS256`, `ES256`)
- Vérifier la **signature** côté serveur
- Définir une **expiration courte** (`exp`)
- Utiliser des **tokens de rafraîchissement** (`refresh tokens`) pour régénérer le JWT
- Stocker le JWT dans un **cookie sécurisé** (`HttpOnly`, `Secure`, `SameSite`)
- **Révoquer les tokens** en cas de besoin (liste noire, rotation, etc.)

### 🚫 À éviter :

- Ne **jamais stocker** un JWT dans `localStorage` pour des apps sensibles (risque XSS)
- Ne pas mettre de **données sensibles** dans le payload (il est encodé, pas chiffré)
- Ne pas accepter de JWT avec `alg: none`

---

## 🧰 9. Outils et bibliothèques utiles

| Langage     | Bibliothèque                                                                                                      |
| ----------- | ----------------------------------------------------------------------------------------------------------------- |
| **Node.js** | [`jsonwebtoken`](https://github.com/auth0/node-jsonwebtoken)                                                      |
| **Python**  | [`PyJWT`](https://pyjwt.readthedocs.io/)                                                                          |
| **Java**    | [`jjwt`](https://github.com/jwtk/jjwt)                                                                            |
| **Go**      | [`golang-jwt/jwt`](https://github.com/golang-jwt/jwt)                                                             |
| **.NET**    | [`System.IdentityModel.Tokens.Jwt`](https://learn.microsoft.com/en-us/dotnet/api/system.identitymodel.tokens.jwt) |

---

## 🧠 10. Résumé rapide (cheat sheet)

| Concept      | À retenir                  |
| ------------ | -------------------------- |
| Format       | `header.payload.signature` |
| Encodage     | Base64URL                  |
| Signature    | HMAC ou RSA                |
| Usage        | Authentification stateless |
| Stockage     | Cookie sécurisé (idéal)    |
| Expiration   | Toujours obligatoire       |
| Vérification | Signature + claims         |


---