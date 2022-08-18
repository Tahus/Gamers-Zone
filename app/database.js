//Connexion à la BDD
//Je require pg
const { Client } = require('pg');

//Je crée un client qui se connecte à la BDD
//il récupère les infos de connexion à la BDD dans les variables d'environnement
//du fichier.env
const client = new Client();

// Je connect le client ( et  je le laisse connecté)
client.connect();


//j'exporte (rendre dispo dans un autre fichier) mon client connecté
module.exports = client;

//là ou j'ai besoin de faire des requêtes à la BDD, j'importe le module.