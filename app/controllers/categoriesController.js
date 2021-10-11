const client = require('../database');

const categoriesController = {

    getCategoriesList : (request, response) => {

        //Je définit ma requete SQL
        const queryCategories = 'SELECT * FROM categories;';
        //Je lance la requête vers la BDD
        client.query(queryCategories,(error, data) => {
            //l'execution se fera une fois que la BDD aura répondu a la requête
            if (error){
                console.log(error);
            } else {
                console.log(data.rows);
                const categories = data.rows;
                //Je rends ma page categories en lui passant la liste des catégories
                response.render('categories', { categories });
            }
        }); 
    },

    

    getOneCategoryArticles: (request, response) => {

        console.log('---> #01');

        const categoryId = Number(request.params.id);
        //Je définit ma requete SQL destinée à être envoyé à la BDD
        const queryCategoryArticles  = `SELECT * FROM articles WHERE categories_id = ${categoryId}`;

        console.log('---> #02');

        //Je lance la requête vers la BDD
        client.query(queryCategoryArticles,(errorCategoryArticles, dataCategoryArticles) => {
            console.log('---> #03');
            //l'execution se fera une fois que la BDD aura répondu a la requête
            if (errorCategoryArticles){

                console.log('---> #03 --> ERROR');

                console.log(errorCategoryArticles);
            } else {

                console.log('---> #03 --> `SUCCESS`');
                
                const articles = dataCategoryArticles.rows;
                console.log('category', articles);

                //J'ai besoin du titre de ma catégorie en question
                //Je refais une query SQL
                const queryCategory = `SELECT name FROM categories WHERE id=${categoryId}`;
                client.query(queryCategory,(errorCategory, dataCategory) =>{
                    console.log('---> #04');
                    if(errorCategory){ 
                        console.log('---> #04 --> ERROR');
                        console.log(errorCategory);
                    } else {
                        console.log('---> #04 --> `SUCCESS`');

                        //J'accède au 1er élément d'objet categories
                        const category = dataCategory.rows[0];
                        console.log('hello', category);
                        
                        //Je rends ma page categories en lui passant les données de mes articles
                        response.render('category', { articles, category }); 
                    }


                });
 
                
            }
        }); 
    } 
};



module.exports =categoriesController;