const dataMapper = require('../dataMapper');


const mainController = {

    
    getHomePage :  async(request, response) => {
    
        //Je stock ma methode du dataMapper dans une variable 
        const articles = await dataMapper.getHomesArticlesRequest ();

        //Je rends la page home en lui passant les données des articles
        response.render('home', {articles});

       
    }
    
};


//J'exporte mon controller pour le rendre accessible dans les autres fichiers.
module.exports = mainController;