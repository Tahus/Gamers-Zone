const express = require('express');

// J'utilise mes controllers
const mainController = require('./controllers/mainController');
const authController= require('./controllers/authController');
const articlesController= require('./controllers/articlesController');
const categoriesController= require('./controllers/categoriesController');
const contactController = require('./controllers/contactController');
const signupController= require('./controllers/signupController');



//je mets  en place mon routeur

const router = express.Router();


router.get('/', mainController.getHomePage);

//Articles
router.get('/articles', articlesController.getArticlesPage);
router.get('/articles/:id', articlesController.getOneArticle);

// Categories
router.get('/categories', categoriesController.getCategoriesList);
router.get('/categories/:id', categoriesController.getOneCategoryArticles);

//route pour acceder à la page contact
router.get('/contact', contactController.getContactPage);

//Login
router.get('/Login', authController.getLoginForm);
router.post('/Login', authController.loginUser );

//route pour la page d'inscription 
router.get('/signup', signupController.getSignupUser);
router.post('/addUser', signupController.addUser);


//route pour la page de profil connectés

router.get('/user/:id', signupController.getProfilPage);






module.exports = router;