const dataMapper = require('../dataMapper');

// Affichage simple des pages
const mainController = {
    
    //J'affiche la page d'accueil avec 3 acticles aléatoires
    getHomePage :  async(request, response) => {

        try {
            //Je stock ma methode du dataMapper dans une variable 
            const articles = await dataMapper.getHomeArticles();

            //Je rends la page home en lui passant les données des articles
            response.render('home', {articles});
        } catch (error){
            console.log('Affichage accueil impossible', error);
        }
    
       
    },


    //Affichage de la page de touts les articles
    getArticlesPage : async (request, response) => {

        try {
            // déclaration d'une fonction annonyme
            const articles = await dataMapper.getAllArticles();

             //l'execution se fera une fois que la BDD aura répondu a la requête
                response.render('articles', { articles });
            } catch (error) {
            console.log('Affichages des articles impossible : ',error);
        };

     
    },


     //Affiche toutes les catégories
     getCategoriesPage : async (request, response) => {

        try {
            const categories = await dataMapper.getCategoriesPage();

                //Je rends ma page categories en lui passant la liste des catégories
                response.render('categories', { categories });
        } catch (error) {
            console.log( 'Attention problème des catégories Controller >', error );
        }
  
         
    },

    getContactPage : (request, response) => {
        //Je rends la page articles
        response.render('contact');
    },

    getLoginPage : (request, response) => {
        response.render('login');
    },
    getSignUpPage: (request, response) => {
        response.render('signup');
    },
    getDeletePage : (request, response) => {
        response.render('deleteUser');
    },

    




    
    
};


//J'exporte mon controller pour le rendre accessible dans les autres fichiers.
module.exports = mainController;