const client = require('../database');

const articlesController = {

    
    getArticlesPage : (request, response) => {

        //Je définit ma requete SQL
        const queryArticles = 'SELECT * FROM articles;';
        //Je lance la requête vers la BDD
        client.query(queryArticles,(error, data) => {
            //l'execution se fera une fois que la BDD aura répondu a la requête
            if (error){
                console.log(error);
            } else {
                console.log(data.rows);//.rows sera toujours un tableau 

                //Je rends ma page articles en lui passant les donnéesdela liste des articles
                response.render('articles', { articles: data.rows });
            }
        }); 


       
    },



    getOneArticle : (request, response) => {
        
        // Je récupère les infos de mon article via son ID
        // articleId => l'ID prèsent dans mon URL
        const articleId = request.params.id;

        const queryOneArticle = `SELECT * FROM articles WHERE id=${articleId}`;

        client.query(queryOneArticle, (error, data)=>{
            if (error){
                console.log(error);
            } else {

                //j'accede au 1er élément du tableau qui sera mon article
                console.log(data.rows[0]);//.rows sera toujours un tableau 

                //Je rends ma page article en lui passant les données d'un article
                response.render('article', { article: data.rows[0] });
                
            }

            

        });     
        
    }
    
};


//J'exporte mon controller pour le rendre accessible dans les autres fichiers.
module.exports = articlesController;