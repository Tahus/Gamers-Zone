# Projet Gamer's Zone

Ce projet est un blog mettant en avant l'univers des jeu video et ses actualités donnant la possibilité à l'utilisateur de créer son propre compte, le gérer et le supprimer. Une version mise à jour dans les prochains mois donneras la possibilité à l'utilisateur de pouvoir créer modifier et supprimer lui même ses propres articles. Un peu de patience :)

## Pré-requis 

Avoir les outils suivants sur sa machine .

Astuce linux : vérifier les versions installées en exécutant dans le terminal : 
- `node --version`
- `psql --version`
- `git --version`

En cas de message d'erreur, l'outils n'est pas installé ;)

- [NodeJS](https://nodejs.org/en/download/) (v12 ou supérieure)
- [PostgreSQL](https://www.postgresql.org/download/) (v12 ou supérieure)
- Git 
-Tailwind CSS (Framework css)


## Mise en place

### Base de données

1. Cloner le repository et l'ouvrir avec votre IDE préféré.
2. Créer une base de données et l'attribuer à l'utilisateur en se connectant à postgres : `CREATE DATABASE gamer OWNER moi;` *remplacer `<gamer>` par le nom de la base de données, et `<moi>`par le nom de l'utilisateur qui va administrer la DB(database = base de données)*
3. Exécuter les scripts présents dans le dossier `data` dans l'ordre suivant : 
- MLD (création des tables) : gamer_db.sql
- Seeding : seeding.sql

### Application

1. Installer les dépendances
 -> Dans le terminal:
- se placer à la racine du projet et éxécuter `npm install`.
- puis lancer le serveur : `npm run start` ou `npm start`
- ouvrir le navigateur en cliquant sur le lien qui s'affiche dans le terminal

### Formulaire de contact 

Le formulaire de contact à été mis en place de manière statique grâce à la plateforme [FormSubmit](https://formsubmit.co/). Il suffit de Connecter le formulaire de contact à leur point de terminaison de formulaire en indiquant l'adresse mail sur laquelle je souhaite recevoir le message de l'utilisateur et ils enverrons les soumissions par courriel. Aucun code Javascript ou autre n'est requis.

2. Utiliser l'application dans le navigateur : enjoy !