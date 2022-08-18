# Mise en place Signup



## FRONT (Uniquement en cas de SPA)

  - [X] Annuler comportement par défaut du bouton Submit (preventdefault) .
  - [X] Récupèrer le submit sur le DOM.
  - [X] Mettre un eventlistner sur le Submit.

## BACK


### SECURITE 

- [x] Eviter les attaques XSS grace au module Sanitizer ```npm install sanitizer``` pour les donnèes  entrante côté serveur .
- [x] Mise en place de Joi pour valider les formats des donnèes entrantes avant qu'elles se retrouvent dans la DB . ```npm install joi```
- [x] Mettre en place Bcrypt pour hacher le password.


### Controller

-Client--->Server

- [x] Récupèrer les datas envoyès par le front (req.body).
- [x] Envoyer la data dans la methode du dataMapper.


server---->client

- [x] La reponse renvoyé.

### DataMapper
- [X] Empêcher les injections SQL
- [x] En requête préparée, SQL s'attends à avoir un tableau dans lesquels rechercher dans l'ordre les données qui correspondent à $1,$2, etc..
