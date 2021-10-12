const dataMapper = require('../dataMapper');

const categoriesController = {

    getCategoriesList : (request, response) => {

        dataMapper.getCategoriesPageRequest((error, data) => {
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

        const categoryId = Number(request.params.id);

        //Je lance la requête vers la BDD
        dataMapper.getCategoryByIdRequest (categoryId,(errorCategoryArticles, dataCategoryArticles) => {

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
                
                dataMapper.getOneCategoryTitleRequest (categoryId, (errorCategory, dataCategoryTitle) => {
                    
                    console.log('---> #04');
                    if(errorCategory){ 
                        console.log('---> #04 --> ERROR');
                        console.log(errorCategory);
                    } else {
                        console.log('---> #04 --> `SUCCESS`');

                        //J'accède au 1er élément d'objet categories
                        const category = dataCategoryTitle.rows[0];
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