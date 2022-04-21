const dataMapper = require('../dataMapper');

// Affichage simple des pages
const mainController = {
    
    //J'affiche la page d'accueil avec 3 acticles aléatoires
    getHomePage :  async(request, response) => {

        try {

            // 1/ Je récupére ma requête BDD depuis le DataMapper

            //Je stock ma methode du dataMapper dans une variable 
            const articles = await dataMapper.getHomeArticles();

            // 2/ Je rends la page home en lui passant les données des articles
            response.render('home', {articles});
            
        } catch (error){
            console.log('Affichage accueil impossible', error);
        }
    
       
    },


    //Affichage de la page de touts les articles
    getArticlesPage : async (request, response) => {

        try {
            
            // 1/ Je récupére touts mes articles depuis la BDD
            const articles = await dataMapper.getAllArticles();

             // 2/ Je les afiches via ma view EJS
                response.render('articles', { articles });

            } catch (error) {
            console.log('Affichages des articles impossible : ',error);
        };

     
    },


     //Affiche toutes les catégories
     getCategoriesPage : async (request, response) => {

        try {
            // 1/ Je récupére mes données via ma BDD
            const categories = await dataMapper.getCategoriesPage();

            // 2/ Je rends ma page via ma view EJS en lui passant la liste des catégories
            response.render('categories', { categories });

        } catch (error) {
            console.log( 'Attention problème des catégories Controller >', error );
        }
  
         
    },

    getContactPage : (request, response) => {
      
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