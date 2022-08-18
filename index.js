//Je require Dotenv (pour les variables d'environnement) pour acceder à process.env.PORT
const dotenv = require('dotenv');
dotenv.config();

//Je require express
const express = require('express');

//Je require mon middleware (pour empecher les attaques XSS)
const bodySanitizer = require('./app/middlewares/body-sanitizer');

//J'execute express 
const app = express();



//J'ajoute le middleware d'express (body parser) afin de pouvoir utiliser req.body
//ce MDW récupère les infos du POST, il le stock dans un objet(request)
//Puis il le passe en paramètre (request.body) à la methode en question
app.use(express.urlencoded({extended: true}));

app.use(bodySanitizer);


// utilise le moteur de rendu EJS
app.set('view engine', 'ejs');

//renseigne le dossier des vues
app.set('views', './app/views');

//renseigne la position du dossier statique
app.use(express.static('./app/public'));

//J'importe mon router 
const router = require('./app/router');


//Je met en place le système de session après l'installation du package express-session
const session = require('express-session');
 
app.use(session(
    {
        secret: process.env.SESSION_SECRET, //utilisé pour encoder le cookies
        resave: true,
        saveUninitialized: true
    }
));

app.use((request, response, next) => {
    //si la propriété userInfo de la session vaut undefined, je la crée
    if (!request.session.userInfo  ) {
        request.session.userInfo = false;     
    } 
    response.locals.userInfo = request.session.userInfo;
    //Je stock la session dans l'objet locals, ainsi je peux accéder 
    //à la variable contenant la session dans toutes mes vues EJS
    next();
});

//Je fais marcher mon router dans mon appli
app.use(router);


//Je définit le port à écouter 
const PORT = process.env.PORT;

//Je lance mon server
app.listen(PORT, () =>{
    console.log(`App on http://localhost:${PORT}`);

});

