const dataMapper = require('../dataMapper');


const mainController = {

    
    getHomePage :  (request, response) => {
    
        //Je stock ma methode du dataMapper dans une variable 
        dataMapper.getHomesArticlesRequest((error, data) => {
            if(error) {
                console.error(error);
                return response.send('Impossible de récupérer les articles !');
            }
            //Je rends la page home en lui passant les articles
            response.render('home', {articles:data.rows});
        });

       
    }
    
    
};


//J'exporte mon controller pour le rendre accessible dans les autres fichiers.
module.exports = mainController;