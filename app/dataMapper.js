const client = require('./database');

const dataMapper = {
    //Je récupère touts mes articles
    getArticlesPageRequest: (callback) => {
        //Je définit ma requete SQL
        const queryArticles = 'SELECT * FROM articles;';
        client.query(queryArticles, callback);     
    },
    //Je récupère un article
    getArticleByIdRequest: (articleId, callback) => {

        const queryOneArticle = `SELECT * FROM articles WHERE id=${articleId}`;
        //la méthode appelé utilise client.query(pg) pour appeler la BDD
        client.query(queryOneArticle, callback);
    },

    //Je récupère la liste des catégories
    getCategoriesPageRequest : (callback) => {

        const queryCategories = 'SELECT * FROM categories;';

        client.query(queryCategories,callback);
    },

    //Je récupère une categorie, ma méthode attend en paramètre : un ID et une fonction callback
    getCategoryByIdRequest : (categoryId, callback) =>{
        const queryCategoryArticles  = `SELECT * FROM articles WHERE categories_id = ${categoryId}`;
        client.query(queryCategoryArticles, callback);
    },

    // Je récupère seulement le titre de ma categorie
    getOneCategoryTitleRequest: (categoryId, callback) => {
        const queryCategoryTitle = `SELECT name FROM categories WHERE id=${categoryId}`;
        client.query(queryCategoryTitle, callback);
    }



};

 
module.exports = dataMapper; 