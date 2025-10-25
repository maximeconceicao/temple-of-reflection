---
title: "Git Cheat Sheet"
category: "tech"
type: "cheat-sheet"
tags:
  - tech-watch
  - tools
  - git
pubDate: 2025-10-21
description: ""
heroImageLight: "/images/tech/technology-watch/technology-watch-light.png"
heroImageDark: "/images/tech/technology-watch/technology-watch-dark.png"
draft: true
---

# 🧰 Cheat Sheet Git

---

## 📚 Ressources

- [Oh Shit, Git!?!](https://ohshitgit.com/)

## 🔧 Personnalisation

- **Configuration globale :**
```bash
  git config --global user.email "mail@domain.tld"
  git config --global user.name "Votre Nom"
```

- **Adapter la configuration depuis un repository :**
```bash
  git config user.email "mail@other-domain.tld"
  git config user.name "Votre Nom"
```

- **Voir la configuration :**
```bash
  git config --list
```
---

## 📦 Création et ajout de contenu

- **Initialiser un nouveau dépôt :**
```bash
  git init
```

- **Cloner un dépôt existant :**
```bash
  git clone https://domain.tld/user/repository.git
````

- **Créer un fichier .gitignore :**
```bash
  touch .gitignore
  git add .gitignore
  git commit -m "Add gitignore"
```

- **Utiliser un template .gitignore (MacOS) :**
```bash
  curl -s https://www.gitignore.io/api/osx > .gitignore
  git add .gitignore
  git commit -m "Add macOS gitignore template"
```
--- 

## 🧹 Gérer les modifications

- **Afficher le statut :**
```bash
  git status
```

- **Afficher les différences :**
```bash
  git diff
```

- **Ajouter tous les changements :**
```bash
  git add .
```

- **Ajouter tous les changements de l'arborescence :**
```bash
  git add --all
```

- **Commiter tous les changements locaux :**
```bash
  git commit -a
```

- **Commiter les modifications en attente :**
```bash
  git commit -m "Votre message"
```

- **Modifier le dernier commit :**
```bash
  git commit --amend
```

---

## 🕒 Gérer l'historique

- **Afficher tous les commits :**
```bash
  git log
```

- **Afficher les commits (id + message) :**
```bash
  git log --oneline
```

- **Afficher l'historique d'un utilisateur :**
```bash
  git log --author="username"
```

- **Afficher l'historique d'un fichier :**
```bash
  git log -p <file>
```

- **Afficher les changements dans un fichier :**
```bash
  git blame <file>
```
---

## 🌿 Branches et tags

- **Lister les branches :**
```bash
  git branch
```

- **Changer de branche :**
```bash
  git checkout <branch-name>
```

- **Créer une nouvelle branche :**
```bash
  git branch <branch-name>
```

- **Créer une branche de suivi :**
```bash
  git branch --track <new-branch> <remote-branch>
```

- **Supprimer une branche :**
```bash
  git branch -d <branch-name>
```

- **Marquer le commit courant avec un tag :**
```bash
  git tag <tag>
```

---

## 🔄 Fusion et rebase

- **Fusionner la branche courante avec `main` :**
```bash
  git checkout main
  git merge <your-branch>
```

- **Mettre à jour votre branche avec `main` :**
```bash
  git checkout <your-branch>
  git rebase main
```

- **Annuler un rebase en cours :**
```bash
  git rebase --abort
```

- **Continuer un rebase après résolution de conflits :**
```bash
  git rebase --continue
```

- **Mettre à jour la branche distante après un rebase :**
```bash
  git push --force-with-lease
```
> 🧠 Git "vérifie le bail (lease)" : si quelqu'un a poussé depuis, la commande échoue au lieu d'écraser son travail.
---

## ⏪ Retour arrière et annulation

- **Annuler le dernier `git add` :**
```bash
  git reset HEAD
```

- **Annuler les modifications locales d'un fichier :**
```bash
  git checkout HEAD <file>
```

- **Annuler un commit (créer un commit inversé) :**
```bash
  git revert <commit>
```

- **Placer le HEAD sur un commit précédent (conserve les modifications) :**
```bash
  git reset <commit>
```

- **Annuler toutes les modifications dans le répertoire de travail :**
```bash
  git reset --hard HEAD
```

- **Placer le HEAD sur un commit précédent (annule les modifications) :**
```bash
  git reset --hard <commit>
```


--- 

## 🌐 Dépôts distants

- **Lister les dépôts distants :**
```bash
  git remote -v
```

- **Afficher les informations d'un dépôt distant :**
```bash
  git remote show origin
```

- **Ajouter un nouveau dépôt distant :**
```bash
  git remote add <remote-name> <url>
```

- **Synchroniser la branche courante avec `main` :**
```bash
  git push -u origin main
```

- **Télécharger les modifications sans les fusionner :**
```bash
  git fetch <remote>
```

- **Télécharger et fusionner directement dans le HEAD :**
```bash
  git remote pull <remote> <url>
```

- **Fusionner les modifications de master distante :**
```bash
  git pull origin master
```

- **Récupérer toutes les modifications du HEAD :**
```bash
  git pull
```

- **Publier les modifications locales :**
```bash
  git push
```

- **Publier les tags :**
```bash
  git push --tags
```

---

## 💾 Sauvegarde temporaire

- **Mettre de côté les modifications en cours :**
```bash
  git stash
```

- **Lister les stashs existants :**
```bash
  git stash list
```

- **Appliquer le dernier stash sans le supprimer :**
```bash
  git stash apply
```

- **Appliquer et supprimer le dernier stash :**
```bash
  git stash pop
```

- **Supprimer un stash spécifique :**
```bash
  git stash drop stash@{1}
```

---

## 🧭 Navigation et sécurité

- **Afficher l'historique complet des mouvements du HEAD :**
```bash
  git reflog
```
🔹 `reflog` garde trace de tous les HEAD récents (commits, merges, resets…).
🔹 Très utile pour retrouver un commit 'perdu' après un `reset --hard` ou un rebase.

- **Revenir à un état précédent à partir du reflog :**
```bash
  git checkout HEAD@{2}
```

---

## 📥 Récupérer un fichier depuis une autre branche

- **Récupérer un fichier spécifique depuis main (sans fusionner toute la branche) :**
```bash
  git checkout main -- <chemin/vers/fichier>
```
>⚠️ Cette commande **remplace le fichier** courant par la version de `main`, mais ne touche pas au reste de ton travail.

- **Récupérer plusieurs fichiers :**
```bash
  git checkout main -- <fichier1> <fichier2> <dossier/>
```

- **(Nouvelle syntaxe, recommandée depuis Git 2.23+)**
```bash
  git restore --source=main <chemin/vers/fichier>
```
> 💡 `git restore` est plus explicite et moderne que `git checkout` pour ce type d'opération.

--- 

## 🧹 Nettoyer les branches locales obsolètes

- **Mettre à jour les références distantes :**
```bash
  git fetch -p
```
> L'option `-p` (ou `--prune`) supprime les références de branches distantes qui n'existent plus.

- **Lister les branches locales n'existant plus sur le dépôt distant :**
```bash
  git branch -vv
```
> Les branches dont la ligne contient [gone] ne sont plus présentes sur le remote.
> Exemple :
```bash
  feature/old-feature   1234abc [origin/old-feature: gone] Dernier commit
```

- **Supprimer toutes les branches locales "disparues" automatiquement :**
```bash
  git fetch -p
  git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -d
```
