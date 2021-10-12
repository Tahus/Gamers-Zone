const mainController = {
    getHomePage : (request, response) => {
        //Je rends la page home
        response.render('home');
    }
};


//J'exporte mon controller pour le rendre accessible dans les autres fichiers.
module.exports = mainController;