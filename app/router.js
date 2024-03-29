const express = require('express');

// J'utilise mes controllers
const mainController = require('./controllers/mainController');
const authController= require('./controllers/authController');
const articlesController= require('./controllers/articlesController');
const categoriesController= require('./controllers/categoriesController');
// const contactController = require('./controllers/contactController');
const userController= require('./controllers/userController');

const router = express.Router();

//Affichage des pages/vues pricipales
router.get('/', mainController.getHomePage);
router.get('/articles', mainController.getArticlesPage);
router.get('/categories', mainController.getCategoriesPage);
router.get('/contact', mainController.getContactPage);
router.get('/signup', mainController.getSignUpPage);
router.get('/login', mainController.getLoginPage);


// Livraison de la vue du profil
router.get('/user/:id', userController.getProfilPage);

//Livraison de la vue de supression user
router.get('/deleteUser/confirm', mainController.getDeletePage); 

// Login, Inscription et Déconnexion
router.post('/login', authController.signIn );
router.post('/signup', authController.signUp);
router.get('/logout', authController.logOut);

// Profil & user
//route pour modifier le profil utilisateur
router.post('/user/:id', userController.updateProfil);

//route pour supprimer definitivement un profil utilisateur
router.post('/deleteUser/:id', userController.deleteUser);

// Articles
router.get('/articles/:id', articlesController.getOneArticle);

// Categories
router.get('/categories/:id', categoriesController.getOneCategoryArticles);

module.exports = router;