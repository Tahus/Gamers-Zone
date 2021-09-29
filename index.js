//Je require Dotenv (pour les variables d'environnement) pour acceder à process.env.PORT
const dotenv = require('dotenv');
dotenv.config();

//Je require express
const express = require('express');

//J'execute express 
const app = express();

//Je définit le port à écouter 
const PORT = process.env.PORT;

//Je lance mon server
app.listen(PORT, () =>{
    console.log(`App on http://localhost:${PORT}`);

});

