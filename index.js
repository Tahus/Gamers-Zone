//Je require Dotenv (pour les variables d'environnement) pour acceder à process.env.PORT
const dotenv = require('dotenv');
dotenv.config();

//Je require express
const express = require('express');


//J'execute express 
const app = express();

// utilise le moteur de rendu EJS
app.set('view engine', 'ejs');
//renseigne le dossier des vues
app.set('views', './app/views');
//renseigne la position du dossier statique
app.use(express.static('./app/public'));

//J'importe mon router 
const router = require('./app/router');
//Je fais marcher mon router dans mon appli
app.use(router);


//Je définit le port à écouter 
const PORT = process.env.PORT;

//Je lance mon server
app.listen(PORT, () =>{
    console.log(`App on http://localhost:${PORT}`);

});

