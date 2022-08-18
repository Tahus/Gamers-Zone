

const dataMapper = require('../dataMapper');

const articlesController = {

    //Méthode d'accès à un seul article
    getOneArticle : async (request, response) => {
        
        // Je récupère les infos de mon article via son ID
        // articleId => l'ID prèsent dans mon URL
        const articleId = request.params.id;

        try {
            //Je fais appele à ma requete du dataMapper et du params associé que je stocke dans une variable.
            const Onearticle = await dataMapper.getArticleById(articleId);
            
            // Si j'arrive à accéder à mon élément en question
            if (Onearticle.rows[0]){

                //Je rends ma page article en lui passant les données d'un article
                response.render('article', { article: Onearticle.rows[0] });
                 //j'accede au 1er élément du tableau qui sera mon article
                console.log(Onearticle.rows[0]);//.rows sera toujours un tableau 
               
            } else {

                console.log("Impossible d'acceder à l'article", error);
                
            }
        } catch (error) {
            console.log('erreur accès Onearticle', error);
        }
    }    
    
    
}


//J'exporte mon controller pour le rendre accessible dans les autres fichiers.
module.exports = articlesController;