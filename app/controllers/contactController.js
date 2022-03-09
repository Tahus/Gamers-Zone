const contactController = {
    getContactPage : (request, response) => {
        //Je rends la page articles
        response.render('contact');
    }
};


//J'exporte mon controller pour le rendre accessible dans les autres fichiers.
module.exports = contactController;