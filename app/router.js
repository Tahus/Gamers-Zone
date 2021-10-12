const express = require('express');

// J'utilise mes controllers
const mainController = require('./controllers/mainController');
const articlesController= require('./controllers/articlesController');
const categoriesController= require('./controllers/categoriesController');
const contactController = require('./controllers/contactController');



//je mets mon routeur en place

const router = express.Router();


router.get('/', mainController.getHomePage);

//route por acceder à touts mes articles 
router.get('/articles', articlesController.getArticlesPage);
//route pour acceder au détail d'un seul article
router.get('/articles/:id', articlesController.getOneArticle);

// route pour afficher la page de toutes mes categories
router.get('/categories', categoriesController.getCategoriesList);
//route qui affiche mes articles dans les catègories
router.get('/categories/:id', categoriesController.getOneCategoryArticles);
//route pour acceder à la page contact
router.get('/contact', contactController.getContactPage);







module.exports = router;