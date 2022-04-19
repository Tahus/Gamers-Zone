const dataMapper = require('../dataMapper');

const categoriesController = {

   

    
    //Récupératon des article via une categories
    getOneCategoryArticles: async (request, response) => {

        const categoryId = Number(request.params.id);

        try {

            const articles = await dataMapper.getArticlesByCategory (categoryId);
                
            console.log('category', articles);
            console.log("Voici l'ID de la categorie ", categoryId);

            //J'ai besoin du titre de ma catégorie en question
            //Je refais une query SQL
            const categoryTitle = await dataMapper.getCategoryTitle (categoryId);
                
                    if (categoryTitle) {
                        
                    //Je rends ma page categories en lui passant les données de mes articles (elles sonts rajoutés dans l'objet locals )
                    response.render('category', { articles, category: categoryTitle.rows[0] });
                    console.log(JSON.stringify(categoryTitle)) 

                    console.log('---> #04 --> `SUCCESS`');
                    } else {
                        console.log('impossible de récupèrer le titre de la catégorie en question');
                    }

                

        } catch (error) {

            console.log('impossible d\'afficher la category >', error);

        }
         
        
    } 
};



module.exports =categoriesController;