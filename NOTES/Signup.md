# Mise en place Signup



## FRONT (Uniquement en cas de SPA)

- [ ] Annuler comportement par défaut du bouton Submit (preventdefault) .
  - [ ] Récupèrer le submit sur le DOM.
  - [ ] Mettre un eventlistner sur le Submit.
  - [ ] Puis à l'évenement, mettre un prevent default.

## BACK


### SECURITE 

- [ ] Eviter les attaques XSS grace au module Sanitize `npm install sanitize` pour les donnèes  entrante conté serveur .
- [ ]  Mise en place de Joi pour valider les formats des donnèes entrantes avant qu'elles se retrouvent dans la DB . `npm install joi`
  

### Controller



-Client--->Server

- [x] Récupèrer les datas envoyès par le front (req.body).
- [ ] Mettre en place la methode Validate de Joi .
- [ ] Mettre en place Bcrypt pour hacher le password.
- [x] Envoyer la data dans la methode du dataMapper.

server---->client

- [x] La reponse renvoyé.

### DataMapper

Marquer ce que j'ai déjà fait .

- [ ] crèer le schèma Joi et le require dans le Controller .
