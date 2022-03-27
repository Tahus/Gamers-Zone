const express = require('express');

// J'utilise mes controllers
const mainController = require('./controllers/mainController');
const authController= require('./controllers/authController');
const articlesController= require('./controllers/articlesController');
const categoriesController= require('./controllers/categoriesController');
const contactController = require('./controllers/contactController');
const userController= require('./controllers/userController');



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
router.get('/signup', userController.getSignupUser);
router.post('/addUser', userController.addUser);


//route pour la page de profil connectés

router.get('/user/:id', userController.getProfilPage);

//route pour modifier le profil utilisateur
router.post('/user/:id', userController.updateProfilPage);


//route de déconnexion d'un user
router.get('/logOut', (request, response) =>{

    delete request.session.userInfo;
    response.redirect('/');
});

// route pour demander la confirmation avant la supression d'un compte utilisateur
router.get('/deleteUser/confirm', userController.confirmDelete);
//route pour supprimer definitivement un profil utilisateur
router.post('/deleteUser/:id', userController.deleteUserPage);




module.exports = router;